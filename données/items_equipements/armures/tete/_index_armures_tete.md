# 📇 INDEX MAÎTRE — Équipements de Tête (`ARM_TET_001` → `ARM_TET_100`)

> **Couverture** : 100/100 · **Convention ID** : `ARM_TET_<NNN>` (séquentiel strict, D13)
> **Répartition** : 9 items × 9 races (T1→T5) + 9 neutres/monde + 9 drops de boss de donjon + 1 légendaire serveur (Yggdrasil).
> **Contrat** : chaque fiche expose Identification / Statistiques / Acquisition & chaînage économique / Lore / Intégration Bot (`!equiper`, `!inspect`, `!sys_give`, `SYS_GRANT_ITEM`).

## Grille de valeurs (référence P2 économie)

| Tier | Niveau | DEF | Durabilité | Prix achat (Yrds) | Revente |
|---|---|---|---|---|---|
| T1 | 1-8 | 7-15 | 150-250 | 150-400 | 25% |
| T2 | 10-18 | 20-36 | 300-460 | 600-1 500 | 25% |
| T3 | 20-30 | 40-70 | 500-700 | 2 500-6 500 | 25% |
| T4 | 32-42 | 85-120 | 750-950 | 9 000-20 000 | 25% |
| T5 | 43+ | 126-200 | 960-1 200 | drops ~10 000 revente · crafts uniques liés à l'âme | — |

Pénalité de vol par classe : Tissu 0% · Cuir 0/-1% · Maille -1/-2% · Plaque -3/-6%.

## Sylph — Swilvane (001-009)

| ID | Nom | Tier | Classe | Source principale |
|---|---|---|---|---|
| `ARM_TET_001` | Capuche de l'Initié Sylvestre | T1 | Tissu | Boutique Swilvane |
| `ARM_TET_002` | Bandeau de Plume-Vive | T1 | Cuir | Craft (drops `MOB_SYL_001-002`, `010`) |
| `ARM_TET_003` | Cercle de Feuillage Tressé | T2 | Tissu | Craft herboriste (`MOB_SYL_011`) |
| `ARM_TET_004` | Capuche du Guetteur des Cimes | T2 | Cuir | Quête vigies / craft (`MOB_SYL_012-013`) |
| `ARM_TET_005` | Heaume-Brise | T3 | Maille | Craft forge Swilvane (`MOB_SYL_020-024`) |
| `ARM_TET_006` | Couronne de Sève Chantante | T3 | Tissu | Craft élite (`MOB_SYL_025` mini-boss) |
| `ARM_TET_007` | Diadème du Zéphyr Éternel | T4 | Tissu | Craft (drop `BOSS_SYL_DUN_001` + mithril Brokkheim) |
| `ARM_TET_008` | Casque de la Garde Sylvane | T4 | Maille | Grade Officier de la Garde |
| `ARM_TET_009` | Couronne du Vent Premier | T5 | Tissu | Craft unique, titre « Héros de Swilvane » — lié |

## Salamander — Gattan (010-018)

| ID | Nom | Tier | Classe | Source principale |
|---|---|---|---|---|
| `ARM_TET_010` | Calotte de Cendre | T1 | Tissu | Boutique Gattan |
| `ARM_TET_011` | Masque du Conscrit de Gattan | T1 | Cuir | Quête « Premier Sang » (`MOB_SAL_001-002`) |
| `ARM_TET_012` | Heaume de Basalte | T2 | Plaque | Craft Graz `NPC_GAT_02` |
| `ARM_TET_013` | Capuche du Pyromane | T2 | Tissu | Craft Place du Dragon (`MOB_SAL_010-011`) |
| `ARM_TET_014` | Heaume du Légionnaire d'Obsidienne | T3 | Plaque | Craft Graz — réduit Surchauffe 15% (D11) |
| `ARM_TET_015` | Masque de Guerre du Général | T3 | Plaque | Quête élite « L'Ombre d'Eugene » |
| `ARM_TET_016` | Couronne de Magma Dormant | T4 | Plaque | Craft Kagemune `NPC_GAT_01` (`MOB_SAL_026`) |
| `ARM_TET_017` | Heaume du Champion de la Caldeira | T4 | Plaque | Craft — réduit Surchauffe 30% (`MOB_SAL_030-034`) |
| `ARM_TET_018` | Heaume du Cœur de Forge | T5 | Plaque | Craft unique Kagemune+Brokk IX (Logi) — lié |

## Undine — Archipel d'Écume (019-027)

| ID | Nom | Tier | Classe | Source principale |
|---|---|---|---|---|
| `ARM_TET_019` | Coiffe d'Écume | T1 | Tissu | Boutique Archipel |
| `ARM_TET_020` | Bandana du Pêcheur | T1 | Tissu | Maëlle `NPC_UND_10` (Lac Cristallin) |
| `ARM_TET_021` | Diadème de Nacre | T2 | Tissu | Craft joailliers (`MOB_UND_010-011`) |
| `ARM_TET_022` | Capuche de Brume | T2 | Tissu | Morgane `NPC_UND_11` (`MOB_UND_020-024`) |
| `ARM_TET_023` | Cercle des Marées | T3 | Tissu | Craft enchanteurs |
| `ARM_TET_024` | Casque d'Écaille Abyssale | T3 | Cuir | Craft — réduit Apnée 20% (`MOB_UND_030-034`) |
| `ARM_TET_025` | Couronne de Perle Vivante | T4 | Tissu | Craft élite (`MOB_UND_026`) |
| `ARM_TET_026` | Heaume du Courant Profond | T4 | Maille | Craft — réduit Apnée 35% (`MOB_UND_031`) |
| `ARM_TET_027` | Tiare des Sept Lagunes | T5 | Tissu | Craft unique, titre « Bénie des Lagunes » (Jörmun) — liée |

## Cait Sith — Freelia (028-036)

| ID | Nom | Tier | Classe | Source principale |
|---|---|---|---|---|
| `ARM_TET_028` | Capuche à Oreilles de Chaton | T1 | Tissu | Boutique Freelia (`MOB_CAI_001-002`) |
| `ARM_TET_029` | Serre-tête du Traqueur | T1 | Cuir | Craft bourreliers (`MOB_CAI_010`) |
| `ARM_TET_030` | Masque du Chat de Gouttière | T2 | Cuir | Craft (`MOB_CAI_011-012`) |
| `ARM_TET_031` | Capuchon de la Savane | T2 | Cuir | Quête Mira `NPC_FRE_10` (`MOB_CAI_020-024`) |
| `ARM_TET_032` | Heaume-Griffe | T3 | Maille | Craft Gimli `NPC_FRE_04` (`MOB_CAI_025`) |
| `ARM_TET_033` | Coiffe du Dresseur Émérite | T3 | Cuir | Rang « Dresseur Émérite » (Mira) — liée |
| `ARM_TET_034` | Masque du Prédateur Nocturne | T4 | Cuir | Craft élite (`MOB_CAI_026` nocturne) |
| `ARM_TET_035` | Couronne à Crocs | T4 | Maille | Craft Gimli — 5 crocs d'alpha différents |
| `ARM_TET_036` | Couronne du Premier Félin | T5 | Cuir | Craft unique, titre « Souverain de la Savane » (Ragnar) — liée |

## Imp — Duskarn (037-045)

| ID | Nom | Tier | Classe | Source principale |
|---|---|---|---|---|
| `ARM_TET_037` | Voile du Crépuscule | T1 | Tissu | Boutique Bazar des Ombres |
| `ARM_TET_038` | Cornes d'Apprenti | T1 | Cuir | Craft (`MOB_IMP_001-002`) |
| `ARM_TET_039` | Masque de Suie | T2 | Tissu | Craft Umbra `NPC_DUS_02` |
| `ARM_TET_040` | Capuche de l'Échoteur | T2 | Cuir | Craft (`MOB_IMP_010-013`) |
| `ARM_TET_041` | Heaume Corne-de-Nuit | T3 | Plaque | Craft Umbra (`MOB_IMP_020-024`) |
| `ARM_TET_042` | Loup de l'Ombre Dansante | T3 | Tissu | Craft élite (`MOB_IMP_025`) |
| `ARM_TET_043` | Couronne du Bazar des Ombres | T4 | Tissu | Enchères annuelles du Bazar |
| `ARM_TET_044` | Masque du Silence Parfait | T4 | Cuir | Craft Umbra — réduit Vacarme 40% (`MOB_IMP_030-034`) |
| `ARM_TET_045` | Diadème de la Nuit Sans Lune | T5 | Tissu | Craft unique, titre « Voix du Silence » (Skreech) — lié |

## Gnome — Granzam (046-054)

| ID | Nom | Tier | Classe | Source principale |
|---|---|---|---|---|
| `ARM_TET_046` | Casque de Prospecteur | T1 | Cuir | Boutique minière (`MOB_GNO_001-002`) |
| `ARM_TET_047` | Bandeau de Terre Battue | T1 | Tissu | Craft géomanciens |
| `ARM_TET_048` | Casque à Lanterne | T2 | Maille | Craft (`MOB_GNO_010-013`) — lumière mains libres |
| `ARM_TET_049` | Heaume de Granit Brut | T2 | Plaque | Craft Bofrik `NPC_GRA_03` |
| `ARM_TET_050` | Heaume du Bastion de l'Ouest | T3 | Plaque | Craft Bofrik (`MOB_GNO_020-024`, défenseurs) |
| `ARM_TET_051` | Couronne de Cristal de Roche | T3 | Tissu | Craft géomanciens (`MOB_GNO_025`) |
| `ARM_TET_052` | Heaume-Tour de Granzam | T4 | Plaque | Craft élite Bofrik (`MOB_GNO_026`) |
| `ARM_TET_053` | Casque du Fossoyeur d'Abîmes | T4 | Maille | Craft (plans du donjon, `MOB_GNO_030-034`) |
| `ARM_TET_054` | Front de la Montagne-Mère | T5 | Plaque | Craft unique, titre « Pilier de Granzam » (Mithrandur) — lié |

## Leprechaun — Brokkheim (055-063)

| ID | Nom | Tier | Classe | Source principale |
|---|---|---|---|---|
| `ARM_TET_055` | Lunettes d'Apprenti Forgeron | T1 | Cuir | Rune `NPC_BRO_03` |
| `ARM_TET_056` | Calot de Suie de Forge | T1 | Tissu | Craft (suie Forge-Mère) |
| `ARM_TET_057` | Casque à Visière Rabattable | T2 | Maille | Craft compagnon (`MOB_LEP_010-013`) — `!visiere` |
| `ARM_TET_058` | Bandeau du Marteleur | T2 | Cuir | Craft (`MOB_LEP_001-002`) |
| `ARM_TET_059` | Lunettes de Précision Runique | T3 | Maille | Craft Rune (`MOB_LEP_020-024`) |
| `ARM_TET_060` | Heaume d'Alliage Étoilé | T3 | Plaque | Craft Brokk IX `NPC_BRO_01` (`MOB_LEP_025`) |
| `ARM_TET_061` | Masque de la Forge-Mère | T4 | Plaque | Craft Forge-Mère — réduit HEAT 50% (D12) (`MOB_LEP_026`) |
| `ARM_TET_062` | Cercle du Maître-Artisan | T4 | Maille | Rang « Maître » guilde artisans — lié |
| `ARM_TET_063` | Œilleton de Brokk | T5 | Plaque | Craft unique, titre « Héritier de la Forge » (MK-0, consomme le Cercle) — lié |

## Puca — Lioda (064-072)

| ID | Nom | Tier | Classe | Source principale |
|---|---|---|---|---|
| `ARM_TET_064` | Chapeau de Ménestrel | T1 | Tissu | Boutique Grande Scène (`MOB_PUC_001-002`) |
| `ARM_TET_065` | Bandeau à Grelots | T1 | Tissu | Craft luthiers (`MOB_PUC_010-011`) |
| `ARM_TET_066` | Tricorne du Troubadour | T2 | Cuir | Craft chapeliers |
| `ARM_TET_067` | Serre-tête Diapason | T2 | Maille | Craft luthiers (`MOB_PUC_012-013`) |
| `ARM_TET_068` | Couronne d'Accords Mineurs | T3 | Tissu | Craft enchanteurs (`MOB_PUC_020-024`) |
| `ARM_TET_069` | Capeline de la Grande Scène | T3 | Tissu | Lauréat du concours mensuel |
| `ARM_TET_070` | Diadème du Chant Parfait | T4 | Tissu | Craft Conservatoire (`MOB_PUC_026`) |
| `ARM_TET_071` | Masque de l'Opéra Muet | T4 | Cuir | Craft masquiers (`MOB_PUC_030-034`) — immunité Silence |
| `ARM_TET_072` | Auréole de la Note Bleue | T5 | Tissu | Craft unique, titre « Voix de Lioda » (Ondaro) — liée |

## Spriggan — Penwether (073-081)

| ID | Nom | Tier | Classe | Source principale |
|---|---|---|---|---|
| `ARM_TET_073` | Bandeau du Fouilleur | T1 | Tissu | Boutique ruines basses |
| `ARM_TET_074` | Masque Fêlé d'Apprenti | T1 | Cuir | Craft masquiers (`MOB_SPR_001-002`) |
| `ARM_TET_075` | Capuche des Ruines Grises | T2 | Tissu | Craft tisserands |
| `ARM_TET_076` | Monocle du Chercheur de Trésors | T2 | Cuir | Craft antiquaires (`MOB_SPR_010-013`) |
| `ARM_TET_077` | Masque d'Illusion Mineure | T3 | Tissu | Craft Visages Prêtés (`MOB_SPR_020-024`) — `!deguiser` |
| `ARM_TET_078` | Heaume du Veilleur de Penwether | T3 | Maille | Intendance de la Veille (10 patrouilles) |
| `ARM_TET_079` | Couronne d'Échos Spectraux | T4 | Tissu | Craft élite (`MOB_SPR_026`) |
| `ARM_TET_080` | Voile de Distorsion | T4 | Tissu | Craft (`MOB_SPR_030-034`) |
| `ARM_TET_081` | Face du Roi Illusoire | T5 | Tissu | Craft unique, titre « Héritier de Pennroth » — lié |

## Neutres & Monde vertical (082-090)

| ID | Nom | Tier | Classe | Source principale |
|---|---|---|---|---|
| `ARM_TET_082` | Capuche du Pèlerin d'Alne | T2 | Tissu | Boutiques d'Alne (`ZONE_NEU_CAP_001`) |
| `ARM_TET_083` | Casque du Garde de Caravane | T2 | Maille | Guildes d'escorte — anti `MOB_AIR_001-004` |
| `ARM_TET_084` | Heaume du Mercenaire des Neuf Vents | T3 | Plaque | Comptoir des mercenaires d'Alne |
| `ARM_TET_085` | Chapeau de l'Encyclopédiste | T3 | Tissu | Informateurs itinérants |
| `ARM_TET_086` | Heaume Givré de Jötunheimr | T4 | Plaque | Craft Alne (glace `ZONE_JOT_*`) — anti-DOT froid (D12) |
| `ARM_TET_087` | Couronne du Pacte Racial | T4 | Maille | Chaîne « Table des Neuf » (Alne) — liée |
| `ARM_TET_088` | Masque de Givre du Géant | T3 | Cuir | Craft camp de base Jötunheimr |
| `ARM_TET_089` | Casque du Pionnier de New Aincrad | T4 | Maille | Jetons d'exploration (`ZONE_AIN_*`) |
| `ARM_TET_090` | Béret du Cartographe | T2 | Tissu | Guilde des Cartographes d'Alne |

## Drops de boss de donjon & légendaire serveur (091-100)

| ID | Nom | Tier | Boss source | Signature |
|---|---|---|---|---|
| `ARM_TET_091` | Cimier de l'Archonte | T5 | `BOSS_SYL_DUN_001` Aeris | Triple saut aérien |
| `ARM_TET_092` | Face de Braise de Logi | T5 | `BOSS_SAL_DUN_001` Logi | « Dernière Braise » |
| `ARM_TET_093` | Heaume Abyssal de Jörmun | T5 | `BOSS_UND_DUN_001` Jörmun | Apnée gelée <50% |
| `ARM_TET_094` | Crâne Couronné de Ragnar | T5 | `BOSS_CAI_DUN_001` Ragnar | « Aura du Roi » |
| `ARM_TET_095` | Diadème du Vacarme Étouffé | T5 | `BOSS_IMP_DUN_001` Skreech | Immunité Vacarme |
| `ARM_TET_096` | Couronne du Cœur du Filon | T5 | `BOSS_GNO_DUN_001` Mithrandur | Scan filons/coffres |
| `ARM_TET_097` | Visière de MK-0 | T5 | `BOSS_LEP_DUN_001` MK-0 | `!analyser` |
| `ARM_TET_098` | Haut-de-Forme d'Ondaro | T5 | `BOSS_PUC_DUN_001` Ondaro | Buffs → PNJ, « Rappel » |
| `ARM_TET_099` | Couronne Funéraire de Pennroth | T5 | `BOSS_SPR_DUN_001` Pennroth | Remain Light +30s mobile |
| `ARM_TET_100` | Feuille d'Yggdrasil Cristallisée | T5 | Événement Yggdrasil (`SYS_PLANT_TREASURE`) | Unique serveur, supprime la limite d'altitude |

## Liaisons transverses

- Tous les drops de boss à 8% ; les crafts T5 raciaux exigent le drop « premier kill » garanti → complémentarité farm/course au premier kill.
- Chaînes économiques inter-raciales délibérées : mithril de Brokkheim requis dans les T4/T5 de toutes les races (hub commercial Leprechaun) ; gemmes de Granzam dans les T4 (hub minier Gnome).
- Items interagissant avec les jauges D11/D12 : `014`, `017`, `018` (Surchauffe) · `024`, `026`, `093` (Apnée) · `044`, `095` (Vacarme) · `061` (HEAT) · `086` (DOT froid).
- Commandes : `!equiper` / `!unequip` / `!inspect` (joueur), `!sys_give` (GM), `SYS_GRANT_ITEM` (IA — ajoutée à `ai_orchestrator_commands.md` §5, étape 4).
