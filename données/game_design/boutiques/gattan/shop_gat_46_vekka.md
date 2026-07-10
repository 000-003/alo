# 🔥 Vekka — `SHOP_GAT_46`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_46` |
| **Propriétaire** | Vekka `NPC_GAT_46` (`T_NPC.shop_ref` → `SHOP_GAT_46`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Ruelle des Tisserands |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `BAG_001` | Besace de Cuir de Freelia | T1 | 420 | IMPORT Freelia | ∞ | hebdo | — |
| `BAG_002` | Sac de Toile de Swilvane | T1 | 420 | IMPORT Swilvane | ∞ | hebdo | — |
| `BAG_003` | Havresac à Maille de Granzam | T1 | 420 | IMPORT Granzam | ∞ | hebdo | — |
| `BAG_006` | Sac de Marchand | T2 | 880 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_075` | Capuche des Ruines Grises | T2 | 800 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_076` | Monocle du Chercheur de Trésors | T2 | 800 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : toiles à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Tisserande : importe les toiles légères qui manquent à Gattan (Swilvane, Freelia) et coud du portage de qualité.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_46` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_46` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
