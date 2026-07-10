# 🔥 Pim — `SHOP_GAT_57`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_57` |
| **Propriétaire** | Pim `NPC_GAT_57` (`T_NPC.shop_ref` → `SHOP_GAT_57`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Souffleries de Fioles |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_CRI_001` | Cristal de Soin | T3 | 480 | LOCAL | ∞ | hebdo | — |
| `CSM_CRI_002` | Cristal de Soin Suprême | T4 | 1440 | LOCAL | ∞ | hebdo | AFF>=80 |
| `CSM_CRI_003` | Cristal de Mana | T3 | 480 | LOCAL | ∞ | hebdo | — |
| `CSM_CRI_004` | Cristal de Mana Suprême | T4 | 1440 | LOCAL | ∞ | hebdo | AFF>=80 |
| `CSM_CRI_008` | Cristal d'Enregistrement | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_CRI_009` | Pierre de Rappel | T2 | 145 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : verre cassé à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Souffleur de fioles : cristaux et contenants pour alchimistes. Travaille le verre de Solman `NPC_GAT_47`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_57` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_57` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
