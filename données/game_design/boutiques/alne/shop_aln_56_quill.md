# 🌳 Faussaire Quill — `SHOP_ALN_56`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_56` |
| **Propriétaire** | Faussaire Quill `NPC_ALN_56` (`T_NPC.shop_ref` → `SHOP_ALN_56`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Ruelle sombre du Dôme |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=60 ou quête |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_CRI_006` | Cristal de Corridor | T4 | 6300 | IMPORT Granzam | 1 | hebdo | AFF>=60 |
| `CSM_CRI_008` | Cristal d'Enregistrement | T2 | 350 | IMPORT Granzam | 3 | hebdo | AFF>=60 |
| `CSM_CRI_009` | Pierre de Rappel | T2 | 350 | IMPORT Granzam | 3 | hebdo | AFF>=60 |
| `CSM_CRI_001` | Cristal de Soin | T3 | 1890 | IMPORT Archipel | 2 | hebdo | AFF>=60 |

## 3. Politique de rachat
- **Rachète** : cristaux et sceaux à 25 %.
- **Refuse** : objets liés, T5.

## 4. Ancrage zonal
Faux papiers de guilde et laissez-passer : peut fabriquer un droit d'entrée au Dôme `ZONE_YGG_DUN_001` (fil « le Dôme qui change »). En rayon, les **cristaux d'accès et de rappel** détournés. Fournit le Contrebandier Rask `NPC_ALN_57`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_56` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_56` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
