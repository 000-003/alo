# ⛏️ Index du Lot I-3 — Matériaux (`MAT_*`)

> **Chantier** : Renflouement massif « ≥100 unités par type » (directive PE 2026-07-07). Lot **I-3** du CDC-ITM-01.
> **Couverture** : **100 / 100** fiches conformes + index. Gabarit item §4c (Usage & Filière), grilles de valeurs §3.
> **Statut** : ✅ **CLOS** (2026-07-09). Junk v1 `mat_*` déjà archivé dans `ressources_brutes/deprecated_v1/materiaux/` par session antérieure — rien supprimé.

> ⚠️ **Note de reprise (étape 18)** : les 100 fiches existaient déjà sur disque (générateur délégué antérieur) mais **non conformes** (fichiers en MAJUSCULES sans slug, section « Intégration Bot » cassée en bloc de code, cibles de recette vagues/inexistantes `MAT_xxx`/`MAT_LEG_T5_*`, prix de gemmes T4 hors grille, placeholders `xxx` de source). Cette étape a **normalisé** l'existant sans le régénérer (lore conservé) : renommage aux conventions §0.4, réécriture des lignes `Entre dans` vers des `Item_ID` réels (WPN_/CSM_/ARM_TET_/BAG_/HRN_/BELT_), correction typos (« Mineral »→« Minerai »), prix de gemmes T4 remis sur grille, sources `xxx` résolues vers `MOB_*`/`BOSS_*`/`ZONE_*` réels (plages D6), section Intégration Bot standardisée.

---

## 1. Convention d'ID

`MAT_<FAM>_<NNN>` — séquentiel strict par famille, sans hash, sans trou. 5 familles :

| Famille | Sous-dossier | Préfixe | Plage | Nb |
|---|---|---|---|---|
| Minerais | `minerais/` | `MAT_MIN` | 001-025 | 25 |
| Herbes & plantes | `herbes_plantes/` | `MAT_HRB` | 001-025 | 25 |
| Cuirs & os | `cuirs_os/` | `MAT_CUI` | 001-020 | 20 |
| Drops de monstres | `drops_monstres/` | `MAT_DRP` | 001-020 | 20 |
| Gemmes | `gemmes/` | `MAT_GEM` | 001-010 | 10 |
| **TOTAL** | | | | **100** |

Nommage fichier : `mat_<sous>_<nnn>_<slug>.md` (minuscules, sans accents, underscores). Gabarit = 4 sections (Identification Cardinal / Usage & Filière / Lore Argo / Intégration Bot).

---

## 2. Grille de valeurs appliquée (CDC §3, fermée)

| Tier | Niveau matière | Prix de rachat PNJ (Yrds) | Règle |
|---|---|---|---|
| T1 | 1-8 | 3-20 | 5-15 % du plus bas item craftable |
| T2 | 10-18 | 20-90 | idem |
| T3 | 20-30 | 200-400 (gemmes) / 100-500 | idem |
| T4 | 32-42 | **800-3 000** (mithril & gemmes, D15) | plancher haut imposé |
| T5 | 43+ | ~10 000 (Cœur du Monde, lié craft légendaire) | — |

Empilable OUI (×99) pour toutes les matières. Chaque matière = ≥1 acheteur PNJ existant + ≥1 recette d'item réel (contrat éco §77).

---

## 3. Répertoire par famille (ID | Nom | Tier | Source | Acheteur)

### Minerais (`MAT_MIN`)
| ID | Nom | Tier | Source | Acheteur |
|---|---|---|---|---|
| MAT_MIN_001 | Minerai de Fer | T1 | `ZONE_NEU_*` | `NPC_SWI_26` |
| MAT_MIN_002 | Cuivre Brut | T1 | `ZONE_GNO_HUNT_001` | `NPC_GRA_12` |
| MAT_MIN_003 | Étain des Collines | T1 | `ZONE_LEP_HUNT_001` | `NPC_BRO_52` |
| MAT_MIN_004 | Minerai d'Argent | T2 | `ZONE_SPR_HUNT_001` | `NPC_PEN_37` |
| MAT_MIN_005 | Charbon de Forge | T1 | `ZONE_LEP_CAP_001` | `NPC_BRO_50` |
| MAT_MIN_006 | Soufre Cristallisé | T2 | `ZONE_LEP_HUNT_001` | `NPC_BRO_57` |
| MAT_MIN_007 | Cristal de Brise | T2 | `ZONE_SPR_HUNT_002` | `NPC_PEN_15` |
| MAT_MIN_008 | Obsidienne de Gattan | T3 | `ZONE_SAL_DUN_001` | `NPC_GAT_44` |
| MAT_MIN_009 | Granit de Granzam | T3 | `ZONE_GNO_HUNT_002` | `NPC_GRA_36` |
| MAT_MIN_010 | Mithril Brut | T4 | `ZONE_GNO_DUN_001` | `NPC_GRA_68` |
| MAT_MIN_011 | Cristal Violet | T3 | `ZONE_IMP_HUNT_001` | `NPC_DUS_15` |
| MAT_MIN_012 | Pierre de Lune | T3 | `ZONE_SPR_HUNT_001` | `NPC_PEN_15` |
| MAT_MIN_013 | Minerai de Cuivre Raffiné | T2 | `ZONE_GNO_HUNT_001` | `NPC_GRA_31` |
| MAT_MIN_014 | Minerai d'Étain Fin | T3 | `ZONE_LEP_HUNT_002` | `NPC_BRO_15` |
| MAT_MIN_015 | Minerai de Mage | T3 | `ZONE_SPR_HUNT_001` | `NPC_PEN_26` |
| MAT_MIN_016 | Minerai de Foudre | T3 | `ZONE_SPR_HUNT_002` | `NPC_PEN_15` |
| MAT_MIN_017 | Pierre Philosophale | T4 | `ZONE_SPR_DUN_001` | `NPC_GAT_63` |
| MAT_MIN_018 | Adamantium | T4 | `ZONE_LEP_DUN_001` | `NPC_BRO_37` |
| MAT_MIN_019 | Minerai de Glace Éternelle | T3 | `ZONE_UND_HUNT_001` | `NPC_UND_26` |
| MAT_MIN_020 | Minerai de Feu Infernal | T3 | `ZONE_SAL_HUNT_001` | `NPC_VOU_70` |
| MAT_MIN_021 | Minerai d'Ombre | T4 | `ZONE_SPR_DUN_001` | `NPC_PEN_84` |
| MAT_MIN_022 | Minerai de Terre Profonde | T2 | `ZONE_GNO_HUNT_001` | `NPC_GRA_65` |
| MAT_MIN_023 | Scorie de Mithril | T3 | `ZONE_LEP_HUNT_002` | `NPC_BRO_93` |
| MAT_MIN_024 | Minerai de Lumière | T4 | `ZONE_LEP_CAP_001` | `NPC_BRO_01` |
| MAT_MIN_025 | Minerai Primordial | T4 | `ZONE_NEU_CAP_001` | `NPC_ALN_30` |

### Herbes & plantes (`MAT_HRB`)
| ID | Nom | Tier | Source | Acheteur |
|---|---|---|---|---|
| MAT_HRB_001 | Lin Sylvestre | T1 | Alne | `NPC_ALN_66` |
| MAT_HRB_002 | Fleur de Gravats | T1 | Ruines Noires (SPR) | `NPC_PEN_12` |
| MAT_HRB_003 | Prêle des Vapeurs | T1 | Canaux Refroid. (LEP) | `NPC_BRO_28` |
| MAT_HRB_004 | Mousse de Caillasse | T1 | Éboulis (GNO) | `NPC_GRA_38` |
| MAT_HRB_005 | Herbe des Steppes | T1 | Steppes Granit (GNO) | `NPC_GRA_11` |
| MAT_HRB_006 | Fleur de Soufre | T2 | Vallée Geysers (LEP) | `NPC_BRO_56` |
| MAT_HRB_007 | Plante des Ombres | T2 | Canyon Duskarn (IMP) | `NPC_DUS_36` |
| MAT_HRB_008 | Fleur de Lune | T2 | Cloître Renversé (SPR) | `NPC_PEN_35` |
| MAT_HRB_009 | Herbe des Marais | T2 | Archipel (UND) | `NPC_UND_35` |
| MAT_HRB_010 | Fleur de Savane | T2 | Plaine Freelia (CAI) | `NPC_FRE_35` |
| MAT_HRB_011 | Pétale de Rose Grise | T2 | Terres Grises (SPR) | `NPC_PEN_53` |
| MAT_HRB_012 | Herbe de Mithril | T3 | Mine Mithril (GNO) | `NPC_GRA_35` |
| MAT_HRB_013 | Fleur d'Obsidienne | T3 | Cratère Voulg (SAL) | `NPC_VOU_35` |
| MAT_HRB_014 | Herbe des Neiges | T3 | Sommets Swilvane (SYL) | `NPC_SWI_35` |
| MAT_HRB_015 | Fleur de l'Âme | T3 | Nécropole (SPR/IMP) | `NPC_DUS_84` |
| MAT_HRB_016 | Herbe des Ruines | T3 | Bibliothèque Enterrée (SPR) | `NPC_PEN_29` |
| MAT_HRB_017 | Fleur des Forges | T2 | Halle Marteau (LEP) | `NPC_BRO_36` |
| MAT_HRB_018 | Fleur de Lotus | T3 | Bassins Chauds (LEP) | `NPC_BRO_27` |
| MAT_HRB_019 | Herbe des Canaux | T2 | Canaux Refroid. (LEP) | `NPC_BRO_25` |
| MAT_HRB_020 | Herbe d'Eau Claire | T1 | Lac Cristallin (UND) | `NPC_UND_26` |
| MAT_HRB_021 | Fleur de Grenat | T3 | Grande Halle (GNO) | `NPC_GRA_39` |
| MAT_HRB_022 | Herbe du Vent | T2 | Plaine Freelia (CAI/SYL) | `NPC_FRE_11` |
| MAT_HRB_023 | Fleur du Crépuscule | T3 | Balcon Conseil (IMP) | `NPC_DUS_81` |
| MAT_HRB_024 | Herbe de Résine | T2 | Atelier Profondeurs (GNO) | `NPC_GRA_24` |
| MAT_HRB_025 | Plante Primordiale | T4 | Grotte Ygg | `NPC_ALN_98` |

### Cuirs & os (`MAT_CUI`) — chaque entrée cite un `MOB_*` (plage D6)
| ID | Nom | Tier | Source | Acheteur |
|---|---|---|---|---|
| MAT_CUI_001 | Fourrure Grise | T1 | `MOB_GNO_002` | `NPC_GRA_50` |
| MAT_CUI_002 | Carapace Éclatée | T1 | `MOB_GNO_003` | `NPC_GRA_15` |
| MAT_CUI_003 | Glande Bouillante | T2 | `MOB_LEP_001` | `NPC_BRO_28` |
| MAT_CUI_004 | Carapace Émaillée | T2 | `MOB_LEP_002` | `NPC_BRO_32` |
| MAT_CUI_005 | Rouage Précieux | T3 | `MOB_LEP_004` | `NPC_BRO_48` |
| MAT_CUI_006 | Plume Cendrée | T1 | `MOB_SPR_001` | `NPC_PEN_51` |
| MAT_CUI_007 | Queue Annelée | T1 | `MOB_SPR_002` | `NPC_PEN_28` |
| MAT_CUI_008 | Lueur Résiduelle | T2 | `MOB_SPR_003` | `NPC_PEN_34` |
| MAT_CUI_009 | Éclat Bas-Relief | T3 | `MOB_SPR_004` | `NPC_PEN_48` |
| MAT_CUI_010 | Griffe Fouisseuse | T1 | `MOB_GNO_001` | `NPC_GRA_32` |
| MAT_CUI_011 | Croc de Loup | T1 | `MOB_CAI_001` | `NPC_SWI_26` |
| MAT_CUI_012 | Plume de Corbeau | T1 | `MOB_CAI_003` | `NPC_PEN_28` |
| MAT_CUI_013 | Œil de Chauve-Souris | T1 | `MOB_IMP_001` | `NPC_DUS_35` |
| MAT_CUI_014 | Cuir de Loup | T2 | `MOB_CAI_001` | `NPC_FRE_61` |
| MAT_CUI_015 | Croc de Wyrm Mineur | T2 | `MOB_CAI_002` | `NPC_BRO_01` |
| MAT_CUI_016 | Peau de Serpent | T2 | `MOB_UND_001` | `NPC_UND_69` |
| MAT_CUI_017 | Griffe d'Ours | T3 | `MOB_SYL_001` | `NPC_FRE_61` |
| MAT_CUI_018 | Cuir de Golem | T3 | `MOB_GNO_004` | `NPC_GRA_69` |
| MAT_CUI_019 | Écaille de Dragonnet | T4 | `MOB_SPR_010` | `NPC_PEN_84` |
| MAT_CUI_020 | Os d'Ancien | T4 | `MOB_SPR_026` | `NPC_PEN_60` |

### Drops de monstres (`MAT_DRP`)
| ID | Nom | Tier | Source | Acheteur |
|---|---|---|---|---|
| MAT_DRP_001 | Glande Bouillante Pure | T2 | `MOB_LEP_001` | `NPC_BRO_28` |
| MAT_DRP_002 | Cendre Luisante | T1 | `MOB_LEP_003` | `NPC_BRO_52` |
| MAT_DRP_003 | Noyau Fissuré | T2 | `MOB_GNO_004` | `NPC_GRA_69` |
| MAT_DRP_004 | Pierre d'Âme | T2 | `MOB_IMP_020` | `NPC_DUS_84` |
| MAT_DRP_005 | Essence de Vide | T3 | `MOB_SPR_003` | `NPC_PEN_35` |
| MAT_DRP_006 | Cœur de Feu | T3 | `BOSS_SAL_DUN_001` Logi | `NPC_VOU_05` |
| MAT_DRP_007 | Écaille de Léviathan | T4 | `BOSS_UND_DUN_001` Jörmun | `NPC_UND_07` |
| MAT_DRP_008 | Fragment d'Obsidienne | T4 | `BOSS_SAL_DUN_001` Logi | `NPC_GRA_60` |
| MAT_DRP_009 | Poudre d'Étoile | T4 | `MOB_AIR_001` | `NPC_GRA_98` |
| MAT_DRP_010 | Perle des Abysses | T3 | `MOB_UND_004` | `NPC_UND_66` |
| MAT_DRP_011 | Corne de Chasseur | T2 | `MOB_CAI_001` | `NPC_FRE_31` |
| MAT_DRP_012 | Plume de Sylphe | T2 | `MOB_SYL_001` | `NPC_SWI_19` |
| MAT_DRP_013 | Croc de Salamander | T2 | `MOB_SAL_001` | `NPC_GAT_31` |
| MAT_DRP_014 | Larme de Puca | T2 | `MOB_PUC_001` | `NPC_LIO_43` |
| MAT_DRP_015 | Épine Imp | T2 | `MOB_IMP_001` | `NPC_DUS_35` |
| MAT_DRP_016 | Braise de Forge | T3 | `MOB_LEP_025` (mini-boss) | `NPC_BRO_01` |
| MAT_DRP_017 | Éclat de Miroir | T3 | `MOB_SPR_025` (mini-boss) | `NPC_PEN_40` |
| MAT_DRP_018 | Gemme de Sang | T3 | `MOB_GNO_025` (mini-boss) | `NPC_GRA_48` |
| MAT_DRP_019 | Essence de Yggdrasil | T4 | `ZONE_YGG_DUN_001` (endgame) | `NPC_ALN_98` |
| MAT_DRP_020 | Cœur du Monde | T5 | `BOSS_UND_DUN_001` / axe vertical | `NPC_ALN_98` |

### Gemmes (`MAT_GEM`)
| ID | Nom | Tier | Source | Acheteur |
|---|---|---|---|---|
| MAT_GEM_001 | Gemme de Granit | T2 | Mine Mithril (GNO) | `NPC_GRA_66` |
| MAT_GEM_002 | Gemme d'Obsidienne | T3 | Cratère Voulg (SAL) | `NPC_GAT_48` |
| MAT_GEM_003 | Gemme de Brise | T2 | Terres Grises (SPR/SYL) | `NPC_PEN_34` |
| MAT_GEM_004 | Perle d'Undine | T3 | Lac Archipel (UND) | `NPC_UND_66` |
| MAT_GEM_005 | Rubis de Feu | T3 | Voulg (SAL) | `NPC_VOU_66` |
| MAT_GEM_006 | Saphir des Glaces | T3 | Swilvane (SYL) | `NPC_SWI_66` |
| MAT_GEM_007 | Diamant de Mithril | T4 | Mine Mithril (GNO) | `NPC_GRA_68` |
| MAT_GEM_008 | Opale des Ruines | T3 | Nécropole (SPR) | `NPC_PEN_48` |
| MAT_GEM_009 | Gemme d'Ombre | T3 | Rivière d'Encre (IMP) | `NPC_DUS_66` |
| MAT_GEM_010 | Gemme Primordiale | T4 | Alne | `NPC_ALN_93` |

---

## 4. Cross-walk des ingrédients nommés (recettes I-1 / I-2 / lot tête)

Les matériaux cités **par nom** dans les recettes des lots livrés se résolvent désormais vers ces `MAT_*` :

| Ingrédient nommé (recette) | `MAT_*` résolu |
|---|---|
| Mithril de Brokkheim | `MAT_MIN_010` (brut) · `MAT_MIN_023` (scorie) · `MAT_GEM_007` (diamant) |
| Gemme de Granzam | `MAT_GEM_001` (Granit) · `MAT_GEM_007` |
| Cristal de brise (Sylph) | `MAT_MIN_007` · `MAT_GEM_003` |
| Obsidienne (Gattan) | `MAT_MIN_008` · `MAT_GEM_002` · `MAT_DRP_008` |
| Granit de Granzam | `MAT_MIN_009` |
| Os antique | `MAT_CUI_020` (Os d'Ancien) |
| Fer d'ombre / noir | `MAT_MIN_021` (Minerai d'Ombre) |
| Gemme de feu (Voulg) | `MAT_GEM_005` (Rubis de Feu) |
| Éclat de saphir | `MAT_GEM_006` (Saphir des Glaces) |
| Argent sonore (Lioda) | `MAT_MIN_004` (Minerai d'Argent) |
| Charbon / acier de braise | `MAT_MIN_005` · `MAT_DRP_016` (Braise de Forge) |
| Lin sylvestre (tissu tête) | `MAT_HRB_001` |
| Fleur-de-lune / Herbe-de-vie | `MAT_HRB_008` · `MAT_HRB_002`/`012` |
| Larme d'Yggdrasil | `MAT_HRB_025` · `MAT_DRP_019` |
| Perle d'Undine / cristal d'eau pur | `MAT_GEM_004` · `MAT_HRB_020` |
| Croc / cuir (portage, dagues) | `MAT_CUI_011/014` |

---

## 5. Décompte territorial (checklist §6.3 — ≥3 matériaux par territoire)

| Territoire | Matériaux ancrés | Nb |
|---|---|---|
| Salamander (SAL) | MIN_008, MIN_020, HRB_013, GEM_002, GEM_005, DRP_006, DRP_008, DRP_013 | 8 |
| Sylph (SYL) | MIN_007*, HRB_014, HRB_022, CUI_017, GEM_003, GEM_006, DRP_012 | 7 |
| Cait Sith (CAI) | HRB_010, HRB_022, CUI_011, CUI_014, CUI_015, DRP_011 | 6 |
| Puca (PUC) | DRP_014, + argent sonore MIN_004, pierre de lune MIN_012 | 3 |
| Imp (IMP) | MIN_011, HRB_007, HRB_023, CUI_013, GEM_009, DRP_004, DRP_015 | 7 |
| Gnome (GNO) | MIN_002, MIN_009, MIN_010, MIN_013, MIN_022, HRB_004/005/012/021/024, CUI_001/002/010/018, GEM_001/007, DRP_003/018 | 18 |
| Leprechaun (LEP) | MIN_003/005/006/014/023/024, HRB_003/006/017/018/019, CUI_003/004/005, DRP_001/002/016 | 17 |
| Spriggan (SPR) | MIN_004/012/015/016/017/021, HRB_008/011/016, CUI_006/007/008/009/019/020, GEM_003/008, DRP_005/017 | 20 |
| Undine (UND) | MIN_019, HRB_009/020, CUI_016, GEM_004, DRP_007/010 | 7 |
| Neutre / vertical | MIN_001/025, HRB_001/025, DRP_009/019/020, GEM_010 | 9 |

\* Cristal de Brise fiché en Terres Grises frontalières SPR/SYL. **Tous les territoires ≥ 3** ✅.

**Interactions signatures** : `MAT_MIN_008`/`MAT_GEM_002` (Obsidienne) alimentent les armes de la Caldeira (Surchauffe D11) ; `MAT_DRP_007` (Écaille de Léviathan) et `MAT_DRP_010` (Perle des Abysses) chaînent le Sceptre de Coralia `WPN_BAG_005` (Apnée) ; `MAT_MIN_010`+`MAT_GEM_007` (Mithril+Diamant de Brokkheim) et `MAT_GEM_001` (Gemme de Granzam) restent exigés par tous les T4/T5 (dépendance inter-raciale D15).

---

## 6. `[TODO]` — Boss d'axe vertical & rosters faune

- **Boss d'axe vertical (Yggdrasil/Jötunheimr)** : `MAT_DRP_019` (Essence de Yggdrasil) et `MAT_DRP_020` (Cœur du Monde) pointent le Dôme `ZONE_YGG_DUN_001` (existant à l'atlas) mais aucun **boss endgame** n'a d'ID formalisé — à recaler lors du lot quêtes (`09_cdc_quetes.md`, même dette que `LEG_002/003` de l'index armes).
- **Rosters mobs des cuirs/drops** : les `MOB_*` cités respectent les **secteurs** et plages D6 (périphérie `001-004`, mini-boss `025`, boss de zone `026`), mais les **numéros exacts** de chaque bête seront figés au **lot faune F-1** (`07_cdc_faune.md`, D41) ; jusque-là ils valent contrat de plage, pas fiche. Même statut que les `MOB_XXX_025/026` de l'index armes.

## 7. `[QUESTIONS_LOT]`

1. **Aucun matériau « bois » alloué** : l'allocation fermée §2 du CDC-ITM-01 ne prévoit pas de famille bois, alors que les arcs (`WPN_ARC_*`), baguettes (`WPN_BAG_*`), le Bouclier Rond en Bois `WPN_BOU_001` et certaines recettes tête nomment « bois d'if / bois de zéphyr / bois noir / bois chantant ». Recommandation ACP : **amender §2** d'une micro-plage `MAT_WOD_001-00n` (fûts/hampes/manches) ou rattacher les bois à `MAT_HRB` comme « matière végétale ligneuse » — à trancher au prochain amendement CDC. En l'état, les recettes d'arcs/baguettes que j'ai câblées utilisent le composant disponible (cristal/gemme/corne/plume) ; le bois reste un ingrédient nommé non encore fiché.
2. **Convention forgeron référent** : la question ouverte de l'index armes (« le PNJ `SKILL_MASTER` de plus bas index d'une capitale = forgeron/acheteur référent ») reste pertinente ici pour stabiliser les acheteurs de matières à travers les villes non encore auditées. Recommandation : oui, à acter comme règle transverse.
3. **Prix T1 planchers** : plusieurs matières T1 se rachètent 3-20 Yrds (bas de la fourchette « 5-15 % du plus bas item »). Conservé tel quel (cohérent avec le fer à 4 Yrds), mais à surveiller pour l'équilibre des filières de farm au moment des boutiques (C-1+).
