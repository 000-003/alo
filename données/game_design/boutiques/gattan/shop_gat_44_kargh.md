# 🔥 Kargh — `SHOP_GAT_44`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_44` |
| **Propriétaire** | Kargh `NPC_GAT_44` (`T_NPC.shop_ref` → `SHOP_GAT_44`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Place du Dragon |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_012` | Viande Séchée | T1 | 40 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_016` | Poisson Fumé | T1 | 70 | IMPORT Archipel | ∞ | hebdo | — |
| `CSM_NOU_021` | Tourte du Chasseur | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_014` | Cuir de Loup | T2 | 85 | IMPORT Freelia | ∞ | hebdo | — |
| `MAT_CUI_016` | Peau de Serpent | T2 | 85 | IMPORT Archipel | ∞ | hebdo | — |
| `MAT_CUI_020` | Os d'Ancien | T4 | 1960 | IMPORT Penwether | ∞ | hebdo | AFF>=80 |

## 3. Politique de rachat
- **Rachète** : **cuirs, crocs, os (`MAT_CUI_*`)** à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Boucher : viande de bête et débouché des chasseurs. Rachète crocs et peaux, revend la viande à Magda `NPC_GAT_19`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_44` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_44` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
