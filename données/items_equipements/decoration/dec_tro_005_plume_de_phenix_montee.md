# Plume de Phénix Montée (`DEC_TRO_005`)

## Identification Cardinal
- **Item_ID** : `DEC_TRO_005`
- **Catégorie** : Décoration · **Type** : Trophée (`TRO`)
- **Tier** : T5 · **Rareté** : Légendaire · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Sylph (prise en haute altitude)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_hp_regen_pct` **+5 %** (chaleur régénératrice du phénix) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` |
| Cumul / plafond | Catégorie `rest_hp_regen` **plafonnée à +5 % cumulés** par logement (déjà au plafond seule) |

## Acquisition & Chaînage économique
- **Source** : **loot** — plume tombée du **Phénix** (`MOB_SYL_023`), boss des cimes Sylph, qui renaît de ses cendres ; montée sur pied par un joaillier.
- **Recette** : 1× plume de phénix *(loot `MOB_SYL_023`)* + 1× `MAT_DRP_016` (Braise de Forge, écrin ardent) + 2× `MAT_MIN_004` (Minerai d'Argent, monture) — joaillerie Nv.80.
- **Prix** : 110 000 ¥ (achat, ventes exceptionnelles) · 27 500 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Le phénix ne meurt pas : il se donne. Une seule de ses plumes, lâchée dans sa flambée de renaissance, garde une braise qui ne consume rien mais réchauffe tout. Montée droite comme une flamme figée, elle veille sur le foyer et hâte la guérison de qui s'y repose. Les Sylph disent qu'un logement gardé par une plume de phénix ne connaît jamais la nuit vraiment noire.

## Intégration Bot
- Joueur : `!decorate DEC_TRO_005` — GM : `!sys_give DEC_TRO_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_TRO_005, 1)`
