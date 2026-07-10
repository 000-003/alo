# 🍃 Parfumeuse Rose — `SHOP_SWI_68`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_68` |
| **Propriétaire** | Parfumeuse Rose `NPC_SWI_68` (`T_NPC.shop_ref` → `SHOP_SWI_68`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Jardin Suspendu |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_007` | Plante des Ombres | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_009` | Herbe des Marais | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_014` | Herbe des Neiges | T3 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_023` | Fleur du Crépuscule | T3 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_024` | Herbe de Résine | T2 | 5 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : fleurs aromatiques (`MAT_HRB_*`) à 25 %.
- **Refuse** : minerai, objets liés.

## 4. Ancrage zonal
Parfumeuse du Jardin Suspendu : elle distille des essences florales (LOCAL) mais ses parfums raciaux finis ne sont pas encore fichés. « Un parfum qui rend invisible ? » (indice fil rouge).

> `[BESOIN_ITEM]` : Parfums raciaux finis (`PERF_*`) — produit fini non fiché.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_68` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_68` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
