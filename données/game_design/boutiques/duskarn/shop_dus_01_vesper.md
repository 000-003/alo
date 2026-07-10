# 🌑 Vesper le Discret, Marchand d'Armes Courtes — `SHOP_DUS_01`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_01` |
| **Propriétaire** | Vesper le Discret `NPC_DUS_01` |
| **Zone / Sous-lieu** | Duskarn, Bazar des Ombres |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_DAG_001` | Dague de Fer | T1 | 120 | LOCAL | 8 | jour | — |
| `WPN_DAG_003` | Stylet du Zéphyr | T2 | 705 | LOCAL | 5 | semaine | — |
| `WPN_DAG_004` | Dague Venin-d'Ombre | T2 | 760 | LOCAL | 4 | semaine | — |
| `WPN_DAG_005` | Lame Furtive du Zéphyr | T3 | 3 440 | LOCAL | 2 | semaine | Niv.20+ |
| `WPN_JET_001` | Couteaux de Lancer | T1 | 145 | LOCAL | 6 | jour | — |
| `WPN_JET_002` | Shuriken-Griffe | T2 | 680 | LOCAL | 4 | semaine | — |
| `ARM_TET_037` | Voile du Crépuscule | T1 | 140 | LOCAL | 6 | jour | — |
| `ARM_TET_038` | Cornes d'Apprenti | T1 | 250 | LOCAL | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Armes courtes T1-T2 (25%), armures légères Imp (25%)
- **Refuse** : Armes lourdes, baguettes, objets de lumière sacrée, armures lourdes

## 4. Ancrage zonal
Vesper tient son étal au cœur du Bazar des Ombres, spécialisé dans les armes qui frappent sans être vues. Ses lames viennent de la Corniche de la Forge Noire.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_01 · !buy WPN_DAG_001 · !sell WPN_DAG_001`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
