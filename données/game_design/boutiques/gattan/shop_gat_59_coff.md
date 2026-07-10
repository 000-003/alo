# 🔥 Coff — `SHOP_GAT_59`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_59` |
| **Propriétaire** | Coff `NPC_GAT_59` (`T_NPC.shop_ref` → `SHOP_GAT_59`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Comptoir des Cendres |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_013` | Croc de Salamander | T2 | 50 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_005` | Essence de Vide | T3 | 335 | IMPORT Penwether | ∞ | hebdo | — |
| `MAT_DRP_018` | Gemme de Sang | T3 | 335 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_DRP_004` | Pierre d'Âme | T2 | 85 | IMPORT Duskarn | ∞ | hebdo | — |
| `MAT_DRP_017` | Éclat de Miroir | T3 | 335 | IMPORT Penwether | ∞ | hebdo | — |
| `MAT_DRP_011` | Corne de Chasseur | T2 | 85 | IMPORT Freelia | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : drops rares (`MAT_DRP_*`) à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Marchand de cendres rares : essences de boss et drops convoités des alchimistes. Rachète les drops ignés du front.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_59` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_59` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
