# 🐾 Forge à Griffes de Gimli — `SHOP_FRE_04`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_04` |
| **Propriétaire** | Gimli Griffe-Fer `NPC_FRE_04` (`T_NPC.shop_ref` → `SHOP_FRE_04`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_029` | Serre-tête du Traqueur | T1 | 255 | LOCAL | 20 | semaine | — |
| `ARM_TET_032` | Heaume-Griffe | T3 | 3 600 | LOCAL | 6 | 10j | Niv. 25+ |
| `ARM_TET_035` | Couronne à Crocs | T4 | 14 800 | LOCAL | 1 | mois | AFF>=80 |
| `MAT_MIN_001` | Minerai de Fer | T1 | 5 | LOCAL | 80 | 2j | — |
| `MAT_MIN_002` | Cuivre Brut | T1 | 5 | LOCAL | 60 | 2j | — |
| `MAT_MIN_013` | Minerai de Cuivre Raffiné | T2 | 70 | LOCAL | 30 | 3j | — |
| `MAT_MIN_010` | Mithril Brut | T4 | 2 100 | IMPORT Brokkheim | 3 | semaine | Niv. 30+ |

## 3. Politique de rachat
- **Rachète** : pièces d'équipement de monture et fers (`ARM_TET` de chasse, `MAT_MIN_001/002`) à 25 %.
- **Refuse** : cosmétique pur, denrées, objets liés.

## 4. Ancrage zonal
Gimli `NPC_FRE_04` (Leprechaun) forge les protections des dompteurs et des familiers montés — du Serre-tête du Traqueur à la **Couronne à Crocs** (T4, `AFF>=80`, pièce d'exception légale de Freelia). Il importe le mithril de Brokkheim (+40 %). Une de ses selles « parle » la nuit : un motif de gravure qu'il jure ne pas avoir tracé.

> `[BESOIN_ITEM]` : **Barding / selles / harnais de familier (`MOUNT_*`)** — équipement de monture non fiché — spécialité de Gimli

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_04` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_04` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
