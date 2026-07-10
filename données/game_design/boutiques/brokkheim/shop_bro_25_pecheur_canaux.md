# 🔨 Pêcheur des Canaux, Poisson des canaux — `SHOP_BRO_25`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_25` |
| **Propriétaire** | Pêcheur des Canaux `NPC_BRO_25` |
| **Zone / Sous-lieu** | Brokkheim, Canaux de Refroidissement |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_002` | Truite Grillée du Zéphyr | T2 | 120 | LOCAL | 5 | semaine | — |
| `CSM_NOU_005` | Sashimi de Perle | T2 | 125 | LOCAL | 5 | semaine | — |
| `CSM_NOU_008` | Ragoût des Geysers | T2 | 118 | LOCAL | 5 | semaine | — |
| `CSM_NOU_017` | Soupe Claire | T1 | 20 | LOCAL | 10 | jour | — |
| `CSM_NOU_018` | Biscuit de Marin | T1 | 24 | LOCAL | 10 | jour | — |
| `CSM_NOU_022` | Ratatouille des Champs | T2 | 90 | LOCAL | 5 | semaine | — |
| `CSM_NOU_025` | Côtelette Fumée | T2 | 105 | LOCAL | 5 | semaine | — |
| `CSM_NOU_027` | Œufs de Chauve-Souris des Ombres | T2 | 100 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Poisson frais (20%), appâts usagés (10%)
- **Refuse** : Armes, armures, minerais, gemmes, outils

## 4. Ancrage zonal
Pêche les poissons qui brillent dans l'eau tiède des canaux. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_25` · `!buy CSM_NOU_002` · `!sell CSM_NOU_002`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
