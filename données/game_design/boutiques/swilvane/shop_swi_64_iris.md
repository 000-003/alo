# 🍃 Teinturière Iris — `SHOP_SWI_64`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_64` |
| **Propriétaire** | Teinturière Iris `NPC_SWI_64` (`T_NPC.shop_ref` → `SHOP_SWI_64`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Atelier Ailé |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_011` | Pétale de Rose Grise | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_006` | Fleur de Soufre | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_017` | Fleur des Forges | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_010` | Fleur de Savane | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_013` | Fleur d'Obsidienne | T3 | 5 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : fleurs à pigment (`MAT_HRB_*`) à 25 %.
- **Refuse** : minerai, objets liés.

## 4. Ancrage zonal
Teinturière de l'Atelier Ailé : elle broie les fleurs à pigment pour colorer ailes et capes (LOCAL). Les teintures finies elles-mêmes restent à ficher. Travaille avec le plumassier Volm `NPC_SWI_65`.

> `[BESOIN_ITEM]` : Teintures d'ailes et de capes (`DYE_*`) — produit fini non fiché.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_64` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_64` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
