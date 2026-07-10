# 🕯️ Marchand d'Armures Grises — `SHOP_PEN_59`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_59` |
| **Propriétaire** | Marchand d'Armures Grises `NPC_PEN_59` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_073` | Bandeau du Fouilleur | T1 | 135 | LOCAL | 6 | jour | — |
| `ARM_TET_046` | Casque de Prospecteur | T1 | 295 | IMPORT | 5 | jour | — |
| `ARM_TET_047` | Bandeau de Terre Battue | T1 | 405 | IMPORT | 5 | jour | — |
| `ARM_TET_048` | Casque à Lanterne | T2 | 1 470 | IMPORT | 3 | semaine | — |
| `ARM_TET_049` | Heaume de Granit Brut | T2 | 2 100 | IMPORT | 3 | semaine | — |
| `ARM_TET_056` | Calot de Suie de Forge | T1 | 390 | IMPORT | 6 | jour | — |
| `ARM_TET_057` | Casque à Visière Rabattable | T2 | 1 540 | IMPORT | 3 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Armures d'occasion (20%), Pièces d'équipement (15%)
- **Refuse** : Armes, objets de luxe

## 4. Ancrage zonal
Le Marchand d'Armures Grises répare et revend des équipements de protection récupérés dans les ruines.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_59` · `!buy ARM_TET_073` · `!sell ARM_TET_073`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
