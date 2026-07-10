# 🎭 Potions de Vol — `SHOP_LIO_19`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_19` |
| **Propriétaire** | Marchand de Vol `NPC_LIO_19` |
| **Zone / Sous-lieu** | Lioda, Route Aérienne (Îlot) |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_028` | Élixir de Célérité Sylphe | T2 | 110 | LOCAL | 8 | semaine | Buff CÉLÉRITÉ |
| `CSM_POT_029` | Tonique de Vitalité | T2 | 110 | LOCAL | 8 | semaine | Buff VITALITÉ |
| `CSM_POT_030` | Encre de Sagesse | T2 | 110 | LOCAL | 6 | semaine | Buff SAGESSE |
| `CSM_POT_031` | Potion de Force Majeure | T3 | 400 | LOCAL | 4 | mois | Buff FORCE majeure, Niv. 20+ |
| `CSM_POT_032` | Vif-Argent des Cimes | T3 | 400 | LOCAL | 4 | mois | Buff CÉLÉRITÉ majeure, Niv. 20+ |
| `CSM_POT_005` | Potion de Soin Majeure | T3 | 630 | IMPORT | 2 | mois | Niv. 25+ |
| `CSM_PAR_005` | Parchemin de Sortie de Donjon | T2 | 170 | IMPORT | 4 | mois | Sortie de donjon |

## 3. Politique de rachat
- **Rachète** : Potions de déplacement (25%), ingrédients volants (20%)
- **Refuse** : Armes lourdes, armures

## 4. Ancrage zonal
Le Marchand de Vol tient un îlot sur la Route Aérienne où il vend potions de buff et de déplacement. Ses élixirs LOCAUX (−20%) sont préparés avec des ingrédients des Prairies. Les cristaux de téléportation importés subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_19` · `!buy CSM_POT_028` · `!flight_buff`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
