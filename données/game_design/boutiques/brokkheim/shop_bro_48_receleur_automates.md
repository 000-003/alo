# 🔨 Receleur d'Automates, Pièces détachées — `SHOP_BRO_48`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_48` |
| **Propriétaire** | Receleur Automates `NPC_BRO_48` |
| **Zone / Sous-lieu** | Brokkheim, Atelier Cliquetant (cache) |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=40 ou quête `QST_BRO_AUTOMATE_01` |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_004` | Pierre d'Âme | T2 | 150 | LOCAL | 5 | semaine | — |
| `MAT_DRP_015` | Épine Imp | T2 | 150 | LOCAL | 5 | semaine | — |
| `MAT_WOD_014` | Bois de Rose — `MAT_WOD_014` | T2 | 40 | LOCAL | 5 | semaine | — |
| `ARM_TET_082` | Capuche du Pèlerin d'Alne | T2 | 900 | LOCAL | 5 | semaine | — |
| `ARM_TET_083` | Casque du Garde de Caravane | T2 | 1200 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Pièces d'automates (30%), cristaux de mémoire (25%)
- **Refuse** : Objets traçables de la Manufacture, armes officielles

## 4. Ancrage zonal
Travaille dans l'ombre de l'Atelier Cliquetant. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_48` · `!buy MAT_DRP_004` · `!sell MAT_DRP_004`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
