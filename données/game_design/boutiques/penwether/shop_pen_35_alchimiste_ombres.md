# 🕯️ Alchimiste des Ombres — `SHOP_PEN_35`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_35` |
| **Propriétaire** | Alchimiste des Ombres `NPC_PEN_35` |
| **Zone / Sous-lieu** | Penwether, Cloître Renversé |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_006` | Potion de Soin Suprême | T3 | 600 | LOCAL | 2 | 10j | Niv. 20+ |
| `CSM_POT_031` | Potion de Force Majeure | T3 | 400 | LOCAL | 3 | semaine | — |
| `CSM_POT_013` | Potion de Mana Supérieure | T3 | 400 | LOCAL | 3 | semaine | — |
| `CSM_POT_010` | Baume de Régénération Majeur | T3 | 560 | LOCAL | 3 | semaine | — |
| `CSM_POT_030` | Encre de Sagesse | T2 | 195 | IMPORT | 4 | semaine | — |
| `MAT_HRB_007` | Plante des Ombres | T2 | 5 | LOCAL | 8 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Potions d'ombre (20%), Ingrédients rares (15%)
- **Refuse** : Équipement standard, armes

## 4. Ancrage zonal
L'Alchimiste des Ombres opère dans le Cloître Renversé.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_35` · `!buy CSM_POT_006` · `!sell CSM_POT_006`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
