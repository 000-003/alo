# 🎭 Anches & Roseaux — `SHOP_LIO_36`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_36` |
| **Propriétaire** | Fabricant de Roseaux `NPC_LIO_36` |
| **Zone / Sous-lieu** | Lioda, Prairies Chantantes |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_005` | Herbe des Steppes | T1 | 5 | LOCAL | 20 | 4j | — |
| `MAT_HRB_009` | Herbe des Marais | T2 | 5 | LOCAL | 20 | 4j | — |
| `MAT_HRB_017` | Fleur des Forges | T2 | 5 | LOCAL | 15 | semaine | — |
| `MAT_HRB_019` | Herbe des Canaux | T2 | 5 | LOCAL | 25 | 3j | — |
| `MAT_HRB_022` | Herbe du Vent | T2 | 5 | LOCAL | 20 | 4j | — |
| `MAT_HRB_024` | Herbe de Résine | T2 | 5 | LOCAL | 18 | 4j | — |
| `MAT_HRB_012` | Herbe de Mithril | T3 | 10 | IMPORT | 6 | mois | Niv. 20+ |
| `MAT_HRB_013` | Fleur d'Obsidienne | T3 | 10 | IMPORT | 6 | mois | Niv. 20+ |

## 3. Politique de rachat
- **Rachète** : Anches (25%), roseaux rares (25%)
- **Refuse** : Armes, armures, gemmes

## 4. Ancrage zonal
Le Fabricant de Roseaux taille les anches pour les instruments de Lioda dans les roseaux des Prairies Chantantes. Ses produits LOCAUX (−20%) sont prisés des luthiers. Les herbes rares importées subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_36` · `!buy MAT_HRB_005` · `!sell MAT_HRB_005`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
