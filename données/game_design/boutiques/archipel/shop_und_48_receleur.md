# 🌊 Grotte du Receleur — `SHOP_UND_48`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_48` |
| **Propriétaire** | Receleur des Marées `NPC_UND_48` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Rochers de Corail (caché) |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=30 |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_DAG_002` | Croc de Freelia | T2 | 1190 | IMPORT Freelia | 3 | 14j | — |
| `WPN_DAG_005` | Lame Furtive du Zéphyr | T3 | 6020 | IMPORT Zéphyr | 2 | 21j | — |
| `MAT_DRP_018` | Gemme de Sang | T3 | 700 | IMPORT Abysses | 3 | 14j | — |
| `ARM_TET_082` | Capuche du Pèlerin d'Alne | T2 | 1260 | IMPORT Alne | 4 | 14j | — |

## 3. Politique de rachat
- **Rachète** : objets volés (20%), cargaisons douteuses (25%), épaves pillées (25%)
- **Refuse** : objets traçables, parchemins officiels, nourriture

## 4. Ancrage zonal
Marché noir sous les Rochers de Corail. Armes de Freelia et cargaisons douteuses.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_48` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
