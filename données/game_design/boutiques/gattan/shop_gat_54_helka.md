# 🔥 Helka — `SHOP_GAT_54`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_54` |
| **Propriétaire** | Helka `NPC_GAT_54` (`T_NPC.shop_ref` → `SHOP_GAT_54`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Brasserie de la Braise |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_022` | Ratatouille des Champs | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_026` | Tarte aux Baies Chantantes | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_031` | Bisque Royale | T3 | 480 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_006` | Bouillon d'Ombre | T2 | 250 | IMPORT Duskarn | ∞ | hebdo | — |
| `CSM_NOU_008` | Ragoût des Geysers | T2 | 250 | IMPORT Brokkheim | ∞ | hebdo | — |
| `CSM_NOU_005` | Sashimi de Perle | T2 | 250 | IMPORT Archipel | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : fûts vides à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Brasseuse : la bière « Haleine de Logi » est une signature ([BESOIN_ITEM] non fiché) ; en attendant elle sert boissons et importe des crus étrangers. Fournit Grum `NPC_GAT_42`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_54` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_54` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
