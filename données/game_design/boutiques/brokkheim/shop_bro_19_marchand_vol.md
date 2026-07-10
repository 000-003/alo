# 🔨 Marchand Vol, Potions de vol — `SHOP_BRO_19`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_19` |
| **Propriétaire** | Marchand Vol `NPC_BRO_19` |
| **Zone / Sous-lieu** | Brokkheim, Route Aérienne (îlot) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_021` | Onguent Rafraîchissant | T1 | 45 | LOCAL | 10 | jour | — |
| `CSM_POT_022` | Baume Thermique | T1 | 45 | LOCAL | 10 | jour | — |
| `CSM_POT_025` | Purge Complète | T3 | 600 | LOCAL | 2 | semaine | Niv. 20+ |
| `CSM_POT_026` | Larme de Dissipation | T3 | 550 | LOCAL | 2 | semaine | Niv. 20+ |
| `CSM_POT_035` | Potion Anti-Surchauffe | T3 | 600 | LOCAL | 2 | semaine | Niv. 20+ |
| `CSM_POT_037` | Potion d'Oxygène de Coralia | T3 | 550 | LOCAL | 2 | semaine | Niv. 20+ |
| `ARM_TET_001` | Capuche de l'Initié Sylvestre | T1 | 180 | LOCAL | 10 | jour | — |
| `ARM_TET_010` | Calotte de Cendre | T1 | 170 | LOCAL | 10 | jour | — |

## 3. Politique de rachat
- **Rachète** : Fioles vides (5 Yrds), ingrédients alchimiques (15%)
- **Refuse** : Armes, armures, minerais, gemmes, outils

## 4. Ancrage zonal
Installé sur un îlot suspendu, il vend des potions instables. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_19` · `!buy CSM_POT_021` · `!sell CSM_POT_021`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
