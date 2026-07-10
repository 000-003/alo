# 🌳 Milla aux Neuf Fils — `SHOP_ALN_27`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_27` |
| **Propriétaire** | Milla aux Neuf Fils `NPC_ALN_27` (`T_NPC.shop_ref` → `SHOP_ALN_27`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_001` | Capuche de l'Initié Sylvestre | T1 | 145 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_019` | Coiffe d'Écume | T1 | 130 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_028` | Capuche à Oreilles de Chaton | T1 | 150 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_037` | Voile du Crépuscule | T1 | 140 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_064` | Chapeau de Ménestrel | T1 | 130 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_082` | Capuche du Pèlerin d'Alne | T2 | 720 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : chutes de tissu et fibres (`MAT_HRB_001`) à 25 %.
- **Refuse** : plaque/métal (hors métier), objets liés, T5.

## 4. Ancrage zonal
Marchande de tissus des 9 races, reconnaît une race à la trame de son vêtement : son étal est l'illustration parfaite du **généraliste cosmopolite d'Alne** — les coiffes de tissu T1-T2 de toutes les races au même endroit, moins chères qu'ailleurs (LOCAL). Fournit le Tailleur Ison `NPC_ALN_66`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_27` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_27` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
