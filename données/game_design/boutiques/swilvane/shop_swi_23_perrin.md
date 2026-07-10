# 🍃 Perrin — `SHOP_SWI_23`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_23` |
| **Propriétaire** | Perrin `NPC_SWI_23` (`T_NPC.shop_ref` → `SHOP_SWI_23`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Place du Marché |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_002` | Truite Grillée du Zéphyr | T2 | 95 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_016` | Poisson Fumé | T1 | 25 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_023` | Poisson au Sel | T2 | 80 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_018` | Biscuit de Marin | T1 | 20 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_005` | Sashimi de Perle | T2 | 175 | IMPORT Undine | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : prises de pêche fraîches (`CSM_NOU_*`) à 25 %.
- **Refuse** : viande rouge, objets liés.

## 4. Ancrage zonal
Poissonnier du Marché : la **Truite Grillée du Zéphyr** (signature mondiale) vient des rivières suspendues de Swilvane (LOCAL). Le Sashimi de Perle est importé de l'Archipel `NPC_UND_23`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_23` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_23` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
