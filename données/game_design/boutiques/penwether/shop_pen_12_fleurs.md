# 🕯️ Marchand de Fleurs — `SHOP_PEN_12`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_12` |
| **Propriétaire** | Marchand de Fleurs `NPC_PEN_12` |
| **Zone / Sous-lieu** | Penwether, Ruines Noires |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_011` | Pétale de Rose Grise | T2 | 5 | LOCAL | 10 | jour | — |
| `MAT_HRB_016` | Herbe des Ruines | T3 | 5 | LOCAL | 6 | jour | — |
| `MAT_HRB_002` | Fleur de Gravats | T1 | 5 | LOCAL | 15 | jour | — |
| `MAT_HRB_008` | Fleur de Lune | T2 | 5 | LOCAL | 8 | semaine | — |
| `MAT_HRB_013` | Fleur d'Obsidienne | T3 | 5 | LOCAL | 4 | semaine | — |
| `MAT_HRB_017` | Fleur des Forges | T2 | 5 | LOCAL | 8 | semaine | — |
| `MAT_HRB_010` | Fleur de Savane | T2 | 5 | LOCAL | 8 | semaine | — |
| `CSM_NOU_026` | Tarte aux Baies Chantantes | T2 | 140 | IMPORT | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Fleurs des ruines (25%), Herbes rares (20%)
- **Refuse** : Équipement, armes, armures

## 4. Ancrage zonal
Le Marchand de Fleurs récolte des spores de code dans les Ruines Noires.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_12` · `!buy MAT_HRB_011` · `!sell MAT_HRB_011`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
