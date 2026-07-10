# ⚒️ Tailleur de Gemmes de la Forge — `SHOP_VOU_64`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_64` |
| **Propriétaire** | Tailleur de Gemmes de Feu Rubis `NPC_VOU_64` (`T_NPC.shop_ref` → `SHOP_VOU_64`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Forge Magmatique |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_GEM_006` | Saphir des Glaces | T3 | 335 | IMPORT Granzam | 3 | 10j | Niv. 25+ |
| `MAT_MIN_012` | Pierre de Lune | T3 | 400 | LOCAL | 4 | 10j | Niv. 25+ |
| `MAT_MIN_016` | Minerai de Foudre | T3 | 440 | LOCAL | 5 | 10j | — |
| `MAT_GEM_009` | Gemme d'Ombre | T3 | 365 | IMPORT Duskarn | 3 | 10j | Niv. 25+ |
| `MAT_GEM_010` | Gemme Primordiale | T4 | 1 200 | LOCAL | 1 | mois | AFF>=60 |
| `MAT_DRP_008` | Fragment d'Obsidienne | T4 | 1 600 | LOCAL | 2 | mois | AFF>=60 |

## 3. Politique de rachat
- **Rachète** : gemmes taillées et minerais de gravure (`MAT_GEM_*`, `MAT_MIN_012/016`) à 25 %.
- **Refuse** : junk, denrées, objets liés.

## 4. Ancrage zonal
Ce Rubis-ci `NPC_VOU_64` (homonyme de la marchande `NPC_VOU_42`) monte les gemmes sur les armes de la forge. Une **gemme d'ombre** de son présentoir « est venue d'ailleurs » — de Duskarn (+40 %), via un canal que le Courtier Nel `NPC_VOU_94` couvre pour Fyra `NPC_VOU_06`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_64` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_64` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
