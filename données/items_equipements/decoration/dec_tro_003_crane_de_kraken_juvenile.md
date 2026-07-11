# Crâne de Kraken Juvénile (`DEC_TRO_003`)

## Identification Cardinal
- **Item_ID** : `DEC_TRO_003`
- **Catégorie** : Décoration · **Type** : Trophée (`TRO`)
- **Tier** : T4 · **Rareté** : Épique · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Undine (prise en eaux profondes)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_mp_regen_pct` **+4 %** (aura marine résiduelle) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` |
| Cumul / plafond | Catégorie `rest_mp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : **loot** — vaincre le **Kraken Juvénile** (`MOB_UND_021`) des fosses du Lac Archipel ; blanchiment du crâne chez un ossaturier.
- **Recette** : 1× crâne de kraken *(loot `MOB_UND_021`)* + 2× `MAT_MIN_012` (Pierre de Lune, incrustations orbitales) — taxidermie Nv.45.
- **Prix** : 17 000 ¥ (achat, pièce de collection) · 4 250 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Même juvénile, le kraken dépasse la barque de trois longueurs. Son crâne blanchi, becs et orbites tournés vers la salle, exsude encore une fraîcheur saline qui « nourrit » le mana des mages d'eau. Les capitaines Undine s'en font une fierté ; les invités, un frisson. On raconte qu'aux nuits de tempête, il siffle tout seul.

## Intégration Bot
- Joueur : `!decorate DEC_TRO_003` — GM : `!sys_give DEC_TRO_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_TRO_003, 1)`
