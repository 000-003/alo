# 🔥 Solman — `SHOP_GAT_47`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_47` |
| **Propriétaire** | Solman `NPC_GAT_47` (`T_NPC.shop_ref` → `SHOP_GAT_47`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Halle du Verrier |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_013` | Fleur d'Obsidienne | T3 | 190 | LOCAL | ∞ | hebdo | — |
| `MAT_GEM_003` | Gemme de Brise | T2 | 85 | IMPORT Swilvane | ∞ | hebdo | — |
| `MAT_GEM_006` | Saphir des Glaces | T3 | 335 | IMPORT Swilvane | ∞ | hebdo | — |
| `MAT_MIN_019` | Minerai de Glace Éternelle | T3 | 335 | IMPORT Archipel | ∞ | hebdo | — |
| `MAT_GEM_008` | Opale des Ruines | T3 | 335 | IMPORT Penwether | ∞ | hebdo | — |
| `MAT_MIN_024` | Minerai de Lumière | T4 | 1960 | IMPORT Brokkheim | ∞ | hebdo | AFF>=80 |

## 3. Politique de rachat
- **Rachète** : éclats de verre et pierres à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Verrier : le verre volcanique est une fierté locale ; il vend aussi cristaux et pierres décoratives. Fournit les fioles de Pim `NPC_GAT_57`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_47` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_47` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
