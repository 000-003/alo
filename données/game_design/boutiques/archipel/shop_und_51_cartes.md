# 🌊 Cartes & Relevés — `SHOP_UND_51`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_51` |
| **Propriétaire** | Tiama Trace-Cartes `NPC_UND_51` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_073` | Bandeau du Fouilleur | T1 | 135 | LOCAL | 4 | 7j | — |
| `ARM_TET_075` | Capuche des Ruines Grises | T2 | 785 | LOCAL | 3 | 7j | — |
| `ARM_TET_076` | Monocle du Chercheur de Trésors | T2 | 1200 | LOCAL | 3 | 7j | — |
| `MAT_WOD_002` | Bois de Chêne — MAT_WOD_002 | T1 | 5 | LOCAL | 20 | jour | — |
| `MAT_WOD_005` | Bois d'Ébène — MAT_WOD_005 | T2 | 65 | IMPORT Granzam | 10 | 7j | — |
| `MAT_WOD_009` | Bois d'Yggdrasil — MAT_WOD_009 | T3 | 490 | IMPORT Yggdrasil | 3 | 14j | — |

## 3. Politique de rachat
- **Rachète** : cartes marines, instruments de navigation (25%), bois précieux (25%)
- **Refuse** : armes, armures, potions, nourriture

## 4. Ancrage zonal
Cartes les plus précises de l'Archipel. Bois d'ébène et d'Yggdrasil importés.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_51` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
