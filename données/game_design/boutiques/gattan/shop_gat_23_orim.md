# 🔥 Orim — `SHOP_GAT_23`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_23` |
| **Propriétaire** | Orim `NPC_GAT_23` (`T_NPC.shop_ref` → `SHOP_GAT_23`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Grande Forge |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_005` | Charbon de Forge | T1 | 10 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_016` | Braise de Forge | T3 | 190 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_002` | Cendre Luisante | T1 | 10 | LOCAL | ∞ | hebdo | — |
| `MAT_MIN_022` | Minerai de Terre Profonde | T2 | 85 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_MIN_002` | Cuivre Brut | T1 | 15 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_DRP_003` | Noyau Fissuré | T2 | 85 | IMPORT Granzam | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : cendres et scories à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Charbonnier : combustible et résidus de forge, nerf de la Grande Forge. Vend l’essentiel à Kagemune `NPC_GAT_01`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_23` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_23` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
