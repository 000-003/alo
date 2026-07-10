# 🌳 Usurière Sept-Doigts — `SHOP_ALN_53`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_53` |
| **Propriétaire** | Usurière Sept-Doigts `NPC_ALN_53` (`T_NPC.shop_ref` → `SHOP_ALN_53`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Le Tapis Volant |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=60 ou quête |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_014` | Heaume du Légionnaire d'Obsidienne | T3 | 6720 | IMPORT Gattan | 1 | mensuel | AFF>=60 |
| `ARM_TET_032` | Heaume-Griffe | T3 | 6300 | IMPORT Freelia | 1 | mensuel | AFF>=60 |
| `WPN_RAP_004` | Rapière Griffe-Agile | T3 | 6160 | IMPORT Freelia | 1 | mensuel | AFF>=60 |
| `WPN_EP1_005` | Lame du Crépuscule | T3 | 5880 | IMPORT Duskarn | 1 | mensuel | AFF>=60 |

## 3. Politique de rachat
- **Rachète** : gages et objets saisis à 25 %.
- **Refuse** : objets non liés courants (elle ne prend que du lié), T5.

## 4. Ancrage zonal
Prête aux joueurs ruinés du casino contre des objets liés — impossible, sauf pour elle (indice méta, saisie de biens « liés »). Revend les **équipements T3 saisis** aux gages non honorés. Opère sous la protection du Videur Brogg `NPC_ALN_52`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_53` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_53` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
