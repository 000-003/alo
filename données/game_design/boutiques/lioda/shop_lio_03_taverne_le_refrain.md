# 🎭 Taverne « Le Refrain » — `SHOP_LIO_03`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_03` |
| **Propriétaire** | Aubergiste Polka `NPC_LIO_03` |
| **Zone / Sous-lieu** | Lioda, Quai du Lac-Tambour |
| **Type** | TAVERNE |
| **Accès** | libre |

## 2. Inventaire (10 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_001` | Ragoût de Lave | T2 | 95 | LOCAL | 20 | jour | Buff STR +15% |
| `CSM_NOU_003` | Brochette de Chasse Sauvage | T2 | 90 | LOCAL | 18 | jour | Buff DEX +10% |
| `CSM_NOU_004` | Miel Chantant de Lioda | T2 | 95 | LOCAL | 18 | jour | Buff CHA +15%, spécialité de Lioda |
| `CSM_NOU_007` | Pain de Roche de Granzam | T2 | 90 | LOCAL | 25 | jour | — |
| `CSM_NOU_008` | Ragoût des Geysers | T2 | 95 | LOCAL | 20 | jour | — |
| `CSM_NOU_014` | Ration de Campagne | T1 | 45 | LOCAL | 20 | jour | — |
| `CSM_NOU_019` | Ragoût de Taverne | T2 | 80 | LOCAL | 15 | jour | — |
| `CSM_POT_001` | Potion de Soin Mineure | T1 | 35 | IMPORT | 15 | jour | — |
| `CSM_POT_011` | Potion de Mana Mineure | T1 | 40 | IMPORT | 12 | jour | — |
| `CSM_NOU_011` | Fromage Fermier | T1 | 35 | IMPORT | 20 | jour | — |

## 3. Politique de rachat
- **Rachète** : Nourriture (20%), boissons (20%)
- **Refuse** : Armes, armures, gemmes

## 4. Ancrage zonal
La Taverne « Le Refrain » est le cœur battant du Quai du Lac-Tambour. Polka sert des plats qui buffent par le son — chaque repas est accompagné d'un accord qui restaure. Les produits LOCAUX (−20%) comme le Ragoût de Lave ou le Miel Chantant sont préparés avec les ingrédients du Lac-Tambour. Les potions et fromages importés viennent d'Alne et subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_03` · `!buy CSM_NOU_001` · `!rest (buff STR)`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
