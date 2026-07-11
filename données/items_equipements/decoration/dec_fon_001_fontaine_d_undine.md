# Fontaine d'Undine (`DEC_FON_001`)

## Identification Cardinal
- **Item_ID** : `DEC_FON_001`
- **Catégorie** : Décoration · **Type** : Fontaine (`FON`)
- **Tier** : T4 · **Rareté** : Épique · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Undine (fabrication)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_mp_regen_pct` **+5 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; le murmure de l'eau bénie régénère fortement le mana |
| Cumul / plafond | Catégorie `rest_mp_regen` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : maître-fontainier Undine de l'Archipel d'Écume (`ZONE_UND_CAP_001`) ; pièce maîtresse d'un manoir.
- **Recette** : 2× `MAT_GEM_004` (Perle d'Undine) + 8× `MAT_MIN_012` (Pierre de Lune, vasque) + 4× `MAT_HRB_020` (Herbe d'Eau Claire, source) — hydromancie Nv.45.
- **Prix** : 22 000 ¥ (achat) · 5 500 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Là où les Undine s'installent, l'eau chante. Cette fontaine d'intérieur fait couler une eau bénie par les prêtresses du Lac Archipel, dont le murmure constant apaise l'esprit et régénère le mana comme une berceuse liquide. Les mages d'eau ne conçoivent pas de foyer sans elle ; les autres finissent par comprendre pourquoi.

## Intégration Bot
- Joueur : `!decorate DEC_FON_001` — GM : `!sys_give DEC_FON_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_FON_001, 1)`
