# 🔥 Pyra — `SHOP_GAT_04`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_04` |
| **Propriétaire** | Pyra `NPC_GAT_04` (`T_NPC.shop_ref` → `SHOP_GAT_04`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Enclos aux Familiers |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_018` | Biscuit de Marin | T1 | 40 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_028` | Festin du Chef | T3 | 480 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_025` | Côtelette Fumée | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `BELT_001` | Ceinture de Cuir Simple | T1 | 240 | LOCAL | ∞ | hebdo | — |
| `HRN_003` | Sangle de Toile | T1 | 240 | LOCAL | ∞ | hebdo | — |
| `BELT_004` | Ceinture de Combat | T2 | 880 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : refuse cages et pièges (tabou, voir Freelia).
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Éleveuse de familiers ignés : leur pitance et leur harnachement. Les créatures elles-mêmes = [BESOIN_ITEM] de dressage non fiché.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_04` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_04` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
