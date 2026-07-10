# 🌑 Marchand de Bois, Bois Pétrifié & Cadres — `SHOP_DUS_68`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_68` |
| **Propriétaire** | Marchand de Bois `NPC_DUS_68` |
| **Zone / Sous-lieu** | Duskarn, Fond du Canyon |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_WOD_001` | Bois d'If | T1 | 5 | LOCAL | 15 | jour | — |
| `MAT_WOD_002` | Bois de Chêne | T1 | 5 | LOCAL | 15 | jour | — |
| `MAT_WOD_003` | Branche de Saule | T1 | 5 | LOCAL | 18 | jour | — |
| `MAT_WOD_004` | Bois de Frêne | T2 | 35 | IMPORT Swilvane | 10 | semaine | — |
| `MAT_WOD_005` | Bois d'Ébène | T2 | 65 | IMPORT Swilvane | 6 | semaine | — |
| `MAT_WOD_006` | Cèdre des Ombres | T2 | 25 | LOCAL | 8 | semaine | — |
| `MAT_WOD_007` | Bois de Charme | T2 | 30 | LOCAL | 6 | semaine | — |
| `MAT_WOD_009` | Bois d'Yggdrasil | T3 | 490 | IMPORT Alne | 1 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Bois, cadres, matériaux de construction (25%)
- **Refuse** : Armes, armures, objets de lumière sacrée

## 4. Ancrage zonal
Au fond du canyon, il vend le bois pétrifié qui sert à faire arcs et cadres d'ailes Imp.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_68 · !cadre_petrifie`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
