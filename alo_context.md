# 🧠 ALO_CONTEXT — Cache d'État Critique (à lire en premier après /clear)

> **Rôle** : synthèse de l'état actuel du projet pour reprise instantanée. Mis à jour à CHAQUE modification.
> **Dernière mise à jour** : 2026-07-10 — **✅ PROJET ALO TERMINÉ + AUDIT DE CONFORMITÉ FINAL passé (étape 36).** Tous les lots des 11 CDC livrés : PNJ 1 100, Items 731, Boutiques 302, Armures 500, Faune 256, Flore 100, **Quêtes 57**, Tenues 55, Micro-familles 65, Index complets. **Étape 36** : 766 fichiers non conformes archivés (junk armures 240 + faune legacy `mobs_sauvages/` 223 + dossier parasite `items_equipements/skills/` 303), **0 collision d'ID résiduelle** (MOB/OSS/MAG/PAS/ARM), index `taille` créé, **D71** (clé canonique = `Item_ID`, jamais le nom de fichier). Corpus actif ramené à **~3 406 fichiers markdown** conformes. Relire `alo_progression.md` (étape 36) + `directives_generation/11_audit_conformite_etape36.md`. ⚠️ Session parallèle détectée sur ce fichier — fusion prudente.

## Directives actives (non négociables)

1. **Toute exécution est conditionnée par `system_persona_architecte.md`** (Architecte Créateur Primaire : décisions fortes sans demander validation, profondeur 200%, chaînage technique).
2. **ZÉRO CODE** — livrables markdown uniquement (données + spécifications).
3. **Modifications purement structurelles** (tables, ID, liaisons, taxonomies) — pas de prose narrative en masse.
4. Travail par étapes : s'arrêter en fin d'étape, noter l'avancée dans `alo_progression.md` + mettre à jour ce fichier. L'utilisateur fait /clear entre les étapes.
5. Règle de complétude : **tout ajout ⇒ équivalents commandes** Joueur `!*` / GM `!sys_*` / IA `SYS_*`, propagés dans toutes les couches concernées.
6. Le graphe de zones reste **symétrique** ; toute nouvelle zone passe d'abord par l'atlas.

## Environnement

- Projet : `/home/user1808/Bureau/alo` (pas un dépôt git, Linux/Kali, shell zsh).
- Aucune dépendance logicielle : projet 100% markdown (bot Node.js = hors périmètre, backlog P3).
- Mémoire persistante Claude : `~/.claude/projects/-home-user1808-Bureau-alo/memory/`.

## Documents maîtres (source de vérité)

| Fichier | Rôle |
|---|---|
| `system_persona_architecte.md` | Gouvernance |
| `cahier_des_charges.md` | **v1.1** — Spécification, décisions D1–D12 **+ D66 (non-autorité du pré-généré)**, **§10 Chantier de renflouement conforme** (table d'état : ✅ validé vs ⏳/🚧 pré-généré à régénérer) |
| `README.md` | Vue d'ensemble, conventions, état d'avancement |
| `données/cartographie/atlas_monde_liaisons.md` | **ATLAS MAÎTRE** : ID zones, graphe, taxonomie groupes WA |
| `données/cardinal_system_db/MLD_Logic/table_t_zone_links.md` | **Source de vérité du graphe** (80 liaisons seed, D9) |
| `données/the_seed_engine/system_mechanics/zone_movement_protocol.md` | Protocole déplacement R0–R10 |
| `données/the_seed_engine/whatsapp_commands_list.md` | Commandes Joueur/GM (dont `!respirer`, `!sys_env_set`) |
| `données/the_seed_engine/ai_orchestrator_commands.md` | Commandes IA (dont `SYS_SET_ENV_HAZARD`) |

## Structure de données active

- **Conventions ID** : `ZONE_<SEC>_<TYPE>_<NNN>` ; PNJ `NPC_<VILLE>_<NN>` (capitale 01-07, zones annexes 10+, D7) ; mobs `MOB_<SEC>_<NNN>` par plages (D6 : 001-004 périphérie CAP, 010-013 HUNT_001, 020-026 HUNT_002 avec 025 mini-boss / 026 boss zone, 030-034 réservée donjons) ; boss donjon `BOSS_<SEC>_DUN_001` ; mobs aériens `MOB_AIR_001-004` partagés par les 9 routes (D8).
- **Monde** : 9 territoires radiaux autour d'Alne (`ZONE_NEU_CAP_001`) ; gabarit CAP + HUNT_001 + HUNT_002 + DUN_001 + ROUTE. Anneau frontalier via paires HUNT_002. Axe vertical Yggdrasil/Jötunheimr/New Aincrad (D3).
- **Invariant R0** : 1 joueur = 1 groupe LOCATION/INSTANCE ; HUB/GUILD/PARTY/SYSTEM jamais auto-quittés.
- **Tables MLD** : 18. `T_ZONE_LINKS` prime sur `T_ZONES.connected_zones` (D9). Périphérie CAP sans fiche cartographique (cas Undine) ⇒ mobs 001-004 rattachés à HUNT_001 (contrat T2 de `T_SPAWN_TABLES`).
- **Jauges environnementales (D12)** : paramètres unifiés `OXYGEN` / `HEAT` / `DOT` — Joueur `!respirer`, GM `!sys_env_set`, IA `SYS_SET_ENV_HAZARD`.

## Fiches de zones — couverture : ✅ 9/9 territoires complets (étape 3)

| Territoire | Capitale | Notes |
|---|---|---|
| Sylph | Swilvane | complet |
| Salamander | Gattan (D1 ; Voulg = TWN_001) | complet — Caldeira d'Obsidienne (`BOSS_SAL_DUN_001` Logi, jauge de Surchauffe D11), route, `NPC_GAT_01-07` actés (étape 3) |
| Cait Sith | Freelia | complet |
| Puca | Lioda | complet |
| Imp | Duskarn | complet |
| Gnome | Granzam | complet |
| Leprechaun | Brokkheim | complet |
| Spriggan | Penwether | complet |
| Undine | Archipel d'Écume (**CAP = fiche lore `geographie_villes` uniquement**) | complet — Lac Cristallin, Marais de Brume, Gouffre de Léviathan (Tier 5 sous-marin, `BOSS_UND_DUN_001` Jörmun, jauge d'Apnée D11), route (étape 3) |

Chaque donjon territorial (9/9) a une mécanique signature WhatsApp (D10+D11) — ex : Vacarme anti-MAJUSCULES (Imp), Surchauffe anti-spam (Salamander), Apnée = économie de messages (Undine).

## CHANTIER EN COURS — Renflouement massif « ≥100 unités par type d'objet » (directive PE, 2026-07-07)

Directive : chaque type d'objet (PNJ, armes, skills, équipements par slot, faune, flore) doit compter **au moins 100 fichiers** ; 1 unité = 1 fichier fandom, précision persona 200%, cohérence SAO. Les données auto-générées héritées (ID à hash, lore d'une ligne, zéro chaînage éco) sont **non conformes** : les remplacer, pas les compléter — archives dans `ressources_brutes/deprecated_v1/`.

**Gabarit acté (D13-D15, voir `tete/_index_armures_tete.md`)** : ID séquentiel strict (`ARM_TET_001`…) ; 5 sections (Identification / Statistiques / Acquisition & chaînage éco / Lore / Intégration Bot) ; répartition 100 = 9 races×9 (2×T1→2×T4 + 1×T5 craft-titre lié) + 9 neutres/monde + 9 drops boss donjon (8%) + 1 légendaire serveur ; grille prix T1 150-400 → T4 9k-20k Yrds, revente 25% ; mithril Brokkheim + gemmes Granzam dans les T4/T5 de toutes races.

| Lot | État |
|---|---|
| Équipements tête (`ARM_TET_001-100` + index) | ✅ 100/100 (étape 4, lot 1) |
| Autres slots armure (torse/jambes/bras/taille) | ✅ **4×100 (étapes 26-27)** — junk co-résident (57/29/34/20) **archivé étape 36** ; index `taille` créé (étape 36). Chaque slot = 100 conformes + index |
| Accessoires (anneaux 5, capes 2, ceintures 3, colliers 4) | ⏳ |
| Armes (junk v1 archivé : 205 fiches) | ✅ **Lot I-2 `WPN_*` 100/100 (étape 16)** — voir ligne dédiée |
| PNJ (185 junk racine archivé) | ✅ **Phase A COMPLÈTE** : Lot 2.1 Gattan (100) / 2.2 Canoniques (10) / 2.3 Alne (100) / 2.4 Swilvane (100) / 2.5 Voulg (100) / 2.6 Freelia (100) / 2.7 Archipel (100) / 2.8 Lioda (100) / 2.9 Duskarn (100) / 2.10 Granzam (100) / 2.11 Brokkheim (100) / 2.12 Penwether (100) = **1200 PNJ D17** |
| **Skills** `MAG_`/`OSS_`/`PAS_` (I-4, 300) | ✅ **300/300 (étape 19)** — S-1 magies 100 (10 écoles×10) / S-2 OSS 100 (10 familles) / S-3 passives 100 (CBT40/CRA25/EXP20/SOC15) ; junk archivé (309 fiches à l'étape 19, + **dossier parasite `items_equipements/skills/` 303 doublons OSS/MAG/PAS archivé étape 36** — 300 collisions d'ID éliminées, lot autoritaire = `competences_magie/`) ; canon préservé (Starburst, Revive, Mother's Rosario…) ; index `_index_skills.md`. `[BESOIN_COMMANDE]` : `SYS_GRANT_PASSIVE` à propager |
| Faune (`MOB_*` par territoire) | ✅ **256 (étape 28)** dans `personnages_bestiaire/monstres/` — legacy `mobs_sauvages/` (223 : hash `MOB_CANON`, zones_neutres 172, doublons d'ID) **archivé étape 36** (0 collision résiduelle) |
| Flore (15 racine ; sous-dossiers par race 0) | ⏳ |
| **Consommables** `CSM_*` (I-1) + annexe portage | ✅ **100/100 + 30/30 (étape 14)** — 90 `cons_*` junk archivés |
| **Armes** `WPN_*` (I-2, 100 / 13 familles) | ✅ **100/100 (étape 16)** — 205 junk `wpn_*` archivés ; 4 légendaires T5 liés ; index `_index_armes.md` |
| **Matériaux** `MAT_*` (I-3, 100 / 5 familles) | ✅ **100/100 (étape 18)** — lot pré-généré non conforme **normalisé** (renommage §0.4, recettes `Entre dans`→Item_ID réels, prix gemmes T4 sur grille, sources `xxx`→`MOB_*`/`BOSS_*`/`ZONE_*`, bot standardisé) ; junk `mat_*` déjà archivé ; index `_index_materiaux.md` + cross-walk ingrédients nommés. Gap connu : aucune famille « bois » à l'allocation §2 |

`SYS_GRANT_ITEM(Avatar_ID, Item_ID, Qty)` ajouté à `ai_orchestrator_commands.md` §5 (équivalent IA de `!sys_give`).

## ÉTAPE 10-bis (session parallèle, 2026-07-08) — Audit & CDC de délégation ✅

- **`directives_generation/`** créé : `00_audit_completude.md` (audit disque : 7 villes PNJ à zéro, boutiques = néant structurel, items junk hors lot tête) · `01_cadrage_pnj.md` (quotas de rôles **D34** + grille de recette des lots 2.6-2.12) · `02_cdc_items.md` (CDC-ITM-01 : 3×100 — `CSM_*`/`WPN_*`/`MAT_*`) · `03_cdc_boutiques.md` (CDC-SHP-01 : contrat **D35**, matrice zonale **D36**, règles R1-R8).
- **`table_t_shops.md`** actée (MLD 19ᵉ table) : `T_SHOPS` + `T_SHOP_ITEMS`, résout `T_NPC.shop_ref` ; `!sys_shop_restock`/`SYS_SHOP_RESTOCK` à propager à la recette du lot boutiques C-1.
- **D34-D37 consommées par cette étape** (D30-D33 laissées libres pour le lot 2.6 Freelia, en production parallèle). Protocole générateur délégué = **D37** (jamais de fichier maître, jamais d'ID hors plage, manques en `[BESOIN_*]`).
- Ordre d'exécution délégable : **I-1 consommables** (sans dépendance) → I-2 armes → I-3 matériaux → boutiques C-1 Gattan (dès I-1+I-2), puis 1 lot boutiques par ville livrée.
- Dette relevée : `QST_SYL_HELKA_01` promise (lot 2.4) toujours non créée.

## ÉTAPE 10-ter (session parallèle, 2026-07-08) — CDC restants + entité Avatar ✅

- `directives_generation/` **complet (00-09)** : + `04` armures/boucliers (D38 : taxonomie par SLOT, 5×100), `05` accessoires (D39, 100), `06` skills (D40 : magies 10 écoles ×10, OSS 100, passives 100), `07` faune (D41 : 249 sur plages D6, `MOB_CAT_*`→`MOB_CAI_*`), `08` flore (D42 : 100 nodes → `MAT_HRB_*`), `09` quêtes (D43 : 34 dont dette `QST_SYL_HELKA_01` en premier).
- Amendement I-2 : `WPN_BOU_*` supprimé (boucliers = slot armure D38) — épées 1M 14, arcs 12, jet 6.
- **D44 Avatar** : `T_AVATARS` slots typés complets (ring_1/2, neck, belt, back) + `inventory_capacity` évolutive (32 + niveau + ceinture + sacs `!sew` + passives, plafond 160) ; `T_INVENTORY` refondue (piles ×99, `is_bound`, triggers anti-dup/capacité/mort).
- **D38-D44 consommées.** Ordre de délégation : I-1 consommables (immédiat) → I-2/I-3 → boutiques C-1+ ∥ armures ∥ skills ∥ faune → flore → quêtes (dernier, le plus exigeant).

## ÉTAPE 10-quater (session parallèle, 2026-07-08) — Correction PE : 5 slots portés ✅

- **Modèle personnage (PE, prime sur D44 v1)** : équipement porté = **5 slots d'armure** (tête/torse/bras/taille/jambes), **PAS PLUS** ; mains = saisie (`hand_main`/`hand_off` : arme, bouclier `WPN_BOU_*`, torche) ; dos = sac `BAG_001-012` (capacité +6/+12/+20/+30, conteneur sans stat). Formule capacité : `30 + niveau + sac + passives PAS_EXP, plafond 160`.
- Cascade : `T_AVATARS`/`T_INVENTORY` refaits ; CDC-ARM = 4 lots (boucliers retirés) ; CDC-ITM : `WPN_BOU` restauré + annexe sacs 4-bis ; **CDC-ACC gelé (D39 caduque, dérogation ≥100 pour les accessoires)**.

## ÉTAPE 10-quinquies (session parallèle, 2026-07-08) — Système de port + tenue par défaut ✅

- **D45 Système de port (dissocié des 5 slots d'armure)** : ceinture `BELT_*` = 2 armes à portée (flancs G/D, dégainage instantané) ; dos = conteneur EXCLUSIF, sac `BAG_*` (+30 stockage, items/consommables **sans armes**, accès rapide sans commande) **XOR** sangle `HRN_*` (2-4 armes au dos) ; inventaire **virtuel** de base (sac facultatif) `30+niveau+passives` plafond 130 (160 avec sac) ; armes portées uniquement (mains/ceinture/sangle → surplus en banque) ; retrait virtuel = `!fetch`. Aucun item de port n'a de stat.
- **D46 Tenue par défaut** : à la création, haut `OFT_TOP_*` (torse) + bas `OFT_BOT_*` (jambes) en variante régionale selon la ville d'apparition ; bas = pantalon/short (tous) ou robe (femmes seules) ; T0 rachetable, remplacée par la 1re armure. CDC : `10_cdc_tenue_defaut.md`.
- Cascade : `T_AVATARS`/`T_INVENTORY` (storage_zone, triggers T5-T8, contrats A1-A6) ; CDC-ITM annexe 4-bis = sacs+sangles+ceintures ; §22 commandes + `SYS_SET_LOADOUT`. `directives_generation/` = 11 docs (00-10).

## Point ouvert

- Arbitrage `ZONE_ROUTE_LUGRU` (corridor souterrain cité par la fiche Lugru, hors atlas — relevé à l'étape 2, non bloquant).

## Prochaine étape

**Tous les lots des 11 CDC sont livrés + Phase C régénérée (C-6 à C-11).** Boutiques 11/11 villes (étape 25), **6 villes régénérées (Archipel/Brokkheim/Duskarn/Granzam/Lioda/Penwether) — 160 boutiques, 1 128 articles, 0 Item_ID fabriqué, 0 doublon R2**, armures 5/5 slots (26-27), faune/flore/quêtes/tenues/micro-familles (28-31), index + résolutions (32). Il ne reste **aucune dette structurelle à l'intérieur d'un lot livré**.

**Dettes/chantiers restants (hors directive PE actuelle — à arbitrer par le PE)** :
- **Boss d'axe vertical : ✅ APURÉ (étape 35)** — Yggdrasil `BOSS_YGG_001`, Jötunheimr `BOSS_JOT_001`, New Aincrad `BOSS_AIN_001/027/074/075/100` + gabarit paramétrique (index `_index_boss_axe_vertical.md`). 200 junk `boss_palier_*` archivés. Plus aucun `[TODO]` d'axe vertical.
- **Récompenses de quêtes T5/légendaires non finement chiffrées** (EXP forfaitaire 5 000 / 8-10 000, pas de drop secondaire) — équilibrage économique possible.
- Amendements items mineurs : gamme `CSM_NOU` à élargir si besoin ; arbitrage `ZONE_ROUTE_LUGRU` (non bloquant, cf. Point ouvert).
- **Audit de conformité final : ✅ APURÉ (étape 36)** — 766 fichiers non conformes archivés (junk armures 240 + faune legacy 223 + parasite skills 303), **0 collision d'ID résiduelle** (MOB/OSS/MAG/PAS/ARM), index `taille` créé, **D71** (clé canonique = `Item_ID`). Rapport : `directives_generation/11_audit_conformite_etape36.md`. Reste documenté non bloquant : variance de gabarit lot `taille` (rampe plate, pas de T5), casse de nom de fichier armures (cosmétique, D71).
- **Équilibrage économique** (prix/drop rates, récompenses fines T5/légendaires) — **seul chantier transverse restant**.

**Dette de commandes : ✅ APURÉE** (étape 21) — étapes 33-34 n'ont introduit aucune commande (déblocage via `!learn_skill`/`SYS_GRANT_SPELL`/`SYS_GRANT_OSS`/`SYS_GRANT_ITEM`/`!titre_set`/`!forge` existants).

*(Phase A COMPLÈTE — 12 rosters × 100 PNJ. Rappel : les K3 méta réservés orchestrateur, jamais confirmés, 1 révélation méta max/session.)*
