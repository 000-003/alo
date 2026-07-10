# 🎭 Sacs Vocaux Baryton — `SHOP_LIO_38`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_38` |
| **Propriétaire** | Trappeur de Grenouilles `NPC_LIO_38` |
| **Zone / Sous-lieu** | Lioda, Prairies Chantantes |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_002` | Carapace Éclatée | T1 | 10 | LOCAL | 20 | 3j | — |
| `MAT_CUI_004` | Carapace Émaillée | T2 | 20 | LOCAL | 15 | semaine | — |
| `MAT_HRB_008` | Fleur de Lune | T2 | 5 | LOCAL | 15 | 4j | — |
| `MAT_HRB_020` | Herbe d'Eau Claire | T1 | 5 | LOCAL | 25 | 2j | — |
| `MAT_WOD_001` | Bois d'If | T1 | 5 | LOCAL | 30 | 2j | — |
| `MAT_DRP_010` | Perle des Abysses | T3 | 400 | LOCAL | 4 | mois | Niv. 25+ |
| `CSM_POT_020` | Antidote Universel | T2 | 210 | IMPORT | 6 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Peaux de grenouille (25%), cuirs divers (20%)
- **Refuse** : Armes, armures, gemmes

## 4. Ancrage zonal
Le Trappeur de Grenouilles chasse les grenouilles baryton des Prairies Chantantes pour leurs sacs vocaux, usés en tympans de tambour. Ses cuirs LOCAUX (−20%) sont réputés pour leur timbre. Les antidotes importés subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_38` · `!buy MAT_CUI_002` · `!sell MAT_CUI_002`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
