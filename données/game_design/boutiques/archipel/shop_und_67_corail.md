# 🌊 Corail & Chants — `SHOP_UND_67`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_67` |
| **Propriétaire** | Corallen `NPC_UND_67` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_023` | Cercle des Marées | T3 | 3360 | LOCAL | 3 | 14j | — |
| `MAT_HRB_013` | Fleur d'Obsidienne | T3 | 5 | LOCAL | 6 | 7j | — |
| `MAT_HRB_018` | Fleur de Lotus | T3 | 5 | LOCAL | 6 | 7j | — |
| `MAT_HRB_021` | Fleur de Grenat | T3 | 5 | LOCAL | 5 | 7j | — |
| `MAT_HRB_022` | Herbe du Vent | T2 | 5 | LOCAL | 10 | 7j | — |
| `ARM_TET_037` | Voile du Crépuscule | T1 | 140 | LOCAL | 5 | 7j | — |
| `MAT_HRB_024` | Herbe de Résine | T2 | 5 | LOCAL | 15 | 7j | — |

## 3. Politique de rachat
- **Rachète** : coraux enchantés (30%), composants décoratifs (25%)
- **Refuse** : armes, armures, minerais, équipement de pêche

## 4. Ancrage zonal
Corail magique des récifs. Cercle des Marées et coraux chantants.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_67` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
