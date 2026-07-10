# 🌑 Pêcheur Aveugle, Poisson de la Rivière d'Encre — `SHOP_DUS_25`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_25` |
| **Propriétaire** | Pêcheur Aveugle `NPC_DUS_25` |
| **Zone / Sous-lieu** | Duskarn, Rivière d'Encre |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_006` | Bouillon d'Ombre | T2 | 95 | LOCAL | 8 | jour | — |
| `CSM_NOU_009` | Fricassée de la Nécropole | T2 | 95 | LOCAL | 6 | semaine | — |
| `CSM_NOU_016` | Poisson Fumé | T1 | 25 | LOCAL | 15 | jour | — |
| `CSM_NOU_023` | Poisson au Sel | T2 | 80 | LOCAL | 8 | semaine | — |
| `CSM_NOU_027` | Œufs de Chauve-Souris des Ombres | T2 | 80 | LOCAL | 6 | semaine | — |
| `MAT_CUI_013` | Œil de Chauve-Souris | T1 | 10 | LOCAL | 12 | jour | — |
| `CSM_NOU_008` | Ragoût des Geysers | T2 | 95 | LOCAL | 4 | semaine | — |
| `MAT_HRB_020` | Herbe d'Eau Claire | T1 | 5 | LOCAL | 18 | jour | — |

## 3. Politique de rachat
- **Rachète** : Poisson, encre, composants de cuisine/alchimie (25%)
- **Refuse** : Armes, armures, équipement, objets de lumière sacrée

## 4. Ancrage zonal
Le Pêcheur Aveugle lit la Rivière d'Encre par le son, sans yeux, vendant le poisson aux cuisines de la cité.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_25 · !fish_dus`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
