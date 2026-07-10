# 🎭 Marché aux Roseaux — `SHOP_LIO_12`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_12` |
| **Propriétaire** | Marchand de Roseaux `NPC_LIO_12` |
| **Zone / Sous-lieu** | Lioda, Prairies Chantantes |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_001` | Lin Sylvestre | T1 | 5 | LOCAL | 30 | 2j | — |
| `MAT_HRB_003` | Prêle des Vapeurs | T1 | 5 | LOCAL | 25 | 3j | — |
| `MAT_HRB_004` | Mousse de Caillasse | T1 | 5 | LOCAL | 35 | 2j | — |
| `MAT_HRB_006` | Fleur de Soufre | T2 | 5 | LOCAL | 20 | 4j | — |
| `MAT_HRB_010` | Fleur de Savane | T2 | 5 | LOCAL | 15 | semaine | — |
| `MAT_HRB_011` | Pétale de Rose Grise | T2 | 5 | LOCAL | 20 | 4j | — |
| `CSM_POT_021` | Onguent Rafraîchissant | T1 | 65 | IMPORT | 10 | semaine | — |
| `CSM_PAR_014` | Parchemin de Bouclier | T1 | 105 | IMPORT | 8 | semaine | Niv. 10+ |

## 3. Politique de rachat
- **Rachète** : Roseaux rares (25%), plantes médicinales (20%)
- **Refuse** : Armes, armures, objets manufacturés

## 4. Ancrage zonal
Le Marchand de Roseaux cultive ses plantes dans les Prairies Chantantes, où chaque roseau vibre au vent. Ses produits LOCAUX (−20%) sont prisés des fabricants d'anches. Les potions et parchemins importés subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_12` · `!buy MAT_HRB_001` · `!sell MAT_HRB_001`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
