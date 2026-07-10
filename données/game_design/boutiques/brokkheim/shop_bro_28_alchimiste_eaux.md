# 🔨 Alchimiste des Eaux, Élixirs et potions — `SHOP_BRO_28`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_28` |
| **Propriétaire** | Alchimiste des Eaux `NPC_BRO_28` |
| **Zone / Sous-lieu** | Brokkheim, Halle du Marteau |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_005` | Potion de Soin Majeure | T3 | 450 | LOCAL | 2 | semaine | Niv. 20+ |
| `CSM_POT_006` | Potion de Soin Suprême | T3 | 750 | LOCAL | 2 | semaine | Niv. 20+ |
| `CSM_POT_010` | Baume de Régénération Majeur | T3 | 700 | LOCAL | 2 | semaine | Niv. 20+ |
| `CSM_POT_012` | Potion de Mana | T2 | 130 | LOCAL | 5 | semaine | — |
| `CSM_POT_013` | Potion de Mana Supérieure | T3 | 500 | LOCAL | 2 | semaine | Niv. 20+ |
| `CSM_POT_015` | Potion de Régénération de Mana | T2 | 200 | LOCAL | 5 | semaine | — |
| `CSM_NOU_019` | Ragoût de Taverne | T2 | 100 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Potions usagées (15%), ingrédients rares (25%)
- **Refuse** : Armes, armures, minerais, gemmes, outils

## 4. Ancrage zonal
Prépare des élixirs puissants à partir des eaux des geysers. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_28` · `!buy CSM_POT_005` · `!sell CSM_POT_005`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
