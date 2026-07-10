# 🔨 Marchand Scories, Résidus de forge — `SHOP_BRO_15`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_15` |
| **Propriétaire** | Marchand Scories `NPC_BRO_15` |
| **Zone / Sous-lieu** | Brokkheim, Champs de Scories |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_001` | Fourrure Grise | T1 | 12 | LOCAL | 10 | jour | — |
| `MAT_CUI_002` | Carapace Éclatée | T1 | 10 | LOCAL | 10 | jour | — |
| `MAT_CUI_010` | Griffe Fouisseuse | T1 | 10 | LOCAL | 10 | jour | — |
| `MAT_CUI_011` | Croc de Loup | T1 | 9 | LOCAL | 10 | jour | — |
| `MAT_CUI_012` | Plume de Corbeau | T1 | 6 | LOCAL | 10 | jour | — |
| `MAT_CUI_013` | Œil de Chauve-Souris | T1 | 15 | LOCAL | 10 | jour | — |
| `MAT_CUI_017` | Griffe d'Ours | T3 | 45 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_CUI_018` | Cuir de Golem | T3 | 55 | LOCAL | 2 | semaine | Niv. 20+ |

## 3. Politique de rachat
- **Rachète** : Scories et métaux T1 (25%), alliages ratés (20%)
- **Refuse** : Armes, armures, consommables, gemmes

## 4. Ancrage zonal
Parcourt les monticules de déchets pour récupérer les rebuts. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_15` · `!buy MAT_CUI_001` · `!sell MAT_CUI_001`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
