# 📇 INDEX MAÎTRE — Équipements de Taille (`ARM_TAI_001` → `ARM_TAI_100`)

> **Couverture** : 100/100 · **Convention ID** : `ARM_TAI_<NNN>` (séquentiel strict, D13)
> **Slot** : Taille (1 des 5 slots d'armure portés, modèle personnage PE — cf. étape 10-quater).
> **Contrat** : chaque fiche expose Identification Cardinal / Statistiques / Fabrication / Usage / Lore / Intégration Bot (`!give`, `!inspect`, `!sys_give`, `SYS_GRANT_ITEM`).
> **⚠️ Variance de gabarit connue (audit étape 36)** : ce lot suit le gabarit délégué « simplifié » (labels de sous-famille en anglais `Cloth/Leather/Maille/Chain`, sections `Fabrication`/`Usage` sans accents) et une **rampe de tiers plate** (T1×20 / T2×30 / T3×35 / T4×15, **pas de T5 ni de légendaire**) plutôt que la structure raciale D14 (9×9 + neutres + drops de boss + 1 légendaire). Structurellement complet et cohérent en interne ; à réharmoniser au futur audit de gabarit si le PE l'exige.

## Grille de valeurs (référence P2 économie)

| Tier | Niveau | DEF | Durabilité | Prix base (Yrds) | Revente |
|---|---|---|---|---|---|
| T1 | 1-8 | 5-15 | 20-40 | 150-400 | 25% |
| T2 | 10-18 | 18-35 | 45-70 | 800-2 000 | 25% |
| T3 | 20-30 | 40-65 | 75-110 | 3 000-8 000 | 25% |
| T4 | 32-42 | 70-110 | 120-160 | 12 000-25 000 | 25% |

## Organisation du lot (par bloc de ville / famille de matière)

| Plage | Ville / hub commercial | Sous-famille dominante | Tiers |
|---|---|---|---|
| 001-020 | Alne (`SHOP_ALNE_*`) | Cloth (tissu) | T1-T2 |
| 021-040 | Freelia (`SHOP_FRE_*`) | Leather (cuir) | T1-T2 |
| 041-060 | Duskarn (`SHOP_DUS_*`) | Maille | T2-T3 |
| 061-080 | Brokkheim (`SHOP_BRO_*`) | Chain (plaques) | T3 |
| 081-090 | Penwether (`SHOP_PEN_*`) | Chain (hybride) | T3-T4 |
| 091-100 | Yggdrasil / endgame (`SHOP_YGG_*`) | Chain (T4 sommet) | T4 |

## Registre complet (001-100)

| ID | Nom | Tier | Sous-famille | Source principale |
|---|---|---|---|---|
| `ARM_TAI_001` | Ceinture en Lin d'Alne | T1 | Cloth | SHOP_ALNE_01 |
| `ARM_TAI_002` | Ceinture de Chanvre Tresse | T1 | Cloth | SHOP_ALNE_01 |
| `ARM_TAI_003` | Ceinture de Toile Rustique | T1 | Cloth | SHOP_ALNE_02 |
| `ARM_TAI_004` | Ceinture de Coton Sauvage | T1 | Cloth | SHOP_ALNE_02 |
| `ARM_TAI_005` | Ceinture d'Apprenti | T1 | Cloth | SHOP_ALNE_03 |
| `ARM_TAI_006` | Ceinture de Tisserand | T1 | Cloth | SHOP_ALNE_03 |
| `ARM_TAI_007` | Ceinture de Vagabond | T1 | Cloth | SHOP_ALNE_04 |
| `ARM_TAI_008` | Ceinture de Jute Renforce | T1 | Cloth | SHOP_ALNE_04 |
| `ARM_TAI_009` | Ceinture du Messager | T1 | Cloth | SHOP_ALNE_05 |
| `ARM_TAI_010` | Ceinture aux Glycines | T1 | Cloth | SHOP_ALNE_05 |
| `ARM_TAI_011` | Ceinture de Soie Delicate | T2 | Cloth | SHOP_ALNE_06 |
| `ARM_TAI_012` | Ceinture Brodee d'Alne | T2 | Cloth | SHOP_ALNE_06 |
| `ARM_TAI_013` | Ceinture du Vent Leger | T2 | Cloth | SHOP_ALNE_07 |
| `ARM_TAI_014` | Ceinture aux Rubans | T2 | Cloth | SHOP_ALNE_07 |
| `ARM_TAI_015` | Ceinture de Moire | T2 | Cloth | SHOP_ALNE_08 |
| `ARM_TAI_016` | Ceinture de Taffetas | T2 | Cloth | SHOP_ALNE_08 |
| `ARM_TAI_017` | Ceinture de Velours | T2 | Cloth | SHOP_ALNE_09 |
| `ARM_TAI_018` | Ceinture des Nues | T2 | Cloth | SHOP_ALNE_09 |
| `ARM_TAI_019` | Ceinture d'Etoffe Enchantee | T2 | Cloth | SHOP_ALNE_10 |
| `ARM_TAI_020` | Ceinture du Zephyr | T2 | Cloth | SHOP_ALNE_10 |
| `ARM_TAI_021` | Ceinturon de Peau Brute | T1 | Leather | SHOP_FRE_01 |
| `ARM_TAI_022` | Ceinturon de Veau | T1 | Leather | SHOP_FRE_01 |
| `ARM_TAI_023` | Ceinturon de Randonneur | T1 | Leather | SHOP_FRE_02 |
| `ARM_TAI_024` | Ceinturon de Chasseur | T1 | Leather | SHOP_FRE_02 |
| `ARM_TAI_025` | Ceinturon de Trappeur | T1 | Leather | SHOP_FRE_03 |
| `ARM_TAI_026` | Ceinturon de Fouet | T1 | Leather | SHOP_FRE_03 |
| `ARM_TAI_027` | Ceinturon de Ventre de Loup | T1 | Leather | SHOP_FRE_04 |
| `ARM_TAI_028` | Ceinturon des Steppes | T1 | Leather | SHOP_FRE_04 |
| `ARM_TAI_029` | Ceinturon de Garde | T1 | Leather | SHOP_FRE_05 |
| `ARM_TAI_030` | Ceinturon des Plaines | T1 | Leather | SHOP_FRE_05 |
| `ARM_TAI_031` | Ceinturon de Cuir Fonce | T2 | Leather | SHOP_FRE_06 |
| `ARM_TAI_032` | Ceinturon de Bouclier | T2 | Leather | SHOP_FRE_06 |
| `ARM_TAI_033` | Ceinturon de Ranger | T2 | Leather | SHOP_FRE_07 |
| `ARM_TAI_034` | Ceinturon Renforce | T2 | Leather | SHOP_FRE_07 |
| `ARM_TAI_035` | Ceinturon de Sacoche | T2 | Leather | SHOP_FRE_08 |
| `ARM_TAI_036` | Ceinturon de Voyageur | T2 | Leather | SHOP_FRE_08 |
| `ARM_TAI_037` | Ceinturon de l'Eclaireur | T2 | Leather | SHOP_FRE_09 |
| `ARM_TAI_038` | Ceinturon de la Savane | T2 | Leather | SHOP_FRE_09 |
| `ARM_TAI_039` | Ceinturon de Bouffon | T2 | Leather | SHOP_FRE_10 |
| `ARM_TAI_040` | Ceinturon Dore | T2 | Leather | SHOP_FRE_10 |
| `ARM_TAI_041` | Ceinture de Mailles d'Argent | T2 | Maille | SHOP_DUS_01 |
| `ARM_TAI_042` | Ceinture de Mailles d'Etain | T2 | Maille | SHOP_DUS_01 |
| `ARM_TAI_043` | Ceinture de Mailles de Cuivre | T2 | Maille | SHOP_DUS_02 |
| `ARM_TAI_044` | Ceinture de Chainons | T2 | Maille | SHOP_DUS_02 |
| `ARM_TAI_045` | Ceinture de Jongleur | T2 | Maille | SHOP_DUS_03 |
| `ARM_TAI_046` | Ceinture de Mailles Legeres | T2 | Maille | SHOP_DUS_03 |
| `ARM_TAI_047` | Ceinture de Maille d'Anneaux | T2 | Maille | SHOP_DUS_04 |
| `ARM_TAI_048` | Ceinture a Cotte de Mailles | T2 | Maille | SHOP_DUS_04 |
| `ARM_TAI_049` | Ceinture de Serrure | T2 | Maille | SHOP_DUS_05 |
| `ARM_TAI_050` | Ceinture de Mille Anneaux | T2 | Maille | SHOP_DUS_05 |
| `ARM_TAI_051` | Ceinture de Fer Tresse | T3 | Maille | SHOP_DUS_06 |
| `ARM_TAI_052` | Ceinture de Chaine d'Argent | T3 | Maille | SHOP_DUS_06 |
| `ARM_TAI_053` | Ceinture de Maille d'Acier | T3 | Maille | SHOP_DUS_07 |
| `ARM_TAI_054` | Ceinture d'Ecailles Metalliques | T3 | Maille | SHOP_DUS_07 |
| `ARM_TAI_055` | Ceinture du Metallurgiste | T3 | Maille | SHOP_DUS_08 |
| `ARM_TAI_056` | Ceinture de Maille Lourde | T3 | Maille | SHOP_DUS_08 |
| `ARM_TAI_057` | Ceinture de Tissu Metallique | T3 | Maille | SHOP_DUS_09 |
| `ARM_TAI_058` | Ceinture de Mailles de Mithril | T3 | Maille | SHOP_DUS_09 |
| `ARM_TAI_059` | Ceinture de Serpent d'Acier | T3 | Maille | SHOP_DUS_10 |
| `ARM_TAI_060` | Ceinture du Forgeron | T3 | Maille | SHOP_DUS_10 |
| `ARM_TAI_061` | Ceinture a Plaques de Fer | T3 | Chain | SHOP_BRO_01 |
| `ARM_TAI_062` | Ceinture a Plaques de Bronze | T3 | Chain | SHOP_BRO_01 |
| `ARM_TAI_063` | Ceinture a Plaques Rivetees | T3 | Chain | SHOP_BRO_02 |
| `ARM_TAI_064` | Ceinture a Plaques Lourdes | T3 | Chain | SHOP_BRO_02 |
| `ARM_TAI_065` | Ceinture de Tole de Cuivre | T3 | Chain | SHOP_BRO_03 |
| `ARM_TAI_066` | Ceinture de Lamelles d'Acier | T3 | Chain | SHOP_BRO_03 |
| `ARM_TAI_067` | Ceinture Segmentee | T3 | Chain | SHOP_BRO_04 |
| `ARM_TAI_068` | Ceinture de Plaques de Protection | T3 | Chain | SHOP_BRO_04 |
| `ARM_TAI_069` | Ceinture de Jambieres Renforcees | T3 | Chain | SHOP_BRO_05 |
| `ARM_TAI_070` | Ceinture du Bastion | T3 | Chain | SHOP_BRO_05 |
| `ARM_TAI_071` | Ceinture de Garnison | T3 | Chain | SHOP_BRO_06 |
| `ARM_TAI_072` | Ceinture a Plaques de Gattan | T3 | Chain | SHOP_BRO_06 |
| `ARM_TAI_073` | Ceinture de Piquet | T3 | Chain | SHOP_BRO_07 |
| `ARM_TAI_074` | Ceinture de la Legion | T3 | Chain | SHOP_BRO_07 |
| `ARM_TAI_075` | Ceinture de Brokkheim | T3 | Chain | SHOP_BRO_08 |
| `ARM_TAI_076` | Ceinture de Bataille | T3 | Chain | SHOP_BRO_08 |
| `ARM_TAI_077` | Ceinture du Chevalier | T3 | Chain | SHOP_BRO_09 |
| `ARM_TAI_078` | Ceinture du Paladin | T3 | Chain | SHOP_BRO_09 |
| `ARM_TAI_079` | Ceinture d'Acier Noir | T3 | Chain | SHOP_BRO_10 |
| `ARM_TAI_080` | Ceinture du Titan | T3 | Chain | SHOP_BRO_10 |
| `ARM_TAI_081` | Ceinture de Cuir et Mailles | T3 | Chain | SHOP_PEN_01 |
| `ARM_TAI_082` | Ceinture Tissu et Chaine | T3 | Chain | SHOP_PEN_01 |
| `ARM_TAI_083` | Ceinture Hybride de Survie | T3 | Chain | SHOP_PEN_02 |
| `ARM_TAI_084` | Ceinture du Rodeur | T3 | Chain | SHOP_PEN_02 |
| `ARM_TAI_085` | Ceinture de l'Hybride | T3 | Chain | SHOP_PEN_03 |
| `ARM_TAI_086` | Ceinture de Cuir Renforce Mithril | T4 | Chain | SHOP_PEN_03 |
| `ARM_TAI_087` | Ceinture de Soie et Acier | T4 | Chain | SHOP_PEN_04 |
| `ARM_TAI_088` | Ceinture de Maille et Plaque d'Adamantium | T4 | Chain | SHOP_PEN_04 |
| `ARM_TAI_089` | Ceinture du Chasseur de Tresors | T4 | Chain | SHOP_PEN_05 |
| `ARM_TAI_090` | Ceinture de l'Equilibre | T4 | Chain | SHOP_PEN_05 |
| `ARM_TAI_091` | Ceinture du Vent Premier | T4 | Chain | SHOP_YGG_01 |
| `ARM_TAI_092` | Ceinture du Serment de Feu | T4 | Chain | SHOP_YGG_01 |
| `ARM_TAI_093` | Ceinture de l'Onde Primordiale | T4 | Chain | SHOP_YGG_02 |
| `ARM_TAI_094` | Ceinture de la Terre Mere | T4 | Chain | SHOP_YGG_02 |
| `ARM_TAI_095` | Ceinture du Roi des Ombres | T4 | Chain | SHOP_YGG_03 |
| `ARM_TAI_096` | Ceinture du Crepuscule Eternel | T4 | Chain | SHOP_YGG_03 |
| `ARM_TAI_097` | Ceinture de l'Aube Doree | T4 | Chain | SHOP_YGG_04 |
| `ARM_TAI_098` | Ceinture du Neant Scelle | T4 | Chain | SHOP_YGG_04 |
| `ARM_TAI_099` | Ceinture de la Deesse Mere | T4 | Chain | SHOP_YGG_05 |
| `ARM_TAI_100` | Ceinture d'Yggdrasil | T4 | Chain | SHOP_YGG_05 |

## Intégration Bot (rappel de complétude)

Aucune commande nouvelle : port du slot Taille via `!equiper` / retrait `!inspect` ; attribution `!sys_give` / `SYS_GRANT_ITEM(Avatar_ID, ARM_TAI_<NNN>, 1)` ; vente boutique résolue par `T_SHOP_ITEMS` (`SHOP_*` référencés ci-dessus).
