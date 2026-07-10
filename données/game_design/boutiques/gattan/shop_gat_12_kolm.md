# 🔥 Kolm — `SHOP_GAT_12`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_12` |
| **Propriétaire** | Kolm `NPC_GAT_12` (`T_NPC.shop_ref` → `SHOP_GAT_12`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Comptoir de la Désolation |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_008` | Obsidienne de Gattan | T3 | 190 | LOCAL | ∞ | hebdo | — |
| `MAT_MIN_020` | Minerai de Feu Infernal | T3 | 190 | LOCAL | ∞ | hebdo | — |
| `MAT_MIN_012` | Pierre de Lune | T3 | 335 | IMPORT Penwether | ∞ | hebdo | — |
| `MAT_GEM_002` | Gemme d'Obsidienne | T3 | 190 | LOCAL | ∞ | hebdo | — |
| `MAT_GEM_005` | Rubis de Feu | T3 | 190 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_008` | Fragment d'Obsidienne | T4 | 1960 | IMPORT Granzam | ∞ | hebdo | AFF>=80 |

## 3. Politique de rachat
- **Rachète** : minerais bruts à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Prospecteur : obsidienne et gemmes de feu brutes de la Désolation de Magma. Fournit Onya `NPC_GAT_48`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_12` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_12` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
