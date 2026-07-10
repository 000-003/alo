# 🌑 Marchand de Cristaux, Cristal Violet & Gemmes — `SHOP_DUS_15`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_15` |
| **Propriétaire** | Marchand de Cristaux `NPC_DUS_15` |
| **Zone / Sous-lieu** | Duskarn, Falaises du Crépuscule |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_CRI_008` | Cristal d'Enregistrement | T2 | 200 | LOCAL | 8 | semaine | — |
| `CSM_CRI_009` | Pierre de Rappel | T2 | 200 | LOCAL | 8 | semaine | — |
| `MAT_MIN_011` | Cristal Violet | T3 | 320 | LOCAL | 4 | semaine | — |
| `MAT_GEM_002` | Gemme d'Obsidienne | T3 | 175 | LOCAL | 5 | semaine | — |
| `MAT_GEM_008` | Opale des Ruines | T3 | 240 | LOCAL | 4 | semaine | — |
| `MAT_GEM_005` | Rubis de Feu | T3 | 335 | IMPORT Gattan | 3 | semaine | — |
| `MAT_MIN_001` | Minerai de Fer | T1 | 5 | LOCAL | 15 | jour | — |
| `MAT_MIN_022` | Minerai de Terre Profonde | T2 | 55 | LOCAL | 6 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Cristaux T1-T2 (25%), éclats, veines brutes
- **Refuse** : Armes, armures, nourriture, objets de lumière sacrée

## 4. Ancrage zonal
Installé aux Falaises du Crépuscule, il extrait et vend les veines de cristal violet qui illuminent Duskarn.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_15 · !veines_cristal`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
