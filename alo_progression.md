# 📈 ALO_PROGRESSION — Journal d'Avancement

> **Rôle** : historique des étapes et modifications. Une entrée par modification/étape. Ne jamais supprimer d'entrées.
> Complément : l'état courant synthétisé vit dans `alo_context.md`.

---

## ÉTAPE 1 — Établissement de la base structurelle ✅ (2026-07-06)

**Objectif** : découpage/liaison de toutes les zones, logique de déplacement, registres de commandes, cahier des charges, README. Contraintes : zéro code, purement structurel.

### Modifications

| # | Action | Fichier |
|---|---|---|
| 1.1 | ➕ Créé — Atlas maître : conventions ID, taxonomie groupes WA, disposition radiale, 9 frontières, registre complet des zones (9 territoires × 5 zones + axe Alne/Yggdrasil/Jötunheimr/New Aincrad), graphe mermaid, règles d'intégrité L1–L6, équivalents commandes | `données/cartographie/atlas_monde_liaisons.md` |
| 1.2 | ➕ Créé — Protocole de déplacement : invariant R0 (1 joueur = 1 lieu), règles R0–R10, machine à états atomique, 7 méthodes de déplacement, 6 cas limites, tableau des équivalents commandes | `données/the_seed_engine/system_mechanics/zone_movement_protocol.md` |
| 1.3 | ✏️ Modifié — Ajout `!where`, alias `!marcher`/`!voler`, règle d'exclusivité en §3 ; ajout GM `!sys_sync`, `!sys_zone_link/unlink`, `!sys_zone_lock` en §1 | `données/the_seed_engine/whatsapp_commands_list.md` |
| 1.4 | ✏️ Modifié — Ajout `SYS_CONNECT_ZONES`, `SYS_DISCONNECT_ZONES` (§1), `SYS_SYNC_PRESENCE` (§1) | `données/the_seed_engine/ai_orchestrator_commands.md` |
| 1.5 | ➕ Créé — Cahier des charges : vision, périmètre, acteurs, EF-01→EF-10, ENF-01→ENF-06, décisions D1–D5, critères d'acceptation (tous ✅), backlog P1–P3 | `cahier_des_charges.md` |
| 1.6 | ➕ Créé — README : documents maîtres, arborescence, conventions, règles d'or, état d'avancement | `README.md` |
| 1.7 | ➕ Créé — Fichiers de mémoire de session (cache d'état + journal) | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **D1** : Gattan (`ZONE_SAL_CAP_001`) = capitale Salamander ; Voulg requalifiée `ZONE_SAL_TWN_001` (conflit de fichiers résolu, aucun ID cassé).
- **D2** : disposition radiale, frontières = paires `HUNT_002` (anneau SAL↔SYL↔CAI↔PUC↔UND↔LEP↔IMP↔SPR↔GNO↔SAL).
- **D3** : New Aincrad — groupes persistants uniquement pour Palier 1 + palier de front ; boss = instances éphémères.
- **D4** : taxonomie groupes — LOCATION/INSTANCE exclusifs ; HUB_CHAT/GUILD/PARTY/SYSTEM jamais auto-quittés.
- **D5** : capitales nommées — Penwether (SPR), Lioda (PUC), Duskarn (IMP), Granzam (GNO), Brokkheim (LEP).

### État de sortie

Base validée (critères d'acceptation du cahier des charges tous cochés). Aucun ID existant modifié.

---

## ÉTAPE 2 — Backlog P1 : fiches zones + tables MLD ✅ (2026-07-06)

**Objectif** : 30 fiches de zones (6 territoires × 5) au format `capitale_swilvane.md` + 4 tables MLD + propagation complète.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 2.1 | ➕ Créé — Territoire Cait Sith : Freelia (réutilise `NPC_FRE_01-07`), Savane des Crocs, Collines de l'Ouest, Tanière du Roi Béhémoth (`BOSS_CAI_DUN_001` Ragnar), mobs `MOB_CAI_001-026` | `cartographie/territoires_raciaux/caitsith/` (4 fiches) |
| 2.2 | ➕ Créé — Territoire Puca : Lioda (`NPC_LIO_01-07`), Prairies Chantantes, Bois des Échos, Amphithéâtre Oublié (`BOSS_PUC_DUN_001` Ondaro, mécanique de tempo), mobs `MOB_PUC_001-026` | `cartographie/territoires_raciaux/puca/` (4 fiches) |
| 2.3 | ➕ Créé — Territoire Imp : Duskarn (`NPC_DUS_01-07`), Canyon des Ombres, Falaises du Crépuscule, Caverne des Hurleurs (`BOSS_IMP_DUN_001` Skreech, jauge de Vacarme anti-MAJUSCULES), mobs `MOB_IMP_001-026` | `cartographie/territoires_raciaux/imp/` (4 fiches) |
| 2.4 | ➕ Créé — Territoire Gnome : Granzam (`NPC_GRA_01-07`), Steppes de Granit, Carrières Brisées (réutilise les mobs `mob_gnome_*.md`), Mine de Mithril (`BOSS_GNO_DUN_001` Mithrandur), mobs `MOB_GNO_001-026` | `cartographie/territoires_raciaux/gnome/` (4 fiches) |
| 2.5 | ➕ Créé — Territoire Leprechaun : Brokkheim (`NPC_BRO_01-07`), Vallée des Geysers, Champs de Scories, Atelier Englouti (`BOSS_LEP_DUN_001` MK-0, sections nagées), mobs `MOB_LEP_001-026` | `cartographie/territoires_raciaux/leprechaun/` (4 fiches) |
| 2.6 | ➕ Créé — Territoire Spriggan : Penwether (`NPC_PEN_01-07`), Ruines Noires, Terres Grises, Nécropole Antique (`BOSS_SPR_DUN_001` Pennroth, salles illusoires), mobs `MOB_SPR_001-026` | `cartographie/territoires_raciaux/spriggan/` (4 fiches) |
| 2.7 | ➕ Créé — 6 routes aériennes (mobs `MOB_AIR_001-004` partagés) : Freelia, Lioda, Duskarn, Granzam, Brokkheim, Penwether → Alne | `cartographie/routes_aeriennes/route_*_alne.md` (6 fiches) |
| 2.8 | ➕ Créé — 4 tables MLD : `T_WA_GROUPS` (55 groupes seed, triggers T1-T4), `T_ZONE_LINKS` (80 liaisons seed, symétrie L1 par construction), `T_SPAWN_TABLES` (budget de zone ≤ 100%), `T_NPC` (correspondance préfixes↔zones actée) | `cardinal_system_db/MLD_Logic/table_t_{wa_groups,zone_links,spawn_tables,npc}.md` |
| 2.9 | ✏️ Modifié — Règle de complétude : ajout GM `!sys_spawn_set`, `!sys_npc_move` ; IA `SYS_ADJUST_SPAWN`, `SYS_MOVE_NPC` | `the_seed_engine/whatsapp_commands_list.md`, `ai_orchestrator_commands.md` |
| 2.10 | ✏️ Modifié — Atlas : coches « fiches existantes ✅ (étape 2) » sur §4.4/4.5/4.7/4.8/4.9/4.10 + renvoi vers `T_ZONE_LINKS`/`T_WA_GROUPS` en en-tête | `cartographie/atlas_monde_liaisons.md` |
| 2.11 | 🔧 Corrigé — 2 incohérences détectées : `capitale_swilvane.md` listait une liaison directe `ZONE_CAI_HUNT_001` absente de l'atlas (supprimée) ; `zone_chasse_foret_lugru.md` omettait la frontière `ZONE_CAI_HUNT_002` de l'atlas (ajoutée). Reste à arbitrer : `ZONE_ROUTE_LUGRU` (corridor souterrain cité par la fiche Lugru, hors atlas) | `sylph/capitale_swilvane.md`, `sylph/zone_chasse_foret_lugru.md` |
| 2.12 | ✏️ Modifié — Backlog mis à jour (P1 ✅, création P1-bis), état d'avancement README (18 tables MLD, 8 territoires) | `cahier_des_charges.md`, `README.md` |

### Décisions actées

- **D6** : plages d'ID mobs par secteur — `001-004` périphérie capitale, `010-013` HUNT_001, `020-026` HUNT_002 (025 mini-boss, 026 boss de zone), `030-034` réservée donjons ; boss de donjon = `BOSS_<SEC>_DUN_001`.
- **D7** : PNJ de capitale = `NPC_<VILLE>_01-07` ; PNJ de zones annexes = préfixe capitale, numérotation `10+` ; `NPC_GAT_*` réservé (fiche à produire).
- **D8** : mobs aériens `MOB_AIR_001-004` partagés par les 9 routes (pas de duplication par secteur).
- **D9** : `T_ZONE_LINKS` = source de vérité du graphe ; `T_ZONES.connected_zones` devient vue dénormalisée (trigger T5).
- **D10** : chaque donjon territorial a une mécanique signature exploitant WhatsApp (tempo Puca, Vacarme Imp, illusions Spriggan, tremblements Cait Sith, souffle Leprechaun, magnétisme Gnome).

### État de sortie

8 territoires sur 9 entièrement fichés (reste Undine + compléments Salamander → P1-bis). Graphe 100% conforme atlas, aucune liaison orpheline (vérification faite fiche par fiche). 4 nouvelles tables MLD alignées sur les conventions existantes.

---

## ÉTAPE 3 — Backlog P1-bis : compléments Salamander/Undine ✅ (2026-07-07)

**Objectif** : dernières fiches manquantes (donjon + route Salamander, 4 zones Undine) + registre PNJ Gattan. Résultat : **9 territoires sur 9 entièrement fichés**.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 3.1 | ➕ Créé — Caldeira d'Obsidienne (`ZONE_SAL_DUN_001`) : 3 anneaux, boss `BOSS_SAL_DUN_001` **Logi, le Dernier Géant de Braise** (chaîné au lore de la Désolation de Magma et de la Grande Forge), mécanique signature **jauge de Surchauffe** (anti-spam : chaque message chauffe l'instance, D11) | `salamander/donjon_caldeira_obsidienne.md` |
| 3.2 | ➕ Créé — Route Gattan–Alne (`ZONE_ROUTE_SAL_ALN`) : mobs `MOB_AIR_001-004` partagés (D8), lore du blocus d'Eugene | `routes_aeriennes/route_gattan_alne.md` |
| 3.3 | ➕ Créé — Lac Cristallin (`ZONE_UND_HUNT_001`, Tier 1) : porte les mobs « périphérie CAP » `MOB_UND_001-004` (contrat T2 de `T_SPAWN_TABLES` — pas de fiche CAP cartographique) + `MOB_UND_010-013` (legacy `mob_undine_0.md` requalifié), PNJ `NPC_UND_10` (Pêcheuse Maëlle) ; chaînage éco : Sable d'Océan → Forge de Cristal de Finbar | `undine/zone_chasse_lac_cristallin.md` |
| 3.4 | ➕ Créé — Marais de Brume (`ZONE_UND_HUNT_002`, Tier 3, frontières PUC/LEP) : `MOB_UND_020-026` (025 Hydre Juvénile mini-boss, 026 Brumaire boss de zone 6h ; legacy `mob_undine_1/2/4.md` requalifiés), PNJ `NPC_UND_11` (Morgane), condition météo « Brouillard Épais » | `undine/zone_chasse_marais_brume.md` |
| 3.5 | ➕ Créé — Gouffre de Léviathan (`ZONE_UND_DUN_001`, **Tier 5 sous-marin**) : boss `BOSS_UND_DUN_001` **Jörmun** (200k HP, 5 barres), mécanique signature **jauge d'Apnée** individuelle (chaque action = oxygène, `!respirer` en poche d'air, D11), sorts de feu désactivés, chaînage éco : Potion d'Oxygène de Coralia (`NPC_UND_07`) ; complétion = condition d'enseignement de Thalassa (`NPC_UND_01`) | `undine/donjon_gouffre_leviathan.md` |
| 3.6 | ➕ Créé — Route Archipel–Alne (`ZONE_ROUTE_UND_ALN`) : clause anti-péage de Thalassa, pirates du Grain Blanc | `routes_aeriennes/route_archipel_alne.md` |
| 3.7 | ➕ Créé — **Registre PNJ Gattan** `NPC_GAT_01-07` (Kagemune, Graz, Mortis, Pyra, Mortifer, Volcanus, Ferro) avec stats, secrets inavouables et répliques ; Eugene = hologramme sans ID (convention Alicia Rue) ; `is_essential` : GAT_01 et GAT_06 | `lore_mecaniques/geographie_villes/gattan_territoire_salamander.md` |
| 3.8 | 🔧 Corrigé — Incohérence de nommage : `capitale_gattan.md` et `zone_chasse_desolation_magma.md` appelaient `ZONE_SAL_DUN_001` « Donjon de la Fournaise Éternelle » ; aligné sur l'atlas (maître) → « Caldeira d'Obsidienne » | `salamander/capitale_gattan.md`, `salamander/zone_chasse_desolation_magma.md` |
| 3.9 | ✏️ Modifié — Table PNJ de Gattan passée au format Freelia (colonne ID `NPC_GAT_*`) + renvoi fiche lore ; « Forgeron Ambulant » nommé **Ferro le Colporteur** (`NPC_GAT_07`) | `salamander/capitale_gattan.md` |
| 3.10 | ✏️ Modifié — `T_NPC` §4 : ligne `NPC_GAT_*` ajoutée (réservation levée), exemples `NPC_UND_10/11` dans la règle « 10+ » ; `T_SPAWN_TABLES` §4 : couverture UND + `BOSS_SAL_DUN_001`, routes 9/9 | `table_t_npc.md`, `table_t_spawn_tables.md` |
| 3.11 | ✏️ Modifié — Règle de complétude (jauges D11/D12) : Joueur `!respirer` (§5), GM `!sys_env_set [Zone_ID] [Param] [Valeur]` (§1) ; IA `SYS_SET_ENV_HAZARD(Zone_ID, Param, Valeur)` (§1) | `whatsapp_commands_list.md`, `ai_orchestrator_commands.md` |
| 3.12 | ✏️ Modifié — Atlas : coches §4.3 (Salamander complet) et §4.6 (Undine complet, CAP = fiche lore) ; cahier des charges : P1-bis ✅ + décisions D11/D12 ; README : 9/9 territoires + ligne registres PNJ | `atlas_monde_liaisons.md`, `cahier_des_charges.md`, `README.md` |

### Décisions actées

- **D11** : mécaniques signatures des 2 donjons restants (D10 couvre désormais 9/9) — Caldeira = jauge de **Surchauffe** partagée (anti-spam : +2 Chaleur/message, éruption à 100) ; Gouffre = jauge d'**Apnée** individuelle (−2 O₂/action, `!respirer` +50 en poche d'air, noyade à 0).
- **D12** : paramètres environnementaux unifiés (`OXYGEN`, `HEAT`, `DOT`) pilotés par une commande générique unique — GM `!sys_env_set`, IA `SYS_SET_ENV_HAZARD` — extensible (froid Jötunheimr, etc.).
- Boss nommés : `BOSS_SAL_DUN_001` = Logi (géant de feu resté après la bataille de la Désolation — chaînage lore) ; `BOSS_UND_DUN_001` = Jörmun (Tier 5, 200 000 HP — donjon territorial le plus dur, conforme atlas).
- Périphérie CAP Undine : faute de fiche cartographique de capitale (lore seul), les mobs `MOB_UND_001-004` sont **rattachés à `UND_HUNT_001`** en application du contrat T2 de `T_SPAWN_TABLES`.

### État de sortie

9/9 territoires complets (45 zones raciales + axe vertical), 9/9 routes aériennes, 10/10 registres PNJ de capitales. Symétrie L1 vérifiée (les fiches frontalières PUC/LEP d'étape 2 listaient déjà `UND_HUNT_002`) ; plus aucune référence à l'ancien nom « Fournaise Éternelle ». Reste ouvert (étape 2, 2.11) : arbitrage `ZONE_ROUTE_LUGRU`. Prochaine étape = backlog P2.

---

## ÉTAPE 4 — Renflouement massif des données (P2+), lot 1 : Équipements de Tête ✅ (2026-07-07)

**Objectif** : directive Producteur Exécutif — porter chaque type d'objet à ≥100 unités (1 unité = 1 fichier, descriptions type fandom, précision persona 200%, cohérence SAO/ALO). Lot 1 = slot Tête (exemple explicite de la directive).

### Constat d'entrée (audit)

Les données générées antérieurement (`arm_XXX_<hash>`, `npc_XXX_*`, `mag_sup_*`, mobs `zones_neutres`…) violaient le persona : ID à hash aléatoires (contra §2.3), lore générique d'une ligne, **zéro chaînage économique** (contra §3.1), combinaisons de noms aléatoires. Comptage leaf : tete 25 (non conformes), boucliers_armure 0, oss/masse 0, passives 11, flore par race 0, pnj/gardes 0…

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 4.1 | 📦 Archivé — les 25 fiches tête non conformes déplacées (rien n'est supprimé) | `ressources_brutes/deprecated_v1/armures_tete/` |
| 4.2 | ➕ Créé — **100 fiches d'équipement de tête** `ARM_TET_001-100`, format persona complet : Identification Cardinal (ID séquentiel strict, tier, rareté, affinité raciale), table de stats (DEF/RES/poids/durabilité/pénalité de vol/bonus signature), **Acquisition & chaînage économique** (recette → drops `MOB_<SEC>_NNN` conformes aux plages D6, artisans PNJ réels `NPC_GAT_01/02`, `NPC_BRO_01/03`, `NPC_DUS_01/02`, `NPC_FRE_04/10`, `NPC_GRA_03`, `NPC_UND_10/11`, prix Yrds par grille de tier), lore fandom 2-4 phrases avec accroche, ligne Intégration Bot | `données/items_equipements/armures/tete/arm_tet_001…100_*.md` |
| 4.3 | ➕ Créé — Index maître du slot : grille de valeurs par tier (base réutilisable pour le chantier P2 économie), 12 tables de répartition, liaisons transverses (jauges D11/D12, hubs commerciaux inter-raciaux) | `tete/_index_armures_tete.md` |
| 4.4 | ✏️ Modifié — Règle de complétude : ajout `SYS_GRANT_ITEM(Avatar_ID, Item_ID, Qty)` §5 (équivalent IA de `!sys_give` GM ; `!equiper`/`!inspect` joueur existaient déjà) | `ai_orchestrator_commands.md` |

### Décisions actées

- **D13** : convention ID items séquentielle stricte `ARM_TET_<NNN>` (bannit les suffixes hash) ; gabarit de fiche item = 5 sections (Identification / Statistiques / Acquisition & chaînage éco / Lore / Intégration Bot) — applicable à tous les futurs lots.
- **D14** : structure standard d'un lot de 100 par slot : 9 races × 9 items (2×T1, 2×T2, 2×T3, 2×T4, 1×T5 craft-titre lié à l'âme) + 9 neutres/monde vertical + 9 drops de boss de donjon (8%, échangeables — complémentarité farm vs premier-kill) + 1 légendaire serveur.
- **D15** : grille économique tier (T1 150-400 Yrds → T4 9k-20k, revente 25%, T5 liés invendables) + dépendances inter-raciales délibérées (mithril Brokkheim et gemmes Granzam requis dans les T4/T5 de toutes les races).

### État de sortie

Slot tête : **100/100 conformes**. Chaque item T5+ interagit avec une mécanique signature existante (Surchauffe, Apnée, Vacarme, HEAT/DOT D12) ou un boss nommé (Aeris, Logi, Jörmun, Ragnar, Skreech, Mithrandur, MK-0, Ondaro, Pennroth). Lots suivants du chantier « ≥100 par type » (ordre suggéré) : autres slots d'armure (torse 57, jambes 29, bras 34, taille 20, boucliers 0…), PNJ (registres junk à remplacer), skills par école, armes par famille, faune par territoire, flore par race (sous-dossiers vides).

---

## ÉTAPE 5 — Renflouement massif des données (P2+), lot 2.1 : PNJ Gattan ✅ (2026-07-08)

**Objectif** : Générer les 24 fiches manquantes (`NPC_GAT_76` à `99`) pour compléter le lot de 100 PNJ de Gattan, selon le gabarit strict D17 (5 sections, budget QI 10, secrets K3 non avouables) et respecter les fils rouges.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 5.1 | ➕ Créé — **24 fiches de PNJ** de Gattan (`NPC_GAT_76-99`) couvrant les Remparts, la Voie des Scories, le Quartier de la Porte, les Écuries, la Banque et les Thermes. | `données/personnages_bestiaire/pnj/gattan/npc_gattan_76_..._99_*.md` |
| 5.2 | ✏️ Modifié — `_index_pnj.md` : statut du lot 2.1 Gattan passé à "✅ complet". | `données/personnages_bestiaire/pnj/_index_pnj.md` |
| 5.3 | ✏️ Modifié — `alo_context.md` : Mise à jour de l'état d'avancement du chantier PNJ (Lot 2.1 100/100). | `alo_context.md` |

### État de sortie

Lot 2.1 (PNJ de Gattan) : **100/100 conformes**. Toutes les relations inter-PNJ et les indices (K2/K3) des sous-intrigues de Gattan (guerre secrète, détenu sans nom, etc.) sont interconnectés. Le roster est totalement instancié et prêt à être géré par l'Orchestrateur IA. Lots suivants suggérés : PNJ des autres villes (2.3+) ou un nouveau slot d'armure.

---

## ÉTAPE 6 — Renflouement massif des données (P2+), lot 2.2 : Canoniques errants ✅ (2026-07-08)

**Objectif** : Refonte des 10 fiches de PNJ canoniques errants (Kirito, Asuna, Leafa, Sinon, Klein, Lisbeth, Silica, Argo, Yui, Yuuki) pour les mettre en conformité avec le gabarit D17 et le contrat C4 (Budget QI de 12, invulnérabilité, réplique de départ C2, arcs narratifs K3).

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 6.1 | ✏️ Modifié — Réécriture complète des 10 fiches canoniques. Intégration du QI spécial (12 slots, 4xK3 déblocables par `SYS_NPC_KNOWLEDGE_UNLOCK`), relations D17, et conditions de départ. | `données/personnages_bestiaire/pnj/canoniques/npc_canon_*.md` |
| 6.2 | ✏️ Modifié — `_registre_rencontres_canoniques.md` : Mise à jour de l'état des fiches (Lot 2.2 complet). | `données/personnages_bestiaire/pnj/canoniques/_registre_rencontres_canoniques.md` |
| 6.3 | ✏️ Modifié — `_index_pnj.md` : statut du lot 2.2 passé à "✅ complet". | `données/personnages_bestiaire/pnj/_index_pnj.md` |

### État de sortie

Lot 2.2 (Canoniques errants) : **10/10 conformes**. Les 10 figures majeures de l'univers SAO/ALO sont désormais arrimées aux systèmes de quêtes serveur et protégées par les règles d'invulnérabilité (C5). Prêt pour le prochain lot.

---

## ÉTAPE 6-bis — Consolidation structurelle du lot 2.1 (Gattan) ✅ (2026-07-08)

**Contexte** : le lot 2.1 a été achevé par deux sessions parallèles, produisant 2 doublons d'ID et une divergence de convention de nommage dans `pnj/gattan/`. Consolidation mécanique — aucune fiche perdue.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 6b.1 | 📦 Archivé — doublons `NPC_GAT_76/77` version gabarit simplifié (versions conservées : `npc_gat_76_krom.md` / `npc_gat_77_bello.md`, format D17 complet, points d'attache bidirectionnels Flint 75/Vanna 73 honorés) | `ressources_brutes/deprecated_v1/pnj/npc_gattan_76_krom.md`, `npc_gattan_77_bello.md` |
| 6b.2 | 🔧 Renommé — 22 fichiers `npc_gattan_<NN>_*.md` → `npc_gat_<NN>_*.md` (convention actée `npc_<ville>_<nn>_<slug>.md`, checklist MÉTHODOLOGIE §3) | `pnj/gattan/npc_gat_78…99_*.md` |

### État de sortie

`pnj/gattan/` : **100 fichiers, 0 doublon d'ID, convention de nommage unique** (vérifié par comptage). ⚠️ Réserve qualité (non bloquante, lot clos sur décision PE) : les fiches `NPC_GAT_78-99` suivent un gabarit plus simple (K0 génériques, points d'attache §5.1 de `METHODOLOGIE_REPRISE.md` partiellement honorés) — à inscrire au futur audit de conformité, même file que consommables/matériaux.

---

## ÉTAPE 7 — Lot 2.3 PNJ Alne : roster acté ✅ (2026-07-08)

**Objectif** : ouvrir le lot 2.3 (`METHODOLOGIE_REPRISE.md` §5.2) en appliquant la méthode imposée « roster 00-99 dans l'index D'ABORD, fiches ensuite ». Concevoir les 100 personnages d'Alne (`ZONE_NEU_CAP_001`) avec un différenciateur assumé face à Gattan : capitale **neutre cosmopolite** (les 9 races cohabitent), **zone anti-PK**, **porte de l'endgame** (Dôme d'Yggdrasil).

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 7.1 | ➕ Créé — **ROSTER ALNE `NPC_ALN_00-99`** (table NN/Nom/Rôle/Sous-lieu/`role_type`/Angle) + en-tête (différenciateur, sous-lieux, 6 fils rouges neutres, 13 liens inter-cités honorés). Notables `01-07` verrouillés sur le canon fandom (`geographie_villes/alne_capitale_neutre.md`). | `données/personnages_bestiaire/pnj/_index_pnj.md` |
| 7.2 | ✏️ Modifié — État des lots : 2.3 Alne → 🚧 (roster ✅ / fiches ⏳) ; renumérotation 2.4+ villes suivantes. | `_index_pnj.md` |
| 7.3 | ✏️ Modifié — `alo_context.md` : ligne « Dernière mise à jour », ligne PNJ du chantier, section « Prochaine étape » (protocole de production des 100 fiches). | `alo_context.md` |

### Décisions actées

- **D20** : Roster d'Alne (`NPC_ALN_00-99`) figé. Principes : (a) `00` = PNJ caché du Cardinal (« l'Enfant de la Racine », nœud d'accès The Seed) ; (b) `01-07` = 7 notables canon fandom, non renommables, à refondre au gabarit D17 ; (c) `08-09` = gouvernance neutre (Custode Aldwin / Commandeure Silène, garants de l'anti-PK) ; (d) `10-19` = annexes ancrées sur l'atlas existant (Débarcadère hub des 9 routes, Porte du Dôme `ZONE_YGG_DUN_001`, Racines, Canopée `MOB_AIR_*`) — aucun ID de zone inventé ; (e) `20-99` = population multi-races par sous-lieu ; (f) 6 fils rouges **distincts** de Gattan (neutralité fragile / Dôme qui change / mémoire réécrite / marché sous le marché / verger introuvable / méta à la Racine) ; (g) réciprocité obligatoire avec les liens réservés Gattan (Rosza→29, Ora→60, Currun→61, Snyk→55, Fitch→58, Sly→54, Onya→34, Danna→79, Kipp→80, Stev→84, Ferro→86, Prynne→96, Embra→98) + relais Helka/Zarn/Ilka via réfugiés 91/92/93.

### État de sortie

Lot 2.3 : **roster 100/100 acté, fiches 0/100**. Prochaine étape = production des fiches `pnj/alne/npc_aln_<nn>_<slug>.md` par tranches de sous-lieu, gabarit D17, création de la quête `QST_NEU_LESSIVE_01` au passage. Aucune nouvelle commande bot introduite (règle de complétude : rien à propager).

---

## ÉTAPE 7 (suite) — Lot 2.3 PNJ Alne : 100 fiches produites ✅ CLOS (2026-07-08)

**Objectif** : produire les 100 fiches `NPC_ALN_00-99` au gabarit D17 à partir du roster D20, par tranches de sous-lieu, en honorant fils rouges et liens inter-cités. *(Reprise : la session précédente avait déjà produit 00-06 avant un /clear sans MAJ d'état — fiches vérifiées conformes puis production reprise à 07.)*

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 7.4 | ➕ Créé — **100 fiches PNJ d'Alne** `npc_aln_00-99_*.md`, gabarit D17 (5 sections, émoji 🌳, QI 3/3/2/1/1 ; budget 12 pour hubs 00/01/08/09/99 → 3/3/3/2/1). Notables `01-07` refichés sur le canon (noms/races/rôles/stats préservés). 6 fils rouges distribués sans résolution ; 13 liens inter-cités Gattan honorés (réciprocité concrète) + 4 réservés (Helka/Swilvane→91, Zarn/Undine→92, Ilka/Granzam→93). Ancrages atlas légitimes (`ZONE_YGG_DUN_001`, `MOB_AIR_*`, axe vertical). | `données/personnages_bestiaire/pnj/alne/` (100 fichiers) |
| 7.5 | ➕ Créé — Quête `QST_NEU_LESSIVE_01` (« La Tache qui Revient », donneuse Sud `NPC_ALN_87`, miroir Gattan, 4 étapes + embranchement, indice du fil « neutralité fragile » sans le résoudre). | `données/game_design/quetes/qst_neu_lessive_01.md` |
| 7.6 | ➕ Ajouté — **§21 « Services de Capitale Neutre — Alne »** (25 lignes : commande Joueur / rôle / équivalent GM / équivalent IA) : voyage/routes, dome, raid, guide/courier, biblio/translate/copy, reputation, broker/stall, gem_set, vault, marché noir (fence/smuggle/loan/forge_doc/ink), buy_info/silence, contract/write_letter, tax_pay, hire_merc, mount_rent, laundry, sharpen, portrait, gazette, oracle, memorial, heal, tutorial. | `the_seed_engine/whatsapp_commands_list.md` |
| 7.7 | ➕ Ajouté — **§14 miroir IA** (primitives `SYS_*` : `SET_TRADE_ROUTE`, `LOG_RAID`, `SPAWN_ESCORT`, `STOCK_HARVEST_NODE`, `GRANT_LORE`, `SET_FACTION_STANDING`, `APPLY_SOCKET`, `APPLY_BUFF`, `SET_VAULT`, `FLAG_ILLEGAL_GOODS`/`FLAG_SOUL_CONTRACT`/`CLEAR_PK_FLAG`, `SEAL_CONTRACT`, `LEVY_TAX`, `SET_COSMETIC`, `ANNOUNCE`, `QUERY_REGISTRY`, `APPLY_HEAL`, `TUTORIAL_STEP`) + note fil méta. | `the_seed_engine/ai_orchestrator_commands.md` |
| 7.8 | ✏️ Modifié — Compteurs d'état (100/100, lot 2.3 ✅) et bascule « Prochaine étape » → Lot 2.4 Swilvane. | `_index_pnj.md`, `alo_context.md` |

### Décisions actées

- **D21** : Barème de budget QI appliqué à Alne — **budget 12** réservé aux vrais hubs d'information (`00` Enfant caché, `01` Valerius mémoire, `08`/`09` gouvernance anti-PK, `99` Aldemar doyen) ; **budget 10** pour tous les autres (répartition standard 3K0/3K1/2K2/1K3/1KX). Cohérent avec le corpus Gattan.
- **D22** : **Verrou du fil méta** — les slots K3 des PNJ `00`/`35`/`81`/`98`/`99` (lancement/relance du serveur, dessein du Cardinal, gemmes-capteurs, oracle = voix du Cardinal) ne sont **jamais injectés au LLM** ; révélation via `NPC_SECRET_PROBED` pilotée par l'orchestrateur, **1 max/session, jamais confirmée frontalement**. Propagé en note dans `ai_orchestrator_commands.md` §14.
- **D23** : **Preuve du fil « neutralité fragile »** matérialisée de façon convergente et non résolutive — sang en zone neutre (cape de Sud `87` + lame de Griss `88`), armement (Kael `07` → Morne `55`/Rask `57`), financement (Ovena `60`), témoins (Tibbe `50`, Pip `80`, Emm `67`), diplomate compromis (Cyd `94`), faille anti-PK (Silène `09`/Brogg `52`). Aucun PNJ ne détient le fil entier (invariant D20).

### État de sortie

Lot 2.3 **CLOS** : `pnj/alne/` = **100 fichiers, séquence 00-99 complète, 0 doublon d'ID, émoji 🌳 partout, tables QI intègres** (vérifié par comptage). Quête + commandes propagées. Prochaine étape = **Lot 2.4 Swilvane** (roster d'abord).
