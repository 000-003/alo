# 🔥 Salvia — `SHOP_GAT_56`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_56` |
| **Propriétaire** | Salvia `NPC_GAT_56` (`T_NPC.shop_ref` → `SHOP_GAT_56`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Ruelle des Herboristes |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_002` | Fleur de Gravats | T1 | 15 | IMPORT Penwether | ∞ | hebdo | — |
| `MAT_HRB_009` | Herbe des Marais | T2 | 85 | IMPORT Archipel | ∞ | hebdo | — |
| `MAT_HRB_012` | Herbe de Mithril | T3 | 335 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_HRB_004` | Mousse de Caillasse | T1 | 15 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_HRB_007` | Plante des Ombres | T2 | 85 | IMPORT Duskarn | ∞ | hebdo | — |
| `MAT_HRB_005` | Herbe des Steppes | T1 | 15 | IMPORT Granzam | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : plantes à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Herboriste : Gattan manque d’herbes fraîches (BESOIN), Salvia importe l’essentiel et fournit Mortis `NPC_GAT_03`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_56` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_56` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
