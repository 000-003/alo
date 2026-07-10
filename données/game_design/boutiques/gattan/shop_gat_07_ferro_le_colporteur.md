# 🔥 Ferro le Colporteur — `SHOP_GAT_07`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_07` |
| **Propriétaire** | Ferro le Colporteur `NPC_GAT_07` (`T_NPC.shop_ref` → `SHOP_GAT_07`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Porte de la Ville |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_001` | Potion de Soin Mineure | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_011` | Potion de Mana Mineure | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_019` | Antidote | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_010` | Pain de Voyage | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `WPN_ARC_001` | Arc Court en Bois | T1 | 350 | IMPORT Swilvane | ∞ | hebdo | — |
| `WPN_JET_001` | Couteaux de Lancer | T1 | 200 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : junk conforme à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Forgeron ambulant : premier étal du voyageur, panier universel et bas-tiers. Les gros achats filent chez Kagemune `NPC_GAT_01`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_07` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_07` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
