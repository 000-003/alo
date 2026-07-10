# 🔥 Mortis — `SHOP_GAT_03`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_03` |
| **Propriétaire** | Mortis `NPC_GAT_03` (`T_NPC.shop_ref` → `SHOP_GAT_03`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Ruelle des Alchimistes |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_021` | Onguent Rafraîchissant | T1 | 40 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_033` | Résine Ignifuge | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_035` | Potion Anti-Surchauffe | T3 | 480 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_036` | Sirop de Braise Éteinte | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_027` | Huile de Force du Berserker | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_031` | Potion de Force Majeure | T3 | 480 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : réactifs à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Alchimiste anti-chaleur : ses potions de Surchauffe sauvent des vies dans la Caldeira. Achète les herbes de Salvia `NPC_GAT_56`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_03` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_03` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
