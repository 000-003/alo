# 🔨 Marchand Rune, Minerais et fondants — `SHOP_BRO_03`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_03` |
| **Propriétaire** | Marchand Rune `NPC_BRO_03` |
| **Zone / Sous-lieu** | Brokkheim, Halle du Marteau |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_001` | Minerai de Fer | T1 | 4 | LOCAL | 10 | jour | — |
| `MAT_MIN_002` | Cuivre Brut | T1 | 5 | LOCAL | 10 | jour | — |
| `MAT_MIN_003` | Étain des Collines | T1 | 3 | LOCAL | 10 | jour | — |
| `MAT_MIN_005` | Charbon de Forge | T1 | 2 | LOCAL | 10 | jour | — |
| `MAT_HRB_001` | Lin Sylvestre | T1 | 3 | LOCAL | 10 | jour | — |
| `MAT_HRB_002` | Fleur de Gravats | T1 | 4 | LOCAL | 10 | jour | — |
| `MAT_HRB_003` | Prêle des Vapeurs | T1 | 3 | LOCAL | 10 | jour | — |
| `MAT_HRB_004` | Mousse de Caillasse | T1 | 2 | LOCAL | 10 | jour | — |

## 3. Politique de rachat
- **Rachète** : Minerais T1 (20%), fondants (25%)
- **Refuse** : Armes, armures, consommables, gemmes

## 4. Ancrage zonal
Le Marchand Rune tient l'échoppe la mieux fournie de la Halle du Marteau. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_03` · `!buy MAT_MIN_001` · `!sell MAT_MIN_001`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
