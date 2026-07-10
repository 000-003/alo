# 🔥 Motte — `SHOP_GAT_83`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_83` |
| **Propriétaire** | Motte `NPC_GAT_83` (`T_NPC.shop_ref` → `SHOP_GAT_83`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Ruelle des Chiffonniers |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_001` | Fourrure Grise | T1 | 15 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_CUI_002` | Carapace Éclatée | T1 | 15 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_CUI_011` | Croc de Loup | T1 | 15 | IMPORT Freelia | ∞ | hebdo | — |
| `MAT_CUI_013` | Œil de Chauve-Souris | T1 | 15 | IMPORT Duskarn | ∞ | hebdo | — |
| `MAT_CUI_007` | Queue Annelée | T1 | 15 | IMPORT Penwether | ∞ | hebdo | — |
| `MAT_CUI_010` | Griffe Fouisseuse | T1 | 15 | IMPORT Granzam | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : **cuirs, os, rebuts (`MAT_CUI_*`)** à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Chiffonnière : récupère et revend peaux, os et rebuts glanés sur le front. Débouché discret des chasseurs, fournit les tanneurs.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_83` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_83` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
