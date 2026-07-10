# 🕯️ Marchand de Teintures — `SHOP_PEN_53`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_53` |
| **Propriétaire** | Marchand de Teintures `NPC_PEN_53` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_001` | Lin Sylvestre | T1 | 0 | LOCAL | 15 | jour | — |
| `MAT_HRB_005` | Herbe des Steppes | T1 | 0 | LOCAL | 12 | jour | — |
| `MAT_HRB_009` | Herbe des Marais | T2 | 0 | LOCAL | 10 | jour | — |
| `MAT_HRB_022` | Herbe du Vent | T2 | 5 | LOCAL | 8 | semaine | — |
| `MAT_HRB_023` | Fleur du Crépuscule | T3 | 5 | LOCAL | 4 | semaine | — |
| `MAT_HRB_015` | Fleur de l'Âme | T3 | 5 | LOCAL | 4 | semaine | — |
| `CSM_NOU_011` | Fromage Fermier | T1 | 35 | IMPORT | 12 | jour | — |

## 3. Politique de rachat
- **Rachète** : Pigments rares (25%), Teintures (15%)
- **Refuse** : Équipement, armes

## 4. Ancrage zonal
Le Marchand de Teintures produit des couleurs à partir des plantes qui poussent sur les ruines.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_53` · `!buy MAT_HRB_001` · `!sell MAT_HRB_001`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
