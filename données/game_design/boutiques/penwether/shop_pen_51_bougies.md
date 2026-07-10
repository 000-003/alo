# 🕯️ Marchand de Bougies — `SHOP_PEN_51`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_51` |
| **Propriétaire** | Marchand de Bougies `NPC_PEN_51` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_004` | Mousse de Caillasse | T1 | 0 | LOCAL | 15 | jour | — |
| `MAT_HRB_024` | Herbe de Résine | T2 | 5 | LOCAL | 10 | jour | — |
| `MAT_HRB_014` | Herbe des Neiges | T3 | 5 | LOCAL | 6 | semaine | — |
| `MAT_WOD_004` | Bois de Frêne — `MAT_WOD_004` | T2 | 20 | LOCAL | 8 | semaine | — |
| `MAT_WOD_013` | Bambou de Vent — `MAT_WOD_013` | T2 | 15 | LOCAL | 10 | jour | — |
| `MAT_WOD_016` | Acacia des Savanes — `MAT_WOD_016` | T2 | 20 | LOCAL | 8 | semaine | — |
| `MAT_WOD_014` | Bois de Rose — `MAT_WOD_014` | T2 | 30 | LOCAL | 6 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Bougies usagées (15%), Cires rares (20%)
- **Refuse** : Armes, armures, équipement de combat

## 4. Ancrage zonal
Le Marchand de Bougies fabrique des chandelles à partir de résine des ruines.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_51` · `!buy MAT_HRB_004` · `!sell MAT_HRB_004`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
