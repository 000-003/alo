# 🔥 Magda — `SHOP_GAT_19`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_19` |
| **Propriétaire** | Magda `NPC_GAT_19` (`T_NPC.shop_ref` → `SHOP_GAT_19`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Camp Avancé |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_013` | Pomme des Vergers d'Alne | T1 | 40 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_014` | Ration de Campagne | T1 | 40 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_011` | Fromage Fermier | T1 | 40 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_019` | Ragoût de Taverne | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_015` | Galette d'Avoine | T1 | 40 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_007` | Pain de Roche de Granzam | T2 | 250 | IMPORT Granzam | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : denrées à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Cantinière du front : rations robustes pour soldats en campagne. S’approvisionne chez Danna `NPC_GAT_55`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_19` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_19` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
