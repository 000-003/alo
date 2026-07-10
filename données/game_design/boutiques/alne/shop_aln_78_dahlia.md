# 🌳 Fleuriste Dahlia — `SHOP_ALN_78`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_78` |
| **Propriétaire** | Fleuriste Dahlia `NPC_ALN_78` (`T_NPC.shop_ref` → `SHOP_ALN_78`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Place de la Fontaine Centrale |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_011` | Pétale de Rose Grise | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_021` | Fleur de Grenat | T3 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_013` | Fleur d'Obsidienne | T3 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_017` | Fleur des Forges | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_006` | Fleur de Soufre | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_004` | Mousse de Caillasse | T1 | 5 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : fleurs et pétales (`MAT_HRB_*`) à 25 %.
- **Refuse** : minerai, objets liés, T5.

## 4. Ancrage zonal
Fleurs de la Fontaine : ses fleurs poussent sur d'anciens morts (fil « mémoire réécrite »/Cimetière Neutre). Bouquets et pétales rares d'Alne, LOCAL. Distincte des herbes médicinales d'Ophrys `NPC_ALN_28`. Fournit le Collecteur Pinn `NPC_ALN_43`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_78` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_78` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
