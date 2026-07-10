# 🎭 Tympans & Tambours — `SHOP_LIO_68`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_68` |
| **Propriétaire** | Marchand de Peaux `NPC_LIO_68` |
| **Zone / Sous-lieu** | Lioda, Bois des Échos |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_005` | Rouage Précieux | T3 | 40 | LOCAL | 10 | semaine | Niv. 15+ |
| `MAT_CUI_009` | Éclat Bas-Relief | T3 | 50 | LOCAL | 6 | semaine | Niv. 20+ |
| `MAT_DRP_001` | Glande Bouillante Pure | T2 | 120 | LOCAL | 8 | semaine | — |
| `MAT_DRP_003` | Noyau Fissuré | T2 | 120 | LOCAL | 6 | semaine | — |
| `MAT_DRP_004` | Pierre d'Âme | T2 | 120 | LOCAL | 6 | semaine | — |
| `MAT_DRP_005` | Essence de Vide | T3 | 400 | LOCAL | 4 | mois | Niv. 25+ |
| `WPN_BOU_002` | Écu de Granit | T2 | 1330 | IMPORT | 2 | mois | Niv. 15+ |
| `CSM_POT_010` | Baume de Régénération Majeur | T3 | 980 | IMPORT | 4 | mois | Niv. 25+ |

## 3. Politique de rachat
- **Rachète** : Peaux de tambour (25%), cuirs exotiques (20%)
- **Refuse** : Armes lourdes, gemmes

## 4. Ancrage zonal
Le Marchand de Peaux vend des peaux de tambour du Bois des Échos. Ses cuirs LOCAUX (−20%) sont réputés pour leur timbre. Les boucliers et potions importés subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_68` · `!buy MAT_CUI_005` · `!sell MAT_CUI_005`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
