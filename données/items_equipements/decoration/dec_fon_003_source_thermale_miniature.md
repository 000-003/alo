# Source Thermale Miniature (`DEC_FON_003`)

## Identification Cardinal
- **Item_ID** : `DEC_FON_003`
- **Catégorie** : Décoration · **Type** : Fontaine (`FON`)
- **Tier** : T3 · **Rareté** : Rare · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Salamander (fabrication)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_hp_regen_pct` **+4 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; l'eau chaude volcanique délasse et régénère |
| Cumul / plafond | Catégorie `rest_hp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : thermaliste Salamander de Gattan (`ZONE_SAL_CAP_001`) ; canalise une veine de magma refroidi.
- **Recette** : 6× `MAT_MIN_008` (Obsidienne de Gattan, bassin) + 1× `MAT_MIN_020` (Minerai de Feu Infernal, chaufferette) + 2× `MAT_HRB_017` (Fleur des Forges) — thermalisme Nv.28.
- **Prix** : 6 800 ¥ (achat) · 1 700 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Les Salamander, peuple de feu, se délassent pourtant dans l'eau — chaude, cela va sans dire. Cette source d'intérieur puise sa tiédeur à une veine de magma domestiquée, exhalant une vapeur minérale qui dénoue les muscles simulés des guerriers rentrés du front. Un luxe rustique, très prisé après les grands raids.

## Intégration Bot
- Joueur : `!decorate DEC_FON_003` — GM : `!sys_give DEC_FON_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_FON_003, 1)`
