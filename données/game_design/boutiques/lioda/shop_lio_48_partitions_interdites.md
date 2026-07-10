# 🎭 Partitions Interdites — `SHOP_LIO_48`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_48` |
| **Propriétaire** | Receleur de Partition `NPC_LIO_48` |
| **Zone / Sous-lieu** | Lioda, Bois des Échos (caché) |
| **Type** | MARCHÉ NOIR |
| **Accès** | condition (introduction, mot de passe) |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_PAR_015` | Parchemin de Bourrasque | T2 | 120 | LOCAL | 4 | semaine | Niv. 15+ |
| `CSM_POT_024` | Eau Bénite de Lioda | T2 | 135 | LOCAL | 5 | semaine | — |
| `WPN_BAG_004` | Baguette de Pénombre | T2 | 1370 | IMPORT | 2 | mois | Niv. 20+ |
| `WPN_RAP_004` | Rapière Griffe-Agile | T3 | 6160 | IMPORT | 1 | mois | Niv. 20+ |
| `WPN_BAG_003` | Baguette de Refrain | T2 | 1330 | IMPORT | 1 | mois | Niv. 25+ |

## 3. Politique de rachat
- **Rachète** : Partitions rares (30%), informations (variable)
- **Refuse** : Armes, armures, objets physiques

## 4. Ancrage zonal
Le Receleur de Partition opère un marché noir dans le Bois des Échos, vendant des partitions interdites. Ses articles LOCAUX (−20%) viennent de sources illicites locales. Les armes enchantées importées subissent la surtaxe IMPORT (+40%). L'accès est conditionné à une introduction.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_48` · `!buy CSM_PAR_015` · `!buy_rumor (service)`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
