# 🎭 Bois de Résonance — `SHOP_LIO_15`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_15` |
| **Propriétaire** | Marchand de Bois de Résonance `NPC_LIO_15` |
| **Zone / Sous-lieu** | Lioda, Bois des Échos |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_WOD_004` | Bois de Frêne | T2 | 20 | LOCAL | 15 | semaine | — |
| `MAT_WOD_005` | Bois d'Ébène | T2 | 35 | LOCAL | 10 | semaine | — |
| `MAT_WOD_006` | Cèdre des Ombres | T2 | 25 | LOCAL | 12 | semaine | — |
| `MAT_WOD_007` | Bois de Charme | T2 | 30 | LOCAL | 10 | semaine | — |
| `MAT_WOD_012` | Cœur de Chêne | T3 | 120 | LOCAL | 8 | semaine | — |
| `MAT_WOD_014` | Bois de Rose | T2 | 30 | LOCAL | 12 | semaine | — |
| `MAT_WOD_016` | Acacia des Savanes | T2 | 20 | LOCAL | 15 | semaine | — |
| `MAT_WOD_008` | Érable de Lave | T3 | 280 | IMPORT | 4 | mois | Niv. 20+ |

## 3. Politique de rachat
- **Rachète** : Bois de résonance (25%), écorces rares (20%)
- **Refuse** : Armes, armures, potions

## 4. Ancrage zonal
Le Marchand de Bois de Résonance exploite le Bois des Échos, prisé des luthiers. Ses bois LOCAUX (−20%) résonnent encore après la coupe. Les bois exotiques importés comme l'Érable de Lave subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_15` · `!buy MAT_WOD_004` · `!sell MAT_WOD_004`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
