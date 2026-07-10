# 🔥 Ossik — `SHOP_GAT_52`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_52` |
| **Propriétaire** | Ossik `NPC_GAT_52` (`T_NPC.shop_ref` → `SHOP_GAT_52`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Étal aux Œufs |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_017` | Soupe Claire | T1 | 40 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_029` | Banquet des Neuf Races | T3 | 480 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_030` | Filet Mignon d'Alne | T3 | 480 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_032` | Rôti des Cimes | T3 | 480 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_034` | Plateau du Gourmet | T3 | 480 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_035` | Grand Cru d'Yggdrasil | T3 | 480 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : coquilles à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Marchand d’œufs de salamandre (signature Gattan) : l’œuf lui-même = [BESOIN_ITEM] non fiché ; il vend les plats qui en dérivent.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_52` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_52` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
