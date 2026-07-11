# Bassin de Nénuphars de Cristal (`DEC_PLT_004`)

## Identification Cardinal
- **Item_ID** : `DEC_PLT_004`
- **Catégorie** : Décoration · **Type** : Plante / Jardin (`PLT`)
- **Tier** : T4 · **Rareté** : Épique · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Undine (fabrication)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_mp_regen_pct` **+5 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; le bassin sacré Undine régénère fortement le mana |
| Cumul / plafond | Catégorie `rest_mp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : jardinier-hydromancien Undine de l'Archipel d'Écume (`ZONE_UND_CAP_001`) ; réservé aux manoirs et domaines.
- **Recette** : 3× `MAT_GEM_004` (Perle d'Undine) + 6× `MAT_MIN_007` (Cristal de Brise, pétales taillés) + 2× `MAT_HRB_020` (Herbe d'Eau Claire) — hydromancie Nv.45.
- **Prix** : 18 000 ¥ (achat) · 4 500 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Dans les fonds du Lac Archipel poussent des nénuphars dont les feuilles se cristallisent à la pleine lune. Repiqués dans un bassin d'intérieur, ils continuent de « respirer » le mana de l'eau et le rendent à qui se repose près d'eux. Les hydromanciennes Undine y lisent l'avenir ; les autres se contentent d'y récupérer leurs sorts.

## Intégration Bot
- Joueur : `!decorate DEC_PLT_004` — GM : `!sys_give DEC_PLT_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_PLT_004, 1)`
