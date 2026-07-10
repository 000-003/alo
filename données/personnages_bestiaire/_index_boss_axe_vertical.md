# 🗼 Index — Boss de l'Axe Vertical (Yggdrasil · Jötunheimr · New Aincrad)

> **Périmètre** : les boss de l'axe central & vertical d'Alfheim (§4.11 de l'atlas), hors donjons territoriaux `BOSS_<SEC>_DUN_001` (9/9, cf. index par territoire).
> **Statut** : ✅ **Boss nommés livrés (étape 35)**. Junk archivé (200 fiches `boss_palier_*`, 2/palier procéduraux) → `ressources_brutes/deprecated_v1/boss_aincrad_junk/`.
> **Gabarit** : « Wiki ALO » 5 sections (Lore / Apparitions / Stats RPG `ID Monstre` / Mécaniques / Loot & Conséquences) — modèle Thrym.

---

## 1. Convention d'ID

| Secteur | Préfixe boss | Zone RAID/FLR | Nb boss nommés |
|---|---|---|---|
| Yggdrasil | `BOSS_YGG_<NNN>` | `ZONE_YGG_DUN_001` (Dôme) | 1 |
| Jötunheimr | `BOSS_JOT_<NNN>` | `ZONE_JOT_RAID_001` (Trône de Thrym) | 1 |
| New Aincrad | `BOSS_AIN_<NNN>` (N = palier) | `ZONE_AIN_FLR_<NNN>` | 5 nommés + template |

**Bannissement** : l'ancien schéma `boss_palier_NNN_*` (2 boss/palier, système « Prime » sans `ID Monstre`) est **non conforme et archivé**. Toute référence passe désormais par `BOSS_AIN_<NNN>`.

---

## 2. Roster des boss nommés

| ID | Nom | Zone | Tier/Niveau | Canon | Fichier |
|---|---|---|---|---|---|
| `BOSS_YGG_001` | Le Gardien du Dôme | `ZONE_YGG_DUN_001` | 110+ (Grand Quest) | Programme de Rétention d'Oberon, essaim Golden Knights | `monstres/yggdrasil/boss_ygg_001_gardien_du_dome.md` |
| `BOSS_JOT_001` | Thrym, Roi des Géants | `ZONE_JOT_RAID_001` | 120+ (Arc Calibur) | vol d'Excalibur, `QST_LEG_002/003` | `monstres/thrym_roi_des_geants.md` |
| `BOSS_AIN_001` | Illfang le Seigneur Kobold | `ZONE_AIN_HUB_001` (P1) | 10 | 1er boss SAO, piège du nodachi (mort de Diavel) | `boss_aincrad/boss_ain_001_illfang_kobold_lord.md` |
| `BOSS_AIN_027` | Le Géant aux 4 Bras | `ZONE_AIN_FLR_027` | 90 | Sleeping Knights / Yuuki, Monument des Épéistes | `boss_aincrad/boss_ain_027_geant_4_bras.md` |
| `BOSS_AIN_074` | The Gleam Eyes | `ZONE_AIN_FLR_074` | 84 | révélation du Dual Blades de Kirito (Starburst Stream) | `boss_aincrad/boss_ain_074_the_gleam_eyes.md` |
| `BOSS_AIN_075` | The Skull Reaper | `ZONE_AIN_FLR_075` | 90 | 14 morts, révélation Heathcliff = Kayaba | `boss_aincrad/boss_ain_075_the_skull_reaper.md` |
| `BOSS_AIN_100` | Le Souverain Écarlate | `ZONE_AIN_FLR_100` | 115+ | boss inédit (Aincrad jamais fini au-delà de 75), apex serveur | `boss_aincrad/boss_ain_100_le_souverain_ecarlate.md` |

---

## 3. Paliers génériques New Aincrad — gabarit de scaling (pas de fiche permanente)

**Décision (règle atlas D3)** : les paliers de New Aincrad sont des **instances éphémères** (`!dungeon_queue`), seuls le Palier 1 (hub) et le palier de front sont persistants. Il n'y a donc **pas 100 fiches permanentes** : les paliers sans boss nommé utilisent un **profil paramétrique** généré à la volée par l'orchestrateur, fonction du numéro de palier `N` :

| Paramètre | Formule (indicative) |
|---|---|
| Niveau | `~ 10 + N` |
| HP total | échelle de `10 000` (N=1) à `~7,5 M` (N=100), 4-6 barres |
| STR / VIT | croissance linéaire (≈ `125 → 2 900` STR) |
| Prime (`!bounty`) | `N × 10 000` Yrds, distribuée au raid |
| EXP | `≈ HP × 0,1` |
| Faiblesse/résistance | 1 élément aléatoire pondéré, exposé au `!scan` |
| Mécaniques | 3 phases standard (Cleave → Invocation → Enrage) ; les paliers nommés (§2) **surchargent** ce profil |

Spawn : `!sys_spawn_boss [Group_ID] BOSS_AIN_<NNN>` (GM) ; l'IA instancie le profil paramétrique si `NNN` n'a pas de fiche nommée. Aucune commande nouvelle.

---

## 4. Chaînages & complétude

- **Endgame double** : progression **verticale** = Grand Quest d'Yggdrasil (`BOSS_YGG_001` → Sommet `ZONE_YGG_TOP_001`) ; progression **horizontale** = 100 paliers d'Aincrad (`BOSS_AIN_100` → Palais Rubis). Jötunheimr (`BOSS_JOT_001`) = arc légendaire transversal (Excalibur/Calibur).
- **Interactions skills** : `BOSS_YGG_001` faible à la Lumière (`MAG_LUM_010`) ; `BOSS_AIN_074` récompense l'OSS T5 `OSS_EPE_001` (Starburst Stream) ; `BOSS_AIN_100` force la diversité d'écoles (les 10 `MAG_*_010`).
- **Loot** : aucun drop monnayable sur les boss d'axe (design anti-farm) ; récompenses = déblocage de zone, titres serveur (`!titre_set`), gravure Monument des Épéistes, composants liés (`SYS_GRANT_ITEM`).
- **Commandes** : ✅ rien à propager — `!dungeon_queue`, `!dome_enter`/`!dome_log`, `!sys_spawn_boss`, `SYS_LOG_RAID`, `!bounty`, `!titre_set`, `SYS_GRANT_ITEM` tous existants.
- **Fils méta** (Kayaba/trône vide `AIN_100`, Rétention d'Oberon `YGG_001`) : réservés orchestrateur, jamais confirmés frontalement (règle D22).
