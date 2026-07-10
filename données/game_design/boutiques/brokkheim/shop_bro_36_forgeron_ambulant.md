# 🔨 Forgeron Ambulant, Armes de campagne — `SHOP_BRO_36`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_36` |
| **Propriétaire** | Forgeron Ambulant `NPC_BRO_36` |
| **Zone / Sous-lieu** | Brokkheim, Route Aérienne |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_HAC_001` | Hache de Bûcheron | T1 | 240 | LOCAL | 10 | jour | — |
| `WPN_HAC_002` | Hache de Braise | T2 | 1100 | LOCAL | 5 | semaine | — |
| `WPN_MAS_002` | Masse de Granit | T2 | 1100 | LOCAL | 5 | semaine | — |
| `WPN_MAS_003` | Marteau de Forge Leprechaun | T2 | 1050 | LOCAL | 5 | semaine | — |
| `WPN_LAN_001` | Lance de Fantassin | T1 | 210 | LOCAL | 10 | jour | — |
| `WPN_LAN_002` | Pique de Granit | T2 | 950 | LOCAL | 5 | semaine | — |
| `WPN_HAC_003` | Hache Gnome à Deux Têtes | T2 | 1150 | LOCAL | 5 | semaine | — |
| `WPN_LAN_003` | Hallebarde de Brokkheim | T2 | 1000 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Armes T1 (20%), armes endommagées (15%)
- **Refuse** : Armures, gemmes, consommables alimentaires

## 4. Ancrage zonal
Forgeron itinérant sur la Route Aérienne. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_36` · `!buy WPN_HAC_001` · `!sell WPN_HAC_001`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
