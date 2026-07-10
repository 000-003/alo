# ⚒️ Brocante de Guerre de Zek — `SHOP_VOU_45`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_45` |
| **Propriétaire** | Brocanteur de Guerre Zek `NPC_VOU_45` (`T_NPC.shop_ref` → `SHOP_VOU_45`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Marché de la Lave |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_002` | Carapace Éclatée | T1 | 10 | LOCAL | 50 | 2j | — |
| `MAT_CUI_012` | Plume de Corbeau | T1 | 5 | LOCAL | 60 | 2j | — |
| `MAT_CUI_007` | Queue Annelée | T1 | 10 | LOCAL | 50 | 2j | — |
| `MAT_CUI_010` | Griffe Fouisseuse | T1 | 10 | LOCAL | 50 | 2j | — |
| `MAT_HRB_004` | Mousse de Caillasse | T1 | 5 | LOCAL | 60 | 2j | — |
| `MAT_CUI_013` | Œil de Chauve-Souris | T1 | 10 | LOCAL | 40 | 2j | — |
| `MAT_HRB_001` | Lin Sylvestre | T1 | 5 | IMPORT Swilvane | 30 | semaine | — |

## 3. Politique de rachat
- **Rachète** : tout le junk de guerre T0-T1 (`MAT_CUI_*`, `MAT_HRB_*`) à 25 %.
- **Refuse** : objets liés, armes T3+.

## 4. Ancrage zonal
Zek `NPC_VOU_45` rachète les loots des soldats tombés et les revend à la pièce. Un médaillon de son étal appartient à « un bataillon dissous » que le Stratège Serkan `NPC_VOU_31` a rayé des registres.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_45` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_45` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
