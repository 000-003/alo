# 🔨 Marchand Soufre, Soufre et minerais — `SHOP_BRO_12`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_12` |
| **Propriétaire** | Marchand Soufre `NPC_BRO_12` |
| **Zone / Sous-lieu** | Brokkheim, Vallée des Geysers |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_006` | Soufre Cristallisé | T2 | 50 | LOCAL | 5 | semaine | — |
| `MAT_MIN_013` | Minerai de Cuivre Raffiné | T2 | 90 | LOCAL | 5 | semaine | — |
| `MAT_MIN_022` | Minerai de Terre Profonde | T2 | 70 | LOCAL | 5 | semaine | — |
| `MAT_HRB_005` | Herbe des Steppes | T1 | 3 | LOCAL | 10 | jour | — |
| `MAT_HRB_009` | Herbe des Marais | T2 | 3 | LOCAL | 5 | semaine | — |
| `MAT_HRB_010` | Fleur de Savane | T2 | 4 | LOCAL | 5 | semaine | — |
| `MAT_HRB_011` | Pétale de Rose Grise | T2 | 4 | LOCAL | 5 | semaine | — |
| `MAT_HRB_020` | Herbe d'Eau Claire | T1 | 2 | LOCAL | 10 | jour | — |

## 3. Politique de rachat
- **Rachète** : Soufre brut (30%), minerais T1 (20%)
- **Refuse** : Armes, armures, gemmes, outils

## 4. Ancrage zonal
Installé à l'entrée de la Vallée des Geysers, il extrait le soufre. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_12` · `!buy MAT_MIN_006` · `!sell MAT_MIN_006`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
