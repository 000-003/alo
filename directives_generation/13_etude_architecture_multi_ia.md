# 🧠 ÉTUDE — Architecture « constellation de petites IA mono-tâche » pour le bot ALO

> **Type** : étude d'architecture P3 (implémentation technique — hors périmètre « données », feu vert PE requis avant réalisation).
> **Question étudiée** : plusieurs *petites IA*, chacune ne faisant **qu'une seule chose, mais correctement** (dialogue/PNJ, combat, Game Master, tâches système…), sur un serveur **Oracle Cloud free tier**.
> **Méthode** : décomposition en spécialistes → analyse multi-paramètres (performance, coût, cohérence, panne, sécurité, contrainte matérielle, maintenabilité) → matrice de décision.
> **Filtres persona appliqués** : Développeur (10 000 msg simultanés, DRY, anti-exploit) · Game Designer (économie, CR, coopération raciale) · Scénariste (roman interactif, pas terminal Linux).
> **Invariant de conception** : la taxonomie de commandes existante `!*` (Joueur) / `!sys_*` (GM) / `SYS_*` (IA) **est déjà** une interface de *tool-calling* — chaque « petite IA » émet des intentions `SYS_*` que le moteur déterministe valide et exécute. On ne remplace pas cette abstraction, on la remplit.

---

## 0. Définition rigoureuse d'une « petite IA mono-tâche »

Le terme recouvre **trois implémentations distinctes** — les confondre est la première erreur. Elles ne coûtent pas la même chose, ne tiennent pas la même charge, et ne se maintiennent pas pareil.

| Impl. | Ce que c'est | Entraînement | Hébergement | Concurrence | Verdict ALO |
|---|---|---|---|---|---|
| **A — Prompt-spécialisé** | 1 modèle partagé (API), N *rôles* = N prompts système figés + schéma d'outils | Aucun | API (calcul délégué) | Illimitée (limites de palier) | ✅ **Socle** |
| **B — Modèle local dédié** | 1 petit modèle quantifié (1-3B) par rôle, via Ollama/llama.cpp | Aucun (modèle pré-entraîné) | ARM free tier (CPU) | **1 génération à la fois** / cœur | 🟡 fallback éco / tâches jetables |
| **C — Fine-tune LoRA** | Petit modèle spécialisé *entraîné* sur le style ALO d'une tâche | Oui (quelques heures GPU loué, ~5-20 $) | ARM (inférence) ou API | selon hébergement | 🔴 différé (gain de *style*, pas de *justesse factuelle* — le RAG bat le fine-tune sur la factualité) |

**Décision structurante (D-IA-1)** : « petite IA » = **implémentation A par défaut** (prompt-spécialisé sur modèle partagé, adossé au RAG). B en fallback pour les tâches à très haut volume et faible enjeu. C écarté tant que le RAG n'est pas jugé insuffisant *stylistiquement* — car le fine-tune fige un style mais **périme** dès qu'une fiche change, alors que le RAG reste à jour par construction.

> **Pourquoi « chacune fait UNE chose » est objectivement supérieur à un prompt monolithe** : (a) un prompt court et focalisé a une **précision plus haute** et **confond moins** ; (b) il consomme **moins de tokens** et **cache mieux** (prompt système figé → lecture cache à ~0,1×) ; (c) chaque spécialiste **évolue et se teste indépendamment** ; (d) le **bon modèle par tâche** (on ne paie pas de l'Opus pour classer une intention) ; (e) **isolation des pannes** (un spécialiste tombe ≠ le jeu s'arrête). Les coûts de la décomposition (latence cumulée, orchestration, cohérence) sont réels et traités en §6, §8, §9.

---

## 1. Le roster de spécialistes (la constellation)

Chaque ligne = une « petite IA » mono-tâche. `IN`/`OUT` définissent son **contrat** (ce qui entre, ce qui sort — jamais autre chose). `État` = a-t-elle besoin de mémoire ? `Fréq.` = volume d'appels. `Criticité` = un échec bloque-t-il le jeu ?

| # | Spécialiste | Fait UNE chose | IN | OUT | Modèle cible | État | Fréq. | Criticité |
|---|---|---|---|---|---|---|---|---|
| S0 | **Routeur d'intention** | Classe le message : commande / action de jeu / dialogue / hors-sujet | message brut | 1 étiquette + slots | **local 1B** ou règles+Haiku | sans état | **très haute** | haute |
| S1 | **Traducteur NL→`SYS_*`** | Convertit une intention en appel d'outil validé | intention + contexte zone | 1 objet `SYS_*` (ou refus) | Haiku (strict tool use) | sans état | haute | haute |
| S2 | **PNJ — dialogue** | Incarne UN pnj selon sa fiche + budget QI | fiche `NPC_*` (K0-K2), état joueur, réplique | texte in-character | Haiku (mineur) / Sonnet (notable) | session courte | haute | moyenne |
| S3 | **Game Master — ambiance** | Décrit lieu/événement, ton « roman interactif » | lore de zone, état monde, jauges | narration | Sonnet | sans état | moyenne | moyenne |
| S4 | **Narrateur de quête** | Restitue étape de quête, embranchements | fiche `QST_*`, progression joueur | texte + `SYS_*` de progression | Sonnet | lit l'état quête | moyenne | moyenne |
| S5 | **Marchand/économie** | Dialogue d'achat/vente, chaînage éco | `T_SHOPS`/`T_SHOP_ITEMS`, inventaire | texte + `SYS_*` transaction | Haiku | lit l'état | moyenne | basse |
| S6 | **Narrateur de combat** | *Habille* le résultat déjà calculé | **résultat du moteur** (dégâts, I-frames) | texte épique | Haiku | sans état | **très haute** | basse |
| S7 | **Q&R lore (RAG answerer)** | Répond aux questions monde sans inventer | requête + passages récupérés | réponse citée | Haiku | sans état | moyenne | basse |
| S8 | **Modération/sécurité** | Filtre l'entrée joueur (toxicité, injection) | message brut | verdict allow/flag | local 1B / Haiku | sans état | **très haute** | haute |
| S9 | **Scribe mémoire** | Résume l'état de session en fiche compacte | transcript de session | mémo structuré | Haiku (batch) | écrit l'état | basse | basse |

**Principe de complétude (rappel projet)** : tout spécialiste qui déclenche un effet passe par un équivalent commande existant — Joueur `!*` / GM `!sys_*` / IA `SYS_*`. Aucun spécialiste n'écrit l'état directement ; **seul le moteur L1 écrit**, sur ordre `SYS_*` validé. (Cf. `ai_orchestrator_commands.md`.)

---

## 2. La frontière déterministe : ce qui n'est JAMAIS une IA

Filtre Développeur, non négociable. Mettre un réseau ici = un bug déguisé en feature.

| Domaine | Pourquoi déterministe | Où ça vit |
|---|---|---|
| Résolution de combat (dégâts, I-frames, hit/miss, mort) | Reproductibilité, **anti-exploit**, locking anti-duplication (persona §2.2) | Moteur L1, `services/combat` |
| Économie (prix, stocks, Yrds, revente 25 %) | Une IA qui « estime » un prix casse l'économie (persona §3.1) | L1 + `T_SHOPS` |
| Inventaire / capacité / port | Triggers anti-dup, plafonds (D44/D45, `T_INVENTORY`) | L1 |
| Déplacement / présence de zone | **Invariant R0** : 1 joueur = 1 groupe LOCATION (`zone_movement_protocol`) | L1 + `T_WA_GROUPS`/`T_ZONE_LINKS` |
| Jauges environnementales | Surchauffe/Apnée/Vacarme = `HEAT`/`OXYGEN`/`DOT` calculés (D11/D12) | L1, `SYS_SET_ENV_HAZARD` |
| Déblocage skill/titre/loot | Règles de prérequis (Niveau, quête T5, drop rate) | L1 |

**L'IA ne *décide* jamais un chiffre d'état. Elle *habille* un chiffre déjà décidé** (S6), ou *propose* une action que L1 **valide** (S1/S4/S5). C'est la ligne rouge de toute l'architecture.

---

## 3. Le dispatcher : comment on choisit le bon spécialiste

Coût quasi nul, doit être **le plus rapide et le plus fiable** (il est sur le chemin de *chaque* message).

```
message WhatsApp
   │
   ├─ commence par "!" ? ──► parseur de commande (0 IA) ──► L1 moteur
   │
   └─ texte libre
        │
        ├─ S8 modération (rejet précoce si toxique/injection)
        │
        └─ S0 routeur d'intention  ──►  aiguillage :
              • "je frappe / je lance X"   → L1 combat → S6 narration
              • "je parle à / je demande"  → S2 PNJ (+ RAG fiche)
              • "j'achète / je vends"       → S5 marchand
              • "où / comment / c'est quoi" → S7 Q&R lore
              • action de quête             → S4 quête → L1
              • ambiance / regarde autour   → S3 GM
```

**D-IA-2** : le dispatcher S0 est **hybride** — d'abord une **passe de règles/regex** (les commandes `!` et les verbes d'action fréquents sont capturés sans IA, coût 0), puis un **micro-classifieur** (local 1B ou Haiku en *strict tool use* renvoyant une énumération) uniquement sur l'ambigu. Objectif : **>70 % des messages routés sans appel LLM payant.**

---

## 4. Analyse de PERFORMANCES

### 4.1 Latence (budget par tour)

WhatsApp est **asynchrone** : la tolérance est large (1-5 s confortable, 10 s acceptable pour une narration riche). C'est l'atout structurel qui rend toute l'approche viable.

| Étape | Latence typique | Note |
|---|---|---|
| Dispatcher (règles) | < 5 ms | local |
| Modération S8 (local 1B) | ~50-300 ms | CPU ARM |
| RAG (embed requête + recherche vectorielle) | ~30-150 ms | local, index en RAM |
| Appel LLM Haiku (sortie courte ~150 tok) | ~0,5-1,5 s | API |
| Appel LLM Sonnet (narration ~300 tok) | ~1,5-3,5 s | API |
| **Total tour « dialogue PNJ »** | **~1-2 s** | acceptable |
| **Total tour « GM narratif »** | **~2-4 s** | acceptable |

**Coût de la décomposition = latence cumulée si les spécialistes s'enchaînent en série.** Mitigation : (a) **paralléliser** ce qui est indépendant (RAG + modération lancés ensemble) ; (b) préférer **un seul appel** quand un spécialiste suffit — ne pas chaîner S0→S2→S6 quand S2 seul répond ; (c) réserver le chaînage aux tours qui le justifient (action de combat = L1 puis S6).

### 4.2 Débit & concurrence — le point qui tranche API vs local

| Backend | Concurrence réelle | Conséquence |
|---|---|---|
| **API (impl. A)** | Effectivement illimitée (bornée par le palier de rate-limit de l'orga, pas par ton CPU) | ✅ Tient l'objectif persona 10 000 simultanés |
| **Local ARM (impl. B)** | **~1 génération lourde à la fois par cœur** ; 4 cœurs → file d'attente dès quelques joueurs actifs simultanés | 🔴 Goulot d'étranglement à l'échelle |

C'est **l'argument décisif** : le free tier n'a pas de GPU, l'inférence CPU d'un modèle décent est *sérielle*. Donc **la génération narrative part en API** ; le local est réservé aux tâches **courtes, parallélisables et à faible enjeu** (routage S0, modération S8, embeddings RAG) où 4 cœurs suffisent.

### 4.3 Budget de tokens par spécialiste (le cache change tout)

Chaque spécialiste a un **prompt système figé** (ses règles + son gabarit) → mis en **cache de prompt**. Ordre de rendu : `tools → system → messages`. Le figé va **devant**, le volatil (fiche récupérée, réplique joueur) **derrière** le point de cache.

| Élément | Tokens (ordre de grandeur) | Cache ? |
|---|---|---|
| Prompt système d'un spécialiste | 500-1 500 | ✅ figé → lecture ~0,1× |
| Fiche PNJ / lore récupérée (RAG) | 800-2 000 | ✅ par lieu (semi-stable) |
| État joueur + réplique | 100-400 | ❌ volatil (en fin) |
| Sortie | 150-400 | — |

> ⚠️ **Seuil de cache** : Haiku 4.5 ne met en cache qu'un préfixe ≥ 4096 tokens. En dessous, pas de cache (silencieux). Conception : regrouper prompt système + gabarit + règles communes pour **franchir le seuil**, sinon le cache ne mord pas.

---

## 5. Analyse de COÛTS

Tarifs API (par million de tokens) : **Haiku 4.5 = 1 $ / 5 $** · **Sonnet 5 = 3 $ / 15 $** (intro 2 $/10 $ jusqu'au 31/08/2026) · **Opus 4.8 = 5 $ / 25 $**. Cache : écriture ~1,25× / lecture ~0,1×.

**Coût d'un tour, sans cache** (Haiku, ~3 000 tok entrée + 300 sortie) ≈ `3000×1$/1M + 300×5$/1M` ≈ **0,0045 $**.
**Avec cache actif** (le lieu est fréquenté, système+lore déjà en cache → ~2 500 tok lus à 0,1× + 500 tok plein) ≈ **~0,0008-0,0015 $/tour**.

| Scénario | Sans cache | Avec cache | 10 000 tours/jour |
|---|---|---|---|
| Tour Haiku (dialogue simple) | ~0,0045 $ | ~0,001 $ | **~10-45 $/j** |
| Tour Sonnet (GM narratif) | ~0,014 $ | ~0,004 $ | (fraction — narration rare) |

**Leviers de coût structurels** : (1) **tiering** — Haiku par défaut, Sonnet réservé aux moments à enjeu, Opus exceptionnel ; (2) **cache par lieu** — un groupe WhatsApp actif amortit son lore ; (3) **dispatcher qui évite l'IA** sur >70 % des messages ; (4) **S9 scribe en batch** (Batch API à −50 %) pour la mémoire de session ; (5) **local gratuit** pour S0/S8/embeddings. Ordre de grandeur maîtrisé et **prévisible au token près**.

---

## 6. Grounding & cohérence entre spécialistes (le vrai risque)

Le danger de N IA n'est pas la performance — c'est la **contradiction** (S2 dit une chose, S3 une autre). Trois garde-fous :

1. **Une seule source de vérité = l'état de jeu (tables MLD) + le RAG (corpus figé).** Aucun spécialiste n'a de mémoire « privée » divergente ; tous lisent le même état L1.
2. **Le RAG comme cerveau factuel partagé.** Sur ~3 400 fiches : index d'embeddings (modèle multilingue *small*, ~100-400 Mo, CPU) + magasin vectoriel (`sqlite-vec` ou `pgvector`). Chaque spécialiste reçoit **les passages pertinents injectés**, pas sa propre version. **Changer une fiche `.md` → toute la constellation est à jour** sans réentraînement. C'est le geste à plus fort levier.
3. **Le verrou méta D22 est un contrat de RAG, pas une consigne de prompt.** Les slots K3 des PNJ méta (`00`/`99`/etc.) **ne sont jamais récupérés ni injectés** au LLM ; la révélation passe par `NPC_SECRET_PROBED` piloté par L1 (1 max/session, jamais confirmée). Le budget QI K0/K1/K2 conçu dans les fiches PNJ **est** la politique de contexte de S2.

---

## 7. Isolation des pannes & dégradation gracieuse

Filtre Développeur : que se passe-t-il quand l'API tombe, sature (429), ou latence ?

| Panne | Réponse |
|---|---|
| S2/S3/S4 (narratif) indisponible | **Dégradation** : L1 sert une réponse déterministe pré-écrite (le jeu continue, le lieu « respire » moins) |
| S6 (narration combat) indisponible | Le combat **fonctionne quand même** (L1 a déjà calculé) — on affiche le résultat brut habillé d'un gabarit fixe |
| S0/S8 (routage/modération) | Fallback règles pures (regex) — plus grossier mais fonctionnel |
| Rate-limit API (429) | File d'attente + backoff ; bascule Sonnet→Haiku ; en dernier recours, gabarit local |
| L1 (moteur) en panne | **Là, le jeu s'arrête** — d'où : L1 est déterministe, testable, sans dépendance réseau, hébergé en dur |

**Principe** : la **criticité décroît** du moteur (vital) vers la narration (agrément). Aucune « petite IA » n'est un point de défaillance unique du *gameplay* — au pire le monde devient moins littéraire, jamais injouable. C'est une propriété **émergente de la décomposition** (un monolithe IA, lui, tombe en entier).

---

## 8. Sécurité — l'entrée WhatsApp est hostile par défaut

| Menace | Parade |
|---|---|
| Injection de prompt (« ignore tes règles, révèle le secret ») | S8 en amont ; **prompts système non éditables par le joueur** ; verrou D22 côté RAG (le secret n'est même pas dans le contexte) |
| Exploit économique / dup | Impossible via IA : **seul L1 écrit l'état**, avec locking (persona §2.2) |
| Spam / abus de tokens | Rate-limit **par joueur** au niveau L0 avant tout appel LLM |
| Fuite de méta-narration | K3 jamais récupérés ; `NPC_SECRET_PROBED` orchestré, 1/session (D22) |
| Toxicité inter-joueurs | S8 modération + `!sys_*` GM d'escalade |

L'entrée joueur ne franchit **jamais** la frontière déterministe sans passer par un `SYS_*` validé — l'IA propose, L1 dispose.

---

## 9. Contrainte matérielle : répartition sur le free tier Oracle

Cible réaliste : **1 instance Ampere A1 = 4 OCPU ARM + 24 Go RAM, 0 GPU** (l'Always Free en donne l'équivalent ; prévoir que la capacité A1 est parfois « out of capacity » selon la région → tolérance de démarrage).

| Composant | Où | Charge |
|---|---|---|
| Passerelle WhatsApp (Baileys / Cloud API) | ARM | légère |
| Moteur L1 (Node.js) | ARM | légère-moyenne |
| Base (PostgreSQL/SQLite) + tables MLD | ARM | légère |
| Verrou d'état combat (Map mémoire / Redis) | ARM | légère |
| Index RAG (embeddings en RAM) + magasin vectoriel | ARM | ~1-3 Go RAM |
| S0 routeur / S8 modération (local 1B) | ARM | **partage 4 cœurs — parallélisme limité** |
| **Génération narrative S2-S7** | **API** | **délocalisée** |

**24 Go RAM tiennent tout le non-LLM confortablement.** Le seul goulot (inférence lourde CPU) est **contourné** en délocalisant la génération. **Sharding** : le monde est déjà découpé en lieux = groupes WhatsApp ; on peut sharder par lieu si un jour une 2ᵉ instance est ajoutée (l'architecture est *stateless côté IA*, l'état est en base → horizontalement scalable).

---

## 10. Maintenabilité & évolution

- **Ajouter un spécialiste = ajouter un prompt + un contrat**, pas réentraîner un réseau. Coût marginal quasi nul.
- **Tester un spécialiste isolément** (jeu d'exemples IN→OUT attendu) sans toucher les autres.
- **Versionner les prompts** comme du code ; A/B tester un ton PNJ sans risque système.
- **Le RAG suit les données** : la génération de fiches (déjà à ~3 400) *est* l'investissement produit ; l'IA en hérite gratuitement. Le chantier « données » et le chantier « IA » ne sont pas concurrents — **le premier nourrit le second**.
- **Chemin de fine-tune (impl. C) gardé ouvert** : si un jour le *style* d'un notable canon doit être plus signature que le RAG ne le permet, un LoRA ciblé (quelques heures GPU loué) le fige — mais **après** que le RAG ait prouvé sa limite, jamais avant.

---

## 11. Matrice de décision — quel modèle pour quel spécialiste

| Spécialiste | Local 1B | Haiku 4.5 | Sonnet 5 | Justification |
|---|---|---|---|---|
| S0 Routeur | ✅ (ou règles) | ↩︎ ambigu | — | volume énorme, tâche simple, latence critique |
| S1 NL→`SYS_*` | — | ✅ strict tool use | — | structuré, court, fiable |
| S2 PNJ mineur | — | ✅ | — | volume, enjeu modéré |
| S2 PNJ notable/canon | — | — | ✅ | voix signature, enjeu narratif |
| S3 GM ambiance | — | ↩︎ simple | ✅ | « sense of wonder » (filtre Scénariste) |
| S4 Quête | — | ↩︎ daily | ✅ | embranchements, cohérence |
| S5 Marchand | — | ✅ | — | transactionnel |
| S6 Combat (narration) | — | ✅ | — | volume très haut, habillage |
| S7 Q&R lore | — | ✅ | — | RAG fait le gros du travail |
| S8 Modération | ✅ | ↩︎ fallback | — | volume, binaire |
| S9 Scribe (batch −50 %) | — | ✅ | — | hors chemin critique |

*(↩︎ = bascule conditionnelle selon la difficulté/enjeu du tour, décidée par le dispatcher.)*

---

## 12. Récapitulatif — les « plein d'autres paramètres » en un tableau

| Paramètre | Constellation de petites IA (impl. A + RAG) |
|---|---|
| **Précision par tâche** | ✅ élevée (prompt focalisé, contexte injecté ciblé) |
| **Latence** | ✅ 1-4 s (Whatsasync tolérant) ; risque = chaînage série → paralléliser |
| **Débit / concurrence** | ✅ illimité côté API ; local réservé aux tâches parallélisables |
| **Coût** | ✅ prévisible au token ; ~0,001-0,004 $/tour avec cache ; tiering |
| **Cohérence inter-agents** | ✅ garantie par état L1 unique + RAG partagé ; risque géré §6 |
| **Isolation des pannes** | ✅ dégradation gracieuse ; aucun SPOF de gameplay |
| **Sécurité / anti-injection** | ✅ S8 + frontière `SYS_*` + verrou D22 côté RAG |
| **Free tier Oracle (0 GPU)** | ✅ tout sauf la génération tient sur 4 ARM/24 Go ; génération en API |
| **Scalabilité** | ✅ IA stateless, état en base → sharding par lieu |
| **Déterminisme (combat/éco)** | ✅ hors IA, jamais neuronal (ligne rouge §2) |
| **Maintenabilité** | ✅ ajouter un rôle = un prompt ; RAG suit les fiches |
| **Effort de mise en œuvre** | 🟡 orchestration multi-agents + RAG à construire (P3) |
| **Dépendance externe** | 🟡 API (mitigée par fallback local + gabarits déterministes) |

---

## 13. Décisions actées par cette étude

- **D-IA-1** : « petite IA » = **prompt-spécialisé sur modèle partagé + RAG** (impl. A) par défaut ; **local 1B** (impl. B) en fallback pour S0/S8/embeddings ; **fine-tune** (impl. C) différé.
- **D-IA-2** : dispatcher **hybride règles→micro-classifieur**, objectif >70 % des messages routés sans LLM payant.
- **D-IA-3** : **frontière déterministe absolue** — combat, économie, inventaire, déplacement, jauges, déblocages ne sont **jamais** des IA (§2). L'IA propose (`SYS_*`), L1 valide et écrit.
- **D-IA-4** : **RAG = cerveau factuel partagé unique** sur les 3 400 fiches ; le verrou méta D22 est un **contrat de récupération** (K3 jamais injectés), pas une consigne de prompt.
- **D-IA-5** : **génération narrative en API, tâches courtes/parallélisables en local** — imposé par l'absence de GPU sur le free tier.
- **D-IA-6** : **tiering de modèles** Haiku (défaut) / Sonnet (enjeu) / Opus (exceptionnel), + cache de prompt par lieu + Batch pour le scribe.

## 14. Prochaine marche (si le PE valide la direction)

Ordre de délégation suggéré, chaque étape = livrable structurel markdown (zéro code jusqu'au feu vert d'implémentation) :
1. **CDC du RAG** : format d'indexation des fiches, découpage (chunking par section de gabarit D17/D67/D68), métadonnées de filtrage (préfixe d'ID, zone, tier), contrat d'injection par spécialiste.
2. **Contrat des 10 spécialistes** : pour chacun, prompt système figé (spéc, pas prose), schéma IN/OUT, mapping vers `SYS_*`, modèle cible, politique de cache.
3. **Spéc du dispatcher** : table de routage règles + énumération d'intentions du micro-classifieur.
4. **Matrice de dégradation** : réponse déterministe de repli par spécialiste.
5. *(Implémentation Node.js — hors périmètre données, décision PE séparée.)*
