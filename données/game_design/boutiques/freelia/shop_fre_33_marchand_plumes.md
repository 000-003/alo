# 🐾 Plumerie du Marché — `SHOP_FRE_33`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_33` |
| **Propriétaire** | Marchand Plumes `NPC_FRE_33` (`T_NPC.shop_ref` → `SHOP_FRE_33`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_006` | Plume Cendrée | T1 | 5 | LOCAL | 50 | 2j | — |
| `MAT_CUI_012` | Plume de Corbeau | T1 | 5 | LOCAL | 60 | 2j | — |
| `MAT_DRP_002` | Cendre Luisante | T1 | 40 | LOCAL | 30 | 3j | — |
| `MAT_HRB_022` | Herbe du Vent | T2 | 5 | LOCAL | 40 | 2j | — |
| `MAT_HRB_009` | Herbe des Marais | T2 | 5 | LOCAL | 40 | 2j | — |
| `MAT_HRB_019` | Herbe des Canaux | T2 | 5 | LOCAL | 40 | 2j | — |

## 3. Politique de rachat
- **Rachète** : plumes et duvets de vol (`MAT_CUI_006/012`, `MAT_DRP_002`) à 25 %.
- **Refuse** : viande, minerai, objets liés.

## 4. Ancrage zonal
Le Marchand Plumes `NPC_FRE_33` trie les plumes de vol pour les selliers et les fléchiers. Une de ses plumes « est phosphorescente » — elle luit sans source ; le Marchand Volant `NPC_FRE_19` jure en avoir vu de semblables sur les ombres qui volent seules au-dessus de la route.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_33` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_33` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
