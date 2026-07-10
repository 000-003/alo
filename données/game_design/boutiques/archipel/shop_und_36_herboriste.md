# 🌊 Herbes des Abysses — `SHOP_UND_36`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_36` |
| **Propriétaire** | Herboriste Marine `NPC_UND_36` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_020` | Herbe d'Eau Claire | T1 | 5 | LOCAL | 20 | jour | — |
| `MAT_HRB_009` | Herbe des Marais | T2 | 5 | LOCAL | 18 | jour | — |
| `MAT_HRB_006` | Fleur de Soufre | T2 | 5 | LOCAL | 15 | jour | — |
| `MAT_HRB_010` | Fleur de Savane | T2 | 5 | LOCAL | 15 | jour | — |
| `MAT_HRB_011` | Pétale de Rose Grise | T2 | 5 | LOCAL | 15 | jour | — |
| `MAT_HRB_008` | Fleur de Lune | T2 | 5 | LOCAL | 12 | 3j | — |
| `MAT_HRB_012` | Herbe de Mithril | T3 | 5 | LOCAL | 8 | 7j | — |

## 3. Politique de rachat
- **Rachète** : plantes aquatiques (30%), algues médicinales (35%)
- **Refuse** : armes, armures, minerais, équipement de pêche

## 4. Ancrage zonal
Plantes médicinales des fonds marins. Herbe d'Eau Claire, Fleur de Lune.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_36` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
