# 🕯️ Alchimiste des Eaux — `SHOP_PEN_28`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_28` |
| **Propriétaire** | Alchimiste des Eaux `NPC_PEN_28` |
| **Zone / Sous-lieu** | Penwether, Citernes Antiques |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_001` | Potion de Soin Mineure | T1 | 20 | LOCAL | 10 | jour | — |
| `CSM_POT_003` | Potion de Soin | T2 | 95 | LOCAL | 6 | semaine | — |
| `CSM_POT_009` | Potion de Régénération | T2 | 145 | LOCAL | 4 | semaine | — |
| `CSM_POT_012` | Potion de Mana | T2 | 105 | LOCAL | 5 | semaine | — |
| `CSM_POT_011` | Potion de Mana Mineure | T1 | 25 | LOCAL | 8 | jour | — |
| `CSM_POT_005` | Potion de Soin Majeure | T3 | 360 | LOCAL | 2 | 10j | Niv. 20+ |
| `CSM_POT_015` | Potion de Régénération de Mana | T2 | 280 | IMPORT | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Potions artisanales (20%), Ingrédients d'eau (15%)
- **Refuse** : Équipement, armes

## 4. Ancrage zonal
L'Alchimiste des Eaux transforme l'eau des Citernes en potions.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_28` · `!buy CSM_POT_001` · `!sell CSM_POT_001`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
