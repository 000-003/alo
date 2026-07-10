# 🎭 Carpes du Lac-Tambour — `SHOP_LIO_31`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_31` |
| **Propriétaire** | Marchand de Carpes `NPC_LIO_31` |
| **Zone / Sous-lieu** | Lioda, Quai du Lac-Tambour |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_005` | Sashimi de Perle | T2 | 100 | LOCAL | 15 | jour | Spécialité du Lac-Tambour |
| `CSM_NOU_002` | Truite Grillée du Zéphyr | T2 | 95 | LOCAL | 12 | jour | — |
| `CSM_NOU_016` | Poisson Fumé | T1 | 25 | LOCAL | 20 | jour | — |
| `CSM_NOU_018` | Biscuit de Marin | T1 | 20 | LOCAL | 15 | jour | — |
| `CSM_NOU_023` | Poisson au Sel | T2 | 80 | LOCAL | 12 | jour | — |
| `CSM_NOU_024` | Champignons Sautés | T2 | 80 | LOCAL | 10 | jour | — |
| `CSM_NOU_020` | Brochette Épicée | T2 | 135 | IMPORT | 8 | semaine | — |
| `CSM_NOU_021` | Tourte du Chasseur | T2 | 145 | IMPORT | 6 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Poissons (25%), crustacés (20%)
- **Refuse** : Armes, armures, gemmes

## 4. Ancrage zonal
Le Marchand de Carpes vend la carpe soprano du Lac-Tambour, dont la chair est réputée pour son timbre. Ses poissons LOCAUX (−20%) sont pêchés à l'aube. Les plats importés viennent des routes marchandes avec la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_31` · `!buy CSM_NOU_005` · `!carpe_fresh`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
