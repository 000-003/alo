# 🎭 Sourdine & Silence — `SHOP_LIO_69`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_69` |
| **Propriétaire** | Vendeur de Sourdine `NPC_LIO_69` |
| **Zone / Sous-lieu** | Lioda, Place de la Mesure |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_WOD_017` | Noyer des Gnomes | T3 | 145 | LOCAL | 8 | semaine | — |
| `MAT_GEM_003` | Gemme de Brise | T2 | 65 | LOCAL | 8 | semaine | — |
| `MAT_GEM_008` | Opale des Ruines | T3 | 240 | LOCAL | 4 | mois | Niv. 20+ |
| `MAT_GEM_009` | Gemme d'Ombre | T3 | 210 | LOCAL | 4 | mois | Niv. 20+ |
| `CSM_POT_013` | Potion de Mana Supérieure | T3 | 700 | IMPORT | 4 | mois | Niv. 20+ |
| `CSM_POT_015` | Potion de Régénération de Mana | T2 | 280 | IMPORT | 6 | semaine | — |
| `CSM_CRI_002` | Cristal de Soin Suprême | T4 | 6720 | IMPORT | 2 | mois | Niv. 30+, rare |
| `CSM_NOU_026` | Tarte aux Baies Chantantes | T2 | 140 | IMPORT | 6 | semaine | Spécialité de Lioda |

## 3. Politique de rachat
- **Rachète** : Accessoires de scène (25%), sourdines (30%)
- **Refuse** : Armes lourdes, armures

## 4. Ancrage zonal
Le Vendeur de Sourdine propose des accessoires de scène sur la Place de la Mesure. Ses matériaux LOCAUX (−20%) sont travaillés à Lioda. Les potions et accessoires importés subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_69` · `!buy MAT_WOD_017` · `!sourdine`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
