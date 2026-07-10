# 🌊 Plumes & Échanges — `SHOP_UND_91`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_91` |
| **Propriétaire** | Marchand Sylph `NPC_UND_91` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_028` | Capuche à Oreilles de Chaton | T1 | 150 | LOCAL | 5 | 7j | — |
| `ARM_TET_029` | Serre-tête du Traqueur | T1 | 255 | LOCAL | 5 | 7j | — |
| `ARM_TET_064` | Chapeau de Ménestrel | T1 | 130 | LOCAL | 4 | 7j | — |
| `ARM_TET_065` | Bandeau à Grelots | T1 | 240 | LOCAL | 6 | 7j | — |
| `ARM_TET_066` | Tricorne du Troubadour | T2 | 800 | LOCAL | 3 | 7j | — |
| `ARM_TET_067` | Serre-tête Diapason | T2 | 1160 | LOCAL | 3 | 7j | — |

## 3. Politique de rachat
- **Rachète** : plumes décoratives (30%), biens cosmétiques (25%), objets légers (25%)
- **Refuse** : armes lourdes, minerais, nourriture, équipement de pêche

## 4. Ancrage zonal
Sylph de Swilvane. Plumes colorées et parures contre perles noires.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_91` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
