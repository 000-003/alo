# ⚒️ Comptoir des Mines de Soufre — `SHOP_VOU_03`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_03` |
| **Propriétaire** | Malakor `NPC_VOU_03` (`T_NPC.shop_ref` → `SHOP_VOU_03`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Mines de Soufre |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_001` | Minerai de Fer | T1 | 5 | LOCAL | 80 | 2j | — |
| `MAT_MIN_002` | Cuivre Brut | T1 | 5 | LOCAL | 60 | 2j | — |
| `MAT_MIN_005` | Charbon de Forge | T1 | 5 | LOCAL | 90 | 2j | — |
| `MAT_MIN_006` | Soufre Cristallisé | T2 | 40 | LOCAL | 40 | 4j | — |
| `MAT_MIN_008` | Obsidienne de Gattan | T3 | 240 | LOCAL | 12 | semaine | — |
| `MAT_MIN_022` | Minerai de Terre Profonde | T2 | 55 | LOCAL | 30 | 4j | — |
| `MAT_HRB_006` | Fleur de Soufre | T2 | 5 | LOCAL | 25 | 3j | — |
| `MAT_HRB_003` | Prêle des Vapeurs | T1 | 5 | LOCAL | 30 | 3j | — |

## 3. Politique de rachat
- **Rachète** : minerais bruts et soufre du territoire Salamander (`MAT_MIN_*`, `MAT_HRB_006`) à 25 %.
- **Refuse** : armes, armures, consommables manufacturés, objets liés.

## 4. Ancrage zonal
Malakor `NPC_VOU_03` (Imp) presse les mineurs — joueurs comme esclaves `NPC_VOU_14` — pour le compte de la Forge Magmatique. Le minerai sort du sol même de Voulg, d'où des prix LOCAUX cassés (−20 %). Le soufre cristallisé alimente les explosifs de Bôm `NPC_VOU_63` et la salle qu'il feint d'ignorer sous le cratère.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_03` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_03` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
