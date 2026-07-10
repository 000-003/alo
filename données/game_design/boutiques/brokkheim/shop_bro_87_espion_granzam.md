# 🔨 Espion de Granzam, Marchandises d'import — `SHOP_BRO_87`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_87` |
| **Propriétaire** | Espion Granzam `NPC_BRO_87` |
| **Zone / Sous-lieu** | Brokkheim, Halle Marteau (cache) |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=45 ou quête `QST_BRO_POULS_TRIANGULATION` |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_GEM_001` | Gemme de Granit | T2 | 125 | IMPORT | 5 | semaine | ×1.4 |
| `MAT_GEM_003` | Gemme de Brise | T2 | 110 | IMPORT | 5 | semaine | ×1.4 |
| `MAT_GEM_005` | Rubis de Feu | T3 | 335 | IMPORT | 2 | semaine | ×1.4 |
| `CSM_PAR_001` | Parchemin de Retour à Alne | T1 | 85 | IMPORT | 10 | jour | ×1.4 |
| `CSM_PAR_002` | Parchemin de Retour à la Cité Natale | T1 | 85 | IMPORT | 10 | jour | ×1.4 |

## 3. Politique de rachat
- **Rachète** : Marchandises d'import (25%)
- **Refuse** : Armes, armures, minerais locaux, outils

## 4. Ancrage zonal
Gnome infiltré de Granzam. Prix IMPORT ×1.4 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_87` · `!buy MAT_GEM_001` · `!sell MAT_GEM_001`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
