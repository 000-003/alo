# 🔨 Marchand de Soufre Fin, Soufre raffiné — `SHOP_BRO_57`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_57` |
| **Propriétaire** | Marchand Soufre Fin `NPC_BRO_57` |
| **Zone / Sous-lieu** | Brokkheim, Vallée des Geysers (entrée) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_013` | Fleur d'Obsidienne | T3 | 6 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_HRB_021` | Fleur de Grenat | T3 | 6 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_HRB_023` | Fleur du Crépuscule | T3 | 6 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_HRB_024` | Herbe de Résine | T2 | 4 | LOCAL | 5 | semaine | — |
| `MAT_HRB_006` | Fleur de Soufre | T2 | 5 | LOCAL | 5 | semaine | — |
| `MAT_HRB_018` | Fleur de Lotus | T3 | 6 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_HRB_019` | Herbe des Canaux | T2 | 3 | LOCAL | 5 | semaine | — |
| `ARM_TET_028` | Capuche à Oreilles de Chaton | T1 | 190 | LOCAL | 10 | jour | — |

## 3. Politique de rachat
- **Rachète** : Soufre brut (25%), résidus d'affinage (15%)
- **Refuse** : Armes, armures, gemmes, outils

## 4. Ancrage zonal
Transforme le soufre brut en poudre fine. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_57` · `!buy MAT_HRB_013` · `!sell MAT_HRB_013`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
