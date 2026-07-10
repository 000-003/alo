# 🌑 Marchand de Membranes, Cuirs & Peaux — `SHOP_DUS_66`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_66` |
| **Propriétaire** | Marchand de Membranes `NPC_DUS_66` |
| **Zone / Sous-lieu** | Duskarn, Canyon des Ombres |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_014` | Cuir de Loup | T2 | 20 | LOCAL | 10 | semaine | — |
| `MAT_CUI_015` | Croc de Wyrm Mineur | T2 | 30 | LOCAL | 6 | semaine | — |
| `MAT_CUI_016` | Peau de Serpent | T2 | 20 | LOCAL | 8 | semaine | — |
| `MAT_CUI_017` | Griffe d'Ours | T3 | 35 | LOCAL | 4 | semaine | — |
| `MAT_CUI_018` | Cuir de Golem | T3 | 45 | LOCAL | 3 | semaine | — |
| `ARM_TET_082` | Capuche du Pèlerin d'Alne | T2 | 1 260 | IMPORT Alne | 3 | semaine | — |
| `ARM_TET_083` | Casque du Garde de Caravane | T2 | 1 680 | IMPORT Alne | 2 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Membranes, cuirs, peaux (25%)
- **Refuse** : Armes, armures, équipement, objets de lumière sacrée

## 4. Ancrage zonal
Au Canyon des Ombres, il vend les peaux tannées des bêtes des profondeurs.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_66 · !cadre_aile`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
