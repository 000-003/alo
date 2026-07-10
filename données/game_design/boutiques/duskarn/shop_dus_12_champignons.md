# 🌑 Marchand de Champignons, Champignons d'Encre — `SHOP_DUS_12`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_12` |
| **Propriétaire** | Marchand de Champignons `NPC_DUS_12` |
| **Zone / Sous-lieu** | Duskarn, Canyon des Ombres |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_001` | Lin Sylvestre | T1 | 5 | LOCAL | 20 | jour | — |
| `MAT_HRB_003` | Prêle des Vapeurs | T1 | 5 | LOCAL | 20 | jour | — |
| `MAT_HRB_004` | Mousse de Caillasse | T1 | 5 | LOCAL | 25 | jour | — |
| `MAT_HRB_007` | Plante des Ombres | T2 | 5 | LOCAL | 15 | semaine | — |
| `MAT_HRB_009` | Herbe des Marais | T2 | 5 | LOCAL | 15 | semaine | — |
| `MAT_HRB_011` | Pétale de Rose Grise | T2 | 5 | LOCAL | 12 | semaine | — |
| `CSM_NOU_024` | Champignons Sautés | T2 | 80 | LOCAL | 8 | semaine | — |
| `MAT_HRB_023` | Fleur du Crépuscule | T3 | 5 | LOCAL | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Champignons, spores, ingrédients de cuisine (25%)
- **Refuse** : Armes, armures, équipement, objets de lumière sacrée

## 4. Ancrage zonal
Le marchand cueille ses champignons sur les parois obscures du Canyon des Ombres, où la roche respire au rythme de la Rivière d'Encre.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_12 · !cueillette_canyon`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
