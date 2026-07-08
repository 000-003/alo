# Table MLD : T_NPC

> Registre relationnel des PNJ. Source de vérité des sections « PNJ Résidents » des fiches de zones
> et des fiches détaillées de `personnages_bestiaire/pnj/` et `lore_mecaniques/geographie_villes/`.

## 1. Structure Logique : T_NPC

| Colonne | Type logique | Contraintes | Description |
|---|---|---|---|
| `npc_id` | Texte | **PK** — format `NPC_<VILLE>_<NN>` (README §Conventions ; plages D16 §4-bis) | Ex: `NPC_FRE_01`, `NPC_DUS_04` |
| `display_name` | Texte | NOT NULL | Nom affiché (ex: « Léo Crinière-Fauve ») |
| `race` | Énum | 9 races + `SYSTEM` | Race du PNJ |
| `role_type` | Énum | `MERCHANT` / `SKILL_MASTER` / `QUEST_GIVER` / `GUARD` / `LORD` / `SERVICE` / `BLACK_MARKET` | Pilote le menu d'interaction du bot |
| `zone_id` | Texte | FK → `T_ZONES.zone_id`, **NULLABLE depuis l'étape 5** | Zone de résidence. `NULL` = état « hors monde » des canoniques au repos (D19/R-C1 — seuls `SYS_SPAWN_CANON` / `!sys_canon_spawn` la renseignent temporairement) |
| `location_label` | Texte | NULLABLE | Sous-lieu narratif (ex: « Marché aux Crocs ») |
| `level` / `hp` / `mp` | Entiers | ≥ 0 | Stats de combat (les PNJ sont tuables — cf. `SYS_ASSASSINATE_NPC`) |
| `stats_json` | JSON | NULLABLE | STR/AGI/VIT/INT/DEX (format des fiches `geographie_villes`) |
| `shop_ref` / `quest_ref` | Texte | NULLABLE | Références inventaire de vente / chaîne de quêtes |
| `dialog_ref` | Texte | NULLABLE | Référence du dialogue par défaut (surchargée par `SYS_NPC_DIALOG_OVERRIDE`) |
| `secret_note` | Texte | NULLABLE | Le « secret inavouable » du PNJ (matériau narratif GM/IA — jamais exposé au joueur, jamais injecté au LLM) |
| `qi_budget` | Entier | défaut 10, max 12 | Taille d'enveloppe QI autorisée (D17) — contrainte vérifiée par `T_NPC_KNOWLEDGE` T1 |
| `is_canon` | Booléen | défaut FAUX | VRAI = personnage de la trame principale (D19 : hors `!where`, spawn IA/GM uniquement, `is_essential` forcé VRAI) |
| `is_essential` | Booléen | défaut FAUX | VRAI = l'assassinat déclenche une quête de succession au lieu d'une suppression |
| `is_alive` | Booléen | défaut VRAI | FAUX après `SYS_ASSASSINATE_NPC` (le PNJ reste en base, l'histoire continue) |

## 2. Indexation et Optimisation

- **Index** sur `zone_id` : le bot liste les PNJ présents à chaque `!where` / entrée de zone.
- **Index** sur `(role_type, zone_id)` : résolution rapide de `!shop_list`, `!quest_board`, `!craft_list`.
- **Index partiel** sur `is_alive = FAUX` : moteur d'élections/successions (`SYS_ASSASSINATE_NPC`).

## 3. Triggers / Procédures Stockées (contrats d'intégrité)

| # | Contrat | Comportement |
|---|---|---|
| T1 | **Préfixe cohérent** | Le `<VILLE>` du `npc_id` doit correspondre au préfixe acté de la `zone_id` (table de correspondance §4) |
| T2 | **Mort ≠ suppression** | `SYS_ASSASSINATE_NPC` bascule `is_alive` à FAUX — interdiction de DELETE (l'historique narratif est immuable) |
| T3 | **Essentiel protégé** | Si `is_essential`, la mort déclenche la génération d'une quête d'élection (`SYS_GENERATE_QUEST`) |

## 4. Peuplement Initial — correspondance préfixes ↔ zones (actée)

| Préfixe | Ville / Zone | `zone_id` | Fiches sources |
|---|---|---|---|
| `NPC_ALN_*` | Alne | `ZONE_NEU_CAP_001` | `lore_mecaniques/geographie_villes/alne_capitale_neutre.md` (01-07) |
| `NPC_SWI_*` | Swilvane | `ZONE_SYL_CAP_001` | `swilvane_territoire_sylph.md` (01-07) |
| `NPC_VOU_*` | Voulg | `ZONE_SAL_TWN_001` | `voulg_territoire_salamander.md` (01-07, décision D1) |
| `NPC_GAT_*` | Gattan | `ZONE_SAL_CAP_001` | `gattan_territoire_salamander.md` (01-07, étape 3) |
| `NPC_FRE_*` | Freelia | `ZONE_CAI_CAP_001` | `freelia_territoire_caitsith.md` (01-07) |
| `NPC_UND_*` | Archipel d'Écume | `ZONE_UND_CAP_001` | `archipel_territoire_undine.md` (01-07) |
| `NPC_LIO_*` | Lioda | `ZONE_PUC_CAP_001` | `capitale_lioda.md` (01-07, étape 2) |
| `NPC_DUS_*` | Duskarn | `ZONE_IMP_CAP_001` | `capitale_duskarn.md` (01-07, étape 2) |
| `NPC_GRA_*` | Granzam | `ZONE_GNO_CAP_001` | `capitale_granzam.md` (01-07, étape 2) |
| `NPC_BRO_*` | Brokkheim | `ZONE_LEP_CAP_001` | `capitale_brokkheim.md` (01-07, étape 2) |
| `NPC_PEN_*` | Penwether | `ZONE_SPR_CAP_001` | `capitale_penwether.md` (01-07, étape 2) |

> Les PNJ de zones de chasse/donjons/routes (guides, gardes-frontières, vigies) utilisent le préfixe de leur capitale de rattachement, numérotation `10-19` (ex: `NPC_FRE_10` = Dresseuse Mira, Savane des Crocs ; `NPC_UND_10` = Pêcheuse Maëlle, Lac Cristallin ; `NPC_UND_11` = Sorcière Morgane, Marais de Brume — étape 3).

## 4-bis. Plages de numérotation par ville (D16, étape 5) — 100 PNJ par ville

| Plage `<NN>` | Population | Notes |
|---|---|---|
| `00` | **PNJ caché du Cardinal** (1 par territoire) | Hors registre public : absent de `!where`, découvrable uniquement par le RP ; enveloppe QI à dominante K3 |
| `01-07` | Notables actés (étapes 2-3) | ID historiques inchangés |
| `08-09` | Gouvernance (Lord + bras droit) | `is_essential = VRAI` |
| `10-19` | PNJ des zones annexes (HUNT / DUN / ROUTE) | Compatible avec les attributions historiques `10+` |
| `20-99` | Population de la capitale, groupée par quartiers | 80 PNJ ; répartition détaillée dans `pnj/_index_pnj.md` |

> Les personnages canoniques de la trame principale n'entrent PAS dans ces plages : ID `NPC_CANON_<NOM>`,
> `is_canon = VRAI`, `zone_id = NULL` au repos (D19 — voir `npc_knowledge_protocol.md` §3).

## 5. Équivalents Commandes

| Opération | Joueur | GM | IA |
|---|---|---|---|
| Interagir / commercer | `!shop_list`, `!buy`, `!quest_accept` | — | `SYS_NPC_DIALOG_OVERRIDE` |
| Dialogue / interrogation (QI, D18) | `!parler`, `!demander` | `!sys_npc_info`, `!sys_npc_unlock` | `SYS_NPC_DIALOGUE`, `SYS_NPC_KNOWLEDGE_CHECK`, `SYS_NPC_KNOWLEDGE_UNLOCK` |
| Affinité / réputation | (implicite via RP) | — | `SYS_MODIFY_AFFINITY` |
| Déplacer un PNJ | — | `!sys_npc_move [NPC_ID] [Zone_ID]` | `SYS_MOVE_NPC(NPC_ID, Zone_ID)` |
| Matérialiser un canonique (D19) | — | `!sys_canon_spawn [NPC_ID] [Zone_ID] [Durée]` | `SYS_SPAWN_CANON(NPC_ID, Zone_ID, Duration, Silent?)` |
| Tuer / succession | — | — | `SYS_ASSASSINATE_NPC` (interdit si `is_canon`) |
