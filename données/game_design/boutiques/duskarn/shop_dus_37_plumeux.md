# 🌑 Plumeux des Ombres, Plumes & Fourrures — `SHOP_DUS_37`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_37` |
| **Propriétaire** | Plumeux des Ombres `NPC_DUS_37` |
| **Zone / Sous-lieu** | Duskarn, Canyon des Ombres |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_006` | Plume Cendrée | T1 | 5 | LOCAL | 20 | jour | — |
| `MAT_CUI_007` | Queue Annelée | T1 | 10 | LOCAL | 15 | jour | — |
| `MAT_CUI_008` | Lueur Résiduelle | T2 | 25 | LOCAL | 10 | semaine | — |
| `MAT_CUI_011` | Croc de Loup | T1 | 5 | LOCAL | 12 | jour | — |
| `MAT_CUI_012` | Plume de Corbeau | T1 | 5 | LOCAL | 18 | jour | — |
| `MAT_CUI_001` | Fourrure Grise | T1 | 10 | LOCAL | 12 | jour | — |
| `MAT_CUI_010` | Griffe Fouisseuse | T1 | 10 | LOCAL | 10 | jour | — |
| `MAT_HRB_005` | Herbe des Steppes | T1 | 5 | LOCAL | 15 | jour | — |

## 3. Politique de rachat
- **Rachète** : Plumes, fourrures, composants de chauve-souris (25%)
- **Refuse** : Armes, armures, équipement lourd, objets de lumière sacrée

## 4. Ancrage zonal
Le Plumeux récolte les plumes de chauve-souris des profondeurs au Canyon des Ombres.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_37 · !plume_lore`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
