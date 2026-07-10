# 🔥 Graz — `SHOP_GAT_02`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_02` |
| **Propriétaire** | Graz `NPC_GAT_02` (`T_NPC.shop_ref` → `SHOP_GAT_02`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Quartier Militaire |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_010` | Calotte de Cendre | T1 | 200 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_012` | Heaume de Basalte | T2 | 800 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_013` | Capuche du Pyromane | T2 | 800 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_014` | Heaume du Légionnaire d'Obsidienne | T3 | 3200 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_015` | Masque de Guerre du Général | T3 | 3200 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_017` | Heaume du Champion de la Caldeira | T4 | 11200 | LOCAL | ∞ | hebdo | AFF>=80 |

## 3. Politique de rachat
- **Rachète** : armures à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Armurier des légions : plaque et heaumes de basalte forgés pour tenir la Caldeira (jauge HEAT, D12). S’approvisionne chez Kagemune `NPC_GAT_01`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_02` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_02` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
