# Jardinière de Fleurs de Lune (`DEC_PLT_002`)

## Identification Cardinal
- **Item_ID** : `DEC_PLT_002`
- **Catégorie** : Décoration · **Type** : Plante / Jardin (`PLT`)
- **Tier** : T2 · **Rareté** : Peu commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_mp_regen_pct` **+3 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; le parfum lunaire régénère le mana |
| Cumul / plafond | Catégorie `rest_mp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : horticulteur de toute capitale ; les Undine et Spriggan en tirent le meilleur parfum.
- **Recette** : 4× `MAT_HRB_008` (Fleur de Lune) + 1× jardinière de terre cuite *(article de série)* — horticulture Nv.14.
- **Prix** : 1 100 ¥ (achat) · 275 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
La fleur de lune ne s'ouvre qu'à la nuit codée du Cardinal, exhalant alors un parfum bleuté qui recharge doucement le mana des dormeurs. Cultivée en jardinière, elle transforme un rebord de fenêtre en autel silencieux. Les alchimistes veillent tard rien que pour la voir s'ouvrir.

## Intégration Bot
- Joueur : `!decorate DEC_PLT_002` — GM : `!sys_give DEC_PLT_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_PLT_002, 1)`
