# ⚒️ Apothicairerie de Guerre de Solf — `SHOP_VOU_59`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_59` |
| **Propriétaire** | Marchand de Potions Solf `NPC_VOU_59` (`T_NPC.shop_ref` → `SHOP_VOU_59`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Marché de la Lave |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_002` | Potion de Soin Légère | T1 | 65 | IMPORT Archipel | 30 | 2j | — |
| `CSM_POT_003` | Potion de Soin | T2 | 170 | IMPORT Archipel | 20 | 2j | — |
| `CSM_POT_004` | Potion de Soin Supérieure | T2 | 280 | IMPORT Archipel | 10 | 3j | — |
| `CSM_POT_005` | Potion de Soin Majeure | T3 | 630 | IMPORT Archipel | 5 | semaine | Niv. 30+ |
| `CSM_POT_031` | Potion de Force Majeure | T3 | 400 | LOCAL | 8 | semaine | — |
| `CSM_POT_021` | Onguent Rafraîchissant | T1 | 35 | LOCAL | 30 | 2j | — |
| `CSM_POT_015` | Potion de Régénération de Mana | T2 | 280 | IMPORT Lioda | 12 | 3j | — |
| `CSM_POT_013` | Potion de Mana Supérieure | T3 | 700 | IMPORT Archipel | 6 | semaine | Niv. 30+ |

## 3. Politique de rachat
- **Rachète** : fioles vides et herbes médicinales (`MAT_HRB_*`) à 20 %.
- **Refuse** : armes, gemmes, objets liés.

## 4. Ancrage zonal
Solf `NPC_VOU_59` importe les potions de soin de l'Archipel (les meilleures du monde, +40 %) — Voulg brûle mais ne guérit pas. Ses toniques de force sont locaux. Une de ses potions « sent le soufre anormal » : le lien discret avec la formule de Fyra `NPC_VOU_06`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_59` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_59` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
