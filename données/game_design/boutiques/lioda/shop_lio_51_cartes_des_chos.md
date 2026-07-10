# 🎭 Cartes des Échos — `SHOP_LIO_51`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_51` |
| **Propriétaire** | Cartographe Sonore `NPC_LIO_51` |
| **Zone / Sous-lieu** | Lioda, Grand Kiosque |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_002` | Fleur de Gravats | T1 | 5 | LOCAL | 20 | jour | — |
| `MAT_HRB_023` | Fleur du Crépuscule | T3 | 5 | LOCAL | 12 | semaine | — |
| `MAT_DRP_002` | Cendre Luisante | T1 | 40 | LOCAL | 15 | semaine | — |
| `MAT_DRP_011` | Corne de Chasseur | T2 | 120 | LOCAL | 8 | semaine | — |
| `MAT_DRP_012` | Plume de Sylphe | T2 | 120 | LOCAL | 8 | semaine | — |
| `CSM_CRI_005` | Cristal de Téléportation | T3 | 2100 | IMPORT | 2 | mois | Niv. 25+ |
| `CSM_CRI_007` | Cristal de Fuite | T3 | 1960 | IMPORT | 3 | mois | Niv. 20+ |
| `CSM_POT_018` | Élixir du Mage Gnome | T3 | 910 | IMPORT | 4 | mois | Buff INT, Niv. 20+ |

## 3. Politique de rachat
- **Rachète** : Cartes rares (25%), relevés sonores (25%)
- **Refuse** : Armes, armures lourdes

## 4. Ancrage zonal
Le Cartographe Sonore dresse les plans des lieux de Lioda selon ce qu'ils chantent. Ses articles LOCAUX (−20%) sont préparés avec des encres sonores. Les cristaux et potions importés subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_51` · `!buy MAT_HRB_002` · `!echo_map`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
