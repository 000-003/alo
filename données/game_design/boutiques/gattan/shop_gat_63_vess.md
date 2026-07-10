# 🔥 Vess — `SHOP_GAT_63`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_63` |
| **Propriétaire** | Vess `NPC_GAT_63` (`T_NPC.shop_ref` → `SHOP_GAT_63`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Cabinet des Venins |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_020` | Antidote Universel | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_024` | Eau Bénite de Lioda | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_023` | Bouchons de Cire de Duskarn | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_029` | Tonique de Vitalité | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_003` | Glande Bouillante | T2 | 50 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_015` | Épine Imp | T2 | 85 | IMPORT Duskarn | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : glandes et venins (`MAT_CUI_*`) à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Collectionneur de venins : antidotes ET toxines ; il rachète les glandes du front et fournit Mortis `NPC_GAT_03`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_63` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_63` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
