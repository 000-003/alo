# 🌑 Marchand d'Écailles, Armures Légères & Casques — `SHOP_DUS_69`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_69` |
| **Propriétaire** | Vendeur d'Écailles `NPC_DUS_69` |
| **Zone / Sous-lieu** | Duskarn, Falaises du Crépuscule |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_073` | Bandeau du Fouilleur | T1 | 135 | LOCAL | 6 | jour | — |
| `ARM_TET_074` | Masque Fêlé d'Apprenti | T1 | 250 | LOCAL | 4 | semaine | — |
| `ARM_TET_075` | Capuche des Ruines Grises | T2 | 1 370 | IMPORT Penwether | 3 | semaine | — |
| `ARM_TET_076` | Monocle du Chercheur de Trésors | T2 | 2 100 | IMPORT Penwether | 2 | semaine | — |
| `ARM_TET_077` | Masque d'Illusion Mineure | T3 | 6 020 | IMPORT Penwether | 1 | semaine | Niv.25+ |
| `ARM_TET_078` | Heaume du Veilleur de Penwether | T3 | 7 980 | IMPORT Penwether | 1 | semaine | Niv.25+ |
| `ARM_TET_047` | Bandeau de Terre Battue | T1 | 230 | LOCAL | 4 | semaine | — |
| `ARM_TET_048` | Casque à Lanterne | T2 | 840 | LOCAL | 3 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Écailles, armures légères T1-T2 (25%)
- **Refuse** : Armes lourdes, baguettes, objets de lumière sacrée

## 4. Ancrage zonal
Aux Falaises du Crépuscule, il vend armures légères et casques.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_69 · !armure_legere`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
