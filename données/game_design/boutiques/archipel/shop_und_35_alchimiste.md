# 🌊 L'Alambic du Voyageur — `SHOP_UND_35`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_35` |
| **Propriétaire** | Alchimiste Itinérant `NPC_UND_35` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_017` | Rosée de Cristal Undine | T3 | 440 | LOCAL | 6 | 7j | — |
| `CSM_POT_004` | Potion de Soin Supérieure | T2 | 160 | LOCAL | 10 | 7j | — |
| `CSM_POT_013` | Potion de Mana Supérieure | T3 | 400 | LOCAL | 5 | 7j | — |
| `CSM_POT_027` | Huile de Force du Berserker | T2 | 110 | LOCAL | 8 | 7j | — |
| `CSM_POT_028` | Élixir de Célérité Sylphe | T2 | 110 | LOCAL | 8 | 7j | — |
| `CSM_POT_029` | Tonique de Vitalité | T2 | 110 | LOCAL | 8 | 7j | — |
| `CSM_POT_030` | Encre de Sagesse | T2 | 110 | LOCAL | 8 | 7j | — |
| `CSM_POT_020` | Antidote Universel | T2 | 120 | LOCAL | 8 | 7j | — |

## 3. Politique de rachat
- **Rachète** : ingrédients alchimiques T1-T3 (30%), potions entamées (25%)
- **Refuse** : armes, armures, minerais, équipement lourd

## 4. Ancrage zonal
Potions de force, célérité, sagesse avec ingrédients locaux. Rosée de Cristal Undine.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_35` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
