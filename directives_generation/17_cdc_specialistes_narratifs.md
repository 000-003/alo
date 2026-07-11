# 🎭 CDC-SPE-01 — Spécialistes narratifs (dialogue, GM, quête, marchand, Q&R, narration combat)

> **Type** : cahier des charges P3 (implémentation IA — feu vert PE). Définit le **contrat de chaque agent générateur/récupérateur** : ce qu'il reçoit, ce qu'il produit, comment il interroge le RAG, comment il descend la cascade de backends, et son gabarit de repli déterministe.
> **Sources intégrées** : `13_` (roster S2-S7), `14_` (cascade C1-C4, politiques de backend), `15_` (RAG, grounding), `etude_deepseek.md` (dialogue par **retrieval**, **template engine**, « templates pour 90 % + API pour les moments importants »).
> **Invariant** : un spécialiste **habille ou propose**, il n'écrit jamais l'état. Il émet du texte et/ou un `SYS_*` que **L1 valide et exécute** (`19_`). Le grounding factuel vient **exclusivement** du RAG (`15_`).

---

## 1. Principe fondateur — le dialogue a DEUX modes

Réconciliation des deux philosophies (DeepSeek « local+templates » vs `14_` « API gratuite riche ») : **on garde les deux**, sélectionnés par enjeu.

| Mode | Technique | Latence | Coût | Quand |
|---|---|---|---|---|
| **RETRIEVAL** (défaut) | ranker MiniLM + ANN (ou SQL direct) sur les répliques K0-K2 du PNJ | ~17 ms | 0 (local C1) | PNJ mineur, interaction courante, ~90 % des tours |
| **GÉNÉRATIF** | LLM (API gratuite C2/C3) + contexte RAG injecté | ~1-3,5 s | 0 (quota gratuit) | PNJ notable/canon, moment de quête, événement, ~10 % des tours |

**Sélecteur de mode** (dans le dispatcher `18_`) : `retrieval` par défaut ; bascule `génératif` si `role_type ∈ {LORD, QUEST_GIVER, SKILL_MASTER}` **ou** `is_canon` **ou** `is_essential` **ou** contexte de quête active. Le **RAG (`15_`) alimente les deux** : le retrieval *classe* les chunks K0-K2, le génératif les *injecte* comme contexte.

---

## 2. Contrats des spécialistes

Format commun par spécialiste : **IN → OUT**, appel `retrieve()` (contrat `15_` §7), `SYS_*` émis, **mode**, **politique de backend** (cascade `14_`), **gabarit C4** (repli déterministe).

### S2 — Dialogue PNJ
| Champ | Valeur |
|---|---|
| IN | `NPC_ID` adressé, réplique joueur, niveau de savoir débloqué (L1) |
| retrieve | `entity_id=NPC_ID`, sections `identification/qi_k0/qi_k1[/qi_k2]/replique/relations`, budget ~1 500 |
| OUT | texte in-character (+ éventuel `SYS_*` si l'échange déclenche une action) |
| SYS_* | `SYS_NPC_KNOWLEDGE_UNLOCK` (si condition remplie), `SYS_START_QUEST`… (validés par L1) |
| Mode | **retrieval** par défaut ; **génératif** pour notable/canon/essential |
| Politique | retrieval → C1 local ; génératif → Groq → Gemini → C3 pool |
| Gabarit C4 | réplique K0 générique de la fiche (texte fixe) |
| **Verrou** | K3 **jamais** disponible (absent de l'index, `15_` §4) ; révélation méta = `SYS_NPC_SECRET_PROBED` piloté par L1 (D22) |

### S3 — Game Master (ambiance)
| Champ | Valeur |
|---|---|
| IN | `zone_id` courant, état monde/jauges (D11/D12), déclencheur |
| retrieve | `zone_id`, `entity_type∈{zone,boss,faune}`, sections lore+mécanique, budget ~2 000 |
| OUT | narration « roman interactif » (filtre Scénariste) |
| SYS_* | rare (ex. `SYS_SET_ENV_HAZARD` si l'ambiance reflète une jauge — mais **L1 décide** le chiffre) |
| Mode | **génératif** (l'ambiance vit de l'improvisation) |
| Politique | Gemini → Groq → C3 (OpenRouter) → C4 |
| Gabarit C4 | description fixe du lieu (extrait `lore` de la fiche zone) |

### S4 — Narrateur de quête
| Champ | Valeur |
|---|---|
| IN | `QST_ID` active, progression joueur (L1) |
| retrieve | `entity_id=QST_ID`, sections `etapes/embranchement`, budget ~1 500 |
| OUT | texte d'étape + `SYS_*` de progression |
| SYS_* | `SYS_ADVANCE_QUEST`, `SYS_GRANT_ITEM`, `SYS_GRANT_SPELL`… (validés L1) |
| Mode | **génératif** (embranchements) |
| Politique | Groq → Gemini → OpenRouter → C4 |
| Gabarit C4 | libellé d'étape brut de la fiche quête |

### S5 — Marchand / économie
| Champ | Valeur |
|---|---|
| IN | `SHOP_ID`, inventaire boutique + joueur (L1), intention d'achat/vente |
| retrieve | `entity_id=SHOP_ID` + items en stock, section `acquisition`, budget ~1 200 |
| OUT | dialogue de transaction + `SYS_*` |
| SYS_* | **proposition** de transaction ; **L1 calcule prix/stock/solde et écrit** (frontière, `19_`) |
| Mode | retrieval (menu) ; génératif si marchand à personnalité |
| Politique | Groq → local 3B → Cloudflare → C4 |
| Gabarit C4 | menu transactionnel fixe |

### S6 — Narrateur de combat
| Champ | Valeur |
|---|---|
| IN | **résultat déjà calculé par L1** (dégâts, hit/miss, I-frames, mort) |
| retrieve | optionnel (nom du skill/mob) |
| OUT | texte épique **habillant** le résultat |
| SYS_* | **aucun** (le combat est déjà résolu) |
| Mode | retrieval/template (très haut volume) ; génératif sur coup critique/kill de boss |
| Politique | C1 local 3B / Cloudflare → Groq → Cerebras → C4 |
| Gabarit C4 | gabarit épique paramétrique (`{acteur} inflige {dégâts} à {cible}`) |
| **Interdit** | ne calcule **jamais** un chiffre — il reçoit le résultat, il l'habille |

### S7 — Q&R lore
| Champ | Valeur |
|---|---|
| IN | question joueur |
| retrieve | large `entity_type∈{zone,lore_ville,faune,boss,index}`, top-k ~6, budget ~2 500 |
| OUT | réponse **citée** (`[entity_id · section]`) ou « je ne sais pas » |
| SYS_* | aucun |
| Mode | génératif (avec grounding obligatoire) |
| Politique | Groq → Gemini → Cerebras → C4 |
| Gabarit C4 | extrait RAG brut du meilleur chunk |
| **Garde-fou** | aucun chunk au-dessus du seuil → « je ne sais pas », **jamais d'invention** (`15_` §12) |

---

## 3. Le Template Engine (agent #4 DeepSeek, adopté)

Pour les **~90 % de réponses standard** (transaction réussie, entrée/sortie de zone, résultat de combat courant), un **moteur de gabarits paramétriques** produit la réponse **en < 1 ms, 0 API** :

```
"3× {item.nom} ajoutées. Stock restant : {stock}."
"{acteur} lance {skill.nom} — {dégâts} dégâts. {cible} : {hp_restant} PV."
```

Les gabarits sont **la couche C4** (dégradation) de chaque spécialiste **et** le chemin nominal des tours triviaux (le dispatcher peut court-circuiter le LLM). C'est le levier qui **économise le quota gratuit** : l'IA générative n'est appelée que quand elle apporte de la valeur.

---

## 4. Grounding & cohérence (renvoi `15_`)

- Toute génération est **nourrie par le RAG** (contexte attribué `[entity_id · section]`).
- **S7 doit citer** ; sinon « je ne sais pas ».
- Tout `SYS_*` référençant un ID inexistant est **rejeté par L1** (D71) → une hallucination n'a **aucun effet de jeu**.
- Le même contexte injecté quel que soit le backend (Groq/Gemini/Cerebras) → cohérence **factuelle** garantie ; variance **stylistique** tolérée.

---

## 5. Décisions actées

- **D-SPE-1** : dialogue **à deux modes** — retrieval local (défaut, ~90 %) / génératif API+RAG (moments à enjeu, ~10 %) ; sélecteur par `role_type`/`is_canon`/`is_essential`/contexte de quête.
- **D-SPE-2** : **Template Engine** = chemin nominal des tours triviaux **et** couche C4 de repli ; l'IA générative n'est appelée qu'à valeur ajoutée (économie de quota).
- **D-SPE-3** : **S6 habille, ne calcule jamais** ; il reçoit le résultat déterministe de L1.
- **D-SPE-4** : chaque spécialiste a une **politique de backend** (cascade `14_`) et un **gabarit C4** ; dégradation indépendante par agent.
- **D-SPE-5** : grounding RAG obligatoire ; K3 jamais disponible (D22) ; validation d'ID aval par L1 (D71).
- **Complétude commandes** : les `SYS_*` émis (`SYS_NPC_KNOWLEDGE_UNLOCK`, `SYS_ADVANCE_QUEST`, `SYS_START_QUEST`, `SYS_NPC_SECRET_PROBED`, `SYS_GRANT_*`) — vérifier leur présence/ajout dans `ai_orchestrator_commands.md` **à l'implémentation** ; `[BESOIN_COMMANDE]` pour ceux manquants (couche bot P3).
