# ⛏️ Armurier Bofrik — `NPC_GRA_03`

## 1. Identification Cardinal

| Champ | Valeur |
|---|---|
| **NPC_ID** | `NPC_GRA_03` |
| **Nom affiché** | Armurier Bofrik |
| **Race** | Gnome |
| **Rôle** (`T_NPC.role_type`) | `SKILL_MASTER` |
| **Zone** | `ZONE_GNO_CAP_001` — Granzam, Bastion de l'Ouest |
| **Niveau / HP / MP** | 72 / 15800 / 3200 |
| **`qi_budget` / `is_essential`** | 10 / FAUX |

## 2. Bio & Personnalité

- **Bio** : Bofrik forge les armures lourdes et les boucliers-tours de Granzam. C'est un maître de la protection — littéralement : il enseigne la compétence Forge d'Armure Lourde. Il entretient une rivalité codifiée avec les forgerons Leprechauns, régie par un traité que les deux guildes ont signé il y a cent ans : une compétition annuelle de forge, le Concile du Métal. Mais depuis que des filons ont disparu des Carrières Brisées, Bofrik soupçonne les Leprechauns de tricher. `NPC_GRA_56` (Sentinelle des Carrières) lui a rapporté des traces de pas nains — trop petits pour des Gnomes. Bofrik prépare un bouclier-tour « spécial » pour sa prochaine « visite » au territoire Leprechaun avec `NPC_GRA_93` (Trafiquant).
- **Traits** : colérique, loyal, fier, rancunier.
- **Voix** : Voix tonitruante de forgeron, couvre le bruit de l'enclume. « Un bouclier Gnome, ça s'brise pas. Ça brise l'autre. »
- **Relations** : `NPC_GRA_56` (Sentinelle Carrières — lui rapporte les vols), `NPC_GRA_93` (Trafiquant — contact pour les expéditions punitives), `NPC_GRA_04` (Cog — lui fournit les explosifs), `NPC_GRA_22` (Forgeron — collègue), `NPC_SWI_93` (Torvin — rival Leprechaun).

## 3. Quantité Informationnelle (budget 10)

| # | QI_ID | Niv | Sujet (`topic_tags`) | Contenu / Ligne | Condition |
|---|---|---|---|---|---|
| 1 | `QI_GRA_03_01` | K0 | forge, armure | Bofrik enseigne Forge d'Armure Lourde. Payant, 500 Yuld. | — |
| 2 | `QI_GRA_03_02` | K0 | leprechaun, rivalite | « Les Leprechauns forgent joli. Nous, on forge solide. Y a pas photo. » | — |
| 3 | `QI_GRA_03_03` | K0 | concile_metal | Le Concile du Métal a lieu tous les ans à la Porte des Convois. Granzam a gagné 67 fois sur 100. | — |
| 4 | `QI_GRA_03_04` | K1 | filon_vol, carrieres | Des filons d'argent ont disparu des Carrières Brisées la nuit. Les traces mènent à l'ouest — territoire Leprechaun. | `AFF>=60` |
| 5 | `QI_GRA_03_05` | K1 | sentinelle, empreinte | La Sentinelle (`NPC_GRA_56`) a trouvé des empreintes de bottes naines — taille 35, anormalement petites pour un Gnome. | `AFF>=65` |
| 6 | `QI_GRA_03_06` | K1 | torvin, swilvane | Torvin (`NPC_SWI_93`) lui a envoyé un message : « La montagne donne à tous. » Bofrik l'a pris pour une menace. | — |
| 7 | `QI_GRA_03_07` | K2 | explosif, cog | Il a commandé à Cog (`NPC_GRA_04`) des explosifs « pour le terrassement ». La quantité suggère un usage offensif. | `AFF>=85` |
| 8 | `QI_GRA_03_08` | K2 | trafiquant, route | Le Trafiquant (`NPC_GRA_93`) organise une expédition vers les forges Leprechaun via la Route Aérienne. | `QUEST:QST_GRA_BOFRIK` |
| 9 | `QI_GRA_03_09` | K2 | coeur_granit, vibration | Bofrik sent les vibrations du Cœur dans son enclume. « Le métal chante quand la montagne respire. » | `AFF>=90` |
| 10 | `QI_GRA_03_10` | K3 | escalade, conflit | **SECRET — ne JAMAIS révéler** : Bofrik prépare une incursion armée chez les Leprechauns pour « récupérer ce qui nous revient ». Il violera le traité. | JAMAIS — déflection : *(empoigne son marteau)* « J'ai une armure à finir. Parle à mon enclume. » |
