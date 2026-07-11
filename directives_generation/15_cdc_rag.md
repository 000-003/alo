# 📚 CDC-RAG-01 — Cahier des charges du RAG (cerveau factuel partagé)

> **Type** : cahier des charges P3 (fondation IA — feu vert PE requis avant implémentation). Socle dont dépendent **tous** les spécialistes narratifs (S2 PNJ, S3 GM, S4 quête, S5 marchand, S7 Q&R, orchestrateur) des études `13_` et `14_`.
> **Fonction** : transformer les **~3 406 fiches markdown** du corpus en un index interrogeable qui **injecte les bons faits** dans chaque appel LLM, garantissant la **cohérence** malgré des modèles hétérogènes (Groq/Gemini/Cerebras…) et **empêchant l'hallucination**.
> **Invariant absolu** : le RAG **récupère**, il ne **décide** jamais. Il ne touche pas l'état de jeu (celui de L1). Il ne fait que fournir du contexte à un spécialiste, qui propose un `SYS_*` que L1 valide.
> **Verrou de sécurité (D22)** : les slots **K3 méta** ne sont **jamais indexés** — pas « filtrés à la récupération », **absents de l'index**. Le secret ne peut pas fuiter par un contexte qui ne le contient pas.

---

## 1. Le corpus source (inventaire & volumétrie)

Base : `données/` **hors** `ressources_brutes/deprecated_v1/` (archives exclues, cf. audit étape 36). Convention de clé canonique = l'`Item_ID`/`NPC_ID`/`ZONE_ID` interne (D71), jamais le nom de fichier.

| Type d'entité (`entity_type`) | Source | Volumétrie | Gabarit |
|---|---|---|---|
| `pnj` | `personnages_bestiaire/pnj/<ville>/` | 1 200 (12×100) + canoniques | D17 (5 sections + QI K0-K3) |
| `item_arm` | `items_equipements/armures/<slot>/` | 500 (5×100) | D13 (5 sections) |
| `item_wpn` | `items_equipements/armes/` | 100 | D13 |
| `item_mat` | `items_equipements/materiaux/` | ~120 | D13 |
| `item_csm` | `items_equipements/consommables/` | ~125 | D13 |
| `item_flore` | `materiaux/flore/` | 100 | D13 |
| `item_tenue` | `items_equipements/tenues/` | 55 | D46 |
| `item_micro` | micro-familles (`EXP`/`DYE`/`PERF`/`WNG`/`RUN`/`INT`/`SLA`) | ~65 | D13 |
| `skill_mag` / `skill_oss` / `skill_pas` | `competences_magie/{magies,oss,passives}/` | 300 (100/100/100) | 8/8/3-rangs |
| `zone` | `cartographie/**` (CAP/HUNT/DUN/ROUTE) | ~45 raciales + axe vertical + routes | fiche zone |
| `boss` | `personnages_bestiaire/{monstres,boss_aincrad}/` + index axe vertical | 7 nommés + gabarit paramétrique | D69 « Wiki ALO » |
| `faune` | `personnages_bestiaire/monstres/<territoire>/` | 256 | D17 mob |
| `quete` | `game_design/quetes/` | 57 (33 localité + 20 T5 + 4 légend.) | D43/D67/D68 |
| `boutique` | `game_design/boutiques/` | ~277 lignes (T_SHOPS) | contrat D35 |
| `lore_ville` | `lore_mecaniques/geographie_villes/` | ~11 | prose lore |
| `index` (agrégats) | `_index_*.md` | ~20 | tables de synthèse |

**Exclus de l'index narratif** (§4) : `the_seed_engine/**`, `cardinal_system_db/**` (tables MLD = spéc développeur), `directives_generation/**`, `ressources_brutes/**` (corpus SAO source + archives), fichiers d'état (`alo_*.md`), `system_persona_architecte.md`.

---

## 2. Principe fondateur — **chunking par SECTION de gabarit**

Le corpus est **entièrement structuré par gabarits stricts** (titres `##` réguliers). On n'utilise donc **pas** de découpage aveugle en fenêtres de N tokens (qui couperait une table de stats en plein milieu). L'unité de chunk = **une section sémantique** (`## …`).

**Bénéfices** : (a) chaque chunk est **sémantiquement cohérent** et correspond à ce qu'un spécialiste demande (S2 veut le QI + la réplique, S5 veut les stats + l'acquisition) ; (b) le **filtrage fin par section** devient possible (métadonnée `section`) ; (c) le **verrou K3** s'applique proprement (une section = exclue ou non) ; (d) meilleur **cache** (chunks stables tant que la fiche ne change pas).

**Règle** : `1 fiche → N chunks (1 par section indexable)`, chaque chunk portant l'`entity_id` de sa fiche + sa `section`. Une section trop longue (> ~400 tokens, ex. un gros bloc de lore) est sous-découpée en fenêtres **avec chevauchement de ~15 %**, en conservant `entity_id`+`section`.

---

## 3. Schéma de métadonnées (le filtre)

Chaque chunk porte ces champs (c'est ce qui rend la récupération **chirurgicale**, pas seulement sémantique) :

| Champ | Type | Valeurs / exemple | Usage |
|---|---|---|---|
| `chunk_id` | id | `NPC_GAT_31#qi_k1` | clé du chunk |
| `entity_id` | id canonique | `NPC_GAT_31`, `ARM_TOR_007`, `ZONE_SAL_DUN_001` | provenance / grounding |
| `entity_type` | énum | cf. §1 | filtre de type |
| `section` | énum | `identification`/`stats`/`acquisition`/`lore`/`mecanique`/`qi_k0`/`qi_k1`/`qi_k2`/`relations`/`replique`/`etapes`/`embranchement` | filtre de section |
| `ville` | énum | Gattan/Alne/Swilvane/… | localisation PNJ/boutique |
| `secteur` | énum | SAL/SYL/CAI/PUC/IMP/GNO/LEP/SPR/UND/NEU/AIR/YGG/JOT/AIN | territoire |
| `zone_id` | id | `ZONE_SAL_CAP_001` | ancrage spatial |
| `tier` | énum | T0-T5 | items/skills/faune |
| `famille` | énum | slot armure / arme / école magie (FEU…) / famille OSS (EPE…) | items/skills |
| `role_type` | énum | SERVICE/GUARD/MERCHANT/QUEST_GIVER/SKILL_MASTER/LORD/BLACK_MARKET (D34) | PNJ |
| `knowledge_tier` | énum | K0/K1/K2 (**jamais K3**) | gating de savoir PNJ (§8) |
| `is_canon` | bool | canon fandom (Kirito, Sakuya…) | priorité/verrou de nom |
| `is_essential` | bool | PNJ `is_essential` VRAI | invulnérabilité/priorité |
| `source_path` | chemin | fichier d'origine | ré-indexation |
| `source_hash` | hash | empreinte de la fiche | fraîcheur (§10) |

---

## 4. Règles d'EXCLUSION — ce qui n'est JAMAIS indexé (critique)

C'est la section la plus importante du CDC. Une fuite ici = un secret serveur révélé.

1. **Slots K3 de tout PNJ** (D17 : « K3 = JAMAIS — déflection ») → **jamais embeddés, jamais stockés.** La section K3 est **droppée à l'ingestion**. (Belt-and-suspenders : même si un spécialiste demandait « tout sur ce PNJ », le K3 n'existe pas dans l'index.)
2. **Fils méta serveur** (D22/D26/D29/D47/D50/D53… : lancement/relance du serveur, dessein du Cardinal, fréquence de compilation, noyau de chauffe, etc.) portés par les PNJ `00`/`98`/`99`/notables méta → **exclus.** La révélation reste pilotée par L1 (`SYS_NPC_SECRET_PROBED`, 1 max/session, jamais confirmée frontalement — D22).
3. **Secrets inavouables** génériques des fiches PNJ (la ligne « secret » du D17) → **exclus** (ils ne sont pas destinés à être récités par le LLM ; ils informent l'orchestration côté L1, pas le contexte injecté).
4. **Spéc développeur** : tables MLD, `the_seed_engine/**`, directives, persona → hors périmètre narratif.
5. **PII joueur** : le corpus est **de la donnée de jeu**, jamais des données joueur → trivialement satisfait ; règle réaffirmée pour interdire tout futur mélange.
6. **Archives** `deprecated_v1/**` → exclues (évite de ressusciter du junk archivé à l'étape 36).

> **Conséquence architecturale** : le verrou D22 n'est **pas** une consigne de prompt (contournable par injection). C'est une **propriété de l'index** : le secret n'entre pas dans le contexte, donc aucune formulation joueur ne peut l'en extraire.

---

## 5. Le pipeline d'indexation

```
fichier .md
   └─ 1. INGESTION   : lister le corpus (hors exclusions §1/§4)
   └─ 2. PARSE       : identifier entity_id (Item_ID interne, D71) + type + sections (##)
   └─ 3. EXCLUSION   : dropper les sections K3 / méta / secret (§4) AVANT tout
   └─ 4. CHUNK       : 1 chunk par section indexable ; sous-découper si > ~400 tok (chevauchement 15 %)
   └─ 5. MÉTADONNÉES : renseigner le schéma §3 (déduit du chemin + de l'ID + du contenu)
   └─ 6. EMBED       : vectoriser chaque chunk (modèle small multilingue, CPU)
   └─ 7. STOCKER     : chunk + vecteur + métadonnées → magasin vectoriel (C1 local)
```

Étape 3 **avant** 4 : on ne chunke jamais du contenu interdit, même transitoirement.

---

## 6. Politique de découpage par type d'entité

| `entity_type` | Sections indexées | Sections exclues |
|---|---|---|
| `pnj` | identification, qi_k0, qi_k1, **qi_k2** (gaté §8), relations, replique | **qi_k3, secret, fil_meta** |
| `item_*` | identification, stats, acquisition (chaînage éco), lore, intégration_bot | — |
| `skill_*` | identification, paramètres/effet, formule, incantation, acquisition, lore | — |
| `zone` | identification, lore, mécanique signature (D10/D11), liaisons (résumé) | — |
| `boss` | identification, mécanique (D69), loot/chaînage, faiblesse (ex. Lumière YGG) | — |
| `faune` | identification, stats, loot, zone | — |
| `quete` | type, donneur, étapes, embranchement, récompense | — |
| `boutique` | inventaire (T_SHOP_ITEMS résolu), ville | — |
| `lore_ville` | prose lore (fenêtrée) | passages méta éventuels |
| `index` | tables de synthèse (priorité basse) | — |

---

## 7. Contrat de récupération (retrieval) — par spécialiste

Chaque spécialiste appelle le RAG avec des **filtres durs** (métadonnées) + une **requête sémantique**, et reçoit un **budget de tokens** borné. C'est ce qui garde les prompts petits (bon cache, faible consommation de quota gratuit — cf. `14_`).

| Spécialiste | Filtres durs | Sémantique | top-k | Budget tokens | Injecté |
|---|---|---|---|---|---|
| **S2 PNJ** | `entity_id` = PNJ adressé ; `knowledge_tier` ≤ niveau débloqué (§8) | réplique joueur | ciblé (le PNJ) + 2 chunks zone | ~1 500 | fiche PNJ (K0/K1[/K2]) + contexte lieu |
| **S3 GM** | `zone_id` = lieu courant ; `entity_type`∈{zone,boss,faune} | ambiance demandée | ~5 | ~2 000 | lore + mécanique du lieu |
| **S4 Quête** | `entity_id` = quête active | étape courante | ~4 | ~1 500 | étapes + embranchement |
| **S5 Marchand** | `entity_id` boutique + items en stock | intention d'achat | ~6 | ~1 200 | inventaire + acquisition items |
| **S7 Q&R lore** | large : `entity_type`∈{zone,lore_ville,faune,boss,index} | question joueur | ~6 | ~2 500 | passages **cités** (grounding obligatoire) |
| **Orchestrateur** | minimal (résumé + IDs pertinents) | intention globale | ~3 | ~800 | assez pour router / déclencher des sous-récupérations |

**Règle de budget** : si les chunks dépassent le budget, on **tronque par pertinence décroissante**, jamais en coupant un chunk (les chunks sont déjà des unités sémantiques §2).

---

## 8. Gating par niveau de connaissance PNJ (K0/K1/K2 — K3 jamais)

Le budget QI conçu dans les fiches (D17/D21…) devient la **politique de contexte** de S2 :

| Niveau | Contenu | Indexé ? | Injecté à S2 quand ? |
|---|---|---|---|
| **K0** | savoir public du PNJ | ✅ | toujours |
| **K1** | savoir de premier contact | ✅ | toujours |
| **K2** | savoir plus profond (débloquable) | ✅ (`knowledge_tier=K2`) | **uniquement si** le joueur l'a débloqué (état L1 : `SYS_NPC_KNOWLEDGE_UNLOCK`) |
| **K3** | secret inavouable / méta | ❌ **jamais indexé** | jamais — révélation orchestrée par L1 (`SYS_NPC_SECRET_PROBED`, 1/session, D22) |

Le RAG lit le **niveau débloqué** depuis l'état L1 (pas depuis lui-même — il reste sans état) et filtre `knowledge_tier ≤ niveau`. K3 étant absent de l'index, il ne peut jamais être servi.

---

## 9. Format d'injection dans le prompt du spécialiste

Les passages arrivent dans un bloc **balisé et attribué** (pour le grounding et la citation) :

```
<contexte_recupere>
  [ARM_TOR_007 · stats] DEF 100-150 · Maille · pénalité de vol -1% · …
  [ARM_TOR_007 · acquisition] Craft : drop BOSS_SYL_DUN_001 + mithril Brokkheim · …
  [ZONE_SAL_DUN_001 · mecanique] Jauge de Surchauffe : +2 Chaleur/message, éruption à 100 …
</contexte_recupere>
```

Règles : (a) chaque ligne porte son `[entity_id · section]` → le spécialiste peut **citer sa source** ; (b) le bloc est placé **après** le prompt système figé (qui, lui, est mis en cache) et **avant** la réplique volatile du joueur (ordre de cache : système figé → contexte semi-stable par lieu → volatil) ; (c) **aucune interprétation** dans le RAG — il livre le texte source, le spécialiste le met en scène.

---

## 10. Fraîcheur & ré-indexation

- **Hash par fichier** (`source_hash`). À la modification d'une fiche → **ré-chunk + ré-embed de ce seul fichier** (incrémental, pas de reconstruction globale).
- **Déclencheurs** : (a) hook de sauvegarde de fiche ; (b) commande GM manuelle ; (c) tâche batch nocturne de vérification d'intégrité.
- **Propriété clé** : changer une fiche `.md` → **toute la constellation d'IA est à jour** au prochain tour, **sans réentraînement** (c'est l'avantage décisif du RAG sur le fine-tune, cf. `13_`).

---

## 11. Stockage & performances (couche C1 locale)

| Aspect | Choix | Justification |
|---|---|---|
| Modèle d'embedding | *small* multilingue (~100-400 Mo, ex. famille `e5-small`/`bge-small`) | tourne en **CPU sur l'ARM** ; le français du corpus est couvert |
| Magasin vectoriel | **`sqlite-vec`** (embarqué, sans serveur) ou **`pgvector`** si Postgres déjà présent (L1) | zéro service supplémentaire ; tient en RAM |
| Volume d'index | ~3 400 fiches × ~4-6 chunks ≈ **15-20 k chunks** | trivial (quelques dizaines de Mo) |
| Latence de requête | ~30-150 ms | dans le budget latence (`14_` §8) |
| Parallélisme | recherche vectorielle **parallélisable** sur les 4 cœurs | ne concurrence pas la génération (délocalisée) |
| Réplication / sharding | index **lecture seule répliquable** par instance ; shardable par `secteur`/`zone_id` | scale-out sans refonte (D-IA-10) |

Le RAG vit **exclusivement en C1** (local) : il est déterministe, sensible (K3 exclus mais tout de même : on ne délocalise pas le cerveau factuel), et sans dépendance réseau.

---

## 12. Qualité & garde-fous anti-hallucination

1. **Grounding obligatoire pour S7** : toute réponse lore doit **citer au moins un `entity_id`** récupéré. Aucun chunk au-dessus du seuil de pertinence → **« je ne sais pas »** (ou déflection in-character), **jamais d'invention**.
2. **Seuil de pertinence** : en-deçà, le passage n'est pas injecté (mieux vaut un contexte vide qu'un contexte trompeur).
3. **Validation aval par L1** : tout `SYS_*` émis référençant un ID inexistant est **rejeté** (D71 : seuls les vrais `Item_ID` existent) → une hallucination d'ID ne produit aucun effet de jeu.
4. **Cohérence inter-modèles** : le même contexte injecté quel que soit le backend (Groq/Gemini/Cerebras) → pas de divergence **factuelle** ; la variance résiduelle est **stylistique** (tolérée).

---

## 13. Intégration dans l'architecture (couches `13_`/`14_`)

- Le RAG expose une primitive interne `retrieve(specialiste, filtres, requête, budget) → chunks[]`.
- Elle est appelée **avant** `generate(role, prompt, contexte, politique)` (`14_` §10) : `contexte` = le bloc `<contexte_recupere>`.
- Le RAG est **sans état** (comme les spécialistes) : il lit l'état de gating depuis L1, ne le stocke pas.
- Il est **partagé** par toutes les couches C1-C4 : un spécialiste sur Groq et un sur Cerebras reçoivent **le même contexte** → cohérence garantie malgré l'hétérogénéité.

---

## 14. Complétude des commandes (règle projet)

Le RAG introduit une opération d'exploitation (ré-indexation) → à propager dans les trois couches **au moment de l'implémentation** (P3) :
- Joueur : *(aucune — le RAG est invisible au joueur)*
- GM : **`!sys_rag_reindex [scope]`** (`scope` = fiche / dossier / global) — `[BESOIN_COMMANDE]`
- IA : **`SYS_RAG_REINDEX(scope)`** — `[BESOIN_COMMANDE]`

*(Non propagé dans `whatsapp_commands_list.md`/`ai_orchestrator_commands.md` à ce stade : toute la couche bot est P3 en attente de feu vert PE — cohérent avec les étapes 38-39 qui n'ont introduit aucune commande live.)*

---

## 15. Décisions actées

- **D-RAG-1** : **chunking par section de gabarit** (jamais par fenêtre aveugle) ; 1 chunk = 1 section sémantique, sous-découpage à chevauchement 15 % au-delà de ~400 tokens.
- **D-RAG-2** : **exclusion à l'ingestion** des sections K3 / fils méta / secrets inavouables (§4) — le verrou D22 est une **propriété de l'index**, pas une consigne de prompt.
- **D-RAG-3** : **schéma de métadonnées** §3 (clé = `entity_id` canonique D71) → récupération chirurgicale par filtres durs + sémantique.
- **D-RAG-4** : **gating K0/K1/K2** via l'état L1 (`SYS_NPC_KNOWLEDGE_UNLOCK`) ; **K3 jamais indexé**.
- **D-RAG-5** : **contrat de récupération borné par spécialiste** (filtres, top-k, budget tokens) — garde les prompts petits (cache + économie de quota gratuit).
- **D-RAG-6** : **injection attribuée** (`[entity_id · section]`) → grounding/citation ; placement après le prompt système figé, avant le volatil.
- **D-RAG-7** : **RAG exclusivement local (C1)**, sans état, répliquable/shardable ; embedding *small* multilingue CPU + magasin vectoriel embarqué (`sqlite-vec`/`pgvector`).
- **D-RAG-8** : **anti-hallucination** — grounding obligatoire (S7), seuil de pertinence, « je ne sais pas » plutôt qu'inventer, validation d'ID aval par L1.
- **D-RAG-9** : **ré-indexation incrémentale par hash** ; changer une fiche = constellation à jour sans réentraînement.

---

## 16. Critères d'acceptation

- [ ] Aucune section K3 / méta / secret présente dans l'index (audit d'exclusion — grep des IDs méta absents).
- [ ] Chaque chunk porte `entity_id` + `section` + métadonnées §3 renseignées.
- [ ] Récupération S2 sur un PNJ donné renvoie K0/K1 (+ K2 si débloqué), jamais K3.
- [ ] Récupération S7 cite au moins un `entity_id` ou répond « je ne sais pas ».
- [ ] Modifier une fiche → chunk ré-embeddé → contexte à jour au tour suivant.
- [ ] Latence de requête < 200 ms sur l'ARM ; index en RAM.
- [ ] Aucune archive `deprecated_v1` ni spéc développeur dans l'index.

---

## 17. Backlog / points ouverts

- **Corpus canon SAO** (light novels `ressources_brutes/`) : **exclu** du RAG primaire (volume, ton, CGU). Option future : index canon **séparé, opt-in**, pour lore profond — à arbitrer.
- **Chunking des `_index_*.md`** : indexés en priorité basse pour les requêtes agrégées (S7 « liste des sorts de feu ») ; à affiner si bruit.
- **Seuil de pertinence** exact : à calibrer empiriquement au lancement.
- **Politique de cache par lieu** du bloc `<contexte_recupere>` : à spécifier avec le contrat des spécialistes (livrable suivant).
