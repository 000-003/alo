# 🌳 Herboriste Ophrys — `SHOP_ALN_28`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_28` |
| **Propriétaire** | Herboriste Ophrys `NPC_ALN_28` (`T_NPC.shop_ref` → `SHOP_ALN_28`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_005` | Herbe des Steppes | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_007` | Plante des Ombres | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_009` | Herbe des Marais | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_010` | Fleur de Savane | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_014` | Herbe des Neiges | T3 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_023` | Fleur du Crépuscule | T3 | 5 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : herbes fraîches et séchées (`MAT_HRB_*`) à 25 %.
- **Refuse** : minerai, objets liés, T5.

## 4. Ancrage zonal
Herbes cosmopolites des 9 territoires réunies sur un seul étal neutre — l'esprit d'Alne. Une plante de sa réserve ne pousse nulle part (fil « verger introuvable »). Fournit les alchimistes de la ville et Frère Osmé `NPC_ALN_40`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_28` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_28` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
