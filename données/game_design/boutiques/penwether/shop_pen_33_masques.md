# 🕯️ Marchand de Masques — `SHOP_PEN_33`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_33` |
| **Propriétaire** | Marchand de Masques `NPC_PEN_33` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_010` | Calotte de Cendre | T1 | 135 | LOCAL | 8 | jour | — |
| `ARM_TET_037` | Voile du Crépuscule | T1 | 140 | LOCAL | 6 | jour | — |
| `ARM_TET_038` | Cornes d'Apprenti | T1 | 250 | LOCAL | 6 | jour | — |
| `ARM_TET_028` | Capuche à Oreilles de Chaton | T1 | 150 | LOCAL | 8 | jour | — |
| `ARM_TET_001` | Capuche de l'Initié Sylvestre | T1 | 145 | LOCAL | 8 | jour | — |
| `ARM_TET_019` | Coiffe d'Écume | T1 | 130 | LOCAL | 6 | jour | — |
| `ARM_TET_055` | Lunettes d'Apprenti Forgeron | T1 | 120 | LOCAL | 6 | jour | — |
| `CSM_NOU_010` | Pain de Voyage | T1 | 30 | IMPORT | 10 | jour | — |

## 3. Politique de rachat
- **Rachète** : Masques d'occasion (25%), Pièces de grimage (15%)
- **Refuse** : Armes, armures lourdes

## 4. Ancrage zonal
Le Marchand de Masques vend des masques simples du quotidien spriggan.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_33` · `!buy ARM_TET_010` · `!sell ARM_TET_010`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
