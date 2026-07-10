# 🔥 Danna — `SHOP_GAT_55`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_55` |
| **Propriétaire** | Danna `NPC_GAT_55` (`T_NPC.shop_ref` → `SHOP_GAT_55`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Rôtisserie du Dragon |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_001` | Ragoût de Lave | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_033` | Curry Ardent | T3 | 480 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_023` | Poisson au Sel | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_020` | Brochette Épicée | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_024` | Champignons Sautés | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_027` | Œufs de Chauve-Souris des Ombres | T2 | 145 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : rien (cuisine).
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Rôtisseuse : plats de force Salamander et cuisine premium de front. Fournit Magda `NPC_GAT_19` et Grum `NPC_GAT_42`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_55` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_55` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
