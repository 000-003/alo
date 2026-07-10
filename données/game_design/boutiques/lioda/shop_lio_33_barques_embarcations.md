# 🎭 Barques & Embarcations — `SHOP_LIO_33`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_33` |
| **Propriétaire** | Loueur de Barques `NPC_LIO_33` |
| **Zone / Sous-lieu** | Lioda, Quai du Lac-Tambour |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_WOD_002` | Bois de Chêne | T1 | 5 | LOCAL | 20 | semaine | — |
| `MAT_WOD_003` | Branche de Saule | T1 | 5 | LOCAL | 25 | semaine | — |
| `MAT_WOD_013` | Bambou de Vent | T2 | 15 | LOCAL | 30 | semaine | — |
| `MAT_CUI_001` | Fourrure Grise | T1 | 10 | LOCAL | 20 | semaine | — |
| `MAT_CUI_010` | Griffe Fouisseuse | T1 | 10 | LOCAL | 20 | 4j | — |
| `CSM_PAR_001` | Parchemin de Retour à Alne | T1 | 85 | IMPORT | 10 | semaine | — |
| `CSM_PAR_002` | Parchemin de Retour à la Cité Natale | T1 | 85 | IMPORT | 8 | semaine | — |
| `CSM_CRI_009` | Pierre de Rappel | T2 | 350 | IMPORT | 8 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Matériaux de bateau (20%), cordages (15%)
- **Refuse** : Armes, armures lourdes

## 4. Ancrage zonal
Le Loueur de Barques propose ses embarcations sur le Lac-Tambour. Ses matériaux LOCAUX (−20%) viennent des forêts de Lioda. Les parchemins de rappel et cristaux importés subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_33` · `!buy MAT_WOD_002` · `!barque_location`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
