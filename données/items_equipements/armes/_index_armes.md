# 🗡️ Index du Lot I-2 — Armes (`WPN_*`)

> **Chantier** : Renflouement massif « ≥100 unités par type » (directive PE 2026-07-07). Lot **I-2** du CDC-ITM-01.
> **Couverture** : **100 / 100** fiches conformes + index. Gabarit item D13-D15 (§4a du CDC), grilles de valeurs §3.
> **Statut** : ✅ **CLOS** (2026-07-09). Junk v1 (205 fichiers : 154 `wpn_*` racine + 51 sous-dossiers + 4 fiches lore wiki) archivé dans `ressources_brutes/deprecated_v1/armes/` — rien supprimé.

---

## 1. Convention d'ID

`WPN_<FAM>_<NNN>` — séquentiel strict par famille, sans hash, sans trou. 13 familles :

| Famille | Sous-dossier | Préfixe | Plage | Nb |
|---|---|---|---|---|
| Épées à une main | `epees_1h/` | `WPN_EP1` | 001-012 | 12 |
| Épées à deux mains | `epees_2h/` | `WPN_EP2` | 001-008 | 8 |
| Katanas | `katanas/` | `WPN_KAT` | 001-008 | 8 |
| Rapières | `rapieres/` | `WPN_RAP` | 001-008 | 8 |
| Dagues | `dagues/` | `WPN_DAG` | 001-008 | 8 |
| Arcs | `arcs/` | `WPN_ARC` | 001-010 | 10 |
| Lances | `lances/` | `WPN_LAN` | 001-008 | 8 |
| Haches | `haches/` | `WPN_HAC` | 001-008 | 8 |
| Masses | `masses/` | `WPN_MAS` | 001-006 | 6 |
| Baguettes | `baguettes/` | `WPN_BAG` | 001-010 | 10 |
| Armes de jet | `armes_de_jet/` | `WPN_JET` | 001-004 | 4 |
| Boucliers | `boucliers/` | `WPN_BOU` | 001-006 | 6 |
| Légendaires | `legendaires/` | `WPN_LEG` | 001-004 | 4 |
| **TOTAL** | | | | **100** |

> ⚠️ Préfixe `WPN_BAG` = **baguettes** (arme magique). À ne pas confondre avec `BAG_*` = **sacs de dos** (portage, `items_equipements/portage/`). Espaces de noms disjoints (l'un est préfixé `WPN_`).

---

## 2. Grille de valeurs appliquée (CDC §3, fermée)

| Tier | Niveau | ATQ / BLOC | Durabilité | Prix achat (Yrds) | Revente |
|---|---|---|---|---|---|
| T1 | 1-8 | 10-18 | 150-250 | 150-400 | 25% |
| T2 | 10-18 | 24-40 | 300-460 | 600-1 500 | 25% |
| T3 | 20-30 | 45-75 | 500-700 | 2 500-6 500 | 25% |
| T4 | 32-42 | 90-130 | 750-950 | 9 000-20 000 | 25% |
| T5 (légendaires) | 44+ | 135-210 | 960-1 200 | non vendable (lié) · ~10 000 revente | — |

Modulations de vitesse : familles **rapides** (dagues, rapières, katanas, jet) → ATQ borne basse + bonus AGI ; familles **lentes** (épées 2H, haches, masses) → ATQ borne haute + malus -1 AGI. **Boucliers** : `BLOC` remplace `ATQ` ; pénalité de vol -1% (petit) / -3% (moyen, -1 AGI) / -6% (pavois, -2 AGI). Bonus : 1 seul en T1-T2, 2 max en T3+ (légendaires : 2 stats + 1 capacité signature nommée).

---

## 3. Répertoire par famille (ID | Nom | Tier | Source principale)

### Épées à une main (`WPN_EP1`)
| ID | Nom | Tier | Source |
|---|---|---|---|
| WPN_EP1_001 | Épée Longue en Fer | T1 | Boutique Alne |
| WPN_EP1_002 | Lame du Vent Sylphe | T1 | Boutique Swilvane |
| WPN_EP1_003 | Sabre de Braise | T2 | Craft Kagemune `NPC_GAT_01` |
| WPN_EP1_004 | Lame Noire Spriggan | T2 | Craft Penwether `NPC_PEN_04` |
| WPN_EP1_005 | Lame du Crépuscule | T3 | Craft Duskarn `NPC_DUS_04` |
| WPN_EP1_006 | Épée d'Acier de Brokkheim | T3 | Craft `NPC_BRO_01` |
| WPN_EP1_007 | Sabre-Griffe Cait Sith | T2 | Craft Brok `NPC_FRE_07` |
| WPN_EP1_008 | Lame de Granit | T3 | Craft `NPC_GRA_03` |
| WPN_EP1_009 | Sabre de Magma de Gattan | T4 | Craft `NPC_GAT_01` / `MOB_SAL_026` |
| WPN_EP1_010 | Faucon d'Émeraude | T4 | Craft Brokkr `NPC_SWI_05` |
| WPN_EP1_011 | Lame des Ombres Longues | T4 | `MOB_SPR_026` / `NPC_PEN_04` |
| WPN_EP1_012 | Lame Aquatique de Cristal | T4 | Craft Finbar `NPC_UND_06` |

### Épées à deux mains (`WPN_EP2`)
| ID | Nom | Tier | Source |
|---|---|---|---|
| WPN_EP2_001 | Espadon d'Entraînement | T1 | Boutique Alne |
| WPN_EP2_002 | Flamberge de Voulg | T2 | Craft `NPC_GAT_01` |
| WPN_EP2_003 | Espadon de Granit | T2 | Craft `NPC_GRA_03` |
| WPN_EP2_004 | Grande Lame de Mithril | T3 | Craft `NPC_BRO_03` |
| WPN_EP2_005 | Flamberge du Cratère | T3 | `MOB_SAL_025` / `NPC_GAT_01` |
| WPN_EP2_006 | Décapiteuse de la Nécropole | T3 | `MOB_SPR_025` / `NPC_PEN_04` |
| WPN_EP2_007 | Titanite de Granzam | T4 | `BOSS_GNO_DUN_001` / `NPC_GRA_03` |
| WPN_EP2_008 | Colère de Logi | T4 | `BOSS_SAL_DUN_001` |

### Katanas (`WPN_KAT`)
| ID | Nom | Tier | Source |
|---|---|---|---|
| WPN_KAT_001 | Katana d'Acier Poli | T1 | Boutique Alne/Gattan |
| WPN_KAT_002 | Kagutsuchi Mineur | T2 | Craft `NPC_GAT_01` |
| WPN_KAT_003 | Nodachi des Brumes | T2 | Craft `NPC_DUS_04` |
| WPN_KAT_004 | Kagutsuchi, Lame Spirituelle de Feu | T3 | `MOB_SAL_025` / `NPC_GAT_01` |
| WPN_KAT_005 | Muramasa Éveillé | T3 | `MOB_IMP_026` / `NPC_DUS_04` |
| WPN_KAT_006 | Amenonuhoko | T4 | `BOSS_SAL_DUN_001` / `NPC_GAT_01` |
| WPN_KAT_007 | Kusanagi d'Ombre | T4 | `BOSS_IMP_DUN_001` |
| WPN_KAT_008 | Yoru, Lame Sans Reflet | T4 | `MOB_SPR_026` / `NPC_PEN_04` |

### Rapières (`WPN_RAP`)
| ID | Nom | Tier | Source |
|---|---|---|---|
| WPN_RAP_001 | Rapière-Diapason | T1 | Boutique Lioda |
| WPN_RAP_002 | Rapière du Zéphyr | T2 | Craft `NPC_SWI_05` |
| WPN_RAP_003 | Rapière de Marée | T2 | Craft `NPC_UND_06` |
| WPN_RAP_004 | Rapière Griffe-Agile | T3 | Craft `NPC_FRE_07` |
| WPN_RAP_005 | Rapière de Contre-Chant | T3 | Craft `NPC_LIO_04` |
| WPN_RAP_006 | Rapière des Abysses | T3 | `MOB_UND_026` / `NPC_UND_06` |
| WPN_RAP_007 | Rapière Faucon-du-Ciel | T4 | Craft `NPC_SWI_05` |
| WPN_RAP_008 | Rapière de l'Opéra Silencieux | T4 | `BOSS_PUC_DUN_001` / `NPC_LIO_04` |

### Dagues (`WPN_DAG`)
| ID | Nom | Tier | Source |
|---|---|---|---|
| WPN_DAG_001 | Dague de Fer | T1 | Boutique Alne |
| WPN_DAG_002 | Croc de Freelia | T2 | Craft `NPC_FRE_07` |
| WPN_DAG_003 | Stylet du Zéphyr | T2 | Craft `NPC_SWI_05` |
| WPN_DAG_004 | Dague Venin-d'Ombre | T2 | Craft `NPC_DUS_04` |
| WPN_DAG_005 | Lame Furtive du Zéphyr | T3 | `MOB_SYL_026` / `NPC_SWI_05` |
| WPN_DAG_006 | Kriss de la Nécropole | T3 | Craft `NPC_PEN_04` |
| WPN_DAG_007 | Croc de Skreech | T4 | `BOSS_IMP_DUN_001` |
| WPN_DAG_008 | Griffe de Ragnar | T4 | `BOSS_CAI_DUN_001` / `NPC_FRE_07` |

### Arcs (`WPN_ARC`)
| ID | Nom | Tier | Source |
|---|---|---|---|
| WPN_ARC_001 | Arc Court en Bois | T1 | Boutique Alne |
| WPN_ARC_002 | Arc de Chasse Cait Sith | T2 | Craft `NPC_FRE_07` |
| WPN_ARC_003 | Arc Noir Spriggan | T2 | Craft `NPC_PEN_04` |
| WPN_ARC_004 | Arc du Vent Sylphe | T2 | Craft `NPC_SWI_05` |
| WPN_ARC_005 | Arc Long des Collines | T3 | `MOB_CAI_025` / `NPC_FRE_07` |
| WPN_ARC_006 | Arc Spectral de Penwether | T3 | Craft `NPC_PEN_04` |
| WPN_ARC_007 | Arc Composite du Traqueur | T3 | Craft `NPC_FRE_07` |
| WPN_ARC_008 | Arc des Ombres Longues | T4 | `MOB_SPR_026` / `NPC_PEN_04` |
| WPN_ARC_009 | Arc du Roi Béhémoth | T4 | `BOSS_CAI_DUN_001` / `NPC_FRE_07` |
| WPN_ARC_010 | Arc du Néant Gris | T4 | `BOSS_SPR_DUN_001` / `NPC_PEN_04` |

### Lances (`WPN_LAN`)
| ID | Nom | Tier | Source |
|---|---|---|---|
| WPN_LAN_001 | Lance de Fantassin | T1 | Boutique Alne |
| WPN_LAN_002 | Pique de Granit | T2 | Craft `NPC_GRA_03` |
| WPN_LAN_003 | Hallebarde de Brokkheim | T2 | Craft `NPC_BRO_01` |
| WPN_LAN_004 | Trident de Marée | T3 | Craft `NPC_UND_06` |
| WPN_LAN_005 | Lance Lourde de Granzam | T3 | `MOB_GNO_025` / `NPC_GRA_03` |
| WPN_LAN_006 | Pertuisane de Précision | T3 | Craft `NPC_BRO_03` |
| WPN_LAN_007 | Lance Titanesque de Mithrandur | T4 | `BOSS_GNO_DUN_001` / `NPC_GRA_03` |
| WPN_LAN_008 | Pertuisane de l'Artisan-Maître | T4 | `BOSS_LEP_DUN_001` / `NPC_BRO_03` |

### Haches (`WPN_HAC`)
| ID | Nom | Tier | Source |
|---|---|---|---|
| WPN_HAC_001 | Hache de Bûcheron | T1 | Boutique Alne |
| WPN_HAC_002 | Hache de Braise | T2 | Craft `NPC_GAT_01` |
| WPN_HAC_003 | Hache Gnome à Deux Têtes | T2 | Craft `NPC_GRA_03` |
| WPN_HAC_004 | Hache du Cratère | T3 | `MOB_SAL_025` / `NPC_GAT_01` |
| WPN_HAC_005 | Hache de Siège de Granzam | T3 | Craft `NPC_GRA_03` |
| WPN_HAC_006 | Hache d'Abordage Leprechaun | T3 | Craft `NPC_BRO_01` |
| WPN_HAC_007 | Hache de Logi | T4 | `BOSS_SAL_DUN_001` / `NPC_GAT_01` |
| WPN_HAC_008 | Hache Titanesque de Granzam | T4 | `BOSS_GNO_DUN_001` / `NPC_GRA_03` |

### Masses (`WPN_MAS`)
| ID | Nom | Tier | Source |
|---|---|---|---|
| WPN_MAS_001 | Masse Cloutée | T1 | Boutique Alne |
| WPN_MAS_002 | Masse de Granit | T2 | Craft `NPC_GRA_03` |
| WPN_MAS_003 | Marteau de Forge Leprechaun | T2 | Craft `NPC_BRO_01` |
| WPN_MAS_004 | Masse de Lave | T3 | Craft `NPC_GAT_01` |
| WPN_MAS_005 | Marteau de Guerre de Granzam | T3 | `MOB_GNO_025` / `NPC_GRA_03` |
| WPN_MAS_006 | Maillet de MK-0 | T4 | `BOSS_LEP_DUN_001` / `NPC_BRO_03` |

### Baguettes (`WPN_BAG`)
| ID | Nom | Tier | Source |
|---|---|---|---|
| WPN_BAG_001 | Baguette-Diapason | T1 | Boutique Lioda |
| WPN_BAG_002 | Baguette de Source | T2 | Craft `NPC_UND_06` |
| WPN_BAG_003 | Baguette de Refrain | T2 | Craft `NPC_LIO_04` |
| WPN_BAG_004 | Baguette de Pénombre | T2 | Craft `NPC_DUS_04` |
| WPN_BAG_005 | Sceptre de Coralia | T3 | Craft `NPC_UND_06` + `NPC_UND_07` |
| WPN_BAG_006 | Bâton de Chef d'Orchestre | T3 | Craft `NPC_LIO_04` |
| WPN_BAG_007 | Diapason de Silence | T3 | `BOSS_PUC_DUN_001` / `NPC_LIO_04` |
| WPN_BAG_008 | Sceptre des Profondeurs | T4 | `BOSS_UND_DUN_001` / `NPC_UND_06` |
| WPN_BAG_009 | Baguette de la Partition Perdue | T4 | `BOSS_PUC_DUN_001` / `NPC_LIO_04` |
| WPN_BAG_010 | Baguette du Zéphyr Supérieur | T4 | Craft `NPC_SWI_05` |

### Armes de jet (`WPN_JET`)
| ID | Nom | Tier | Source |
|---|---|---|---|
| WPN_JET_001 | Couteaux de Lancer | T1 | Boutique Alne |
| WPN_JET_002 | Shuriken-Griffe | T2 | Craft `NPC_FRE_07` |
| WPN_JET_003 | Kunai d'Ombre | T3 | Craft `NPC_DUS_04` |
| WPN_JET_004 | Étoiles de Ragnar | T4 | `BOSS_CAI_DUN_001` / `NPC_FRE_07` |

### Boucliers (`WPN_BOU` — `BLOC`, main libre `hand_off`)
| ID | Nom | Tier | Source |
|---|---|---|---|
| WPN_BOU_001 | Bouclier Rond en Bois | T1 | Boutique Alne |
| WPN_BOU_002 | Écu de Granit | T2 | Craft `NPC_GRA_03` |
| WPN_BOU_003 | Écu de Mithril | T2 | Craft `NPC_BRO_01` |
| WPN_BOU_004 | Pavois de Braise | T3 | Craft `NPC_GAT_01` |
| WPN_BOU_005 | Rempart de Granzam | T3 | `MOB_GNO_025` / `NPC_GRA_03` |
| WPN_BOU_006 | Aegis de Mithril | T4 | `BOSS_LEP_DUN_001` / `NPC_BRO_03` |

### Légendaires (`WPN_LEG` — T5, liés à l'âme)
| ID | Nom | Famille | Quête d'acquisition (étape 34) |
|---|---|---|---|
| WPN_LEG_001 | Gram, l'Épée Démoniaque | Épée 2H | `QST_LEG_001` — Raid Voulg vs Eugene (`ZONE_SAL_TWN_001`) |
| WPN_LEG_002 | Excalibur, l'Épée Sainte | Épée 1H | `QST_LEG_002` — Thrym `BOSS_JOT_001` (`ZONE_JOT_RAID_001`) |
| WPN_LEG_003 | Shekinah, l'Arc de Lumière | Arc | `QST_LEG_003` — « Calibur », Sinon, Thrymheim (`ZONE_JOT_RAID_001`) |
| WPN_LEG_004 | Crest of Yggdrasil | Rapière | `QST_LEG_004` — Forge Lisbeth, prérequis titre `QST_T5_OSS_RAP_01` |

---

## 4. Décompte racial (affinités — critère CDC : ≥8 par race)

| Race | Nb affines | Armes |
|---|---|---|
| Sylph | **8** | EP1_002, EP1_010, RAP_002, RAP_007, DAG_003, DAG_005, ARC_004, BAG_010 |
| Salamander | **14** | EP1_003, EP1_009, EP2_002, EP2_005, EP2_008, KAT_002, KAT_004, KAT_006, HAC_002, HAC_004, HAC_007, MAS_004, BOU_004, LEG_001 |
| Cait Sith | **11** | EP1_007, RAP_004, DAG_002, DAG_008, ARC_002, ARC_005, ARC_007, ARC_009, JET_002, JET_004, LEG_003 |
| Puca | **8** | RAP_001, RAP_005, RAP_008, BAG_001, BAG_003, BAG_006, BAG_007, BAG_009 |
| Imp | **8** | EP1_005, KAT_003, KAT_005, KAT_007, DAG_004, DAG_007, BAG_004, JET_003 |
| Gnome | **13** | EP1_008, EP2_003, EP2_007, LAN_002, LAN_005, LAN_007, HAC_003, HAC_005, HAC_008, MAS_002, MAS_005, BOU_002, BOU_005 |
| Leprechaun | **10** | EP1_006, EP2_004, LAN_003, LAN_006, LAN_008, HAC_006, MAS_003, MAS_006, BOU_003, BOU_006 |
| Spriggan | **9** | EP1_004, EP1_011, EP2_006, KAT_008, DAG_006, ARC_003, ARC_006, ARC_008, ARC_010 |
| Undine | **8** | EP1_012, RAP_003, RAP_006, LAN_004, BAG_002, BAG_005, BAG_008, LEG_004 |
| *(Neutres)* | 11 | EP1_001, EP2_001, KAT_001, DAG_001, ARC_001, JET_001, LAN_001, HAC_001, MAS_001, BOU_001, LEG_002 |

**Toutes les races ≥ 8** ✅. Total : 89 affines + 11 neutres = 100.

**Interactions mécaniques signatures** : WPN_EP2_008 & WPN_HAC_007 (Colère/Hache de Logi) montent la jauge de **Surchauffe** (D11) dans la Caldeira ; WPN_BAG_005 (Sceptre de Coralia) aide contre la jauge d'**Apnée** au Gouffre de Léviathan ; WPN_DAG_007 (Croc de Skreech) agit sur la jauge de **Vacarme** (Imp). Chaque boss de donjon nommé (Logi, Jörmun, Ragnar, Skreech, Mithrandur, MK-0, Ondaro, Pennroth) alimente ≥1 arme T4.

**Dépendance inter-raciale D15** : tous les T4 (et les recettes T5 craftables) exigent **Mithril de Brokkheim** et/ou **Gemme de Granzam**, forçant les échanges Leprechaun↔Gnome↔reste du monde.

---

## 5. `[TODO]` — Points ouverts Phase A (PNJ & donjons)

Aucune référence introuvable **bloquante**. Points à confirmer une fois la Phase A PNJ livrée pour les villes concernées :

- **`NPC_PEN_04`** (« forgeron-arquier de Penwether ») — le roster Spriggan de Penwether n'est pas encore fiché (Phase A en cours : Granzam → Brokkheim → **Penwether**). Le slot forgeron/arquier est présumé sur la plage notable `01-07` ; à recaler sur le nom exact à la livraison de Penwether. Concerne : EP1_004, EP1_011, EP2_006, KAT_008, DAG_006, ARC_003/006/008/010.
- **`NPC_LIO_04`** (« luthier-forgeron de Lioda ») — Lioda est fichée (lot 2.8) ; vérifier que le `04` (Fitz) est bien l'artisan-instrumentiste, sinon recaler sur le bon `role_type: SKILL_MASTER/MERCHANT`. Concerne : RAP_005/008, BAG_003/006/007/009.
- **`NPC_DUS_04`** (« forgeron de Duskarn ») — Duskarn est fichée (lot 2.9) ; confirmer le slot forgeron (Korvac ?). Concerne : EP1_005, KAT_003/005/007, DAG_004, BAG_004, JET_003.
- ~~**`ZONE_JOT_DUN_001`**~~ — ✅ **RÉSOLU (étape 34)** : l'ID était fantôme (absent de l'atlas). Les quêtes Excalibur (`QST_LEG_002`) & Calibur (`QST_LEG_003`) sont ancrées sur l'ID **réel de l'atlas** `ZONE_JOT_RAID_001` (Trône de Thrym / Thrymheim, boss `BOSS_JOT_001`), via `ZONE_JOT_FLD_001` (Abysse, Clé de Glace). Fiches `WPN_LEG_002`/`003` corrigées.

Matériaux cités **par nom** (Mithril de Brokkheim, Gemme de Granzam, Cristal de brise, Acier de braise, Croc de béhémoth, etc.) — convention identique au lot tête prouvé (`ARM_TET_001`), en attente de résolution vers les `MAT_*` du **lot I-3** (matériaux), qui recroisera ces ingrédients.

## 6. `[QUESTIONS_LOT]`

1. **Slots forgerons non canoniques** : faut-il fixer une convention « le PNJ `role_type: SKILL_MASTER` de plus bas index d'une capitale = forgeron référent » pour stabiliser les recettes de craft à travers tous les lots d'items ? (Recommandation ACP : oui, à acter comme règle transverse au lot I-3.)
2. **Boucliers en `WPN_*`** : conformes à la directive PE (main libre `hand_off`, `BLOC` au lieu d'`ATQ`) — confirmé conservés dans le lot armes et non migrés vers un slot d'armure.
3. **Légendaires liés** : `WPN_LEG_*` marqués invendables/liés ; la revente exceptionnelle ~10 000 Yrds au fondoir doit-elle être désactivée entièrement (item strictement non destructible) ? Laissé activé par défaut (cohérence grille §3).
