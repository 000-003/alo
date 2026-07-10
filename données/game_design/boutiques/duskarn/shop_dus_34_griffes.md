# 🌑 Vendeur de Griffes, Griffes & Armures Légères — `SHOP_DUS_34`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_34` |
| **Propriétaire** | Vendeur de Griffes `NPC_DUS_34` |
| **Zone / Sous-lieu** | Duskarn, Bazar des Ombres |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_BAG_001` | Baguette-Diapason | T1 | 210 | LOCAL | 5 | semaine | — |
| `WPN_JET_003` | Kunai d'Ombre | T3 | 3 440 | LOCAL | 2 | semaine | Niv.20+ |
| `ARM_TET_039` | Masque de Suie | T2 | 785 | LOCAL | 4 | semaine | — |
| `ARM_TET_040` | Capuche de l'Échoteur | T2 | 1 120 | LOCAL | 3 | semaine | — |
| `ARM_TET_041` | Heaume Corne-de-Nuit | T3 | 3 680 | LOCAL | 2 | semaine | Niv.25+ |
| `ARM_TET_042` | Loup de l'Ombre Dansante | T3 | 4 640 | LOCAL | 1 | semaine | Niv.25+ |
| `WPN_BAG_002` | Baguette de Source | T2 | 720 | LOCAL | 4 | semaine | — |
| `ARM_TET_046` | Casque de Prospecteur | T1 | 295 | IMPORT Granzam | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Griffes T1-T2 (25%), armures légères Imp (25%)
- **Refuse** : Armes lourdes, baguettes, objets de lumière sacrée

## 4. Ancrage zonal
Au Bazar des Ombres, le Vendeur de Griffes propose armes et armures légères Imp. Forgeronne Umbra `NPC_DUS_02` enchante ses pièces.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_34 · !claw_lore`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
