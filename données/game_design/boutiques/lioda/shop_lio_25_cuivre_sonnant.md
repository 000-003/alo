# 🎭 Cuivre Sonnant — `SHOP_LIO_25`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_25` |
| **Propriétaire** | Porteur de Cuivre `NPC_LIO_25` |
| **Zone / Sous-lieu** | Lioda, Atelier des Cordes |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_002` | Cuivre Brut | T1 | 5 | LOCAL | 30 | jour | — |
| `MAT_MIN_005` | Charbon de Forge | T1 | 5 | LOCAL | 40 | jour | — |
| `MAT_MIN_013` | Minerai de Cuivre Raffiné | T2 | 70 | LOCAL | 20 | semaine | — |
| `MAT_MIN_022` | Minerai de Terre Profonde | T2 | 55 | LOCAL | 15 | semaine | — |
| `MAT_MIN_004` | Minerai d'Argent | T2 | 65 | LOCAL | 10 | semaine | — |
| `MAT_MIN_006` | Soufre Cristallisé | T2 | 70 | IMPORT | 8 | semaine | — |
| `MAT_MIN_007` | Cristal de Brise | T2 | 85 | IMPORT | 6 | semaine | — |
| `MAT_GEM_001` | Gemme de Granit | T2 | 125 | IMPORT | 10 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Cuivre sonnant (25%), minerais bruts (20%)
- **Refuse** : Armes, armures, nourriture

## 4. Ancrage zonal
Le Porteur de Cuivre approvisionne l'Atelier des Cordes en lingots qui carillonnent à peine frappés. Ses minerais LOCAUX (−20%) viennent des veines du Bois des Échos. Le soufre cristallisé et les gemmes importés subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_25` · `!buy MAT_MIN_002` · `!sell MAT_MIN_002`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
