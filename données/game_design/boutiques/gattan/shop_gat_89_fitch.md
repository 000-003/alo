# 🔥 Fitch — `SHOP_GAT_89`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_89` |
| **Propriétaire** | Fitch `NPC_GAT_89` (`T_NPC.shop_ref` → `SHOP_GAT_89`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Bas-Fonds |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=30 ou quête |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_015` | Fleur de l'Âme | T3 | 335 | IMPORT Duskarn | 2-10 | hebdo | — |
| `MAT_HRB_016` | Herbe des Ruines | T3 | 335 | IMPORT Penwether | 2-10 | hebdo | — |
| `MAT_HRB_023` | Fleur du Crépuscule | T3 | 335 | IMPORT Duskarn | 2-10 | hebdo | — |
| `MAT_HRB_022` | Herbe du Vent | T2 | 85 | IMPORT Freelia | 2-10 | hebdo | — |

## 3. Politique de rachat
- **Rachète** : infos et herbes sensibles à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan) · peut proposer des articles « ABSENT » de Gattan (sa raison d’être).

## 4. Ancrage zonal
Informateur : sous le manteau, il écoule des herbes de contrebande introuvables au marché officiel de Gattan.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_89` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_89` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
