# 🍃 Vieux Cort — `SHOP_SWI_21`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_21` |
| **Propriétaire** | Vieux Cort `NPC_SWI_21` (`T_NPC.shop_ref` → `SHOP_SWI_21`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Place du Marché |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_RAP_002` | Rapière du Zéphyr | T2 | 720 | LOCAL | ∞ | hebdo | — |
| `WPN_DAG_003` | Stylet du Zéphyr | T2 | 705 | LOCAL | ∞ | hebdo | — |
| `WPN_DAG_001` | Dague de Fer | T1 | 120 | LOCAL | ∞ | hebdo | — |
| `WPN_RAP_001` | Rapière-Diapason | T1 | 365 | IMPORT Lioda | ∞ | hebdo | — |
| `WPN_DAG_005` | Lame Furtive du Zéphyr | T3 | 3440 | LOCAL | ∞ | hebdo | — |
| `WPN_RAP_004` | Rapière Griffe-Agile | T3 | 6160 | IMPORT Freelia | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : rapières et dagues d'occasion (`WPN_RAP_*`/`WPN_DAG_*`) à 25 %.
- **Refuse** : armes lourdes, plaque, objets liés.

## 4. Ancrage zonal
Marchand d'armes légères du Marché : rapières et dagues du Zéphyr, les seules armes que l'honneur du duel aérien tolère (LOCAL). Il identifie les lames de la Garde de Reylen `NPC_SWI_09` et refuse le stock volé de Somb `NPC_SWI_42`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_21` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_21` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
