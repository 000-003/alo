# CDC-SOC-01 — Systèmes sociaux : mémoire relationnelle PNJ, Housing, Mariage, Emploi, Guildes

> **Étape 43 (2026-07-10).** Cahier des charges du **pilier social & vie de joueur** demandé par le PE. Cadre les nouvelles tables MLD, les décisions **D-SOC-1 → D-SOC-14**, les quotas de contenu à produire (délégables) et les `[BESOIN_*]`. Livrable markdown / SQL-DDL, zéro code Node.js.

---

## 1. Périmètre & source de vérité

| Besoin PE | Table MLD (source de vérité) | Spéc comportement |
|---|---|---|
| Mémoire « a parlé N fois / infos possédées / side-quests conditionnées » | `T_NPC_RELATIONS` (+ `T_NPC_KNOWLEDGE_UNLOCKS` existante) | `marriage_housing_system.md` §0 |
| Acheter / louer une maison | `T_PROPERTIES` | §2 |
| Créer / **rejoindre** une guilde | `T_GUILDS` (+ `T_GUILD_MEMBERS`) — étendue G5 | §4 |
| Avoir un travail (aubergiste…) | `T_JOBS_DICT` (+ `T_AVATAR_JOB`) | §3 |
| Se marier (homme+femme, monogame, séparation équitable) | `T_MARRIAGES` (+ `T_MARRIAGE_ASSETS`) | §1 |

Cache dénormalisé sur `T_AVATARS` : `marriage_uuid`, `home_property_uuid`, `job_id` (A7).

---

## 2. Décisions actées (D-SOC-1 → 14)

| # | Décision |
|---|---|
| **D-SOC-1** | Le lien joueur↔PNJ est une **arête creuse créée à la 1ʳᵉ interaction**, jamais pré-matérialisée à l'inscription (anti-scale : 11 M lignes évitées). |
| **D-SOC-2** | Affinité continue [−100,+100] → 5 paliers dérivés (`hostile`→`confidant`). `affinity_tier` recalculé par trigger. |
| **D-SOC-3** | Les side-quests conditionnées vivent dans `T_QUESTS_DICT.prerequisites` (`min_affinity_tier`/`qi_unlocked`/`topic_flag`/`requires_married`/`requires_home`), pas dans une table dédiée. |
| **D-SOC-4** | Housing = **achat (`own`) OU location (`rent`)**, expulsion sur défaut de loyer. |
| **D-SOC-5** | Un seul logement principal par joueur (index unique). |
| **D-SOC-6** | Grille 4 tiers (`inn_room` locatif / `small_house`/`manor`/`estate` en pleine propriété), stockage +50 → +1 000, calée balance sheet v2.0. |
| **D-SOC-7** | Le logement est un **checkpoint sûr** : `!home_return` = rappel sanctionné R0, `!rest` = regen 5 %/min + logout sans *Remain Light*. |
| **D-SOC-8** | Coffre conjugal = `T_BANK_VAULTS(owner_type='marriage')`, `max_slots` **doublé** ; provenance dans `T_MARRIAGE_ASSETS`. |
| **D-SOC-9** | **Monogamie** stricte (index partiels sur mariages actifs). |
| **D-SOC-10** | Mariage **homme + femme uniquement** (le `neutral` ne se marie pas). |
| **D-SOC-11** | **Emploi salarié** = nouveau domaine `T_JOBS`, distinct des skills récolte/artisanat. |
| **D-SOC-12** | Un seul emploi actif à la fois (PK `avatar_uuid`). |
| **D-SOC-13** | `T_AVATARS.marriage/home/job` = caches dénormalisés ; tables sociales = autorité. |
| **D-SOC-14** | Rejoindre une guilde par invitation **ou** candidature ; 1 joueur = 1 guilde. |

---

## 3. Contenu produit (quotas délégués — ✅ LIVRÉS étape 43)

Protocole générateur délégué **D37** (jamais de fichier maître, jamais d'ID hors plage, manques en `[BESOIN_*]`). Les 3 lots générables ont été délégués à des générateurs parallèles ; réconciliation orchestrateur effectuée.

| Lot | Cible | Livré | Emplacement |
|---|---|---|---|
| **SOC-1 · Emplois** | ≥ 60 | ✅ **66** (11/cat × 6 cat, ≥ 5/ville × 11) | `game_design/emplois/` + `_index_emplois.md` |
| **SOC-2 · Side-quests d'affinité** | ≥ 20 | ✅ **22** (2/capitale, déblocage `trusted`/`confidant` + `qi_unlocked`) | `game_design/quetes/qst_*_aff_*` + `_index_soc2_affinite.md` |
| **SOC-3 · Décorations** | ≥ 30 | ✅ **36** (7 types, buffs ≤ +5 %) | `items_equipements/decoration/` + `_index_decoration.md` |
| **SOC-4 · Cadeaux de noces** | table de tirage | ✅ (orchestrateur) | `system_mechanics/wedding_gift_table.md` |

---

## 4. `[BESOIN_*]` — état des dépendances

- **✅ RÉSOLU — Anneau d'Engagement** : arbitrage PE = **item de service dédié** (pas le lot accessoires gelé). Créé : **`MSC_ENG_001`** (`item_type='MSC'`, sans stat, lié, consommé à la cérémonie, 50 000 Yrds chez un bijoutier `SERVICE`) — `données/items_equipements/service/msc_eng_001_anneau_dengagement.md`. L'ancienne bague à stats `ACC_ANN_003` est **dépréciée/redirigée**. Le prérequis `T_MARRIAGES` M3 pointe sur `MSC_ENG_001`.
- **⏳ BACKLOG (décision PE : reporté) — Auberge exploitable** : extension de `T_PROPERTIES` en établissement louable par un joueur-aubergiste (`JOB_HOS_001` loue des `inn_room`). **Non modélisé à l'étape 43** ; la boucle housing↔emploi reste ouverte. En attendant, `JOB_HOS_001` s'exerce chez un aubergiste **PNJ** (`employer_type='npc'`), pas sur une propriété-joueur.
- **`[BESOIN_COMMANDE]`** : toutes les faces `!*`/`!sys_*`/`SYS_*` de l'étape 43 sont **déjà propagées** dans `whatsapp_commands_list.md` (§15/§10/§20/§23) et `ai_orchestrator_commands.md` (§10/§2) à la clôture — dette de commande nulle.

### 4-bis. Arbitrage des `[BESOIN_*]` remontés par les générateurs SOC (étape 43)

| Remonté | Lot | Arbitrage orchestrateur |
|---|---|---|
| `[BESOIN_ITEM]` dague d'apprentie, pelage | SOC-2 | ✅ **résolus** — mappés sur `WPN_DAG_003` et `MAT_CUI_*` existants |
| `[BESOIN_ITEM]` gage Sept-Doigts, relique de cendre, corde de Cordelia, pioche du doyen (×4) | SOC-2 | ✅ **classés items de quête liés type `KEY`** — props narratifs sans fiche économique (générés au reward, bind-on-pickup) |
| `[BESOIN_TITRE]` `TITLE_FILLEUL_FONTAINE`, `TITLE_GARDIEN_SILENCE` | SOC-2 | ✅ **créés** dans `table_t_titles.md` (honorifiques, 0 stat) |
| `[BESOIN_NPC]` aubergistes dédiés Brokkheim/Penwether (×2) | SOC-1 | 🔸 **accepté provisoire** (rattaché `NPC_BRO_20` / `city`) — création de 2 taverniers dédiés = backlog mineur |
| `[BESOIN_GUILD]` Forges de Brokkheim, Chercheurs de Penwether (×2) | SOC-1 | 🔸 **différé** — employeurs `guild` sans `guild_uuid`, résolus au peuplement de `T_GUILDS` (même statut que le seed `JOB_LOG_002`) |
| `[BESOIN_SCHEMA]` clés `deco_buffs` | SOC-3 | ✅ **figé** — contrat P7 de `table_t_properties.md` (5 clés, plafond ±5 %/logement) |

---

## 5. Frontière déterministe (rappel P3, CDC 19)

Toute la validation sociale (genre, monogamie, prérequis de foyer, provenance de séparation, plafonds de guilde/logement, barrières de niveau d'emploi) relève du **moteur déterministe L1** — **jamais** neuronale. L'IA génère la narration (cérémonie, incident d'emploi, réplique contextualisée par l'affinité) et émet la commande ; L1 valide et écrit. Toute hallucination d'ID ou de prérequis est rejetée (contrat `SYS_*` de `19_cdc_moteur_deterministe.md`).
