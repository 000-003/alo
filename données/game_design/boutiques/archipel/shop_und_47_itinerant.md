# 🌊 Coffre du Voyageur — `SHOP_UND_47`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_47` |
| **Propriétaire** | Marchand Itinérant `NPC_UND_47` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Itinérant (routes Archipel–Alne–Swilvane) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|---|
| `CSM_CRI_005` | Cristal de Téléportation | T3 | 1 200 | LOCAL | 3 | 14j | — |
| `CSM_CRI_009` | Pierre de Rappel | T2 | 200 | LOCAL | 10 | jour | — |
| `MAT_GEM_001` | Gemme de Granit | T2 | 125 | IMPORT Granzam | 8 | 7j | — |
| `CSM_NOU_002` | Truite Grillée du Zéphyr | T2 | 170 | IMPORT Swilvane | 10 | 7j | — |
| `CSM_POT_016` | Eau de Source de Lioda | T2 | 310 | IMPORT Lioda | 6 | 14j | — |
| `ARM_TET_083` | Casque du Garde de Caravane | T2 | 1 680 | IMPORT Alne | 4 | 14j | — |
| `CSM_PAR_011` | Parchemin de Boule de Feu | T1 | 55 | LOCAL | 10 | jour | — |

## 3. Politique de rachat
- **Rachète** : marchandises itinérantes (25%), objets exotiques (30%)
- **Refuse** : armes lourdes, équipement de pêche, minerais bruts

## 4. Ancrage zonal
Routes Archipel–Alne–Swilvane. Épices, plumes et curiosités importées.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_47` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
