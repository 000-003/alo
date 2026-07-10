# 🌳 Botaniste Yssa — `SHOP_ALN_15`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_15` |
| **Propriétaire** | Botaniste Yssa `NPC_ALN_15` (`T_NPC.shop_ref` → `SHOP_ALN_15`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Racines d'Yggdrasil |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_001` | Lin Sylvestre | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_008` | Fleur de Lune | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_015` | Fleur de l'Âme | T3 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_018` | Fleur de Lotus | T3 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_025` | Plante Primordiale | T4 | 10 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_019` | Essence de Yggdrasil | T4 | 1600 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : herbes et fleurs (`MAT_HRB_*`) à 25 %.
- **Refuse** : tout minerai/métal, objets liés, T5.

## 4. Ancrage zonal
Cueilleuse de la flore de l'Arbre-Monde, aux Racines mêmes d'Yggdrasil : sa **sève d'Yggdrasil** (signature d'Alne) est unique au monde. Une feuille de sa réserve est impossible à cueillir deux fois — indice du fil « verger introuvable » (l'Enfant `NPC_ALN_00`). Approvisionne l'oracle Isilde `NPC_ALN_98`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_15` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_15` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
