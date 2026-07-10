# 🎭 Carillons du Quai — `SHOP_LIO_34`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_34` |
| **Propriétaire** | Vendeur de Clochettes `NPC_LIO_34` |
| **Zone / Sous-lieu** | Lioda, Quai du Lac-Tambour |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_007` | Queue Annelée | T1 | 10 | LOCAL | 15 | semaine | — |
| `MAT_CUI_011` | Croc de Loup | T1 | 5 | LOCAL | 20 | semaine | — |
| `MAT_CUI_012` | Plume de Corbeau | T1 | 5 | LOCAL | 25 | semaine | — |
| `MAT_CUI_013` | Œil de Chauve-Souris | T1 | 10 | LOCAL | 12 | semaine | — |
| `MAT_CUI_014` | Cuir de Loup | T2 | 20 | LOCAL | 15 | semaine | — |
| `MAT_HRB_007` | Plante des Ombres | T2 | 5 | LOCAL | 20 | 4j | — |
| `CSM_POT_023` | Bouchons de Cire de Duskarn | T2 | 225 | IMPORT | 8 | semaine | Protection auditive |
| `CSM_POT_022` | Baume Thermique | T1 | 65 | IMPORT | 10 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Clochettes (25%), carillons (25%)
- **Refuse** : Armes lourdes, armures

## 4. Ancrage zonal
Le Vendeur de Clochettes vend des carillons de cuivre au Quai du Lac-Tambour. Ses matériaux LOCAUX (−20%) sont récoltés dans les Prairies et les bois. Les accessoires importés subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_34` · `!buy MAT_CUI_007` · `!carillons`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
