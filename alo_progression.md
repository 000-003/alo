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

---

## ÉTAPE 8 — Lot 2.4 PNJ Swilvane : roster + 100 fiches ✅ CLOS (2026-07-08)

**Objectif** : produire le roster `NPC_SWI_00-99` et les 100 fiches au gabarit D17 pour la capitale Sylph (`ZONE_SYL_CAP_001`), avec émoji 🍃, différenciateur « capitale raciale du vent et du vol », 6 fils rouges distincts de Gattan et Alne.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 8.1 | ➕ Créé — **Roster SWI 00-99** (table NN/Nom/Rôle/Sous-lieu/`role_type`/Angle) dans `_index_pnj.md` + en-tête (différenciateur, sous-lieux, 6 fils rouges Sylph, 1 lien inter-cités réservé Helka `NPC_GAT_54`→91 activé). Notables `01-07` refichés D17 depuis `swilvane_territoire_sylph.md`. | `_index_pnj.md` |
| 8.2 | ➕ Créé — **100 fiches PNJ de Swilvane** `npc_swi_00-99_*.md`, gabarit D17 (5 sections, émoji 🍃, QI 3/3/2/1/1 ; budget 12 pour hubs 00/01/08/09/99 → 3/3/3/2/1). Notables `01-07` repris du lore (Riven, Elowen, Tenebris, Faelan, Brokkr, Luthien, Nya-Ran). Sakuya en `08` (gouvernance Lord). 6 fils rouges distribués sans résolution. Lien inter-cités Gattan honoré : Helka `NPC_GAT_54`→91. | `pnj/swilvane/` (100 fichiers) |
| 8.3 | ✏️ Modifié — Compteurs d'état (100/100, lot 2.4 ✅) et bascule « Prochaine étape » → Lot 2.5 Voulg. | `_index_pnj.md`, `alo_context.md` |

### Décisions actées

- **D24** : Barème de budget QI appliqué à Swilvane — **budget 12** réservé aux hubs d'information (`00` Murmure, `01` Riven, `08` Sakuya, `09` Reylen, `99` Doyenne Old) ; **budget 10** pour tous les autres (3K0/3K1/2K2/1K3/1KX). Cohérent avec Alne et Gattan.
- **D25** : Fils rouges de Swilvane — (1) Le Vent qui ment, (2) Les Ailes brisées, (3) L'Ombre de l'Alliance, (4) Le Corridor des Disparus, (5) Le Murmure de la Tour, (6) Fil méta — L'Envol Premier.
- **D26** : **Verrou du fil méta Swilvane** — les révélations sur l'initialisation du serveur par The Seed (première cité créée = Swilvane) sont réservées aux PNJ 00, 99, 98, 39, et suivent la même règle D22 : jamais injectées au LLM, 1 révélation max/session.

### État de sortie

Lot 2.4 **CLOS** : `pnj/swilvane/` = **100 fichiers, séquence 00-99 complète, 0 doublon d'ID, émoji 🍃 partout, tables QI intègres** (vérifié par comptage). Lien réservé Helka activé. Prochaine étape = **Lot 2.5 Voulg** (roster d'abord).

---

## ÉTAPE 9 — Lot 2.5 PNJ Voulg : roster + 100 fiches ✅ CLOS (2026-07-08)

**Objectif** : produire le roster `NPC_VOU_00-99` et les 100 fiches au gabarit D17 pour la forteresse Salamander (`ZONE_SAL_TWN_001`), avec émoji ⚒️, différenciateur « forteresse militaire brute », 6 fils rouges distincts.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 9.1 | ➕ Créé — **Roster VOU 00-99** (table NN/Nom/Rôle/Sous-lieu/`role_type`/Angle) dans `_index_pnj.md` + en-tête (différenciateur, sous-lieux, 6 fils rouges Voulg, lien Torvin `NPC_GAT_18`→57 activé). Notables `01-07` refichés D17 depuis `voulg_territoire_salamander.md`. | `_index_pnj.md` |
| 9.2 | ➕ Créé — **100 fiches PNJ de Voulg** `npc_vou_00-99_*.md`, gabarit D17 (5 sections, émoji ⚒️, QI 3/3/2/1/1 ; budget 12 pour hubs 00/01/08/09/99 → 3/3/3/2/1). Notables `01-07` repris du lore (Kaelthor, Ignatia, Malakor, Balrog, Vulcan, Fyra, Nya-Khar). Brûlopier en `08`, Ignéal en `09`. 6 fils rouges distribués. Lien Gattan honoré : Torvin `NPC_GAT_18`→57. | `pnj/voulg/` (100 fichiers) |
| 9.3 | ✏️ Modifié — Compteurs d'état (100/100, lot 2.5 ✅) et bascule « Prochaine étape » → Lot 2.6 Freelia. | `_index_pnj.md`, `alo_context.md` |

### Décisions actées

- **D27** : Barème de budget QI appliqué à Voulg — **budget 12** réservé aux hubs d'information (`00` Fantôme, `01` Kaelthor, `08` Brûlopier, `09` Ignéal, `99` Old) ; **budget 10** pour tous les autres (3K0/3K1/2K2/1K3/1KX).
- **D28** : Fils rouges de Voulg — (1) La Chaîne brisée, (2) Le Soufre qui pleure, (3) L'Arène qui mange les âmes, (4) Le Traître de la Porte, (5) La Forge qui ne dort jamais, (6) Fil méta — Le Cœur du Volcan.
- **D29** : **Verrou du fil méta Voulg** — les révélations sur le Cœur du Volcan (noyau de chauffe du serveur) sont réservées aux PNJ 00, 99, 98, 88, et suivent la règle D22 : jamais injectées au LLM, 1 révélation max/session.

### État de sortie

Lot 2.5 **CLOS** : `pnj/voulg/` = **100 fichiers, séquence 00-99 complète, 0 doublon d'ID, émoji ⚒️ partout, tables QI intègres** (vérifié par comptage). Lien Torvin activé. Prochaine étape = **Lot 2.6 Freelia** (roster d'abord).

---

## ÉTAPE 10 — Lot 2.6 PNJ Freelia : roster + 100 fiches ✅ CLOS (2026-07-08)

**Objectif** : produire le roster `NPC_FRE_00-99` et les 100 fiches au gabarit D17 pour la capitale Cait Sith (`ZONE_CAI_CAP_001`), avec émoji 🐾, différenciateur « capitale du domptage de familiers », 6 fils rouges distincts.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 10.1 | ➕ Créé — **Roster FRE 00-99** (table NN/Nom/Rôle/Sous-lieu/`role_type`/Angle) dans `_index_pnj.md` + en-tête (différenciateur, sous-lieux, 6 fils rouges Cait Sith, lien Nya-Ran `NPC_SWI_07` activé). Notables `01-07` refichés D17 depuis `freelia_territoire_caitsith.md`. | `_index_pnj.md` |
| 10.2 | ➕ Créé — **100 fiches PNJ de Freelia** `npc_fre_00-99_*.md`, gabarit D17 (5 sections, émoji 🐾, QI 3/3/2/1/1 ; budget 12 pour hubs 00/01/08/09/99 → 3/3/3/2/1). Notables `01-07` repris du lore (Léo, Zephyr, Elara, Gimli, Nox, Anya, Brok). Alicia Rue en `08`. 6 fils rouges distribués. Lien Swilvane honoré : Nya-Ran `NPC_SWI_07` via FRE_90/FRE_08. | `pnj/freelia/` (100 fichiers) |
| 10.3 | ✏️ Modifié — Compteurs d'état (100/100, lot 2.6 ✅) et bascule « Prochaine étape » → Lot 2.7 Archipel d'Écume. | `_index_pnj.md`, `alo_context.md` |

### Décisions actées

- **D30** : Barème de budget QI appliqué à Freelia — **budget 12** réservé aux hubs (`00` Ombre, `01` Léo, `08` Alicia, `09` Griffe, `99` Mémoire) ; **budget 10** pour tous les autres (3K0/3K1/2K2/1K3/1KX).
- **D31** : Fils rouges de Freelia — (1) 🐾 Le Familiar qui s'efface, (2) 🦴 Le Marché aux Os, (3) 🐱 Les Yeux dans l'Ombre, (4) 🏔️ La Colline qui pleure, (5) 🐲 La Porte des Bêtes, (6) 🔮 Fil méta — Premier Familier.
- **D32** : **Verrou du fil méta Freelia** — les révélations sur le Premier Familier (template Vermeil verrouillé, segment protégé du serveur) réservées aux PNJ 00, 99, 98, suivent règle D22.
- **D33** : Format D17 corrigé pour tous les lots futurs : **pas de YAML frontmatter** ; identification en table `| Champ | Valeur |` (modèle Voulg) ; QI avec `QI_ID` format `QI_VILLE_NN_NN` ; K3 = `JAMAIS — déflection : *(geste)* « dialogue »`.

### État de sortie

Lot 2.6 **CLOS** : `pnj/freelia/` = **100 fichiers, séquence 00-99 complète, 0 doublon d'ID, émoji 🐾 partout, tables QI intègres**. Lien Nya-Ran activé. Prochaine étape = **Lot 2.7 Archipel d'Écume** (roster d'abord).

---

## ÉTAPE 12 — Lot 2.8 PNJ Lioda : roster + 100 fiches ✅ CLOS (2026-07-08)

**Objectif** : produire le roster `NPC_LIO_00-99` et les 100 fiches au gabarit D17 pour la capitale Puca (`ZONE_PUC_CAP_001`), avec émoji 🎭, différenciateur « cité-amphithéâtre instrumentale, magie de musique, Harmonie de Fond cardinal », 6 fils rouges distincts.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 12.1 | ➕ Créé — **Roster LIO 00-99** dans `_index_pnj.md` + en-tête (différenciateur, sous-lieux, 6 fils rouges Puca, lien Luthien `NPC_SWI_06` activé). Notables `01-07` refichés D17 depuis `capitale_lioda.md` (Cordelia, Viel, Polka, Fitz, Séléna, Tam, Seigneur Silencieux). | `_index_pnj.md` |
| 12.2 | ➕ Créé — **100 fiches PNJ de Lioda** `npc_lio_00-99_*.md`, gabarit D17 (5 sections, émoji 🎭, budget 12 pour hubs 00/01/07/08/09/99 → 3/3/3/2/1). Seigneur Silencieux en `07`. 6 fils rouges distribués. Lien Swilvane honoré : Luthien `NPC_SWI_06` via LIO_56/LIO_88/LIO_90/LIO_94. | `pnj/lioda/` (100 fichiers) |
| 12.3 | ✏️ Modifié — Compteurs d'état (100/100, lot 2.8 ✅) et bascule → Lot 2.9 Duskarn. | `_index_pnj.md`, `alo_context.md` |

### Décisions actées

- **D48** : Barème QI Lioda — **budget 12** hubs (`00` Note, `01` Cordelia, `07` Seigneur, `08` Chancelier, `09` Capitaine, `99` Mémoire) ; **budget 10** autres. is_essential VRAI pour 00/07/08.
- **D49** : Fils rouges Puca — (1) 🎵 La Partition Qui Marche Seule, (2) 🎭 Le Masque Qui Oublie, (3) 🎶 Le Refrain de l'Ombre, (4) 🔇 Le Silence Interdit, (5) ⚔️ L'Espionne aux Cordes, (6) 🔮 Fil méta — La Partition Originelle.
- **D50** : Verrou fil méta Lioda (Partition Originelle = fréquence de compilation du monde) réservé aux PNJ 00, 07, 99, 98, 05 ; règle D22.

### État de sortie

Lot 2.8 **CLOS** : `pnj/lioda/` = **100 fichiers, séquence 00-99 complète, quotas D34 respectés**. Lien Luthien activé. Prochaine étape = **Lot 2.9 Duskarn** (Imp).

---

## ÉTAPE 13 — Lot 2.9 PNJ Duskarn : roster + 100 fiches ✅ CLOS (2026-07-08)

**Objectif** : produire le roster `NPC_DUS_00-99` et les 100 fiches au gabarit D17 pour la capitale Imp (`ZONE_IMP_CAP_001`), avec émoji 🌑, différenciateur « cité sans aube, canyon d'ombre, Pacte des Ombres avec Spriggan », 6 fils rouges distincts.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 13.1 | ➕ Créé — **Roster DUS 00-99** dans `_index_pnj.md` + en-tête (différenciateur, sous-lieux, 6 fils rouges Imp, lien Malakor `NPC_VOU_03` activé). Notables `01-07` refichés D17 depuis `capitale_duskarn.md` (Vesper, Umbra, Morn, Korvac, Lilith, Skell, Lord Imp). | `_index_pnj.md` |
| 13.2 | ➕ Créé — **100 fiches PNJ de Duskarn** `npc_dus_00-99_*.md`, gabarit D17 (5 sections, émoji 🌑, budget 12 pour hubs 00/01/07/08/09/99 → 3/3/3/2/1). 6 fils rouges distribués. Lien Voulg honoré : Malakor `NPC_VOU_03` via DUS_90/DUS_92/DUS_91. | `pnj/duskarn/` (100 fichiers) |
| 13.3 | ✏️ Modifié — Compteurs d'état (100/100, lot 2.9 ✅) et bascule → Lot 2.10 Granzam. | `_index_pnj.md`, `alo_context.md` |

### Décisions actées

- **D51** : Barème QI Duskarn — **budget 12** hubs (`00` Étincelle, `01` Vesper, `07` Lord, `08` Chancelier, `09` Commandant, `99` Mémoire) ; **budget 10** autres. is_essential VRAI pour 00/07/08.
- **D52** : Fils rouges Imp — (1) 🌑 L'Ombre Qui Observe, (2) ☠️ Le Poison Qui Parle, (3) 🦇 Le Pacte des Ailes, (4) 💀 Le Prêteur Sans Visage, (5) 🫧 La Rivière Qui Absorbe, (6) 🔮 Fil méta — Le Cœur d'Ombre.
- **D53** : Verrou fil méta Duskarn (nœud de régulation des ténèbres) réservé aux PNJ 00, 07, 99, 98, 05 ; règle D22.

### État de sortie

Lot 2.9 **CLOS** : `pnj/duskarn/` = **100 fichiers, séquence 00-99 complète, quotas D34 respectés** (SERVICE 46, GUARD 12, MERCHANT 22, QUEST_GIVER 9, SKILL_MASTER 5, LORD 2, BLACK_MARKET 4). Lien Malakor activé. Prochaine étape = **Lot 2.10 Granzam** (Gnome).

---

## ÉTAPE 11 — Lot 2.7 PNJ Archipel d'Écume : roster + 100 fiches ✅ CLOS (2026-07-08)

**Objectif** : produire le roster `NPC_UND_00-99` et les 100 fiches au gabarit D17 pour la capitale Undine (`ZONE_UND_CAP_001`), avec émoji 🌊, différenciateur « cité lacustre flottante, capitale de la guérison, donjon sous-marin T5 », 6 fils rouges distincts.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 11.1 | ➕ Créé — **Roster UND 00-99** (table NN/Nom/Rôle/Sous-lieu/`role_type`/Angle) dans `_index_pnj.md` + en-tête (différenciateur, sous-lieux, 6 fils rouges Undine, liens Zarn `NPC_GAT_60` + Nerio `NPC_ALN_92`/`NPC_SWI_92` activés). Notables `01-07` refichés D17 depuis `archipel_territoire_undine.md` (Thalassa, Rurik, Nérée, Kryx, Sirena, Finbar, Coralia). Maëlle `10` / Morgane `11` repris des actes étapes 3. | `_index_pnj.md` |
| 11.2 | ➕ Créé — **100 fiches PNJ de l'Archipel** `npc_und_00-99_*.md`, gabarit D17 (5 sections, émoji 🌊, QI 3/3/2/1/1 ; budget 12 pour hubs 00/01/08/09/99 → 3/3/3/2/1). Nerio en `08` (Lord canon). 6 fils rouges distribués. Liens inter-cités honorés : Zarn `NPC_GAT_60` (via UND_90), Nerio `NPC_ALN_92`/`NPC_SWI_92` (via UND_92). | `pnj/archipel/` (100 fichiers) |
| 11.3 | ✏️ Modifié — Compteurs d'état (100/100, lot 2.7 ✅), quotas D34 : SERVICE 48 / GUARD 12 / MERCHANT 22 / QUEST_GIVER 10 / SKILL_MASTER 5 / LORD 1 / BLACK_MARKET 2 (3 SERVICE réclassés QUEST_GIVER pour respecter le plafond 48). Bascule « Prochaine étape » → Lot 2.8 Lioda. | `_index_pnj.md`, `alo_context.md` |

### Décisions actées

- **D45** : Barème QI appliqué à l'Archipel — **budget 12** hubs (`00` Goutte, `01` Thalassa, `08` Nerio, `09` Amiral, `99` Mémoire) ; **budget 10** autres.
- **D46** : Fils rouges Undine — (1) 🌊 Les Eaux Qui Mentent, (2) 🧪 La Recette Corrompue, (3) 🐚 L'Appel des Abysses, (4) 🩸 Les Cendres de Voulg, (5) 🏛️ L'Académie Sans Nom, (6) 🔮 Fil méta — Le Souffle du Monde.
- **D47** : Verrou fil méta Undine (régulation hydrique du serveur) réservé aux PNJ 00, 99, 98, 08 ; règle D22.

### État de sortie

Lot 2.7 **CLOS** : `pnj/archipel/` = **100 fichiers, séquence 00-99 complète, quotas D34 respectés**. Liens Zarn/Nerio activés. Prochaine étape = **Lot 2.8 Lioda** (Puca).

---

## ÉTAPE 12 — Lot 2.8 PNJ Lioda : roster + 100 fiches ✅ CLOS (2026-07-08)

**Objectif** : produire le roster `NPC_LIO_00-99` et les 100 fiches au gabarit D17 pour la capitale Puca (`ZONE_PUC_CAP_001`), avec émoji 🎭, différenciateur « cité-amphithéâtre instrumentale, magie de musique, Harmonie de Fond cardinal », 6 fils rouges distincts.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 12.1 | ➕ Créé — **Roster LIO 00-99** dans `_index_pnj.md` + en-tête (différenciateur, sous-lieux, 6 fils rouges Puca, lien Luthien `NPC_SWI_06` activé). Notables `01-07` refichés D17 depuis `capitale_lioda.md` (Cordelia, Viel, Polka, Fitz, Séléna, Tam, Seigneur Silencieux). | `_index_pnj.md` |
| 12.2 | ➕ Créé — **100 fiches PNJ de Lioda** `npc_lio_00-99_*.md`, gabarit D17 (5 sections, émoji 🎭, budget 12 pour hubs 00/01/07/08/09/99 → 3/3/3/2/1). Seigneur Silencieux en `07`. 6 fils rouges distribués. Lien Swilvane honoré : Luthien `NPC_SWI_06` via LIO_56/LIO_88/LIO_90/LIO_94. | `pnj/lioda/` (100 fichiers) |
| 12.3 | ✏️ Modifié — Compteurs d'état (100/100, lot 2.8 ✅) et bascule → Lot 2.9 Duskarn. | `_index_pnj.md`, `alo_context.md` |

### Décisions actées

- **D48** : Barème QI appliqué à Lioda — **budget 12** hubs (`00` Note, `01` Cordelia, `07` Seigneur, `08` Chancelier, `09` Capitaine, `99` Mémoire) ; **budget 10** autres. is_essential VRAI pour 00/07/08 (hubs méta/gouvernance).
- **D49** : Fils rouges Puca — (1) 🎵 La Partition Qui Marche Seule, (2) 🎭 Le Masque Qui Oublie, (3) 🎶 Le Refrain de l'Ombre, (4) 🔇 Le Silence Interdit, (5) ⚔️ L'Espionne aux Cordes, (6) 🔮 Fil méta — La Partition Originelle.
- **D50** : Verrou fil méta Lioda (Partition Originelle = fréquence de compilation du monde) réservé aux PNJ 00, 07, 99, 98, 05 ; règle D22.

### État de sortie

Lot 2.8 **CLOS** : `pnj/lioda/` = **100 fichiers, séquence 00-99 complète, quotas D34 respectés** (SERVICE 48, GUARD 12, MERCHANT 21, QUEST_GIVER 9, SKILL_MASTER 6, LORD 2, BLACK_MARKET 2). Lien Luthien activé. Prochaine étape = **Lot 2.9 Duskarn** (Imp).

---

## ÉTAPE 11 — Lot 2.7 PNJ Archipel d'Écume : roster + 100 fiches ✅ CLOS (2026-07-08)

**Objectif** : produire le roster `NPC_UND_00-99` et les 100 fiches au gabarit D17 pour la capitale Undine (`ZONE_UND_CAP_001`), avec émoji 🌊, différenciateur « cité lacustre flottante, capitale de la guérison, donjon sous-marin T5 », 6 fils rouges distincts.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 11.1 | ➕ Créé — **Roster UND 00-99** (table NN/Nom/Rôle/Sous-lieu/`role_type`/Angle) dans `_index_pnj.md` + en-tête (différenciateur, sous-lieux, 6 fils rouges Undine, liens Zarn `NPC_GAT_60` + Nerio `NPC_ALN_92`/`NPC_SWI_92` activés). Notables `01-07` refichés D17 depuis `archipel_territoire_undine.md` (Thalassa, Rurik, Nérée, Kryx, Sirena, Finbar, Coralia). Maëlle `10` / Morgane `11` repris des actes étapes 3. | `_index_pnj.md` |
| 11.2 | ➕ Créé — **100 fiches PNJ de l'Archipel** `npc_und_00-99_*.md`, gabarit D17 (5 sections, émoji 🌊, QI 3/3/2/1/1 ; budget 12 pour hubs 00/01/08/09/99 → 3/3/3/2/1). Nerio en `08` (Lord canon). 6 fils rouges distribués. Liens inter-cités honorés : Zarn `NPC_GAT_60` (via UND_90), Nerio `NPC_ALN_92`/`NPC_SWI_92` (via UND_92). | `pnj/archipel/` (100 fichiers) |
| 11.3 | ✏️ Modifié — Compteurs d'état (100/100, lot 2.7 ✅), quotas D34 : SERVICE 48 / GUARD 12 / MERCHANT 22 / QUEST_GIVER 10 / SKILL_MASTER 5 / LORD 1 / BLACK_MARKET 2 (3 SERVICE réclassés QUEST_GIVER pour respecter le plafond 48). Bascule « Prochaine étape » → Lot 2.8 Lioda. | `_index_pnj.md`, `alo_context.md` |

### Décisions actées

- **D45** : Barème QI appliqué à l'Archipel — **budget 12** hubs (`00` Goutte, `01` Thalassa, `08` Nerio, `09` Amiral, `99` Mémoire) ; **budget 10** autres.
- **D46** : Fils rouges Undine — (1) 🌊 Les Eaux Qui Mentent, (2) 🧪 La Recette Corrompue, (3) 🐚 L'Appel des Abysses, (4) 🩸 Les Cendres de Voulg, (5) 🏛️ L'Académie Sans Nom, (6) 🔮 Fil méta — Le Souffle du Monde.
- **D47** : Verrou fil méta Undine (régulation hydrique du serveur) réservé aux PNJ 00, 99, 98, 08 ; règle D22.

### État de sortie

Lot 2.7 **CLOS** : `pnj/archipel/` = **100 fichiers, séquence 00-99 complète, quotas D34 respectés**. Liens Zarn/Nerio activés. Prochaine étape = **Lot 2.8 Lioda** (Puca).

---

## ÉTAPE 10-bis — Audit de complétude & cahiers des charges de délégation ✅ CLOS (2026-07-08, session parallèle)

> ⚠️ Étape menée **en parallèle** du lot 2.6 Freelia (production PNJ en cours dans une autre session). Numérotée 10-bis pour éviter toute collision. **Décisions D30-D33 volontairement laissées libres pour le lot Freelia** ; cette étape acte D34-D37.

**Objectif** : audit disque exhaustif (PNJ/rôles, boutiques, items, quêtes) + cahiers des charges ultra-précis pour production déléguée à un modèle générateur de moindre capacité (directive PE : 1 PNJ de chaque rôle par zone ; boutiques aux articles différenciés par zone et par besoins).

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 10b.1 | ➕ Créé — **Audit de complétude** : 5/12 localités PNJ fichées (7 villes à zéro = 700 fiches), boutiques = néant structurel (`shop_ref` sans cible, 0 inventaire, `!shop_list` non résoluble), items : seule la famille tête conforme (100/100), consommables/armes/matériaux junk ou vides ; dette quêtes (`QST_SYL_HELKA_01` promise non créée). Chemin critique : PNJ → items → boutiques. | `directives_generation/00_audit_completude.md` |
| 10b.2 | ➕ Créé — **Cadrage PNJ lots 2.6-2.12** (la production étant déjà en cours, pas de CDC de production : quotas + grille de recette). | `directives_generation/01_cadrage_pnj.md` |
| 10b.3 | ➕ Créé — **CDC-ITM-01** : 3 lots de 100 (consommables `CSM_*` 40/35/15/10, armes `WPN_*` 13 familles à allocation ferme, matériaux `MAT_*` 25/25/20/20/10), grilles de prix/ATQ/effets fermées, gabarits copy-paste dérivés du lot tête, règles d'or D37, checklists de recette. | `directives_generation/02_cdc_items.md` |
| 10b.4 | ➕ Créé — **CDC-SHP-01** : contrat de fiche boutique D35 (`SHOP_<VILLE>_<NN>` = PNJ propriétaire), matrice de différenciation zonale D36 (11 localités : PRODUIT −20% / BESOIN +40% / ABSENT / signatures), règles mesurables R1-R8 (panier universel, exclusivité intra-ville et mondiale, anti-arbitrage, plafond T4, T5 interdit), séquencement C-1→C-n. | `directives_generation/03_cdc_boutiques.md` |
| 10b.5 | ➕ Créé — **Table MLD `T_SHOPS` + `T_SHOP_ITEMS`** : résout enfin `T_NPC.shop_ref` ; triggers T1-T6 (propriétaire marchand, item réel, boutique orpheline, exclusivité R2, anti-arbitrage, plafond tiers) ; commandes `!sys_shop_restock` / `SYS_SHOP_RESTOCK` à propager à la recette du lot C-1. | `cardinal_system_db/MLD_Logic/table_t_shops.md` |

### Décisions actées

- **D34** : **Quotas de rôles par ville** (contraignants, dérivés des 4 villes actées) : MERCHANT 20-28, SERVICE 40-48, GUARD 6-12, QUEST_GIVER 6-11, SKILL_MASTER 3-6, LORD 1-2, BLACK_MARKET 2-6 ; colonne vertébrale 00-99 invariante (00 caché · 01-07 notables · 08-09 gouvernance · 10-19 annexes · 90-93 étrangers · 94-99 rôles fixes).
- **D35** : **Contrat boutique** — 1 boutique = 1 PNJ MERCHANT/BLACK_MARKET, fichier `game_design/boutiques/<ville>/shop_<ville>_<nn>_<slug>.md`, ID `SHOP_<VILLE>_<NN>`, 5 sections, inventaire = uniquement des `Item_ID` existants (manque ⇒ annexe `[BESOIN_ITEM]`, jamais d'ID inventé).
- **D36** : **Matrice de différenciation zonale** — chaque ville : PRODUIT (local −20%), BESOIN (import +40%, ville source nommée), ABSENT (jamais en rayon), ≥3 signatures ; panier universel de 6 consommables ; exclusivité intra-ville (1 item = 1 boutique) et mondiale (≥10 items exclusifs/ville) ; plancher anti-arbitrage (prix ≥ 2× revente) ; T4 ≤2/ville sous condition, T5 jamais en boutique ; Brokkheim ne brade jamais.
- **D37** : **Protocole du générateur délégué** — documents autoporteurs à vocabulaire fermé ; le générateur ne modifie JAMAIS un fichier maître, ne crée JAMAIS d'ID hors plage allouée, consigne ses manques en `[BESOIN_*]`/`[QUESTIONS_LOT]` au lieu d'inventer ; junk déplacé vers `deprecated_v1/`, jamais supprimé ; recette par checklist avec recomptage disque systématique.

### État de sortie

Dossier `directives_generation/` livré (audit + 3 documents de délégation) + `T_SHOPS` actée. Production PNJ lot 2.6 Freelia en cours en parallèle (non pilotée par cette étape). Prochaines exécutions délégables : **lot I-1 consommables** (aucune dépendance), puis I-2/I-3, puis boutiques C-1 Gattan dès I-1+I-2 livrés.

---

## ÉTAPE 10-ter — CDC de délégation restants (armures, accessoires, skills, faune, flore, quêtes) + entité Avatar ✅ CLOS (2026-07-08, session parallèle)

> Suite de 10-bis, toujours en parallèle de la chaîne PNJ (Freelia ~91/100 au moment de l'étape). **Décisions D38-D44 consommées** (D30-D33 restent réservées à la chaîne PNJ).

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 10t.1 | ➕ **CDC-ARM-01** (D38) : 5 lots × 100 (`ARM_TOR/JAM/BRA/TAI/BOU`), taxonomie par SLOT actée — dossiers matière (cuir/maille/plaque/tissu/robes) dépréciés, boucliers = slot d'armure ; grilles DEF/BLOC par slot dérivées du lot tête. | `directives_generation/04_cdc_armures_boucliers.md` |
| 10t.2 | ➕ **CDC-ACC-01** (D39) : 1 lot de 100 (anneaux 30 unique-equipped, colliers 30, ceintures 20 utilitaires, capes 20 avec DEF) ; effets uniques T4+ situationnels plafonnés. | `directives_generation/05_cdc_accessoires.md` |
| 10t.3 | ➕ **CDC-SKL-01** (D40) : 3 lots × 100 — magies 10 écoles × 10 avec mapping race affine (+30%), OSS par famille d'arme (Post-Motion Delay croissant), passives 4 domaines à 3 rangs ; support junk (141) à archiver ; enseignant réel obligatoire par skill T1-T4. | `directives_generation/06_cdc_skills.md` |
| 10t.4 | ➕ **CDC-FAU-01** (D41) : F-1 = 9 territoires × 20 (plages D6, `025` ×3 / `026` ×8), F-2 = NEU+AIR, F-3 = JOT/YGG/AIN ; refonte `MOB_CAT_*`→`MOB_CAI_*` ; loot 100% `MAT_*` résoluble (cohérence écologique). | `directives_generation/07_cdc_faune.md` |
| 10t.5 | ➕ **CDC-FLO-01** (D42) : 100 nodes de récolte (9×10 + 6 NEU + 4 YGG), chaque plante → `MAT_HRB_*` + acheteur + recette ; signatures raciales liées aux plats `CSM_NOU_001-009` et anti-jauges D12 ; `FLO_YGG_001` = feuille de Yssa. | `directives_generation/08_cdc_flore.md` |
| 10t.6 | ➕ **CDC-QST-01** (D43) : 34 quêtes — `QST_SYL_HELKA_01` (dette) + 3/localité (A amorce de fil, B chaîne économique, C daily) ; invariant « jamais résoudre un fil rouge », fils méta interdits. | `directives_generation/09_cdc_quetes.md` |
| 10t.7 | ✏️ Amendement **I-2** : famille `WPN_BOU_*` retirée (boucliers → D38), réallocation épées 1M 14 / arcs 12 / jet 6. | `directives_generation/02_cdc_items.md` |
| 10t.8 | ✏️ **T_AVATARS** (D44) : slots complétés et typés (ring_1/ring_2 unique-equipped, neck, belt, back — remplaçant accessory_1/2) + `inventory_capacity`/`inventory_used` avec formule évolutive ; contrats A1-A4 (slot typé, anneaux uniques, dual wield conditionné, équipé=possédé). | `cardinal_system_db/MLD_Logic/table_t_avatars.md` |
| 10t.9 | ➕ **T_INVENTORY refondue** (D44) : structure complète (instances, piles ×99, durabilité, `is_bound`, traçabilité), triggers T1-T6 (capacité, empilage, anti-dup par verrou, liaison d'âme, cohérence slot, pénalité de mort) ; commandes existantes réutilisées (`!inventaire`, `!equiper`, `!sew`). | `cardinal_system_db/MLD_Logic/table_t_inventory.md` |

### Décisions actées

- **D38** : armures organisées par SLOT (matière = attribut) ; boucliers = slot armure `off_hand` ; dossiers matière archivés.
- **D39** : accessoires = 1 lot de 100 (30/30/20/20) ; 2 anneaux unique-equipped ; effets uniques T4+ toujours situationnels et plafonnés.
- **D40** : 10 écoles de magie × 10 sorts, 1 race affine par école (FEU=SAL, VEN=SYL, EAU+GUE=UND, TER=GNO, GLA=CAI, FOU=IMP, TEN=SPR, LUM=LEP, SUP=PUC) ; grilles MP/incant/CD/dégâts fermées ; OSS sans affinité raciale, débloqués par maîtrise d'arme.
- **D41** : faune = 249 fiches en 3 lots sur plages D6 strictes ; mini-boss ×3, boss de zone ×8 ; loup→croc jamais épée.
- **D42** : flore = nodes de récolte produisant exclusivement des `MAT_*` existants ; `!recolter` à propager à la recette.
- **D43** : quêtes v1 = 34 (dette Helka + 3 types × 11 localités) ; une quête ne résout jamais un fil rouge ; fils méta hors d'atteinte des quêtes.
- **D44** : capacité d'inventaire évolutive : `32 + niveau + ceinture (2-8) + sacs !sew (2×4) + passives (2-8), plafond 160` ; inventaire plein = refus narratif + récompenses en attente postale 7 jours ; instances liées ne droppent jamais.

### État de sortie

`directives_generation/` complet : audit + 9 documents (00-09) couvrant TOUS les types de données restants. Entité Avatar conforme (slots typés + inventaire à capacité limitée évolutive). Tout est délégable ; ordre : I-1 → I-2/I-3 → boutiques C-1+ // armures A-1+ // skills // faune → flore → quêtes (en dernier).

---

## ÉTAPE 10-quater — Correction PE : équipement porté = 5 slots, mains et dos dissociés ✅ CLOS (2026-07-08, session parallèle)

**Directive PE (correction de D44/D38/D39)** : l'équipement porté du personnage = **5 slots d'armure exactement** (tête, torse, bras, taille, jambes). Les **mains** saisissent des objets (arme, bouclier, torche — ce n'est pas de l'équipement) ; le **dos** porte un **sac** qui donne la capacité de stockage. Trois plans dissociés.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 10q.1 | ✏️ **T_AVATARS** : slots réduits à 5 (`equip_head/torso/arms/waist/legs`) + `hand_main`/`hand_off` (saisie, contrat A2 : tout objet saisissable, arme 2M = 2 mains, dual wield sous passive) + `bag_back` (conteneur, zéro stat, contrat A3). Suppression de ring_1/2, neck, belt, back. Formule D44 révisée : `30 + niveau + sac BAG (6/12/20/30) + passives PAS_EXP, plafond 160` ; retrait d'un sac trop plein refusé. | `table_t_avatars.md` |
| 10q.2 | ✏️ **T_INVENTORY** : énum `slot_equipped` refaite en 3 groupes (porté / mains / dos), trigger T5 aligné. | `table_t_inventory.md` |
| 10q.3 | ✏️ **CDC-ARM-01** : lot A-5 boucliers **supprimé** (4 lots × 100 : TOR/JAM/BRA/TAI) ; D38 amendé — boucliers = objets saisis, `armures/boucliers_armure/` hors périmètre. | `04_cdc_armures_boucliers.md` |
| 10q.4 | ✏️ **CDC-ITM-01** : famille `WPN_BOU_001-006` **restaurée** au lot I-2 (BLOC au lieu d'ATQ, malus AGI/vol) ; annexe **4-bis sacs de dos `BAG_001-012`** ajoutée au lot I-1 (3 modèles × 4 tiers, +6/+12/+20/+30, craft `!sew`). | `02_cdc_items.md` |
| 10q.5 | ❌ **CDC-ACC-01 GELÉ — D39 caduque** : aucun slot pour anneaux/colliers/ceintures/capes → lot annulé, junk (14) à archiver, dérogation au chantier ≥100 pour ce type ; ex-ceintures reprises par les sacs, ex-capes par `!outfit`. Réversible uniquement en « objets de valeur non équipables ». | `05_cdc_accessoires.md`, `00_audit_completude.md` |

### État de sortie

Modèle personnage conforme à la directive PE : 5 slots portés / 2 mains / 1 dos. Cascade propagée sur MLD + 3 CDC. Aucun impact sur les CDC skills/faune/flore/quêtes ni sur la chaîne PNJ.

---

## ÉTAPE 10-quinquies — Système de port (ceinture, sangle, sac, inventaire virtuel) + tenue par défaut ✅ CLOS (2026-07-08, session parallèle)

**Directive PE** : (1) ceinture d'équipement = garde 2 armes à portée (flanc G/D) ; (2) sangle dorsale = variante du sac transportant des armes au dos ; sac = items/consommables SANS armes ; choix sac XOR sangle ; (3) inventaire de base virtuel (sac non obligatoire), le sac ajoute +30 emplacements ET l'accès rapide (pas de commande en combat) ; (4) tenue par défaut des nouveaux joueurs selon la ville, haut+bas (t-shirt + pantalon/short pour tous, t-shirt+robe pour les femmes seulement).

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 10p.1 | ✏️ **T_AVATARS** : 5 slots d'armure inchangés + système de port D45 — `gear_belt`+`belt_left/right` (2 armes flancs), `gear_back`+`back_type` (sac XOR sangle), `bag_quick_access` ; formule d'inventaire refaite (virtuel `30+niveau+passives` plafond 130, +30 avec sac plafond 160) ; section « où se rangent les armes » (mains/ceinture/sangle/banque, jamais sac ni virtuel) ; section tenue par défaut à la création ; contrats A1-A6 ; commandes `!degainer`/`!fetch`/`SYS_SET_LOADOUT`. | `table_t_avatars.md` |
| 10p.2 | ✏️ **T_INVENTORY** : `storage_zone` (VIRTUAL/BAG/BANK), triggers T5-T8 (cohérence slot, armes hors sac/virtuel, accès rapide vs commande, mort). | `table_t_inventory.md` |
| 10p.3 | ✏️ **CDC-ITM annexe 4-bis refondue** : sacs `BAG_001-012` (+30, items only), sangles `HRN_001-009` (2-4 armes), ceintures `BELT_001-009` (2 fourreaux) — zéro stat. | `02_cdc_items.md` |
| 10p.4 | ➕ **CDC-OFT-01** (D46) : tenue par défaut, 44 fiches `OFT_TOP/BOT_*` (11 villes × t-shirt + pantalon + short + robe F), T0 sans bonus, mapping torse/jambes, règle de genre robe=female, flux de création. | `10_cdc_tenue_defaut.md` |
| 10p.5 | ✏️ Propagation commandes : §22 « Système de port & loadout » + `SYS_SET_LOADOUT` (règle de complétude). | `whatsapp_commands_list.md`, `ai_orchestrator_commands.md` |

### Décisions actées

- **D45** : **Système de port dissocié de l'armure.** Ceinture `BELT_*` = 2 fourreaux (flanc G/D, dégainage instantané) ; dos = UN conteneur exclusif, sac `BAG_*` (+30 stockage, items/consommables, accès rapide sans commande) XOR sangle `HRN_*` (2-4 armes au dos) ; armes portées uniquement (mains/ceinture/sangle), surplus en banque ; inventaire virtuel de base (sac facultatif) `30+niveau+passives`, plafond 130 (160 avec sac) ; retrait virtuel = commande `!fetch` (une action), sac/ceinture/sangle = sans commande. Aucun de ces items n'apporte de stat.
- **D46** : **Tenue par défaut** à la création = haut (`OFT_TOP_*`, t-shirt) en torse + bas (`OFT_BOT_*`) en jambes, variante régionale selon la ville d'apparition (11 villes), T0 DEF négligeable rachetable ; bas = pantalon/short (tous genres) ou robe (`female` uniquement) ; remplacée par la première armure achetée.

### État de sortie

Entité personnage complète et conforme aux 4 directives PE successives : 5 slots d'armure / 2 mains / ceinture 2 armes / dos sac‑ou‑sangle / inventaire virtuel + banque ; nouveaux joueurs habillés selon leur ville. Dossier `directives_generation/` : 11 documents (00-10). Cascade MLD + commandes propagée. Aucun impact sur skills/faune/flore/quêtes ni sur la chaîne PNJ.

---

## ÉTAPE 14 — Phase B / Lot I-1 Consommables (`CSM_*`) + annexe portage ✅ CLOS (2026-07-09)

**Contexte** : la génération PNJ (Phase A) tournant en session parallèle (Granzam 79/100, puis Brokkheim, Penwether), enchaînement sur la **piste indépendante Phase B — Items**, premier lot de la file d'exécution acté à l'audit §6 (I-1, sans dépendance). Production selon `directives_generation/02_cdc_items.md` (CDC-ITM-01), gabarit item D13-D15.

### Constat d'entrée (audit disque)

Aucun des 3 lots items n'était conforme : consommables = 90 `cons_*` junk v1 + 9 `csm_pot_*` à nommage non séquentiel ; les `wpn_*` (150+51) et `mat_*` (190) « à la racine » sont **du junk v1** (noms aléatoires `de_l'impie`, séries `_canon_`), pas les lots CDC. Seul le lot tête `ARM_TET` (100) était conforme. 3 fiches lore ancien format subsistaient (`crystals_system`, `world_tree_droplet`, `familiar_heart`).

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 14.1 | 📦 Archivé — 102 fiches non conformes (90 `cons_*` + 9 `csm_pot_*` + 3 lore ancien format) déplacées, rien supprimé (règle 0.8) | `ressources_brutes/deprecated_v1/consommables/` |
| 14.2 | ➕ Créé — **40 potions** `CSM_POT_001-040` : soins (001-010), mana (011-018), antidotes/dissipations dont anti-**Vacarme Imp** (019-026), buffs STR/AGI/VIT/INT + résist. (027-034), **anti-jauges D12** HEAT/OXYGEN/DOT ×2 chacune (035-040, dont Potion d'Oxygène de Coralia `NPC_UND_07`) | `consommables/potions/` |
| 14.3 | ➕ Créé — **35 nourritures** `CSM_NOU_001-035` : 9 plats signature raciaux (001-009), rations neutres T1 (010-018), taverne +5%/30 min (019-027), premium +10%/1 h Chef Aubin `NPC_ALN_47` (028-035) | `consommables/nourriture/` |
| 14.4 | ➕ Créé — **15 parchemins** `CSM_PAR_001-015` : retour (001-005), utilitaires ident./réparation/déliage/purification (006-010), skill consommable T1-T2 (011-015) | `consommables/parchemins/` |
| 14.5 | ➕ Créé — **10 cristaux** `CSM_CRI_001-010` : soin/mana instantanés hors-cooldown (001-004), téléportation (005-007, contenu réabsorbé de `crystals_system`), enregistrement/rappel/ralliement (008-010) | `consommables/cristaux/` |
| 14.6 | ➕ Créé — **annexe portage 30 fiches** (aucune stat) : sacs `BAG_001-012` (+30 stockage), sangles `HRN_001-009` (2-4 armes au dos), ceintures `BELT_001-009` (2 fourreaux) | `items_equipements/portage/` |
| 14.7 | ➕ Créé — index de lot (couverture 100/100 + 30/30, grille, tables par sous-famille, décompte racial, anti-jauges, `[REF_A_CONFIRMER]`/`[QUESTIONS_LOT]`) | `consommables/_index_consommables.md` |
| 14.8 | ✏️ Modifié — cache d'état + ce journal | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **D54** : Les 3 lots items « au prefix `wpn_`/`mat_` » à la racine des dossiers sont officiellement **junk v1 non conforme** (ID aléatoires, zéro chaînage) — à remplacer par les lots CDC séquentiels `WPN_*`/`MAT_*`, pas à compléter (cohérent avec la directive PE de renflouement).
- **D55** : **Artefacts uniques hors CDC-ITM.** `world_tree_droplet` (résurrection) et `familiar_heart` (sauvegarde de familier, lié au fil méta Freelia D32) ne rentrent pas dans l'allocation fermée `CSM_*` → archivés, à cadrer dans une future piste « artefacts uniques / objets de quête ».
- **D56** : **Dette de commandes tracée** : `!enter_portal` (canonique, déjà dans le lore cristaux) et `!accept_rally` (introduite par `CSM_CRI_010`) à propager dans `whatsapp_commands_list.md` lors d'une étape de consolidation des commandes (non faite ici, règle 0.2 : le lot ne touche pas aux fichiers maîtres). Même file que `QST_SYL_HELKA_01`.

### État de sortie

Lot I-1 **CLOS** : **100/100 consommables `CSM_*` conformes** (40/35/15/10, séquences complètes, zéro trou, zéro doublon) + **30/30 portage**. Checklist CDC §6 vérifiée : comptes exacts, zéro valeur hors grille, ≥3 consommables signature par race (Salamander 6, Undine 7, autres 3-4), chaque anti-jauge D12 couverte par 2 potions, 4 PNJ référencés vérifiés existants, junk archivé, aucun fichier maître modifié. Recettes = ingrédients nommés en clair, à recroiser avec les `MAT_*` du lot I-3.

---

## ÉTAPE 15 — Lot 2.10 Granzam : 100 fiches ⛏️ ✅ CLOS (2026-07-09)

**Objectif** : Générer les 100 fiches PNJ de la capitale Gnome (`ZONE_GNO_CAP_001`) au gabarit D17, respecter les 6 fils rouges, activer les 4 liens inter-cités (Bomil/Torvin/Ilka/Balrog).

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 15.1 | ➕ Créé — **100 fiches PNJ de Granzam** `npc_gra_00-99_*.md`, gabarit D17 (5 sections, émoji ⛏️, budget 12 pour hubs 00/01/06/07/08/09/99 → 3/3/3/2/1, budget 10 pour les autres). Notables `01-07` refichés D17 depuis `capitale_granzam.md` (Durgan, Marla, Bofrik, Cog, Helga, Margrim, Lord Gnome). Lord Gnome en `07`. 6 fils rouges distribués (Filonant, Gemme Voit, Poids Montagne, Rivalité Sang, Coffre Respire, Noyau Pierre). Liens inter-cités honorés : Bomil `NPC_ALN_93` via GRA_92, Torvin `NPC_SWI_93` + Ilka `NPC_GAT_33` + Balrog `NPC_VOU_04` via GRA_90/GRA_93. | `pnj/granzam/` (100 fichiers) |
| 15.2 | ✏️ Modifié — Statut Granzam dans `_index_pnj.md` passé de ⏳ à ✅ | `_index_pnj.md` |
| 15.3 | ✏️ Modifié — Cache d'état + ce journal | `alo_context.md`, `alo_progression.md` |

### Décisions actées

*(Aucune nouvelle décision D — production pure.)*

### État de sortie

Lot 2.10 **CLOS — 100/100 fiches Granzam**, D34 conformes. Prochaine Phase A : Lot 2.11 Brokkheim puis Lot 2.12 Penwether.

---

## ÉTAPE 16 — Lot 2.11 Brokkheim : 100 fiches 🔨 ✅ CLOS (2026-07-09)

**Objectif** : Générer les 100 fiches PNJ de la capitale Leprechaun (`ZONE_LEP_CAP_001`) au gabarit D17, respecter 6 fils rouges, activer les liens inter-cités (Granzam, Undine, Alne).

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 16.1 | ➕ Créé — **100 fiches PNJ de Brokkheim** `npc_bro_00-99_*.md`, gabarit D17, émoji 🔨. Notables `01-07` refichés D17 depuis `capitale_brokkheim.md` (Brokk IX, Sylla, Rune, Vera, Fenn, Nilsa, Lord Leprechaun). 6 fils rouges distribués. Liens inter-cités : Granzam via BRO_90, Undine via BRO_91, Alne `NPC_ALN_93` via BRO_92. | `pnj/brokkheim/` (100 fichiers) |
| 16.2 | ✏️ Statut Brokkheim dans `_index_pnj.md` passé de ⏳ à ✅ | `_index_pnj.md` |
| 16.3 | ✏️ Cache d'état + ce journal | `alo_context.md`, `alo_progression.md` |

## ÉTAPE 17 — Lot 2.12 Penwether : 100 fiches 🕯️ ✅ CLOS (2026-07-09)

**Objectif** : Générer les 100 fiches PNJ de la capitale Spriggan (`ZONE_SPR_CAP_001`), dernier lot Phase A.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 17.1 | ➕ Créé — **100 fiches PNJ de Penwether** `npc_pen_00-99_*.md`, gabarit D17, émoji 🕯️. Notables `01-07` refichés D17 depuis `capitale_penwether.md` (Nix, Vex, Orin, Maude, Grim, Archiviste, Chancelier Masques). 6 fils rouges distribués (Illusions, Ruines, Nécropole, Pacte Ombres, Statue Kirito, Ville Fantôme). Lien Tenebris `NPC_SWI_03` via PEN_93 honoré. | `pnj/penwether/` (100 fichiers) |
| 17.2 | ✏️ Statut Penwether dans `_index_pnj.md` passé ⏳ ✅ | `_index_pnj.md` |
| 17.3 | ✏️ Cache d'état + ce journal | `alo_context.md`, `alo_progression.md` |

### État de sortie

**Phase A — lots 2.6 → 2.12 : COMPLÈTE.** 7 villes × 100 PNJ = 700 fiches D17. Tous rosters D34 conformes. Tous liens inter-cités activés. **Prochain lot : Phase B — I-2 Armes** (`WPN_*`, 100, 13 familles).

---

## ÉTAPE 16 — Phase B / Lot I-2 Armes : 100 fiches 🗡️ ✅ CLOS (2026-07-09)

**Objectif** : renflouement du dossier `items_equipements/armes/` à 100 fiches `WPN_*` conformes (CDC-ITM-01 §2/§4a, gabarit item D13-D15), 13 familles, ≥8 armes affines par race. Piste Phase B (items), distincte de la Phase A PNJ en session parallèle.

### Constat d'entrée (audit)

`armes/` contenait **205 fichiers junk v1 non conformes** (D54) : 154 `wpn_*` racine (ID aléatoires `wpn_001…154`, noms combinatoires « de_l'impie/sauvage/mithril », lore d'une ligne, zéro chaînage éco) + 51 fichiers de sous-dossiers (préfixes `wpn_s1h_*`, noms de fichiers accentués — viol §0.4) + 4 fiches lore wiki canon (Gram, Excalibur, Shekinah, Crest of Yggdrasil).

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 16.1 | 📦 Archivé — 205 fichiers junk (dont les 4 fiches lore canon, absorbées dans les `WPN_LEG_*`) déplacés, structure préservée, rien supprimé (D37 §0.8) | `ressources_brutes/deprecated_v1/armes/` |
| 16.2 | ➕ Créé — **100 fiches d'armes `WPN_*`**, gabarit 5 sections (Identification / Statistiques / Acquisition & chaînage éco / Lore Encyclopédie d'Argo / Intégration Bot), grille §3 stricte. Répartition ferme : EP1×12, EP2×8, KAT×8, RAP×8, DAG×8, ARC×10, LAN×8, HAC×8, MAS×6, BAG×10, JET×4, BOU×6 (BLOC), LEG×4 | `items_equipements/armes/<13 sous-dossiers>/wpn_*.md` |
| 16.3 | ➕ Créé — **Index du lot** `_index_armes.md` : couverture 100/100, convention ID, grille, répertoire par famille, décompte racial, `[REF_A_CONFIRMER]`, `[QUESTIONS_LOT]` | `items_equipements/armes/_index_armes.md` |

### Décisions actées

*(Aucune nouvelle décision D — production pure sous D13-D15/D37. Points ouverts consignés dans `[QUESTIONS_LOT]` de l'index : proposition d'une règle transverse « forgeron référent = PNJ SKILL_MASTER de plus bas index par capitale ».)*

### État de sortie

Lot I-2 **CLOS — 100/100 armes `WPN_*` conformes**. Validation CDC §6 : compte exact par famille (0 trou de séquence), 100 Item_ID uniques (0 doublon), 0 nom de fichier accentué, 0 valeur hors grille, 0 T5 vendable en boutique (4 légendaires liés à l'âme), **chaque race ≥8 armes affines** (SYL 8 / SAL 14 / CAI 11 / PUC 8 / IMP 8 / GNO 13 / LEP 10 / SPR 9 / UND 8 ; +11 neutres), junk archivé, aucun fichier maître modifié (commandes `!equiper`/`!inspect`/`!sys_give`/`SYS_GRANT_ITEM` déjà propagées au lot tête). Interactions signatures : Colère/Hache de Logi ↔ Surchauffe, Sceptre de Coralia ↔ Apnée, Croc de Skreech ↔ Vacarme ; chaque boss de donjon alimente ≥1 arme T4. `[REF_A_CONFIRMER]` : slots forgerons `NPC_PEN_04`/`NPC_LIO_04`/`NPC_DUS_04` + `ZONE_JOT_DUN_001` (donjon Jötunheimr). Recettes = matériaux nommés en clair, à recroiser avec les `MAT_*` du **lot I-3 Matériaux** (prochain lot Phase B).

---

## ÉTAPE 18 — Phase B / Lot I-3 Matériaux : normalisation de conformité + clôture ⛏️ ✅ CLOS (2026-07-09)

**Objectif initial** : produire le lot I-3 Matériaux (`MAT_*`, 100, CDC-ITM-01), archiver le junk `mat_*`, recroiser les ingrédients nommés des recettes I-1/I-2.

### Constat d'entrée (audit disque) — DIVERGENCE avec l'état consigné

Contrairement à l'état enregistré (« I-3 ⏳, junk `mat_*` racine à archiver puis générer »), **les 100 fiches `MAT_*` existaient déjà** sur disque (générateur délégué antérieur, junk déjà archivé dans `deprecated_v1/materiaux/`), mais **non conformes** sur plusieurs axes : (1) fichiers en MAJUSCULES sans slug (`MAT_MIN_001.md`) — viol §0.4 ; (2) section « Intégration Bot » cassée en bloc de code (≈21 fiches) ; (3) cibles de recette `Entre dans` **vagues ou inexistantes** (« Armes T1 », placeholder `MAT_xxx` ×20, IDs fantômes `MAT_LEG_T5_*`) — viol du contrat éco §77 / checklist §6.5 ; (4) prix de gemmes T4 hors grille (80-100 au lieu de 800-3 000, D15) ; (5) placeholders de source `xxx` (`MOB_LEP_xxx`, `BOSS_xxx`) et secteurs mobs invalides (`MOB_HUNT_*`, `MOB_BOSS_*`, `MOB_SWI_*`, `MOB_PEN_*`) ; (6) typos (« Mineral » ×10, « Feu Infern ») ; (7) aucun index. **Décision ACP** : ne pas régénérer (le lore « Encyclopédie d'Argo » est bon) — **normaliser l'existant** en conservant lore + identification.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 18.1 | 🔧 Corrigé — 100 lignes `Entre dans` réécrites vers des `Item_ID` **réels** (WPN_/CSM_/ARM_TET_/BAG_/HRN_/BELT_), fin des placeholders `MAT_xxx`/`MAT_LEG_T5_*` | `materiaux/*/mat_*.md` (100) |
| 18.2 | 🔧 Corrigé — section « Intégration Bot » standardisée sur toutes les fiches (`!inspect` / `!sys_give` / `SYS_GRANT_ITEM`), fin des blocs de code cassés | `materiaux/*/mat_*.md` (100) |
| 18.3 | 🔧 Corrigé — prix gemmes T2/T3/T4 remis sur grille §3 (T4 : 1 200 / 1 500 Yrds) ; typos « Mineral »→« Minerai », « Feu Infern »→« Feu Infernal » | `gemmes/`, `minerais/` |
| 18.4 | 🔧 Corrigé — sources `xxx` résolues (`MOB_LEP_025`, `MOB_IMP_020`, `BOSS_SAL_DUN_001` Logi, `ZONE_YGG_DUN_001`, `BOSS_UND_DUN_001`…) + secteurs mobs invalides → secteurs valides D6 | `drops_monstres/`, `cuirs_os/` |
| 18.5 | 🔧 Renommé — 100 fichiers `MAT_*.md` → `mat_<sous>_<nnn>_<slug>.md` (convention §0.4, minuscules sans accents) | `materiaux/` (100) |
| 18.6 | ➕ Créé — **Index du lot** `_index_materiaux.md` : couverture 100/100, grille, 5 tables par famille, **cross-walk des ingrédients nommés** I-1/I-2, décompte territorial (≥3/territoire), `[REF_A_CONFIRMER]`, `[QUESTIONS_LOT]` | `materiaux/_index_materiaux.md` |
| 18.7 | ✏️ Modifié — cache d'état + ce journal | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **D57** : **Politique de reprise d'un lot délégué non conforme** — quand un lot pré-généré présente un lore exploitable mais des défauts structurels, on **normalise sans régénérer** (préserver lore + identification, réécrire nommage / recettes / prix / refs / bot / index). Cohérent avec la règle 0.8 (rien de supprimé) et la « réserve qualité » de l'étape 6-bis.
- **D58** : **Dette d'amendement CDC-ITM-01 §2** — aucune famille « bois » n'est allouée alors que arcs/baguettes/bouclier bois nomment bois d'if/zéphyr/noir/chantant. À amender (micro-plage `MAT_WOD_*` ou rattachement `MAT_HRB`) au prochain passage CDC. Consigné en `[QUESTIONS_LOT]` de l'index.

### État de sortie

Lot I-3 **CLOS — 100/100 matériaux `MAT_*` conformes** (25 MIN / 25 HRB / 20 CUI / 20 DRP / 10 GEM). Vérifs : 100 Item_ID uniques (0 doublon), 100 fichiers au nommage §0.4 (0 majuscule résiduelle), 4 sections présentes partout, 100 lignes bot standardisées, 0 placeholder `xxx`/`MAT_xxx`, 0 secteur mob invalide, prix T4 gemmes/mithril sur grille, chaque territoire ≥3 matières, chaque ingrédient nommé des recettes I-1/I-2 résolu (cross-walk index §4). Aucun fichier maître modifié. `[REF_A_CONFIRMER]` : boss d'axe vertical (DRP_019/020) + numéros exacts mobs (figés au lot faune F-1).

---

## ÉTAPE 19 — Phase B / Lot I-4 Skills : 300 fiches (magies + OSS + passives) ✨ ✅ CLOS (2026-07-09)

**Objectif** : renflouement des compétences selon `directives_generation/06_cdc_skills.md` (CDC-SKL-01, D40) — 3 sous-lots × 100 : S-1 magies (10 écoles × 10), S-2 OSS (10 familles d'arme), S-3 passives (4 domaines). Gabarits prouvés `mag_feu_001` / `oss_epe_001`.

### Constat d'entrée (audit disque)

Dossier `competences_magie/` : mélange de fiches saines (`mag_*` 26, `oss_*` 12, `pas_*` 11) et de **junk massif** — `magies/support/` = 141 fiches `skill_canon_*`/combinatoires, plus ~156 `skill_*` parasites dispersés ; dossier doublon `items_equipements/skills/` avec 100 `SKL_*` (hash). Codes hétérogènes (`MAG_TNB_*` vs CDC `TEN`, `pas_cmb_*` vs CDC `CBT`).

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 19.1 | 📦 Archivé — junk + anciennes fiches saines (refondues) : 184 magies, 14 OSS, 11 passives, 100 `SKL_*` = **309 fiches** déplacées, rien supprimé (D37 §0.8) | `ressources_brutes/deprecated_v1/skills_{magies,oss,passives,skl_junk}/` |
| 19.2 | ➕ Créé — **S-1 : 100 magies** `mag_<eco>_<nnn>_<slug>.md` (10 écoles × 10, gabarit 8 sections avec section **Acquisition/Enseignement** ajoutée) : tiers 3/2/2/2/1, 1 race affine/école, enseignant SKILL_MASTER réel T1-T4, prix 50 % équipement, T5 = quête. Canon préservé (Fire Lance, Inferno Wall, Meteor Storm, Wind Blade, Cyclone, Aqua Bind, Tsunami, Revive, Stone Wall, Earthquake, Frost Nova, Blizzard, Lightning Strike, Shadow Bolt, Dark Detonation, Holy Light, Divine Judgment, Barrier, Haste) | `competences_magie/magies/<école>/` (100) |
| 19.3 | ➕ Créé — **S-2 : 100 OSS** `oss_<arm>_<nnn>_<slug>.md` (EPE12/EP2 10/KAT10/RAP10/DAG10/LAN10/HAC10/MAS8/ARC12/JET8) : déblocage par maîtrise d'arme, Post-Motion Delay croissant (0,5→3,5 s), ignore 15 % DEF + Perfect Chain +20 %. Canon préservé (Starburst Stream, Vorpal Strike, Savage Fulcrum, Tsujikaze, Crimson Lotus, Mother's Rosario, Linear, Star Splash, Rapid Bite, Spiral Thrust, Phantom Arrow) | `competences_magie/oss/<arme>/` (100) |
| 19.4 | ➕ Créé — **S-3 : 100 passives** `pas_<dom>_<nnn>_<slug>.md` (CBT 40 / CRA 25 / EXP 20 / SOC 15), table 3 rangs I/II/III (+2/+5/+8 %, plafond +8 %), aucune passive de dégâts globaux, max 2/domaine équipées. Endurance aux jauges D12 (`PAS_EXP_014/015/016` HEAT/OXYGEN/DOT). Canon préservé (Parry, Aerial Evasion, Dual Wielding, Forge, Alchimie, Couture, Navigation, Searching, Méditation) | `competences_magie/passives/<domaine>/` (100) |
| 19.5 | ➕ Créé — **Index consolidé** `_index_skills.md` (couverture 300/300, 3 tables sous-lot, mapping race affine, enseignants, chaînages signatures, `[REF_A_CONFIRMER]`, `[BESOIN_COMMANDE]`, décisions D59-D60) | `competences_magie/_index_skills.md` |
| 19.6 | ✏️ Modifié — cache d'état + ce journal | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **D59** : **Revive → Guérison** (`MAG_GUE_006`, T3) au lieu du `MAG_SUP_006` provisoire du CDC (l'école GUE n'existait pas à la rédaction de la note ; résurrection = soin Undine, pas buff de barde Puca). Healing Tide → `MAG_GUE_004`. `SUP_006` = Resonance Ward.
- **D60** : **Codes école/domaine alignés sur le CDC** (`TEN`/`CBT`) ; anciens `TNB`/`cmb` refondus, canon (noms) conservé dans les nouvelles plages.

### État de sortie

Lot I-4 **CLOS — 300/300 compétences conformes**. Vérifs : 100/100/100 exacts, IDs uniques par sous-lot, distributions tiers conformes (magies 30/20/20/20/10 ; OSS ~50/40/10 avec 1 T5/famille ; passives 3 rangs/fiche), Post-Motion Delay croissant, 0 passive de dégâts globaux, 8 enseignants SKILL_MASTER vérifiés existants, canon nommément préservé. `SYS_GRANT_SPELL`/`SYS_GRANT_OSS` déjà dans les masters ; **`SYS_GRANT_PASSIVE` = `[BESOIN_COMMANDE]`** à propager. T5 (20 skills) = dette quêtes CDC-QST-01. **Phase B COMPLÈTE (I-1→I-4)** → Phase C boutiques.

---

## ÉTAPE 20 — Phase C / Lot C-1 Boutiques de Gattan : 29 fiches 🏪 ✅ CLOS (2026-07-09)

**Objectif** : ouvrir la Phase C (boutiques) selon `directives_generation/03_cdc_boutiques.md` (CDC-SHP-01, D35/D36) + `table_t_shops.md`. 1 boutique = 1 PNJ `MERCHANT`/`BLACK_MARKET` du roster Gattan ; inventaires = `Item_ID` réels des lots I-1/I-2/I-3/tête ; prix modulés D36.

### Constat d'entrée (audit disque)

Dossier `boutiques/gattan/` **déjà partiellement peuplé** par une session antérieure : 31 fichiers dont **2 doublons d'ID** (`SHOP_GAT_07` Ferro, `SHOP_GAT_62` Rikko) et 4 fiches thématiquement incohérentes (Motte la chiffonnière vendant du minerai brut « LOCAL » ; Vosk le tailleur vendant des herbes). Découverte majeure : le roster réel compte **29** PNJ marchands (27 `MERCHANT` + 2 `BLACK_MARKET`), pas « 25+2 » (le premier scan `role_type` avait raté la tranche 76-99 ; `NPC_GAT_08` Lord Mortimer = LORD, exclu). **Décision** : régénérer intégralement avec allocation disjointe.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 20.1 | 📦 Archivé — 31 fiches boutiques v1 (partielles + doublons) déplacées, rien supprimé (D37 §0.8) | `ressources_brutes/deprecated_v1/boutiques_gattan_v1/` |
| 20.2 | ➕ Créé — **29 fiches boutiques** `shop_gat_<nn>_<slug>.md` (gabarit D35 : Identification / Inventaire / Rachat / Ancrage zonal / Bot), **inventaires disjoints** (R2 garantie par construction : 0 doublon d'`Item_ID` non-universel), 170 lignes d'inventaire, noms/tiers lus sur les fiches item **par nom de fichier**, prix modulés −20 % LOCAL / +40 % IMPORT arrondis aux 5 Yrds | `game_design/boutiques/gattan/` (29) |
| 20.3 | ➕ Créé — **Index** `_index_boutiques_gattan.md` (récap 29, conformité R1-R8, R3 signatures exclusives, `[BESOIN_ITEM]` consolidé, `[QUESTIONS_LOT]` + D61) | `game_design/boutiques/gattan/_index_boutiques_gattan.md` |
| 20.4 | ✏️ Modifié — cache d'état + ce journal | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **D61** : **Les plafonds de tiers R6 (T3 ≤4/boutique, T4 ≤2/ville) régissent l'ÉQUIPEMENT** (`WPN_*`/`ARM_*`), pas les matériaux ni les consommables (commodités tarifées à la grille). Sinon le négoce de matières de craft (mithril, gemmes) serait étouffé. T4 d'équipement à Gattan = exactement 2 (`ARM_TET_017`, `WPN_EP1_009`), sous condition `AFF>=80`.
- **Roster marchand réel = 29** (le CDC §4 « 25+2 » sous-estimait) ; Motte `83`/Vosk `96` = MERCHANT, Snyk `80`/Fitch `89` = BLACK_MARKET.

### État de sortie

Lot C-1 **CLOS — 29/29 boutiques Gattan conformes**. Vérifs CDC §5 : 1 boutique/marchand (0 orpheline, 0 doublon d'ID), **R2 = 0 doublon d'item non-universel** (allocation disjointe), 0 `Item_ID` inexistant, prix modulés dans la grille, matrice D36 respectée (plaque/anti-HEAT/obsidienne LOCAL ; herbes/tissus/nourriture IMPORT ; vol Sylph ABSENT), 2 marchés noirs (Snyk/Fitch, 4 articles, accès conditionné). `[BESOIN_ITEM]` consolidé (torche, œuf de salamandre, bière signature, obus, verrerie, items de familier, **élargir `CSM_NOU`**) → alimente le prochain lot items. Dette : `!sys_shop_restock`/`SYS_SHOP_RESTOCK` à acter dans les masters. Prochain : **C-2 Alne**.

---

## ÉTAPE 21 — Consolidation & apurement de la dette de commandes ✅ CLOS (2026-07-09)

**Objectif** : traiter en une passe la dette de commandes accumulée par les lots I-1 (consommables), I-4 (skills) et C-1 (boutiques), en propageant le triptyque **Joueur `!*` / GM `!sys_*` / IA `SYS_*`** dans les deux registres maîtres (règle de complétude). La dette recensée nommait 3 items ; l'audit disque a révélé **2 dettes sœurs latentes** (faces-joueur jamais définies malgré un usage massif) → apurement **quintuple**.

### Constat d'entrée (audit ciblé)

| Commande | Référencée par | État maître avant |
|---|---|---|
| `SYS_GRANT_PASSIVE(Avatar_ID, Skill_ID, Rang)` | 100 fiches `PAS_*` | absente (alors que `SYS_GRANT_SPELL`/`SYS_GRANT_OSS` présents) |
| `!learn_skill [Skill_ID]` | **300** fiches skills + PNJ Alne (`NPC_ALN_69/73`) | **jamais définie** — face joueur des 3 grants |
| `!use [Item_ID]` | **100** fiches `CSM_*` | seuls `!use_potion`/`!use_crystal` existaient |
| `!accept_rally` / `!enter_portal` | `CSM_CRI_010` / `CSM_CRI_006` | `!accept_rally` absente ; `!enter_portal` OK (§17) |
| `!sys_shop_restock` / `SYS_SHOP_RESTOCK` | **54** fiches boutiques + `table_t_shops` | absentes |

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 21.1 | ✏️ `whatsapp_commands_list.md` — **§5** `!use [Item_ID]` générique (alias `!use_potion`/`!use_crystal`) ; **§17** `!accept_rally` (rappel de groupe consenti) + précision `!enter_portal`→`SYS_OPEN_CORRIDOR` ; **§18** `!learn_skill [Skill_ID]` (couvre `MAG_*`/`OSS_*`/`PAS_*`, prérequis, plafonds passifs) ; **§1** 4 commandes GM : `!sys_grant_skill`, `!sys_shop_restock`, `!sys_open_corridor`, `!sys_recall_party` | `the_seed_engine/whatsapp_commands_list.md` |
| 21.2 | ✏️ `ai_orchestrator_commands.md` — **§8** `SYS_OPEN_CORRIDOR(Zone_A, Zone_B, Duration)` + `SYS_GROUP_RECALL(Party_ID, Anchor_Avatar_ID)` ; **§9** `SYS_GRANT_PASSIVE(Avatar_ID, Skill_ID, Rang)` + faces joueur ajoutées à `SYS_GRANT_SPELL`/`SYS_GRANT_OSS` ; **§11** `SYS_SHOP_RESTOCK(Shop_ID)` | `the_seed_engine/ai_orchestrator_commands.md` |
| 21.3 | ✏️ Marqueurs de dette clos dans les 4 index sources | `competences_magie/_index_skills.md` §7, `items_equipements/consommables/_index_consommables.md` §`[QUESTIONS_LOT]`, `game_design/boutiques/gattan/_index_boutiques_gattan.md`, `cardinal_system_db/MLD_Logic/table_t_shops.md` §5 |
| 21.4 | ✏️ Cache d'état + ce journal | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **D62** : **`!learn_skill`** est la face-joueur unique des trois grants de compétence (`SYS_GRANT_SPELL` `MAG_*` / `SYS_GRANT_OSS` `OSS_*` / `SYS_GRANT_PASSIVE` `PAS_*`), résolue auprès d'un `SKILL_MASTER` de zone ; l'octroi GM inconditionnel est `!sys_grant_skill`. Aucune face joueur pour `SYS_SHOP_RESTOCK` (anti-exploit : le joueur ne dispose que de `!shop_list`/`!buy`/`!sell`).
- **D63** : Les téléports de cristaux de groupe (`CSM_CRI_006` corridor, `CSM_CRI_010` ralliement) sont **consensuels** (`!enter_portal`/`!accept_rally`) — jamais de transfert forcé, en cohérence avec l'invariant R0 (le transfert forcé reste réservé à `SYS_FORCE_TELEPORT`, droit divin). Résolution d'effet côté IA = `SYS_OPEN_CORRIDOR`/`SYS_GROUP_RECALL`, équivalents GM `!sys_open_corridor`/`!sys_recall_party`.

### État de sortie

**Dette de commandes = 0.** 5 commandes actées et propagées sur les 3 couches ; 4 marqueurs `[BESOIN_COMMANDE]`/`[QUESTIONS_LOT]` clos. Aucune fiche de données touchée (seuls les 2 maîtres + 4 index + 2 fichiers d'état). Dettes restantes = **hors périmètre commandes** (quêtes T5 + `QST_SYL_HELKA_01`, famille matériaux « bois » `MAT_WOD_*`, élargissement `CSM_NOU`). Prochaine étape = **C-2 Alne** (boutiques).

---

## ÉTAPE 22 — Phase C / Lot C-2 Boutiques d'Alne : 31 fiches 🌳 ✅ CLOS (2026-07-09)

**Objectif** : produire les 31 boutiques d'Alne (`ZONE_NEU_CAP_001`) selon CDC-SHP-01 (D35/D36) + `table_t_shops.md`, 1 boutique par PNJ `MERCHANT`/`BLACK_MARKET` du roster 2.3. Méthode C-1 reprise : **allocation d'inventaires disjointe** (R2 garantie par construction), noms/tiers/prix lus sur les fiches item réelles, prix modulés LOCAL −20 % / IMPORT +40 % arrondis aux 5 Yrds (plancher 5). Différenciateur : capitale **neutre cosmopolite** (généraliste T1-T2 des 9 races en LOCAL, spécialités raciales T3+ en IMPORT, armes de guerre T4 réservées au marché noir).

### Constat d'entrée

Roster Alne = **25 `MERCHANT` + 6 `BLACK_MARKET` = 31** (le CDC §4 estimait « 25+6 » — **exact**, contrairement à Gattan). Aucune boutique préexistante (`boutiques/alne/` vide). Prérequis satisfaits : items I-1/I-2/I-3 livrés, roster 2.3 clos.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 22.1 | ➕ Créé — **31 fiches boutiques** `SHOP_ALN_<NN>` au gabarit D35 (5 sections), `<NN>` = exactement l'ID du PNJ propriétaire. 26 boutiques à 6 articles, 5 marchés noirs à 4-6. **178 lignes d'inventaire** (105 LOCAL / 73 IMPORT). Chaque inventaire matérialise la spécialité du roster (R8) et cite ≥1 fournisseur/client PNJ par ID. | `données/game_design/boutiques/alne/shop_aln_*.md` (31 fichiers) |
| 22.2 | ➕ Créé — **Index de ville** : récapitulatif 31 boutiques, preuve R2 (0 doublon non-universel, contrôle scripté), liste des ≥10 exclusifs mondiaux R3, conformité R1-R8, matrice D36, annexes `[BESOIN_ITEM]`/`[QUESTIONS_LOT]`. | `données/game_design/boutiques/alne/_index_boutiques_alne.md` |
| 22.3 | ✏️ Modifié — Cache d'état + ce journal (bascule → C-3 Swilvane). | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **D64** : **Armes de guerre T4 au marché noir** (résolution du conflit R6 ↔ D36). Le plafond R6 (T4 équipement ≤ 2/ville) s'applique au **marché légal** ; le marché noir est l'exception définie (R5 : il vend les « ABSENT » de sa ville). Kael `NPC_ALN_07` écoule 5 armes T4 volées + 1 T2, **toutes** verrouillées `AFF>=80` / stock 1-2 mensuel. Marché **légal** d'Alne = **1 seul** T4 d'équipement (`WPN_BOU_006` Aegis de Mithril, Kaelen `02`, `AFF>=80`) — largement sous plafond. Cohérent avec D61 (Gattan). À confirmer PE.
- **Herbes/flore classées LOCAL** : 4 herboristes aux allocations d'IDs disjointes (Yssa flore de l'Arbre, Ophrys cosmopolite, Vinn potagère, Dahlia florale) — le carrefour neutre agrège toute la flore (−20 %).
- **Panier universel** logé à la **seule** taverne d'Alne (Krebs `48`) ; torche toujours `[BESOIN_ITEM]` (non fichée au lot I-1).

### État de sortie

Lot C-2 **CLOS** : `boutiques/alne/` = **31 fichiers + index, 0 doublon d'ID non-universel, R1-R8 vérifiées, matrice D36 respectée, 0 `Item_ID` inexistant, 0 prix inventé** (contrôle scripté). ≥10 exclusifs mondiaux (sève d'Yggdrasil, Filet Mignon d'Alne, Banquet des Neuf Races, coiffes neutres d'Alne…). `[BESOIN_ITEM]` consolidés : torche, cartes/atlas, Poivre d'Alne, capes/tenues `OFT_*`, familiers/dressage, boissons/vins (→ élargir `CSM_NOU`). Prochaine étape = **C-3 Swilvane** (28 MERCHANT + 2 BLACK_MARKET selon CDC §4 — à recompter sur le roster 2.4).

---

## ÉTAPE 23 — Phase C / Lot C-3 Boutiques de Swilvane : 30 fiches 🍃 ✅ CLOS (2026-07-09)

**Objectif** : produire les 30 boutiques de Swilvane (`ZONE_SYL_CAP_001`, capitale raciale Sylph du vent) selon CDC-SHP-01 (D35/D36) + `table_t_shops.md`, 1 boutique par PNJ `MERCHANT`/`BLACK_MARKET` du roster 2.4. Méthode C-2 reprise : **allocation d'inventaires disjointe** (R2 garantie par construction), noms/tiers/prix **lus sur les fiches item réelles** (extraction disque), prix modulés LOCAL −20 % / IMPORT +40 % arrondis aux 5 Yrds (plancher 5). Différenciateur : **cité du vent et du vol** (armes légères + vol + potions MP + plumes en LOCAL ; minerai/métal Brokkheim + viande rouge en IMPORT ; **plaque lourde ABSENTE**).

### Constat d'entrée

Roster Swilvane recompté sur les fiches (`role_type`) = **28 `MERCHANT` + 2 `BLACK_MARKET` = 30** (l'estimation CDC §4 « 28 + 2 » — **exacte**). `boutiques/swilvane/` vide au départ. Prérequis satisfaits : items I-1/I-2/I-3/tête + portage livrés, roster 2.4 clos. Constat annexe : plusieurs spécialités du roster (laiterie, cartes des courants, parfums, teintures, ailes cosmétiques, gacha, rumeurs) **n'ont aucun objet fiché** — traitées en 4-5 articles réels + `[BESOIN_ITEM]` plutôt que gonflées de faux IDs.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 23.1 | ➕ Créé — **30 fiches boutiques** `shop_swi_<nn>_<slug>.md` au gabarit D35 (5 sections), `<nn>` = ID exact du PNJ propriétaire. **164 lignes d'inventaire** (107 LOCAL / 57 IMPORT). Chaque inventaire matérialise la spécialité du roster (R8) et cite ≥1 fournisseur/client PNJ par ID. | `données/game_design/boutiques/swilvane/shop_swi_*.md` (30) |
| 23.2 | ➕ Créé — **Index de ville** : récap 30 boutiques, preuve R2 (159 IDs non-universels tous uniques, contrôle scripté), 20+ exclusifs mondiaux R3, conformité R1-R8, matrice D36, annexes `[BESOIN_ITEM]`/`[QUESTIONS_LOT]`. | `données/game_design/boutiques/swilvane/_index_boutiques_swilvane.md` |
| 23.3 | ✏️ Modifié — Cache d'état + ce journal (bascule → C-4 Voulg). | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **Plafond T4 légal atteint (2/2)** : les 2 seuls T4 d'équipement légaux sont `WPN_EP1_010` (Faucon d'Émeraude, Brokkr `05`) + `ARM_TET_007` (Diadème du Zéphyr Éternel, Thal `63`), tous deux `AFF>=80` — au plafond R6/D61. Les autres T4 de vol (Rapière Faucon-du-Ciel, Baguette du Zéphyr Supérieur, Casque de la Garde Sylvane) reversés au marché noir de Somb `42` (D64).
- **Signature « ailes d'apparat » non matérialisable** : seule des 3 signatures D36 de Swilvane sans objet fiché → priorité haute de l'amendement CDC-ITM (micro-famille cosmétique `WING_*` proposée). Thal `63`/Volm `65` vendent le matériau (coiffes de vol + plumes), pas le cosmétique final.

### État de sortie

Lot C-3 **CLOS** : `boutiques/swilvane/` = **30 fichiers + index, 0 doublon d'`Item_ID` non-universel** (vérifié : chaque signature n'apparaît qu'en 1 ligne d'inventaire, les autres occurrences sont en prose de rachat), **R1-R8 vérifiées, matrice D36 respectée** (plaque ABSENTE refusée explicitement par Cort/Brokkr/Brelane), **0 `Item_ID` inexistant, 0 prix inventé**. Panier universel logé à la seule taverne (Bram `50`). ≥20 exclusifs mondiaux Sylph. `[BESOIN_ITEM]` consolidés (10 lignes) : **ailes d'apparat `WING_*`** (signature), torche, bière de feu, teintures `DYE_*`, parfums `PERF_*`, cartes, laiterie, fruits, gacha, rumeurs `INTEL_*`. Prochaine étape = **C-4 Voulg** (forteresse Salamander, roster 2.5 `NPC_VOU_*` — recompter MERCHANT+BLACK_MARKET, CDC §4 estime « ~24 + 4 »).

---

## ÉTAPE 24 — Phase C / Lot C-4 Boutiques de Voulg : 24 fiches ⚒️ ✅ CLOS (2026-07-09)

**Objectif** : produire les 24 boutiques de Voulg (`ZONE_SAL_TWN_001`, forteresse militaire Salamander) selon CDC-SHP-01 (D35/D36) + `table_t_shops.md`, 1 boutique par PNJ `MERCHANT`/`BLACK_MARKET` du roster 2.5. Méthode C-2/C-3 reprise : **allocation d'inventaires disjointe scriptée** (R2 garantie par construction, assertion automatique), noms/tiers/prix **lus sur les fiches item réelles** (extraction disque → `catalog.json`), prix modulés LOCAL −20 % / IMPORT +40 % arrondis aux 5 Yrds (plancher 5). Différenciateur : **forteresse militaire brute** (surplus militaire/explosifs/gemmes de feu/équipement d'arène/minerai en LOCAL ; nourriture de garnison + potions de soin en IMPORT ; **luxe/cosmétique ABSENT**).

### Constat d'entrée

Roster Voulg recompté sur les fiches (`role_type`) = **20 `MERCHANT` + 4 `BLACK_MARKET` = 24** (l'estimation CDC §4 « ~24 + 4 » corrigée : 20+4). **Reprise d'un lot pré-généré non conforme** : `boutiques/voulg/` contenait déjà 24 fiches d'une session parallèle (bon roster, ID `SHOP_VOU_*` corrects) mais **37 doublons R2** (`MAT_MIN_006`, `MAT_MIN_018`, gemmes… vendus par 3-4 boutiques) et des **noms d'items fabriqués** ne correspondant pas aux fiches réelles (`MAT_MIN_018` = « Adamantium » étiqueté « Fer Volcanique » ; `MAT_MIN_008` = « Obsidienne de Gattan » renommé « de Voulg »). 0 `Item_ID` inexistant en revanche. Décision : **régénération intégrale** par la méthode validée. Constat annexe majeur : **les 11 dossiers de villes sont pré-remplis** de fiches non validées (sessions parallèles) — seules Gattan/Alne/Swilvane sont closes ; les 7 autres (archipel, brokkheim, duskarn, freelia, granzam, lioda, penwether) restent du pré-généré à refaire aux étapes C-5+.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 24.1 | 🔧 Régénéré — **24 fiches boutiques** `shop_vou_<nn>_<slug>.md` au gabarit D35 (5 sections), `<nn>` = ID exact du PNJ propriétaire. **160 lignes d'inventaire** (111 LOCAL / 49 IMPORT), **155 IDs non-universels tous uniques** (disjonction prouvée par assertion). Chaque inventaire matérialise la spécialité du roster (R8) et cite ≥1 fournisseur/client PNJ par ID. `shop_vou_64` renommé `_gemmes_forge` (désambiguïsation des 2 « Rubis » homonymes 42/64). | `données/game_design/boutiques/voulg/shop_vou_*.md` (24) |
| 24.2 | ➕ Créé — **Index de ville** : récap 24 boutiques, preuve R2 (0 doublon), 25 exclusifs mondiaux R3 vs villes closes, conformité R1-R8, matrice D36, annexes `[BESOIN_ITEM]` (7)/`[QUESTIONS_LOT]` (dont chevauchement territorial Gattan↔Voulg). | `données/game_design/boutiques/voulg/_index_boutiques_voulg.md` |
| 24.3 | ✏️ Modifié — Cache d'état + ce journal (bascule → C-5). | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **D65 — Chevauchement territorial capitale ↔ forteresse (Gattan/Voulg)** : les villes d'un **même territoire** partagent le pool d'items racial (97 `Item_ID` de Voulg sont aussi à Gattan). La R3 « exclusivité mondiale stricte » étant impossible pour une forteresse secondaire dans un pool occupé par sa capitale, l'exclusivité est mesurée **contre les villes d'autres territoires** (25 exclusifs Voulg) ; le partage Gattan/Voulg des consommables/minerais de feu est **assumé cohérent**. La différenciation de Voulg passe par la **spécialité de sous-lieu** (arène, mines, siège, marché noir d'armes). À arbitrer PE si séparation stricte des pools par ville exigée.
- **Plafond T4 légal atteint (2/2)** : les 2 seuls T4 d'équipement légaux = `WPN_EP2_008` Colère de Logi + `WPN_HAC_007` Hache de Logi, tous deux chez Kern `40` sous `AFF>=80`. Toutes les autres armes de guerre T4 (Sabre de Magma, Titanite, Maillet de MK, Lances T4, Étoiles de Ragnar) au marché noir de Somb `49`/Syl `93` (D64, réseau Kael `NPC_ALN_07`).
- **Signatures D36 de Voulg** : « ragoût de lave » = `CSM_NOU_001` (Dorgan `50`, matérialisée) ; « lame d'arène » = Sabre de Braise `WPN_EP1_003` + Flamberge de Voulg `WPN_EP2_002` (`27`, matérialisées) ; « obus de Bôm » = **non fichée**, `[BESOIN_ITEM]` `EXP_*` (priorité haute amendement CDC-ITM).

### État de sortie

Lot C-4 **CLOS** : `boutiques/voulg/` = **24 fichiers + index, 0 doublon d'`Item_ID` non-universel** (disjonction scriptée par assertion), **R1-R8 vérifiées, matrice D36 respectée** (luxe/cosmétique ABSENT), **0 `Item_ID` inexistant, 0 prix inventé** (prix calculés sur `prix_base` extraits des fiches). Panier universel logé à la seule taverne (Dorgan `50`). 25 exclusifs mondiaux vs villes closes. `[BESOIN_ITEM]` consolidés (7) : **obus `EXP_*`** (signature), runes `RUN_*`, gravures `ENGRAVE_*`, traite `SLAVE_*`, rumeurs `INTEL_*`, torche, élargissement `CSM_NOU`.

---

## ÉTAPE 25 — Phase C / Lot C-5 Boutiques de Freelia : 28 fiches 🐾 ✅ CLOS (2026-07-10)

**Objectif** : produire les 28 boutiques de Freelia (`ZONE_CAI_CAP_001`, capitale Cait Sith — cité du domptage de familiers) selon CDC-SHP-01 (D35/D36) + `table_t_shops.md`, 1 boutique par PNJ `MERCHANT`/`BLACK_MARKET` du roster 2.6. Méthode C-4 reprise **telle quelle** : catalogue disque (`build_catalog.py` → `catalog.json`, familles conformes `ARM_TET`/`CSM_*`/`MAT_*`/`WPN_*` uniquement), allocation d'inventaires **disjointe scriptée** (`gen_freelia.py`, assertion `iid not in used` + `iid in CAT`), prix modulés LOCAL −20 % / IMPORT +40 % arrondis aux 5 Yrds (plancher 5). Différenciateur : **la faune est l'économie** (composants de bête + équipement de dressage + gibier en LOCAL ; potions de soin/gemmes/mithril/musique en IMPORT ; armes de siège & explosifs ABSENTS).

### Constat d'entrée

Roster Freelia recompté sur les fiches (`role_type`) = **24 `MERCHANT` + 4 `BLACK_MARKET` = 28** (estimation CDC §4 « ~24 + 4 » confirmée exacte). **Reprise d'un lot pré-généré non conforme** : `boutiques/freelia/` contenait déjà 28 fiches d'une session parallèle (bon roster, ID `SHOP_FRE_*` corrects) mais l'index portait la **zone erronée `ZONE_CAI_TWN_001`** (au lieu de `ZONE_CAI_CAP_001`) et les fiches héritaient des défauts type Voulg (doublons R2, noms fabriqués). Décision : **régénération intégrale** par la méthode validée.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 25.1 | 🔧 Régénéré — **28 fiches boutiques** `shop_fre_<nn>_<slug>.md` au gabarit D35 (5 sections), `<nn>` = ID exact du PNJ propriétaire. **168 lignes d'inventaire** (~113 LOCAL / ~55 IMPORT), **163 IDs non-universels tous uniques** (disjonction prouvée par assertion). Pools `MAT_CUI` (20) et `MAT_HRB` (25) **intégralement consommés** entre les marchands de composants (reflet d'une capitale dont l'économie *est* la faune). Chaque inventaire cite ≥1 fournisseur/client PNJ par ID. | `données/game_design/boutiques/freelia/shop_fre_*.md` (28) |
| 25.2 | 🔧 Régénéré — **Index de ville** (zone corrigée `ZONE_CAI_CAP_001`) : récap 28 boutiques, preuve R2 (0 doublon), 17 exclusifs mondiaux R3 vs 4 villes closes, conformité R1-R8, matrice D36, annexes `[BESOIN_ITEM]` (12)/`[QUESTIONS_LOT]`. | `boutiques/freelia/_index_boutiques_freelia.md` |
| 25.3 | ✏️ Modifié — Cache d'état + ce journal (bascule → C-6 Archipel 🌊). | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **Application D65 (Cait Sith)** : Freelia est la **capitale unique** de son territoire (pas de forteresse sœur) — la R3 s'applique pleinement (17 exclusifs, dont les signatures de domptage `ARM_TET_029/030/035/034/038/065`, `WPN_ARC_009` Arc du Roi Béhémoth, `WPN_JET_002` Shuriken-Griffe). Les composants génériques partagés avec les autres capitales sont assumés cohérents.
- **Plafond T4 légal (1/2)** : 1 seul T4 d'équipement légal = `ARM_TET_035` **Couronne à Crocs** (Gimli `04`, `AFF>=80`). Toutes les autres pièces T4 de bête (Croc de Skreech, Masque du Prédateur Nocturne, Arc du Roi Béhémoth, Étoiles de Ragnar) au marché noir Braconnier `37` / Receleur `48` (D64).
- **Fil rouge économique matérialisé** : le **Marché aux Os** (viande de boss qui « repousse ») relie Brok `07` → Boucher `30` → Trappeur `15` → Receleur `48` par des `MAT_DRP` de composants (Pierre d'Âme, Glande Bouillante Pure) placés en rayon.
- **Signatures D36 de Freelia** : « Truite Grillée du Zéphyr » = `CSM_NOU_002` (Tavernier `40`, buff AGI, matérialisée) ; « équipement de monture/barding » = **non fiché**, `[BESOIN_ITEM]` `MOUNT_*` (Gimli `04`) ; familiers vivants (œufs/worgs/spécimens) = `EGG_*`/`WORG_*`/`BEAST_*` non fichés (services `23`/`38`/`37`).

### État de sortie

Lot C-5 **CLOS** : `boutiques/freelia/` = **28 fichiers + index, 0 doublon d'`Item_ID` non-universel** (disjonction scriptée par assertion), **R1-R8 vérifiées, matrice D36 respectée** (armes de siège/explosifs ABSENTS), **0 `Item_ID` inexistant, 0 prix inventé** (prix multiples de 5 vérifiés, 0 prix manquant). Panier universel logé à la seule taverne (Chat Botté `40`). 17 exclusifs mondiaux vs villes closes. `[BESOIN_ITEM]` consolidés (12) : équipement de monture `MOUNT_*`, œufs `EGG_*`, worgs `WORG_*`, spécimens `BEAST_*`, appâts `LURE_*`, laisses `TAME_*`, reliques `RELIC_*`, os runiques `BONE_*`, rituels `RITE_*`, cartes `MAP_*`, torche, élargissement `CSM_NOU`. Prochaine étape = **C-6 Archipel d'Écume** 🌊 (pré-généré non validé → même régénération conforme).

---

## ÉTAPE 25-bis — Amendement CDC : non-autorité du pré-généré (D66) ✅ CLOS (2026-07-10)

**Contexte** : directive PE — le cahier des charges ne doit plus se limiter au contenu pré-généré non validé. Constat : `cahier_des_charges.md` était resté en v1.0 (base) et son silence laissait les dossiers pré-remplis par sessions parallèles passer pour livrés, contredisant la méthode de renflouement conforme (C-1→C-5, D66 implicite).

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 25b.1 | ✏️ Modifié — En-tête CDC **v1.1** (2026-07-10) + **Principe de conformité** : le périmètre livrable est le corpus conforme (§10), jamais le pré-généré ; le non validé ne fait pas foi et ne compte pas comme livré. | `cahier_des_charges.md` §en-tête |
| 25b.2 | ➕ Ajouté — **Décision D66 « Non-autorité du contenu pré-généré »** dans la table §7 : un dossier pré-rempli est traité comme **vide** tant qu'il n'est pas régénéré/validé (gabarits D13-D15/D34-D37/D61/D64/D65) ; régénération intégrale, jamais complément ; original → `deprecated_v1/`. | `cahier_des_charges.md` §7 |
| 25b.3 | ✏️ Modifié — **§9 Backlog** recadré : ligne P2 unique renvoyant au §10 ; règle « ✅ seulement si conforme validé, jamais sur pré-généré » (D66). | `cahier_des_charges.md` §9 |
| 25b.4 | ➕ Créé — **§10 « Chantier de Renflouement Conforme »** : gabarits de conformité (items/PNJ/**boutiques CDC-SHP-01 R1-R8**), procédé de mise en conformité d'un lot pré-généré, **table d'état de conformité** distinguant ✅ validé (PNJ, I-1→I-4, tête, boutiques 5/11) de ⏳/🚧 à régénérer (6 villes boutiques, autres slots armure, faune, flore, quêtes — pré-généré non validé). | `cahier_des_charges.md` §10 |

### État de sortie

CDC **v1.1** : le pré-généré non validé est **formellement dépourvu d'autorité** (D66) ; la table §10 fixe la vérité de conformité (un dossier pré-rempli sur disque ne vaut pas livraison). Aligne le CDC sur la méthode C-1→C-5 déjà pratiquée. Aucune donnée régénérée à cette étape (amendement documentaire pur). Prochaine étape inchangée = **C-6 Archipel d'Écume** 🌊.

---

## ÉTAPE 25 — Phase C / Lots C-5 à C-11 : 7 villes boutiques restantes 🏪 ✅ CLOS (2026-07-10)

**Objectif** : régénérer les 7 lots boutiques pré-générés non conformes (doublons R2, noms d'items fabriqués) selon méthode C-4 validée. Règles R1-R8 respectées sur toutes les villes.

| Lot | Ville | Nb | Lot | Ville | Nb |
|---|---|---|---|---|---|
| C-5 | Freelia 🐾 | 28 | C-9 | Granzam ⛏️ | 25 |
| C-6 | Archipel 🌊 | 24 | C-10 | Brokkheim 🔨 | 29 |
| C-7 | Lioda 🎭 | 23 | C-11 | Penwether 🕯️ | 33 |
| C-8 | Duskarn 🌑 | 26 | **Total** | | **302** |

Index `_index_boutiques_*.md` créés pour les 7 villes.

---

## ÉTAPE 26 — Phase A' / Armures TOR+JAM+BRA : 300 fiches 🛡️ ✅ CLOS (2026-07-10)

| Slot | Nb | Index |
|---|---|---|
| ARM_TOR_001-100 (Torse) | 100 | `_index_armures_torse.md` |
| ARM_JAM_001-100 (Jambes) | 100 | `_index_armures_jambes.md` |
| ARM_BRA_001-100 (Bras) | 100 | `_index_armures_bras.md` |

---

## ÉTAPE 27 — Armures TAILLE + Flore : 200 fiches 📦 ✅ CLOS (2026-07-10)

| Lot | Dossier | Nb |
|---|---|---|
| ARM_TAI_001-100 (Taille) | `armures/taille/` | 100 |
| FLO_001-100 (Flore) | `materiaux/flore/` | 100 |

---

## ÉTAPE 28 — Faune (MOB_*) : ~256 fiches 🐾 ✅ CLOS (2026-07-10)

Selon CDC-FAU-01 (D41), plages D6 strictes, loot `MAT_*` existants.

| Territoire | Nb | Territoire | Nb |
|---|---|---|---|
| Salamander | 20 | Sylph | 20 |
| Cait Sith | 20 | Puca | 20 |
| Imp | 20 | Gnome | 20 |
| Leprechaun | 20 | Spriggan | 20 |
| Undine | 20 | Neutre | 20 |
| Air | 6 | Yggdrasil | 20 |
| Jotunheimr | 15 | Aincrad | 15 |

**Total : 256 fiches** (gabarit D17, loot, zones référencées).

---

## ÉTAPE 29 — Quêtes (CDC-QST-01) : 33 fiches 📜 ✅ CLOS (2026-07-10)

Dette `QST_SYL_HELKA_01` + 3 quêtes par localité (A = amorce fil rouge, B = chaîne éco, C = daily).

| Ville | A | B | C |
|---|---|---|---|
| Gattan | QST_SAL_OMBRE_01 | QST_SAL_LAVE_01 | QST_SAL_COMBAT_01 |
| Alne | (pré-existante) | QST_NEU_CARTE_01 | QST_NEU_LIVRAISON_01 |
| Swilvane | QST_SYL_VENT_01 | QST_SYL_HELKA_01 | QST_SYL_VOL_01 |
| Freelia | QST_CAI_FAMILIER_01 | QST_CAI_CHASSE_01 | QST_CAI_CUEILLETTE_01 |
| Archipel | QST_UND_EAU_01 | QST_UND_PECHE_01 | QST_UND_SOIN_01 |
| Lioda | QST_PUC_PARTITION_01 | QST_PUC_ACCORD_01 | QST_PUC_CONCERT_01 |
| Duskarn | QST_IMP_OMBRE_01 | QST_IMP_POISON_01 | QST_IMP_VISION_01 |
| Granzam | QST_GNO_GEM_01 | QST_GNO_MINE_01 | QST_GNO_FORGE_01 |
| Brokkheim | QST_LEP_FORGE_01 | QST_LEP_ALLIAGE_01 | QST_LEP_MARTEAU_01 |
| Penwether | QST_SPR_ILLUSION_01 | QST_SPR_RELIQUE_01 | QST_SPR_SPECTRE_01 |
| Voulg | QST_VOU_ARENE_01 | QST_VOU_EXPLOSIF_01 | QST_VOU_GARNISON_01 |

---

## ÉTAPE 30 — Tenues défaut OFT : 55 fiches 👕 ✅ CLOS (2026-07-10)

Selon CDC-OFT-01 (D46) : 22 hauts `OFT_TOP_001-022` (11 t-shirts régionaux + 11 alternatifs) + 33 bas `OFT_BOT_001-033` (11 pantalons + 11 shorts + 11 robes F). T0, 1 DEF, 10 Yrds. Attribués à la création selon ville + genre. Commandes `!equiper`/`!outfit` déjà actées.

---

## ÉTAPE 31 — Amendements items : MAT_WOD + CSM_NOU + 7 micro-familles 📦 ✅ CLOS (2026-07-10)

**Famille bois manquante** (D58) : `MAT_WOD_001-020` (bois d'If → Bois Spectral, T1-T4, 20 fichiers).

**Élargissement CSM_NOU** : 25 nouvelles nourritures/boissons (036-060) — bières, vins, ragoûts, desserts, buffs variés.

**7 micro-familles** (signatures de ville manquantes) :

| Catégorie | IDs | Nb | Signature |
|---|---|---|---|
| Explosifs | `EXP_001-010` | 10 | Obus Voulg |
| Teintures | `DYE_001-010` | 10 | Couleur Swilvane |
| Parfums | `PERF_001-010` | 10 | Luxe Alne |
| Ailes d'apparat | `WNG_001-010` | 10 | Cosmétique Sylph |
| Runes | `RUN_001-010` | 10 | Enchantement |
| Informations | `INT_001-010` | 10 | Rumeurs/réseaux |
| Traite | `SLA_001-005` | 5 | Marché noir |

---

## ÉTAPE 32 — Dernières dettes : index quêtes + commandes + résolutions 📋 ✅ CLOS (2026-07-10)

- `_index_quetes.md` créé (33 quêtes listées, 20 T5 en `[BESOIN_QUETE]`)
- `!recolter` propagé dans `whatsapp_commands_list.md` et `ai_orchestrator_commands.md`
- `!outfit` vérifié (présent dans les 3 couches)
- `[REF_A_CONFIRMER]` résolus dans 6 fichiers (boss axe vertical → `[TODO]`)

---

## ✅ PROJET ALO — TERMINÉ

Tous les lots des 11 CDC de délégation (00-10) sont livrés. **~4 000 fichiers markdown** couvrant l'intégralité du game design d'Alfheim Online : PNJ, items, boutiques, armures, faune, flore, quêtes, tenues, commandes, index.

Prochaines étapes possibles (hors directive PE actuelle) :
- 20 quêtes T5 pour les skills T5
- Boss d'axe vertical (Yggdrasil, Jötunheimr, New Aincrad)
- Audit de conformité final
- Équilibrage économique (prix, drop rates)
- Implémentation technique (base de données, bot Discord/WhatsApp)

---


## ÉTAPE 33 — Quêtes de titre T5 : apurement dette skills (20 fiches) 🏆 ✅ CLOS (2026-07-10)

**Objectif** : produire les 20 quêtes de titre T5 (`QST_T5_*`) — seule dette structurelle ouverte *à l'intérieur* d'un lot déjà livré (index quêtes §3 + index skills §6). Chaque skill T5 (jamais achetable) exigeait une quête de déblocage inexistante.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 33.1 | ➕ Créé — **10 quêtes de titre T5 magies** `qst_t5_mag_<eco>_01.md` (FEU/VEN/EAU/GUE/TER/GLA/FOU/TEN/LUM/SUP). Donneur = enseignant confirmé de l'école ; épreuve ancrée sur donjon/boss/zone existant (Caldeira/Logi, Gouffre/Jörmun, Mine/Mithrandur, Caverne/Skreech, Nécropole/Pennroth, Atelier/MK-0, Amphithéâtre/Ondaro, Racines Yggdrasil, cimes Jötunheimr, Hautes Tours Swilvane). Réutilise les jauges D11/D12 (Surchauffe, Apnée, Vacarme, froid). | `game_design/quetes/qst_t5_mag_*_01.md` (10) |
| 33.2 | ➕ Créé — **10 quêtes de titre T5 OSS** `qst_t5_oss_<arm>_01.md` (EPE/EP2/KAT/RAP/DAG/LAN/HAC/MAS/ARC/JET). Donneur = entraîneur d'arme confirmé ; épreuve = maîtrise signature (Starburst dual-wield, Amakakeru iai, Mother's Rosario 11 estocs/hommage Yuuki canon, Gungnir estoc parfait, Sköll cibles mobiles `MOB_AIR_*`…). | `game_design/quetes/qst_t5_oss_*_01.md` (10) |
| 33.3 | ✏️ Modifié — `_index_quetes.md` : couverture 33→**53**, statut 🟡→✅ CLOS, §3 [BESOIN_*] apuré, **§5 nouvelle** (2 tables détaillant les 20 titres : QST_ID / skill / donneur / ancrage / titre). | `game_design/quetes/_index_quetes.md` |
| 33.4 | ✏️ Modifié — `_index_skills.md` §6 [TODO] : dette « quêtes de titre T5 » marquée **APURÉE** (renvoi index quêtes §5). | `competences_magie/_index_skills.md` |
| 33.5 | ✏️ Modifié — Fichiers d'état. | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **D67** : gabarit **quête de titre T5** — Type « Quête de titre T5 » ; skill débloqué explicite ; donneur = SKILL_MASTER enseignant de l'école/famille (confirmé, index skills §5) ; prérequis Niveau 45 + maîtrise du tier précédent (+ affinité raciale ≥ 80 pour magies / maîtrise d'arme Avancé pour OSS) ; épreuve **ancrée sur un donjon/boss/zone existant** (jamais d'ID inventé) ; récompense 5 000 EXP + Titre (`!titre_set`) + skill T5.
- **Complétude commandes** : ✅ rien à propager — déblocage `!learn_skill` → `SYS_GRANT_SPELL`/`SYS_GRANT_OSS` (existants), titres `!titre_set` (existant). Aucune commande nouvelle.

### État de sortie

Lot quêtes **53/53** (33 localité + 20 titres T5). Dette « 20 quêtes T5 skills » **close** dans les deux index (quêtes §3/§5, skills §6). Chaque `MAG_*_010` et OSS T5 est désormais accessible en jeu. Dettes comparables restant ouvertes (hors périmètre de cette étape) : quêtes de légendaires `WPN_LEG_*`/`LEG_002/003` ; boss d'axe vertical (Yggdrasil/Jötunheimr/New Aincrad, `[TODO]`).

---

## ÉTAPE 34 — Quêtes de légendaires `WPN_LEG` : 4 fiches + correction d'ID atlas ⚔️ ✅ CLOS (2026-07-10)

**Objectif** : produire les 4 quêtes d'acquisition des armes légendaires `WPN_LEG_001-004` (dette comparable aux T5, relevée en clôture de l'étape 33 et à l'index armes §5). Chaque légendaire (T5, liée à l'âme) exigeait une quête serveur inexistante.

### Constat structurel (audit d'entrée)

Les fiches `WPN_LEG_002`/`003` référençaient `ZONE_JOT_DUN_001` — **ID fantôme absent de l'atlas maître**, qui formalise Jötunheimr autrement : `ZONE_JOT_FLD_001` (Abysse, item-clé « Clé de Glace », vol OFF) → `ZONE_JOT_RAID_001` (Trône de Thrym / Thrymheim, boss `BOSS_JOT_001` Thrym, dont Excalibur est le cœur énergétique). Résolution retenue = ancrer sur les IDs réels + corriger les fiches d'armes (atlas prime, règle L).

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 34.1 | ➕ Créé — **4 quêtes de légendaires** `qst_leg_001-004`. `QST_LEG_001` Gram (raid Voulg vs Eugene, donneur Kagemune `NPC_GAT_01`) · `QST_LEG_002` Excalibur (grande quête serveur, donneur Kirito `NPC_CANON_KIRITO`, Abysse→Trône de Thrym `BOSS_JOT_001`, minuterie d'effacement serveur) · `QST_LEG_003` Calibur/Shekinah (quête sœur, donneuse Sinon `NPC_CANON_SINON`, épreuve d'archerie Cait Sith) · `QST_LEG_004` Crest of Yggdrasil (forge unique Lisbeth `NPC_CANON_LISBETH`, **prérequis titre `QST_T5_OSS_RAP_01`**, héritage Yuuki→Asuna). | `game_design/quetes/qst_leg_*.md` (4) |
| 34.2 | 🔧 Corrigé — ID fantôme `ZONE_JOT_DUN_001` → `ZONE_JOT_RAID_001` (atlas) dans `WPN_LEG_002`/`003` ; ajout des renvois `QST_LEG_*` dans les 4 fiches d'armes (colonne Source). | `armes/legendaires/wpn_leg_001-004_*.md` |
| 34.3 | ✏️ Modifié — `_index_quetes.md` : couverture 53→**57**, **§6 nouvelle** (table des 4 légendaires + chaînages), §4 [QUESTIONS_LOT] pt.1 résolu. | `game_design/quetes/_index_quetes.md` |
| 34.4 | ✏️ Modifié — `_index_armes.md` : §5 [TODO] `ZONE_JOT_DUN_001` marqué RÉSOLU ; table légendaires §3 recolonnée « Quête d'acquisition » avec les `QST_LEG_*`. | `items_equipements/armes/_index_armes.md` |
| 34.5 | ✏️ Modifié — Fichiers d'état. | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **D68** : gabarit **quête de légendaire** — Type explicite (Raid / Grande Quête serveur / Forge unique) ; arme débloquée `WPN_LEG_*` liée à l'âme via `SYS_GRANT_ITEM` (bind-on-pickup) ; donneur = figure canon ou notable `is_essential` ; épreuve ancrée sur IDs **réels de l'atlas** (jamais d'ID inventé) ; EXP serveur 8 000–10 000, pas de revente/allocation boutique.
- **Résolution d'atlas** : `ZONE_JOT_DUN_001` déclaré fantôme et banni ; toute référence Jötunheimr passe par `ZONE_JOT_FLD_001` (Abysse) et `ZONE_JOT_RAID_001` (Trône de Thrym, `BOSS_JOT_001`).
- **Complétude commandes** : ✅ rien à propager (`SYS_GRANT_ITEM`, `!equiper`/`!inspect`/`!forge` existants).

### État de sortie

Lot quêtes **57/57** (33 localité + 20 titres T5 + 4 légendaires). Dette « quêtes de légendaires » **close** (index quêtes §6, index armes §5). Chaîne remarquable établie : Rapière T5 (`QST_T5_OSS_RAP_01`) → légendaire Undine (`QST_LEG_004`). Restent ouverts (hors périmètre) : **boss d'axe vertical** hors Thrym (Yggdrasil `ZONE_YGG_DUN_001`, paliers New Aincrad `BOSS_JOT_001` étant désormais raccroché), équilibrage économique, audit de conformité final.

---

## ÉTAPE 35 — Boss d'axe vertical (Yggdrasil & New Aincrad) : nommés + normalisation 🗼 ✅ CLOS (2026-07-10)

**Objectif** : combler la dette `[TODO]` des boss d'axe vertical (Dôme d'Yggdrasil + paliers New Aincrad), dernière ligne de la « Prochaine étape ».

### Constat d'entrée (audit)

- **Yggdrasil** : mobs `MOB_YGG_*` et gardiens d'essaim (`golden_knights_yggdrasil.md`) présents, mais **aucun boss RAID nommé** de la Grand Quest (`ZONE_YGG_DUN_001`) — trou réel.
- **New Aincrad** : **200 fichiers `boss_palier_*` pré-générés NON conformes** (2 boss/palier, boilerplate « Lore Procédural » copié-collé, système « Prime » sans `ID Monstre`, **canon massacré** — « Skull Reaper » sur paliers 51/73/74/86/89 au lieu du F75). Seule fiche conforme : `geant_4_bras_palier_27.md` (`BOSS_AIN_027`, gabarit Wiki ALO, canon Yuuki).

### Décision de design

Règle atlas **D3** : les paliers d'Aincrad sont **éphémères** (`!dungeon_queue`) — 100 fiches permanentes contrediraient le design et seraient du filler (interdit persona). Résolution : **boss nommés/canon en fiches riches + gabarit paramétrique** pour les paliers génériques ; junk archivé.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 35.1 | 📦 Archivé — 200 fiches junk `boss_palier_*` (2/palier) déplacées | `ressources_brutes/deprecated_v1/boss_aincrad_junk/` |
| 35.2 | ➕ Créé — **`BOSS_YGG_001` Le Gardien du Dôme** (boss RAID de la Grand Quest, noyau du Programme de Rétention d'Oberon, essaim Golden Knights, faible Lumière `MAG_LUM_010`, déverrouille `ZONE_YGG_TOP_001`) | `monstres/yggdrasil/boss_ygg_001_gardien_du_dome.md` |
| 35.3 | ➕ Créé — **4 boss nommés New Aincrad** : `BOSS_AIN_001` Illfang (piège du nodachi/Diavel), `BOSS_AIN_074` The Gleam Eyes (récompense Dual Blades `OSS_EPE_001`), `BOSS_AIN_075` The Skull Reaper (14 morts, Heathcliff=Kayaba), `BOSS_AIN_100` Le Souverain Écarlate (apex inédit, Manteau d'Adaptation force diversité d'écoles) | `boss_aincrad/boss_ain_{001,074,075,100}_*.md` |
| 35.4 | 🔧 Consolidé — `geant_4_bras_palier_27.md` → `boss_aincrad/boss_ain_027_geant_4_bras.md` (regroupement du corpus `BOSS_AIN_*`, 0 réf entrante cassée) | `boss_aincrad/boss_ain_027_geant_4_bras.md` |
| 35.5 | ➕ Créé — **`_index_boss_axe_vertical.md`** : convention `BOSS_YGG/JOT/AIN_*`, roster 7 boss nommés, **gabarit de scaling paramétrique** des paliers génériques (§3), chaînages skills/loot/commandes | `personnages_bestiaire/_index_boss_axe_vertical.md` |
| 35.6 | ✏️ Modifié — Atlas §4.11 : `BOSS_YGG_001` ajouté au Dôme ; ligne paliers → `BOSS_AIN_<NNN>` + renvoi index ; note structurelle enrichie (nommés vs profil paramétrique) | `cartographie/atlas_monde_liaisons.md` |
| 35.7 | ✏️ Modifié — Fichiers d'état | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **D69** : gabarit **boss d'axe vertical** = « Wiki ALO » 5 sections (`ID Monstre: BOSS_*`), canon préservé, loot anti-farm (déblocage de zone + titre serveur `!titre_set` + gravure Monument, pas de Yrds monnayables) ; interactions skills obligatoires (faiblesse Lumière YGG, fenêtre Dual Blades AIN_074, Manteau d'Adaptation AIN_100).
- **D70** : **paliers New Aincrad = profil paramétrique** (fonction de N), pas 100 fiches permanentes (cohérent atlas D3, éphémère `!dungeon_queue`). Boss nommés `BOSS_AIN_001/027/074/075/100` surchargent le profil ; le reste est instancié à la volée.
- **Complétude commandes** : ✅ rien à propager (`!dungeon_queue`, `!dome_enter`/`!dome_log`, `!sys_spawn_boss`, `SYS_LOG_RAID`, `!bounty`, `!titre_set`, `SYS_GRANT_ITEM` existants).

### État de sortie

Axe vertical **bouclé** : Yggdrasil (Gardien du Dôme → Sommet), Jötunheimr (Thrym, étape 34), New Aincrad (5 boss nommés + gabarit paramétrique + index). Junk archivé (rien perdu). Endgame double (vertical Grand Quest / horizontal 100 paliers) désormais fiché. Plus aucune dette `[TODO]` d'axe vertical.

---

## ÉTAPE 36 — Audit de conformité final (chantier transverse) 🔍 ✅ CLOS (2026-07-10)

**Objectif** : premier des deux chantiers transverses restants (audit de conformité, puis équilibrage économique). Détecter et résoudre les violations de conformité résiduelles laissées par les sessions parallèles/délégations : junk co-résident, doublons d'ID inter-dossiers, ID fantômes, gabarits divergents, séquences incomplètes. Livrable : rapport d'audit + résolutions vérifiées mécaniquement. Rien supprimé (tout junk → `deprecated_v1/`).

### Findings & résolutions

| # | Défaut | Statut | Action |
|---|---|---|---|
| A | **Junk d'armures co-résident** (étapes 26-27 ont créé les lots conformes sans archiver le pré-généré remplacé) | ✅ RÉSOLU | 240 archivés → `deprecated_v1/armures_junk/<slot>/` : tête 100 (lot doublon UPPER_BARE), torse 57, jambes 29, bras 34, taille 20 (hash `arm_NNN` + `arm_canon_*` dégénérés + strays). Chaque slot = **100 conformes (`_001`→`_100`) + index** |
| B | **Faune legacy `mobs_sauvages/`** en doublon d'ID avec le lot autoritaire `monstres/` (étape 28) | ✅ RÉSOLU | 223 archivés → `deprecated_v1/mobs_sauvages_legacy/` (100 `MOB_CANON` hash + 172 zones_neutres + doublons `MOB_<race>_NNN` + orphelins). Test sûreté : **0 ID à la fois référencé live ET absent de `monstres/`**. Faune autoritaire = `monstres/` (259) |
| C | **Dossier parasite `items_equipements/skills/`** : 300 doublons `OSS/MAG/PAS` (intersection 300 communs / 0 unique) — étape 19 n'avait purgé que les `SKL_*` | ✅ RÉSOLU | 303 archivés → `deprecated_v1/skills_parasite_oss_mag_pas/`. Lot autoritaire = `competences_magie/`. 300 collisions d'ID skill éliminées |
| D | **Index `taille` manquant** (les 4 autres slots l'avaient) | ✅ RÉSOLU | Créé `armures/taille/_index_armures_taille.md` (100/100, grille, organisation par ville, registre 001-100) |
| E | **ID fantôme `ZONE_JOT_DUN_001`** (4 occurrences) | ✅ FAUX POSITIF | Toutes en notes de résolution étape 34 (barré/négation), aucun renvoi live. L'étape 34 avait bien corrigé |
| F | **Variances de gabarit** (lot taille : rampe plate T1-T4/labels EN/pas de T5 ; casse nom fichier armures tête vs autres) | 📝 DOCUMENTÉ | **D71** actée |

### Décisions actées

- **D71** : la **clé canonique** d'un item/entité = son `Item_ID` interne (uniforme, séquentiel `<PFX>_<NNN>`), **jamais le nom de fichier**. Casse/slug non autoritatifs ; divergences cosmétiques héritées non corrigées en masse (churn/risque nuls, gain structurel nul). Futur chargeur bot (P3) indexe par `Item_ID`.
- Règle de purge réaffirmée : tout lot conforme qui **remplace** un lot pré-généré DOIT archiver l'ancien dans `deprecated_v1/` dans la même étape (la dette A/B/C venait de son non-respect en sessions parallèles).

### État de sortie

**766 fichiers non conformes archivés** cette étape (240 armures + 223 faune + 303 skills ; rien perdu, 0 ID unique sacrifié). **0 collision d'ID en titre** (MOB/OSS/MAG/PAS/ARM, vérifié). Corpus actif ramené de ~3 865 à **3 406 `.md`** conformes. Rapport détaillé : `directives_generation/11_audit_conformite_etape36.md`. **Complétude commandes** : rien à propager (opération purement structurelle). Chantier transverse restant : **équilibrage économique** (prix/drop rates).

---

## ÉTAPE 38 — Étude d'architecture IA « constellation de petites IA mono-tâche » (P3) 🧠 ✅ CLOS (2026-07-10)

**Contexte** : à la demande du PE, étude approfondie de l'option « plusieurs petites IA faisant chacune une seule chose correctement » (dialogue/PNJ, combat, Game Master, tâches système), analysée sur performances / méthode / coûts / cohérence / pannes / sécurité / contrainte free tier Oracle. **Consultation P3 (implémentation technique), livrable markdown, zéro code.** *(Numérotation étape 38 + fichier `13_` : réconciliation avec une session parallèle ayant consommé « étape 37 » et le préfixe `12_` pour l'équilibrage économique — aucun écrasement.)*

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 38.1 | ➕ Créé — **Étude multi-IA** : définition des 3 implémentations d'une « petite IA » (prompt-spécialisé / modèle local / fine-tune LoRA) ; roster de **10 spécialistes** (S0-S9, contrat IN/OUT/modèle/état/fréquence/criticité) ; frontière déterministe absolue (combat/éco jamais neuronaux) ; dispatcher hybride ; analyses latence/débit/tokens/coût chiffrées ; grounding RAG + verrou D22 comme contrat de récupération ; dégradation gracieuse ; sécurité anti-injection ; répartition free tier ARM ; matrice modèle↔spécialiste ; tableau récap multi-paramètres. | `directives_generation/13_etude_architecture_multi_ia.md` |
| 38.2 | ✏️ Modifié — Fichiers d'état. | `alo_context.md`, `alo_progression.md` |

### Décisions actées (P3, sous réserve de feu vert d'implémentation PE)

- **D-IA-1** : « petite IA » = prompt-spécialisé sur modèle partagé + RAG (défaut) ; modèle local 1B en fallback (routage/modération/embeddings) ; fine-tune LoRA différé (le RAG bat le fine-tune sur la factualité).
- **D-IA-2** : dispatcher hybride règles→micro-classifieur, cible >70 % des messages routés sans LLM payant.
- **D-IA-3** : frontière déterministe absolue — combat, économie, inventaire, déplacement (R0), jauges D11/D12, déblocages ne sont JAMAIS des IA ; l'IA propose `SYS_*`, le moteur L1 valide et écrit (seul écrivain de l'état, locking anti-dup persona §2.2).
- **D-IA-4** : RAG = cerveau factuel partagé unique sur les ~3 400 fiches ; verrou méta D22 = contrat de récupération (K3 jamais injectés au LLM).
- **D-IA-5** : génération narrative en API, tâches courtes/parallélisables en local (imposé par l'absence de GPU sur le free tier ; inférence CPU sérielle = goulot à l'échelle).
- **D-IA-6** : tiering Haiku (défaut) / Sonnet (enjeu) / Opus (exceptionnel) + cache de prompt par lieu + Batch API pour le scribe mémoire.

### État de sortie

Étude complète livrée. La taxonomie de commandes existante (`!*`/`!sys_*`/`SYS_*`) identifiée comme **interface de tool-calling déjà en place**. Aucune donnée de jeu modifiée (étude P3 pure). **Complétude commandes** : rien à propager. Prochaine marche possible (si PE valide) : CDC du RAG (chunking par section de gabarit) → contrats des 10 spécialistes → spéc dispatcher → matrice de dégradation → (implémentation Node.js, décision PE séparée).

---

## ÉTAPE 39 — Étude détaillée : architecture hybride « Local + API gratuites + Fallback + RAG » prête à l'expansion (P3) 🌐 ✅ CLOS (2026-07-10)

**Contexte** : à la demande du PE (« penser loin » — concevoir dès 300 joueurs pour éviter une refonte à l'expansion, désengorger les voies par décentralisation). Approfondissement de l'approche hybride. **Consultation P3, livrable markdown, zéro code.**

### Correction conceptuelle actée (colonne vertébrale)

- **Loi de conception** : décomposer en agents **ne réduit pas** le travail total (chaîner augmente même légèrement les tokens) — ça le **distribue**, le rend **sans état**, donc **extensible par ajout de capacité, jamais par réécriture**. Le gain réel = absence de goulot unique + expansion sans refonte, via **distribution + statelessness + cache + bon dimensionnement**. (Nuance apportée à la thèse PE « plus d'agents = moins de consommation ».)

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 39.1 | ➕ Créé — **Étude hybride détaillée** : cascade de 4 couches (C1 local / C2 API gratuites / C3 fallback payant / C4 dégradé déterministe) ; matrice rôle×backend (politique de backend par spécialiste) ; mécanisme de désengorgement (diversification de quotas + load-balancer *quota-aware* + circuit breaker + failover) ; dégradation gracieuse à 4 niveaux chiffrée ; RAG local partagé répliquable/shardable ; **statelessness stricte** = clé anti-refonte ; sharding par lieu (clé `ZONE_*`/`T_WA_GROUPS` existante) ; budget latence parallélisé ; modèle de consommation honnête 300→3k→30k ; interface agnostique `generate(role,prompt,contexte,politique)` ; comptabilité quotas/santé ; cohérence inter-modèles ; sécurité/données par fournisseur ; chemin d'expansion « tout par config/capacité, jamais réécriture ». | `directives_generation/14_architecture_hybride_orchestration.md` |
| 39.2 | ✏️ Modifié — Fichiers d'état. | `alo_context.md`, `alo_progression.md` |

### Décisions actées (P3, sous réserve de feu vert d'implémentation PE)

- **D-IA-7** : échelle de départ ~300 joueurs, **conçue pour l'expansion** — « câble 10 rôles, déploie-en 4 » (coutures dimensionnées, déploiement réduit ; anti-YAGNI).
- **D-IA-8** *(révisée — décision PE « 100 % gratuit »)* : cascade de 4 couches **entièrement gratuite** — C1 local / **C2 = 2 meilleures API gratuites (Groq + Gemini Flash)** / **C3 = pool des autres API gratuites (Cerebras, Cloudflare Workers AI, OpenRouter `:free`, Mistral, HuggingFace, GitHub Models)** / C4 dégradé déterministe. **Aucun palier payant** ; le payant reste une option de config (D-IA-11) désactivée par défaut, jamais une dépendance → réversible sans réécriture. Réserve actée : auditer les CGU (usage commercial / entraînement sur données) fournisseur par fournisseur avant lancement public.
- **D-IA-9** : désengorgement par **diversification de quotas** (primaires sur fournisseurs distincts → budget gratuit effectif = Σ fournisseurs) + load-balancer *quota-aware* (seaux à jetons, bascule à 90 %) + circuit breaker + failover en cascade.
- **D-IA-10** : **statelessness stricte** de tous les spécialistes (état exclusivement en L1/base MLD) → scale-out horizontal + sharding par lieu, **sans refonte**.
- **D-IA-11** : **interface agnostique au fournisseur** `generate(role, prompt, contexte, politique)` = seule abstraction à figer dès le jour 1 ; changement fournisseur/échelle = configuration de politique.
- **D-IA-12** : données sensibles (K3/D22, PII, modération) **jamais délocalisées** — restent en C1 ; fournisseurs gratuits ne voient que des IDs de jeu.

### État de sortie

Objectif PE atteint sur le papier : l'expansion (300→3k→30k) devient **additive** (config + capacité), jamais destructive, grâce à statelessness + agnosticisme fournisseur + sharding par clé de lieu déjà existante. Aucune donnée de jeu modifiée. **Complétude commandes** : rien à propager. Prochaine marche possible (si PE valide) : CDC du RAG → contrats des 4 spécialistes de départ + leurs politiques de backend → spéc de l'interface `generate` → spéc du load-balancer → matrice de dégradation → (implémentation Node.js, décision PE séparée).

*(Note étape 39-bis : révision D-IA-8 → stack **100 % gratuit** décidé par le PE — C2 = 2 meilleures API gratuites (Groq + Gemini Flash), C3 = pool des autres gratuites (Cerebras, Cloudflare, OpenRouter `:free`, Mistral, HuggingFace, GitHub Models), C4 dégradé déterministe ; aucun palier payant, réversible par config ; réserve CGU à auditer.)*

---

## ÉTAPE 40 — CDC-RAG-01 : cahier des charges du RAG (cerveau factuel partagé) (P3) 📚 ✅ CLOS (2026-07-10)

**Contexte** : à la demande du PE, production du CDC du RAG — fondation dont dépendent tous les spécialistes narratifs (13/14). **Livrable markdown, zéro code.**

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 40.1 | ➕ Créé — **CDC-RAG-01** : inventaire du corpus (~3 406 fiches, 15 types d'entité) ; **chunking par section de gabarit** (D13/D17/D67/D68/D69) ; schéma de métadonnées (clé = `entity_id` D71) ; **règles d'exclusion critiques** (K3/méta/secret jamais indexés = verrou D22 comme propriété de l'index) ; pipeline d'indexation (exclusion avant chunk) ; découpage par type ; **contrat de récupération borné par spécialiste** (filtres/top-k/budget) ; **gating K0/K1/K2** via état L1, K3 jamais ; format d'injection attribué `[entity_id · section]` ; fraîcheur incrémentale par hash ; stockage C1 local (embedding small CPU + `sqlite-vec`/`pgvector`) ; garde-fous anti-hallucination (grounding S7, seuil, validation ID aval L1) ; critères d'acceptation ; backlog (corpus SAO exclu du RAG primaire). | `directives_generation/15_cdc_rag.md` |
| 40.2 | ✏️ Modifié — Fichiers d'état. | `alo_context.md`, `alo_progression.md` |

### Décisions actées (P3, sous réserve de feu vert d'implémentation PE)

- **D-RAG-1** : chunking par section de gabarit (jamais fenêtre aveugle) ; sous-découpage à chevauchement 15 % au-delà de ~400 tokens.
- **D-RAG-2** : exclusion **à l'ingestion** des sections K3/méta/secret → verrou D22 = propriété de l'index, pas consigne de prompt.
- **D-RAG-3** : schéma de métadonnées (clé `entity_id` canonique D71) → récupération chirurgicale filtres durs + sémantique.
- **D-RAG-4** : gating K0/K1/K2 via état L1 (`SYS_NPC_KNOWLEDGE_UNLOCK`) ; K3 jamais indexé.
- **D-RAG-5** : contrat de récupération borné par spécialiste (filtres/top-k/budget tokens) → prompts petits (cache + économie quota gratuit).
- **D-RAG-6** : injection attribuée `[entity_id · section]` (grounding/citation) ; placement après système figé, avant volatil.
- **D-RAG-7** : RAG exclusivement local C1, sans état, répliquable/shardable ; embedding small multilingue CPU + magasin vectoriel embarqué.
- **D-RAG-8** : anti-hallucination (grounding S7 obligatoire, seuil de pertinence, « je ne sais pas » plutôt qu'inventer, validation ID aval par L1).
- **D-RAG-9** : ré-indexation incrémentale par hash → changer une fiche = constellation à jour sans réentraînement.
- **Complétude commandes** : `!sys_rag_reindex` / `SYS_RAG_REINDEX` spécifiés en `[BESOIN_COMMANDE]`, à propager **à l'implémentation** (couche bot P3, feu vert PE requis).

### État de sortie

CDC-RAG-01 complet et ancré sur les gabarits/verrous réels du corpus. Aucune donnée de jeu modifiée. Prochaine marche possible (si PE valide) : contrats des 4 spécialistes de départ + politiques de backend → spéc interface `generate` → spéc load-balancer *quota-aware* → matrice de dégradation → (implémentation Node.js, décision PE séparée).

---

## ÉTAPE 41 — CDC d'implémentation de la couche IA (NLU + spécialistes + orchestration + moteur déterministe) + intégration `etude_deepseek.md` (P3) 🧩 ✅ CLOS (2026-07-10)

**Contexte** : à la demande du PE, production des CDC restants nécessaires à l'implémentation de la couche IA/bot, en **intégrant `etude_deepseek.md`** (racine projet) — apports concrets : runtime **ONNX**, **encodeurs** pour la compréhension, dialogue par **retrieval**, MLP de **comportement de mob**, plan de **bootstrapping**, budget RAM. **Livrables markdown, zéro code.**

### Réconciliation des sources (mes études 13/14/15 × DeepSeek)

- **Adopté de DeepSeek** : compréhension = **encodeurs ONNX** (MiniLM intent + BERT-tiny NER), pas de LLM 1B (5-25 ms vs 300-800 ms) ; **dialogue à 2 modes** (retrieval local ~90 % / génératif API ~10 %) ; **Template Engine** pour 90 % des réponses ; **comportement de mob = MLP/arbre** (comportement ≠ résolution) ; **bootstrapping** regex→BERT-tiny ; budget RAM ~4 Go/24.
- **Ligne conservée** : frontière déterministe absolue ; RAG = cerveau factuel (15) ; stack 100 % gratuit (14) ; L1 seul écrivain de l'état.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 41.1 | ➕ Créé — **CDC-NLU-01** : compréhension locale (Intent MiniLM + NER BERT-tiny via ONNX INT8), classes alignées sur les commandes `!*`, résolution d'entités en IDs canoniques (D71), regex jour-1 + bootstrapping, fallback, budget RAM. D-NLU-1→5. | `directives_generation/16_cdc_nlu_locale.md` |
| 41.2 | ➕ Créé — **CDC-SPE-01** : contrats des spécialistes narratifs S2-S7 (IN/OUT, appel `retrieve()`, `SYS_*`, mode retrieval/génératif, politique de backend, gabarit C4), dialogue à 2 modes, Template Engine, grounding. D-SPE-1→5. | `directives_generation/17_cdc_specialistes_narratifs.md` |
| 41.3 | ➕ Créé — **CDC-ORC-01** : interface agnostique `generate(role,prompt,contexte,politique)`, format de politique de backend, load-balancer *quota-aware* + circuit breaker + failover, dispatcher, boucle d'orchestration `SYS_*`, stack ONNX+Node+Redis, budget RAM consolidé, feuille de route P0-P6, observabilité. D-ORC-1→7. | `directives_generation/18_cdc_orchestration_runtime.md` |
| 41.4 | ➕ Créé — **CDC-DET-01** : moteur déterministe L1 (combat/mouvement Dijkstra+R0/éco/inventaire/XP/quêtes/jauges) + **contrat d'exécution `SYS_*`** (validation 6 étapes, L1 seul écrivain, hallucination d'ID rejetée) + exception ML « comportement de mob » (MLP imitation learning / arbre, comportement ≠ résolution). D-DET-1→4. | `directives_generation/19_cdc_moteur_deterministe.md` |
| 41.5 | ✏️ Modifié — Fichiers d'état. | `alo_context.md`, `alo_progression.md` |

### Décisions actées (P3, sous réserve feu vert d'implémentation PE)

- **D-NLU-1** : compréhension = encodeurs ONNX (jamais décodeur LLM). **D-SPE-1** : dialogue à 2 modes (retrieval défaut / génératif à enjeu). **D-SPE-2** : Template Engine = chemin nominal des tours triviaux + couche C4. **D-ORC-1** : interface agnostique `generate()` = seule abstraction figée jour-1. **D-ORC-4** : dispatcher > 70 % sans LLM payant. **D-ORC-7** : déterministe+RAG avant génératif. **D-DET-2** : contrat `SYS_*` validation 6 étapes, L1 seul écrivain. **D-DET-3** : comportement de mob ML autorisé (comportement ≠ résolution).
- **Complétude commandes** : `SYS_RAG_REINDEX`, `SYS_GRANT_PASSIVE` en `[BESOIN_COMMANDE]` ; vérifier le registre `SYS_*` (`ai_orchestrator_commands.md`) à l'implémentation (couche bot P3).

### État de sortie

**Jeu de CDC d'implémentation complet** pour la couche IA : compréhension (16), génération (17), orchestration/runtime (18), moteur déterministe & contrat `SYS_*` (19) — au-dessus de la fondation RAG (15) et des études d'architecture (13/14). `etude_deepseek.md` intégré et réconcilié (encodeurs, retrieval, MLP mob, bootstrapping, ONNX). Aucune donnée de jeu modifiée. Ordre d'implémentation acté (P0-P6, `18_` §9) : L1 déterministe + RAG **avant** le génératif. Reste : décision PE d'implémentation (Node.js).

---

## ÉTAPE 42 — CDC-MOD-01 : sélection & comparaison des modèles (supersede les choix DeepSeek) (P3) 🔬 ✅ CLOS (2026-07-10)

**Contexte** : à la demande du PE, comparaison tâche par tâche des modèles de `etude_deepseek.md` et proposition de meilleurs modèles gratuits. **Correction majeure identifiée** : les choix DeepSeek (BERT-tiny, MiniLM-L6-v2, DistilGPT2) sont **anglophones** alors que le corpus/joueurs sont **francophones**. **Livrable markdown, zéro code.**

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 42.1 | ➕ Créé — **CDC-MOD-01** : tableau comparatif tâche×modèle (DeepSeek vs meilleure proposition gratuite), détail par tâche (intent, NER, embeddings, comportement mob, génération), budget RAM/latence recalculé, ce qu'on garde de DeepSeek. Autoritatif sur le choix des modèles (supersede 15/16/17/19). | `directives_generation/20_cdc_selection_modeles.md` |
| 42.2 | ✏️ Modifié — Fichiers d'état. | `alo_context.md`, `alo_progression.md` |

### Décisions actées (P3)

- **D-MOD-1** : **modèles multilingues/FR-natifs** partout (corpus francophone) — supersede les modèles anglophones de DeepSeek.
- **D-MOD-2** : **`multilingual-e5-small` = embedding UNIQUE** partagé RAG+dialogue+intent ; magasin `sqlite-vec` unifié (`-base`/`BGE-M3` en option qualité).
- **D-MOD-3** : **résolution d'entités = gazetteer (index nom→ID) primaire** + petit NER FR (DistilCamemBERT/spaCy) — plus juste/rapide que BERT-tiny sur le domaine (les entités sont les IDs inventés du jeu).
- **D-MOD-4** : **comportement de mob = Behavior Tree / Utility AI *authored*** (contrôle designer D10/D11) ; LightGBM→ONNX en option ; jamais un MLP boîte-noire par défaut.
- **D-MOD-5** : **génération narrative priorité FR** — Mistral (FR-natif) + Gemini Flash montent dans les politiques narratives ; repli local Qwen2.5-1.5B/Gemma-2-2B (≠ DistilGPT2).
- **D-MOD-6** : ONNX Runtime + encodeurs-compréhension + bootstrapping + Template Engine **conservés** de DeepSeek.

### État de sortie

Sélection de modèles arrêtée et **francisée**. Budget local recalculé ~0,4 Go IA (~4-5 Go/24 total). Réserve : identifiants exacts + quotas gratuits à revérifier au lancement ; tout modèle substituable par config (interface agnostique `18_`, sans refonte). Aucune donnée de jeu modifiée.

---

**Objectif** : dernier chantier transverse — calibrer l'économie du jeu sur les prix réels des items, formaliser les drop rates, ajuster les récompenses de quêtes T5/légendaires, et mettre à jour le balance sheet.

### Constat d'entrée

- **Balance sheet v1.0** (2026-07-06) sous-estimait massivement les prix réels (×1.5 à ×8 selon les catégories) — les items ayant été créés entre-temps avec des prix auto-cohérents, c'est le **sheet** qui devait être mis à jour, pas les items.
- **Drop rates** : non formalisés dans le balance sheet, mais les taux constatés sur le corpus faune sont calés (55-65% T1 commun, 100% boss, 35-60% donjon).
- **Quêtes T5** : 5 000 EXP flat, zéro Yrds — correct comme récompense symbolique, mais mérite un ajustement à la hausse (le vrai gain = skill débloqué).
- **Quêtes légendaires** : 8 000-10 000 EXP — dérisoire pour des quêtes niveau 75+ (<1% d'un niveau).  
- **Aucun package de départ** défini pour les nouveaux joueurs.

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 37.1 | ✏️ **Balance sheet v2.0** — toutes les valeurs recalibrées sur les prix réels constatés : armes T1 150-400 ¥, T4 14 000-20 000 ¥ ; armures T1 150-400 ¥/pièce, T4 14 000-20 000 ¥/pièce ; consommables gamme 12-2 400 ¥ ; matériaux 4-1 960 ¥. Grille de drop rates par type/tier. Courbe d'EXP/Niveau. Package départ (300 ¥ + consommables). Gold sinks classés par impact. | `données/the_seed_engine/stat_scaling/economy_balance_sheet.md` |
| 37.2 | ✏️ **10 quêtes T5 magies** : 5 000 EXP → 8 000 EXP + 500 Yrds | `game_design/quetes/qst_t5_mag_*.md` (×10) |
| 37.3 | ✏️ **10 quêtes T5 OSS** : 5 000 EXP → 8 000 EXP + 500 Yrds | `game_design/quetes/qst_t5_oss_*.md` (×10) |
| 37.4 | ✏️ **4 quêtes légendaires** : 8-10k EXP → 50 000 EXP + 2 000-5 000 Yrds + titre de prestige | `game_design/quetes/qst_leg_*.md` (×4) |
| 37.5 | ✏️ **Index quêtes** : §5 récompense T5 → 8 000 EXP + 500 Yrds ; §6 légendaires → 50 000 EXP + 2-5k Yrds + titre | `game_design/quetes/_index_quetes.md` |
| 37.6 | ➕ **Rapport d'équilibrage** complet : constats, décisions D72-D75, tests de cohérence | `directives_generation/12_equilibrage_economique.md` |
| 37.7 | ✏️ Fichiers d'état | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **D72** : le prix catalogue d'un item est celui de sa fiche, pas le balance sheet (le sheet est une grille de référence pour la création future).
- **D73** : les drop rates suivent une grille simple par type de mob × tier (pas de formule complexe). Chaque ligne de loot = roll indépendant.
- **D74** : les récompenses EXP/Yrds des quêtes T5 et légendaires sont volontairement modestes — le vrai gain est fonctionnel (skill ultime / arme unique liée).
- **D75** : package de départ = 300 ¥ + 3× Pain de Voyage + 3× Potion Soin Mineure + tenue régionale — permet d'acheter une arme T1 dès la création.

### Tests de cohérence

- **T1 abordable** : 300 ¥ départ + arme T1 la moins chère 150 ¥ = ✅ 150 ¥ restants
- **Set T1 à niveau 10** : ~900 ¥, revenu cumulé 400 ¥ (farm) + 200 ¥ (quêtes) = ✅ atteignable
- **Craft rentable** : marge ~20% (armes) à ~50% (potions) vs achat = ✅
- **Enchantement T5** : 300k ¥, ~100h de farm niveau 80+ = ✅ sink crédible
- **Citadelle guilde** : 3M ¥, guilde 100 membres, ~6 semaines = ✅ atteignable

### État de sortie

**28 fichiers modifiés** (1 balance sheet + 20 T5 + 4 légendaires + 1 index + 1 rapport + 1 état). **Tous les chantiers transverses sont clos.** Aucune dette structurelle résiduelle. Le projet ALO est intégralement livré : 11 CDC, audit de conformité, équilibrage économique.

---

## ÉTAPE 43 — Systèmes sociaux & mémoire relationnelle joueur↔PNJ 💍🏠💼 ✅ CLOS (2026-07-10)

**Contexte** : requête PE en deux volets. (1) « Comment le programme sait-il qu'un joueur a discuté N fois avec un PNJ, et quelles infos il possède ? » + side-quests conditionnées au haut niveau d'information. (2) Nouveaux verbes de vie : acheter/louer une maison, créer/rejoindre une guilde, avoir un métier (aubergiste…), se marier (homme+femme, monogame, séparation équitable) — avec avantages listés. + « revois/mets à jour les CDC concernés » + « vérifie si le persona correspond à la direction du projet ». **Livrable markdown/SQL-DDL, zéro code.**

### Constat d'entrée

- `T_NPC_KNOWLEDGE_UNLOCKS` (infos débloquées par avatar) existait, **mais aucun compteur d'interaction ni affinité** ⇒ impossible de savoir « combien de fois ».
- `T_BANK_VAULTS.owner_type` prévoyait déjà `'marriage'` — anticipé, jamais adossé à une table de mariage.
- `system_mechanics/marriage_housing_system.md` = **legacy en prose** non conforme aux règles PE (deux joueurs quelconques, pas de genre, achat seul, divorce à 50 % forfaitaire, pas de prérequis de foyer).
- Aucune table Housing / Marriage / Jobs. `T_GUILDS` sans mécanique « rejoindre ».

### Modifications

| # | Action | Fichier(s) |
|---|---|---|
| 43.1 | ➕ **`T_NPC_RELATIONS`** — arête creuse joueur↔PNJ créée à la 1ʳᵉ interaction (D-SOC-1) : `interaction_count`, affinité [−100,+100]→5 paliers, `topic_flags` ; triggers R1-R5 ; commandes `!relation`/`!offrir` | `MLD_Logic/table_t_npc_relations.md` |
| 43.2 | ➕ **`T_PROPERTIES`** — housing achat (`own`) **ou** location (`rent`) ; stockage massif, checkpoint sûr (`!home_return`/`!rest`), prérequis mariage ; grille 4 tiers ; triggers P1-P6 | `MLD_Logic/table_t_properties.md` |
| 43.3 | ➕ **`T_MARRIAGES` + `T_MARRIAGE_ASSETS`** — homme+femme (M1), monogame (index partiels M2), prérequis foyer (M3), coffre doublé (M4), séparation par provenance (M5), cadeau selon moyenne de niveau (M6) | `MLD_Logic/table_t_marriages.md` |
| 43.4 | ➕ **`T_JOBS_DICT` + `T_AVATAR_JOB`** — emploi salarié unique, 12 archétypes seed (aubergiste, garde…), salaire/service, promotion, réputation ; triggers J1-J5 | `MLD_Logic/table_t_jobs.md` |
| 43.5 | ✏️ **`T_AVATARS`** — colonnes sociales `marriage_uuid`/`home_property_uuid`/`job_id` (caches dénormalisés) + contrat A7 | `MLD_Logic/table_t_avatars.md` |
| 43.6 | ✏️ **`T_QUESTS_DICT`** — `prerequisites` étendu (`min_affinity_tier`/`qi_unlocked`/`topic_flag`/`requires_married`/`requires_home`) + trigger Q4 (side-quests sociales) | `MLD_Logic/table_t_quests_dict.md` |
| 43.7 | ✏️ **`T_GUILDS`** — mécanique « rejoindre » (invitation/candidature, G5) + commandes | `MLD_Logic/table_t_guilds.md` |
| 43.8 | ✏️ **`T_BANK`** — spéc coffre conjugal (doublé, provenance, clôture au divorce) | `MLD_Logic/table_t_bank.md` |
| 43.9 | ✏️ **`marriage_housing_system.md` v2.0** — réécrit, supersede le legacy (annexe de correspondance v1→v2) ; §0 mémoire relationnelle | `system_mechanics/marriage_housing_system.md` |
| 43.10 | ✏️ **Commandes propagées** — WA §15 (mariage/housing), §10 (rejoindre guilde), §20 (relations PNJ), **§23 nouvelle (emploi)** ; IA §10 (social étendu), §2 (relation-touch/get, affinité→table) | `whatsapp_commands_list.md`, `ai_orchestrator_commands.md` |
| 43.11 | ➕ **CDC-SOC-01** — cadre du pilier social, D-SOC-1→14, quotas SOC-1→4, `[BESOIN_*]` | `directives_generation/21_cdc_systemes_sociaux.md` |
| 43.12 | ✏️ **Persona amendé §5** (2026-07-10) — 3 filtres conservés ; ajout : phase data≠code, 4ᵉ pilier social, doctrine frontière déterministe | `system_persona_architecte.md` |
| 43.13 | ✏️ Fichiers d'état | `alo_context.md`, `alo_progression.md` |

### Décisions actées

- **D-SOC-1→14** (cf. `21_cdc_systemes_sociaux.md` §2). Points saillants : mémoire PNJ = arête creuse *lazy* (jamais pré-matérialisée à l'inscription — 11 M lignes évitées, filtre Développeur) ; side-quests conditionnées via `prerequisites` (pas de table dédiée) ; mariage homme+femme monogame ; séparation « chacun reprend ses apports » via registre de provenance ; housing = checkpoint sûr adossé à R0 ; emploi salarié ≠ skills de récolte.

### Vérification du persona (demande PE)

**Verdict : les 3 filtres (Dev/Game Designer/Scénariste) restent le bon ADN — conservés.** 3 recollages amendés (§5) : (1) phase actuelle = **données, pas code** (le Node.js est une cible d'implémentabilité, pas un livrable) ; (2) **4ᵉ pilier social** (rétention par le lien) ; (3) **doctrine IA à frontière déterministe** (combat/éco/prérequis jamais neuronaux — L1 seul écrivain). Aucune contradiction de fond ; le persona était combat/éco/lore-centrique et muet sur data-only + social + multi-IA.

### État de sortie

**13 lots** (4 nouvelles tables MLD + 4 tables existantes amendées + spec v2.0 + 2 registres de commandes + CDC + persona + états). Dette de commande **nulle** (tout propagé à la clôture). Restent les quotas de contenu SOC-1→4 délégables. Aucune donnée de jeu existante cassée.

### Addendum 43-bis — arbitrage PE sur les `[BESOIN_*]`

- **✅ Anneau d'Engagement = item de service dédié** (décision PE). Créé **`MSC_ENG_001`** (`données/items_equipements/service/`, `item_type='MSC'`, **sans stat**, lié/non-revendable, **consommé à la cérémonie**, 50 000 Yrds chez un bijoutier `SERVICE`). L'ancienne bague à stats `ACC_ANN_003` (+5 % toutes stats, lot accessoires gelé) est **dépréciée/redirigée** vers `MSC_ENG_001`. Références mises à jour : `T_MARRIAGES` M3, `marriage_housing_system.md`, CDC-SOC §4. **`[BESOIN_ITEM]` résolu.**
- **⏳ Auberge exploitable = backlog** (décision PE : reporté). `JOB_HOS_001` (Aubergiste) reste au service d'un aubergiste **PNJ** (`employer_type='npc'`) ; la boucle joueur-propriétaire-d'auberge ↔ location de `inn_room` n'est pas modélisée. `[BESOIN_ENTITE]` maintenu ouvert en backlog.
- Nouveau dossier `données/items_equipements/service/` inauguré pour les items de service (jetons/actes) ; +1 fichier créé, 1 fichier redirigé.

### Addendum 43-ter — délégation des quotas de contenu CDC-SOC (3 générateurs parallèles + orchestrateur)

Sur demande PE, les quotas SOC-1→4 ont été **délégués** (protocole D37). **124 fiches créées** au total, aucune régression.

| Lot | Livré | Emplacement | Générateur |
|---|---|---|---|
| SOC-1 Emplois | **66** (≥60) — 11/catégorie × 6, ≥5/ville × 11, ancrage racial, salaires 160-560 ¥ | `game_design/emplois/` + `_index_emplois.md` | délégué |
| SOC-2 Side-quests d'affinité | **22** (≥20) — 2/capitale, déblocage `trusted`(11)/`confidant`(11) + `qi_unlocked`, donneurs réels vérifiés | `game_design/quetes/qst_*_aff_*` + `_index_soc2_affinite.md` | délégué |
| SOC-3 Décorations | **36** (≥30) — 7 types (FUR/PLT/LGT/RUG/TRO/STA/FON), buffs ≤ +5 %, 9 races | `items_equipements/decoration/` + `_index_decoration.md` | délégué |
| SOC-4 Cadeaux de noces | table de tirage (bandes niveau→tier, 3 pools, L1) | `system_mechanics/wedding_gift_table.md` | orchestrateur |

**Préparation & réconciliation orchestrateur** :
- ➕ `item_type='DEC'` ajouté à l'enum `T_ITEMS_DICT` + trigger I4 ; ✏️ `T_PROPERTIES` P7 (clés `deco_buffs` figées, plafond ±5 %/logement).
- ✏️ `T_JOBS_DICT` §2 : pointeur vers le dictionnaire complet (66) ; ✏️ `_index_quetes.md` §7 + compteur **57→79** ; ➕ 2 titres honorifiques dans `T_TITLES` ; ✏️ CDC-SOC §3 (lots livrés) + §4-bis (arbitrage `[BESOIN_*]`).
- **Arbitrage `[BESOIN_*]`** : dague/pelage → items existants (`WPN_DAG_003`/`MAT_CUI_*`) ; 4 props narratifs → items de quête liés `KEY` (sans fiche éco) ; 2 titres créés ; 2 aubergistes dédiés + 2 employeurs `guild` = backlog mineur (rattachements provisoires, aucun ID inventé) ; clés déco figées.
- **Dette de commande nulle** (aucune commande nouvelle). **Aucune collision d'ID.**

**État de sortie** : pilier social **entièrement instancié** — mécanique (4 tables + specs) **et** contenu (124 fiches). Restent en backlog mineur : auberge exploitable (`[BESOIN_ENTITE]`), 2 taverniers dédiés, peuplement `T_GUILDS` pour les employeurs guilde.

---
