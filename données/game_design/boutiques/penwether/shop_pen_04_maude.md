# 🕯️ Cartographe Maude — `SHOP_PEN_04`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_04` |
| **Propriétaire** | Cartographe Maude `NPC_PEN_04` |
| **Zone / Sous-lieu** | Penwether, Porche Effondré |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_076` | Monocle du Chercheur de Trésors | T2 | 1 200 | LOCAL | 3 | semaine | — |
| `ARM_TET_090` | Béret du Cartographe | T2 | 920 | LOCAL | 4 | semaine | — |
| `ARM_TET_082` | Capuche du Pèlerin d'Alne | T2 | 720 | LOCAL | 4 | semaine | — |
| `ARM_TET_083` | Casque du Garde de Caravane | T2 | 960 | LOCAL | 3 | semaine | — |
| `CSM_PAR_003` | Parchemin de Rappel | T2 | 105 | LOCAL | 5 | semaine | — |
| `CSM_PAR_004` | Parchemin de Retour de Guilde | T2 | 110 | LOCAL | 4 | semaine | — |
| `CSM_POT_016` | Eau de Source de Lioda | T2 | 310 | IMPORT | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Cartes des ruines (25%), Instruments de navigation (20%)
- **Refuse** : Armes, armures, équipement de combat

## 4. Ancrage zonal
Maude est une cartographe aveugle qui « sent » les strates du serveur sous Penwether.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_04` · `!buy ARM_TET_076` · `!sell ARM_TET_076`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
