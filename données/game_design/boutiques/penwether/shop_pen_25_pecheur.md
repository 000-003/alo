# 🕯️ Pêcheur des Citernes — `SHOP_PEN_25`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_25` |
| **Propriétaire** | Pêcheur des Citernes `NPC_PEN_25` |
| **Zone / Sous-lieu** | Penwether, Citernes Antiques |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_004` | Miel Chantant de Lioda | T2 | 95 | LOCAL | 6 | jour | — |
| `CSM_NOU_005` | Sashimi de Perle | T2 | 100 | LOCAL | 6 | jour | — |
| `CSM_NOU_016` | Poisson Fumé | T1 | 25 | LOCAL | 10 | jour | — |
| `CSM_NOU_023` | Poisson au Sel | T2 | 80 | LOCAL | 8 | jour | — |
| `CSM_NOU_024` | Champignons Sautés | T2 | 80 | LOCAL | 8 | jour | — |
| `MAT_HRB_020` | Herbe d'Eau Claire | T1 | 0 | LOCAL | 12 | jour | — |
| `CSM_NOU_003` | Brochette de Chasse Sauvage | T2 | 160 | IMPORT | 8 | jour | — |

## 3. Politique de rachat
- **Rachète** : Poissons rares (25%), Eaux des citernes (15%)
- **Refuse** : Armes, armures, équipement

## 4. Ancrage zonal
Le Pêcheur des Citernes pêche dans les eaux souterraines qui imprègnent les ruines de Penwether.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_25` · `!buy CSM_NOU_004` · `!sell CSM_NOU_004`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
