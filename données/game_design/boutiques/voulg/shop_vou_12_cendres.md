# ⚒️ Étal des Cendres — `SHOP_VOU_12`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_12` |
| **Propriétaire** | Marchand de Cendres `NPC_VOU_12` (`T_NPC.shop_ref` → `SHOP_VOU_12`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Plaines de Cendres (`HUNT_001`) |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_002` | Cendre Luisante | T1 | 40 | LOCAL | 40 | 2j | — |
| `MAT_DRP_013` | Croc de Salamander | T2 | 120 | LOCAL | 20 | 3j | — |
| `MAT_DRP_011` | Corne de Chasseur | T2 | 120 | LOCAL | 25 | 3j | — |
| `MAT_CUI_001` | Fourrure Grise | T1 | 10 | LOCAL | 50 | 2j | — |
| `MAT_CUI_006` | Plume Cendrée | T1 | 5 | LOCAL | 40 | 2j | — |
| `MAT_HRB_002` | Fleur de Gravats | T1 | 5 | LOCAL | 40 | 2j | — |
| `MAT_HRB_005` | Herbe des Steppes | T1 | 5 | LOCAL | 40 | 2j | — |
| `MAT_DRP_001` | Glande Bouillante Pure | T2 | 120 | LOCAL | 15 | 4j | — |

## 3. Politique de rachat
- **Rachète** : cendres, crocs et cuirs des mobs des Plaines (`MAT_DRP_001/002/011/013`, `MAT_CUI_*`) à 25 %.
- **Refuse** : objets manufacturés, armes T2+, gemmes.

## 4. Ancrage zonal
Le Marchand de Cendres `NPC_VOU_12` récolte sur les carcasses de la route de Gattan (`HUNT_001`). Il garde à part une « cendre qui brûle froid » qu'il refuse de vendre — le Chasseur des Plaines `NPC_VOU_11` prétend qu'elle vient d'une caravane qui n'est jamais arrivée.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_12` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_12` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
