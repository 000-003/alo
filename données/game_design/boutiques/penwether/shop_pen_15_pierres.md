# 🕯️ Marchand de Pierres — `SHOP_PEN_15`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_15` |
| **Propriétaire** | Marchand de Pierres `NPC_PEN_15` |
| **Zone / Sous-lieu** | Penwether, Terres Grises |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_008` | Obsidienne de Gattan | T3 | 240 | LOCAL | 3 | semaine | — |
| `MAT_MIN_009` | Granit de Granzam | T3 | 200 | LOCAL | 3 | semaine | — |
| `MAT_MIN_001` | Minerai de Fer | T1 | 5 | LOCAL | 15 | jour | — |
| `MAT_MIN_004` | Minerai d'Argent | T2 | 65 | LOCAL | 5 | semaine | — |
| `MAT_MIN_013` | Minerai de Cuivre Raffiné | T2 | 70 | LOCAL | 5 | semaine | — |
| `MAT_GEM_001` | Gemme de Granit | T2 | 70 | LOCAL | 6 | semaine | — |
| `MAT_MIN_022` | Minerai de Terre Profonde | T2 | 55 | LOCAL | 6 | semaine | — |
| `CSM_NOU_007` | Pain de Roche de Granzam | T2 | 155 | IMPORT | 6 | jour | — |

## 3. Politique de rachat
- **Rachète** : Pierres des ruines (20%), Gemmes brutes (25%)
- **Refuse** : Objets manufacturés, équipement

## 4. Ancrage zonal
Le Marchand de Pierres extrait des fragments de compilation des Terres Grises.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_15` · `!buy MAT_MIN_008` · `!sell MAT_MIN_008`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
