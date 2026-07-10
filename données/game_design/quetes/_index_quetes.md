# 📜 Index du Lot — Quêtes (`QST_*`)

> **Couverture** : **57 / 57** fiches de quêtes rédigées (33 de localité + **20 de titre T5** + **4 de légendaires**).
> **Statut** : ✅ **CLOS** (étape 34, 2026-07-10). Dettes « 20 quêtes T5 skills » (§5) et « 4 quêtes de légendaires » (§6) **apurées**.

---

## 1. Convention d'ID

`QST_<RAC>_<THEME>_<NN>` — par race/neutre et par thème.

| Race/Ville | Code | Nb quêtes | Quêtes |
|---|---|---|---|
| Cait Sith (Freelia) | `CAI` | 3 | `CHASSE_01`, `CUEILLETTE_01`, `FAMILIER_01` |
| Gnome (Granzam) | `GNO` | 3 | `FORGE_01`, `GEM_01`, `MINE_01` |
| Imp (Duskarn) | `IMP` | 3 | `OMBRE_01`, `POISON_01`, `VISION_01` |
| Leprechaun (Brokkheim) | `LEP` | 3 | `ALLIAGE_01`, `FORGE_01`, `MARTEAU_01` |
| Neutre (Alne) | `NEU` | 3 | `CARTE_01`, `LESSIVE_01`, `LIVRAISON_01` |
| Puca (Lioda) | `PUC` | 3 | `ACCORD_01`, `CONCERT_01`, `PARTITION_01` |
| Salamander (Gattan) | `SAL` | 3 | `COMBAT_01`, `LAVE_01`, `OMBRE_01` |
| Spriggan (Penwether) | `SPR` | 3 | `ILLUSION_01`, `RELIQUE_01`, `SPECTRE_01` |
| Sylph (Swilvane) | `SYL` | 3 | `HELKA_01`, `VENT_01`, `VOL_01` |
| Undine (Archipel) | `UND` | 3 | `EAU_01`, `PECHE_01`, `SOIN_01` |
| Salamander (Voulg) | `VOU` | 3 | `ARENE_01`, `EXPLOSIF_01`, `GARNISON_01` |
| **Sous-total localité** | | **33** | |
| **Titres T5** (skills) | `T5` | 20 | 10 `MAG_*` + 10 `OSS_*` — voir §5 |
| **Légendaires** (armes) | `LEG` | 4 | `WPN_LEG_001-004` — voir §6 |
| **TOTAL** | | **57** | |

---

## 2. Liste des quêtes

| # | QST_ID | Ville | Type | Donneur | Fil touché |
|---|---|---|---|---|---|
| 1 | `QST_CAI_CHASSE_01` | Freelia (CAI) | B · Chaîne économique | `NPC_FRE_04` — Chasseur Gimli | Économie gibier |
| 2 | `QST_CAI_CUEILLETTE_01` | Freelia (CAI) | C · Quotidienne | `NPC_FRE_07` — Cueilleuse Brok | Économie baies |
| 3 | `QST_CAI_FAMILIER_01` | Freelia (CAI) | A · Amorce fil rouge | `NPC_FRE_10` — Mira la Dresseuse | « Lien brisé » |
| 4 | `QST_GNO_FORGE_01` | Granzam (GNO) | C · Quotidienne | `NPC_GRA_03` — Maître Forgeron | Économie outils |
| 5 | `QST_GNO_GEM_01` | Granzam (GNO) | A · Amorce fil rouge | `NPC_GRA_01` — Gemmologue Bofrik | « Œil de Gemme » |
| 6 | `QST_GNO_MINE_01` | Granzam (GNO) | B · Chaîne économique | `NPC_GRA_02` — Chef Mineur | Économie mithril |
| 7 | `QST_IMP_OMBRE_01` | Duskarn (IMP) | A · Amorce fil rouge | `NPC_DUS_01` — Ombre Vesper | « L'Observateur » |
| 8 | `QST_IMP_POISON_01` | Duskarn (IMP) | B · Chaîne économique | `NPC_DUS_35` — Alchimiste Poisons | Économie venin |
| 9 | `QST_IMP_VISION_01` | Duskarn (IMP) | C · Quotidienne | `NPC_DUS_12` — Herboriste Champignons | Économie spores |
| 10 | `QST_LEP_ALLIAGE_01` | Brokkheim (LEP) | B · Chaîne économique | `NPC_BRO_35` — Alchimiste Alliages | Économie alliage |
| 11 | `QST_LEP_FORGE_01` | Brokkheim (LEP) | A · Amorce fil rouge | `NPC_BRO_01` — Brokk IX | « Forge Mère » |
| 12 | `QST_LEP_MARTEAU_01` | Brokkheim (LEP) | C · Quotidienne | `NPC_BRO_04` — Coursier Vera | Économie livraison |
| 13 | `QST_NEU_CARTE_01` | Alne (NEU) | B · Chaîne économique | `NPC_ALN_50` — Cartographe Tibbe | Économie relevés |
| 14 | `QST_NEU_LESSIVE_01` | Alne (NEU) | B · Enquête douce | `NPC_ALN_87` — Blanchisseuse Sud | Économie enquête |
| 15 | `QST_NEU_LIVRAISON_01` | Alne (NEU) | C · Quotidienne | `NPC_ALN_55` — Coursier Morne | Économie courses |
| 16 | `QST_PUC_ACCORD_01` | Lioda (PUC) | B · Chaîne économique | `NPC_LIO_04` — Accordeur Lyre | Économie instruments |
| 17 | `QST_PUC_CONCERT_01` | Lioda (PUC) | C · Quotidienne | `NPC_LIO_07` — Impresario de la Scène | Économie spectacle |
| 18 | `QST_PUC_PARTITION_01` | Lioda (PUC) | A · Amorce fil rouge | `NPC_LIO_01` — Compositeur Ondaro | « Fausse Note » |
| 19 | `QST_SAL_COMBAT_01` | Gattan (SAL) | C · Quotidienne | `NPC_SAL_03` — Annonceur de l'Arène | Économie arène |
| 20 | `QST_SAL_LAVE_01` | Gattan (SAL) | B · Chaîne économique | `NPC_SAL_02` — Forgeron Graz | Économie charbon |
| 21 | `QST_SAL_OMBRE_01` | Gattan (SAL) | A · Amorce fil rouge | `NPC_SAL_01` — Maître d'Armes Kael | « Ombre Alliance » |
| 22 | `QST_SPR_ILLUSION_01` | Penwether (SPR) | A · Amorce fil rouge | `NPC_PEN_01` — Maître Illusionniste Nix | « Illusion brisée » |
| 23 | `QST_SPR_RELIQUE_01` | Penwether (SPR) | B · Chaîne économique | `NPC_PEN_03` — Antiquaire Orin | Économie fouilles |
| 24 | `QST_SPR_SPECTRE_01` | Penwether (SPR) | C · Quotidienne | `NPC_PEN_04` — Exorciste Maude | Économie spectres |
| 25 | `QST_SYL_HELKA_01` | Swilvane (SYL) | B · Chaîne économique | `NPC_SWI_91` — Helka | Économie bière |
| 26 | `QST_SYL_VENT_01` | Swilvane (SYL) | A · Amorce fil rouge | `NPC_SWI_01` — Devin des Vents | « Le Vent qui ment » |
| 27 | `QST_SYL_VOL_01` | Swilvane (SYL) | C · Quotidienne | `NPC_SWI_03` — Maître de Vol | Économie course |
| 28 | `QST_UND_EAU_01` | Archipel (UND) | A · Amorce fil rouge | `NPC_UND_01` — Oracle des Marées | « Les Eaux Qui Mentent » |
| 29 | `QST_UND_PECHE_01` | Archipel (UND) | B · Chaîne économique | `NPC_UND_10` — Pêcheur Maëlle | Économie pêche |
| 30 | `QST_UND_SOIN_01` | Archipel (UND) | C · Quotidienne | `NPC_UND_11` — Alchimiste Morgane | Économie potions |
| 31 | `QST_VOU_ARENE_01` | Voulg (VOU) | A · Amorce fil rouge | `NPC_VOU_27` — Maître d'Arène | « Combat truqué » |
| 32 | `QST_VOU_EXPLOSIF_01` | Voulg (VOU) | B · Chaîne économique | `NPC_VOU_63` — Artificier Bôm | Économie explosifs |
| 33 | `QST_VOU_GARNISON_01` | Voulg (VOU) | C · Quotidienne | `NPC_VOU_50` — Intendant Dorgan | Économie ravitaillement |

**Légende** : A = Amorce fil rouge (10) · B = Chaîne économique (12) · C = Quotidienne (11)

---

## 3. `[BESOIN_*]` — ✅ APURÉ (étape 33, 2026-07-10)

Les **20 quêtes de titre T5** (10 magies + 10 OSS) sont produites — détail en §5. Chaque skill T5 (`MAG_*_010` / OSS T5) est désormais adossé à une quête `QST_T5_*` de déblocage, débloquée par `!learn_skill` → `SYS_GRANT_SPELL`/`SYS_GRANT_OSS`.

Périmètre NON couvert par le présent index : pas de quêtes de légendaires (`WPN_LEG_*`) ni de quêtes d'armure T5 — ces dettes relèvent des lots items respectifs.

---

## 4. `[QUESTIONS_LOT]`

1. ~~**Aucune quête de légendaire**~~ — ✅ **RÉSOLU (étape 34)** : les 4 quêtes `QST_LEG_001-004` existent (§6) ; l'ID fantôme `ZONE_JOT_DUN_001` est corrigé en `ZONE_JOT_RAID_001` (atlas maître) dans les fiches d'armes `WPN_LEG_002`/`003`.
2. **Affinage donneurs** : les `NPC_*` donneurs sont ceux fichés dans les rosters connus (Phase A). Certains slots (par ex. `NPC_PEN_04`, `NPC_DUS_04`, `NPC_LIO_04`) sont encore à confirmer lors de l'audit Phase A des capitales concernées — même point ouvert que `_index_armes.md` §5.
3. **Structure hétérogène** : `QST_NEU_LESSIVE_01` emploie un gabarit différent (tableau vs liste à puces) — cohérent avec son statut de chaîne à embranchement. Les 32 autres fiches suivent le gabarit standard.

---

## 5. Quêtes de titre T5 (`QST_T5_*`) — 20 fiches

Chaque skill T5 (jamais achetable) se débloque par une **quête de maîtrise** dont le donneur est l'enseignant confirmé de l'école/famille, et dont l'épreuve est ancrée sur un donjon/boss ou une zone existante (chaînage écologique). Prérequis communs : **Niveau 45**, maîtrise du tier précédent ; magies = affinité raciale ≥ 80 ; OSS = maîtrise d'arme **Avancé**. Récompense : 8 000 EXP, 500 Yrds + **Titre** (`!titre_set`) + le skill T5.

### 5.1 Magies — 10 titres (`QST_T5_MAG_<ECO>_01`)

| QST_ID | École | Skill T5 débloqué | Donneur | Épreuve (ancrage) | Titre |
|---|---|---|---|---|---|
| `QST_T5_MAG_FEU_01` | Feu | `MAG_FEU_010` Ragnarök Flame | `NPC_GAT_31` Ferra | Caldeira `ZONE_SAL_DUN_001` / Logi (Surchauffe) | Porteur de la Flamme Crépusculaire |
| `QST_T5_MAG_VEN_01` | Vent | `MAG_VEN_010` Aerial Cataclysm | `NPC_SWI_71` Zeph | Hautes Tours Swilvane / `MOB_AIR_*` | Seigneur des Tempêtes |
| `QST_T5_MAG_EAU_01` | Eau | `MAG_EAU_010` Leviathan's Wrath | `NPC_ALN_68` Zephyrine | Gouffre `ZONE_UND_DUN_001` / Jörmun (Apnée) | Héraut des Abysses |
| `QST_T5_MAG_GUE_01` | Guérison | `MAG_GUE_010` Genesis Bloom | `NPC_ALN_70` Selene | Racines `ZONE_YGG_DUN_001` | Main de la Genèse |
| `QST_T5_MAG_TER_01` | Terre | `MAG_TER_010` World Pillar | `NPC_ALN_69` Roan | Mine de Mithril `ZONE_GNO_DUN_001` / Mithrandur | Pilier du Monde |
| `QST_T5_MAG_GLA_01` | Glace | `MAG_GLA_010` Fimbulwinter | `NPC_SWI_79` Sora | Cimes de Jötunheimr (froid D12) | Souffle de l'Hiver Éternel |
| `QST_T5_MAG_FOU_01` | Foudre | `MAG_FOU_010` Mjölnir Descent | `NPC_VOU_29` Vork | Caverne des Hurleurs `ZONE_IMP_DUN_001` / Skreech (Vacarme) | Marteau du Ciel |
| `QST_T5_MAG_TEN_01` | Ténèbres | `MAG_TEN_010` Ragnarök Umbra | `NPC_ALN_69` Roan | Nécropole `ZONE_SPR_DUN_001` / Pennroth (illusions) | Ombre du Crépuscule |
| `QST_T5_MAG_LUM_01` | Lumière | `MAG_LUM_010` Empyrean Dawn | `NPC_ALN_70` Selene | Atelier Englouti `ZONE_LEP_DUN_001` / MK-0 (nage) | Aube Empyréenne |
| `QST_T5_MAG_SUP_01` | Support | `MAG_SUP_010` Overture of Genesis | `NPC_ALN_68` Zephyrine | Amphithéâtre `ZONE_PUC_DUN_001` / Ondaro (tempo) | Chef de l'Ouverture |

### 5.2 OSS — 10 titres (`QST_T5_OSS_<ARM>_01`)

| QST_ID | Famille | Skill T5 débloqué | Donneur | Épreuve (ancrage) | Titre |
|---|---|---|---|---|---|
| `QST_T5_OSS_EPE_01` | Épée 1M | `OSS_EPE_001` Starburst Stream | `NPC_GAT_31` Ferra | Gantelet Gattan / Dual Wielding | Épéiste Noir |
| `QST_T5_OSS_EP2_01` | Épée 2M | `OSS_EP2_010` Gram's Judgment | `NPC_VOU_29` Vork | Arène de Voulg `ZONE_SAL_TWN_001` | Juge de Gram |
| `QST_T5_OSS_KAT_01` | Katana | `OSS_KAT_010` Amakakeru | `NPC_GAT_31` Ferra | Dojo de Gattan / iaijutsu | Lame Céleste |
| `QST_T5_OSS_RAP_01` | Rapière | `OSS_RAP_001` Mother's Rosario | `NPC_ALN_69` Roan | Salle des Onze / hommage Yuuki (`NPC_CANON_*`) | Épée Absolue |
| `QST_T5_OSS_DAG_01` | Dague | `OSS_DAG_010` Thousand Cuts | `NPC_ALN_69` Roan | Ruelles Duskarn `ZONE_IMP_CAP_001` | Mille Lames |
| `QST_T5_OSS_LAN_01` | Lance | `OSS_LAN_010` Gungnir | `NPC_VOU_29` Vork | Champ d'estoc Voulg `ZONE_SAL_TWN_001` | Lance qui ne Manque Jamais |
| `QST_T5_OSS_HAC_01` | Hache | `OSS_HAC_010` World Ender | `NPC_VOU_29` Vork | Forge-arène Voulg | Fin du Monde |
| `QST_T5_OSS_MAS_01` | Masse | `OSS_MAS_008` Mjölnir Strike | `NPC_VOU_29` Vork | Enclume-arène Voulg | Marteau Divin |
| `QST_T5_OSS_ARC_01` | Arc | `OSS_ARC_012` Sköll's Hunt | `NPC_ALN_68` Zephyrine | Canopée Alne `ZONE_NEU_CAP_001` / `MOB_AIR_*` | Chasseur Céleste |
| `QST_T5_OSS_JET_01` | Jet | `OSS_JET_008` Zephyr's Volley | `NPC_ALN_69` Roan | Terrain d'adresse Alne `ZONE_NEU_CAP_001` | Souffle Lancé |

> Complétude commandes : ✅ **rien à propager** — déblocage via `!learn_skill` (existant, §153 whatsapp), IA `SYS_GRANT_SPELL`/`SYS_GRANT_OSS` (existants, §84-85 orchestrateur), titres via `!titre_set` (existant, §47). Aucune commande nouvelle introduite.

---

## 6. Quêtes de légendaires (`QST_LEG_*`) — 4 fiches

Chaque arme légendaire `WPN_LEG_001-004` (T5, **liée à l'âme**) est adossée à une quête d'acquisition unique (raid, grande quête serveur ou forge canon). Récompense = l'arme via `SYS_GRANT_ITEM` (bind-on-pickup) + EXP serveur (50 000 EXP) + 2 000–5 000 Yrds + titre de prestige. **Aucune commande nouvelle** (`!equiper`/`!inspect`/`!forge` existants). Toutes ancrées sur des IDs **réels de l'atlas** (résolution du fantôme `ZONE_JOT_DUN_001` → `ZONE_JOT_RAID_001`, étape 34).

| QST_ID | Arme débloquée | Type | Donneur | Épreuve (ancrage) |
|---|---|---|---|---|
| `QST_LEG_001` | `WPN_LEG_001` Gram | Raid | `NPC_GAT_01` Kagemune | Raid Voulg `ZONE_SAL_TWN_001` vs Général Eugene (hologramme canon) |
| `QST_LEG_002` | `WPN_LEG_002` Excalibur | Grande Quête serveur | `NPC_CANON_KIRITO` | Abysse `ZONE_JOT_FLD_001` (Clé de Glace) → Trône `ZONE_JOT_RAID_001` / Thrym `BOSS_JOT_001` |
| `QST_LEG_003` | `WPN_LEG_003` Shekinah | Grande Quête (sœur de LEG_002) | `NPC_CANON_SINON` | Glaces de `ZONE_JOT_RAID_001` — épreuve d'archerie Cait Sith |
| `QST_LEG_004` | `WPN_LEG_004` Crest of Yggdrasil | Forge unique canon | `NPC_CANON_LISBETH` | Forge Lisbeth · **prérequis titre `QST_T5_OSS_RAP_01`** (Mother's Rosario) + Cristal d'Eau Pur |

> **Chaînage remarquable** : `QST_LEG_004` exige le titre « Épée Absolue » de `QST_T5_OSS_RAP_01` (étape 33) → la boucle Rapière T5 débouche sur la légendaire Undine (héritage canon Yuuki → Asuna). `QST_LEG_002`/`003` partagent le même raid (Thrym) — quêtes sœurs.
