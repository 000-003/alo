# 🍃 Trappeur Borg — `SHOP_SWI_15`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_15` |
| **Propriétaire** | Trappeur Borg `NPC_SWI_15` (`T_NPC.shop_ref` → `SHOP_SWI_15`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Forêt de Lugru |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_001` | Fourrure Grise | T1 | 10 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_011` | Croc de Loup | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_014` | Cuir de Loup | T2 | 20 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_016` | Peau de Serpent | T2 | 20 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_007` | Queue Annelée | T1 | 10 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_017` | Griffe d'Ours | T3 | 35 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : peaux et fourrures de mobs (`MAT_CUI_*`) à 25 %.
- **Refuse** : objets liés, minerai, tissus.

## 4. Ancrage zonal
Piégeur-fourreur de la Forêt de Lugru : il écoule les peaux des mobs sylvestres (LOCAL). Approvisionne le boucher Hob `NPC_SWI_26` en dépouilles et la teinturière Iris `NPC_SWI_64`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_15` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_15` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
