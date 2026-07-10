# 🍃 Herboriste Nael — `SHOP_SWI_61`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_61` |
| **Propriétaire** | Herboriste Nael `NPC_SWI_61` (`T_NPC.shop_ref` → `SHOP_SWI_61`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Jardin Suspendu |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_012` | Herbe de Mithril | T3 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_015` | Fleur de l'Âme | T3 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_018` | Fleur de Lotus | T3 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_025` | Plante Primordiale | T4 | 10 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_021` | Onguent Rafraîchissant | T1 | 35 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_029` | Tonique de Vitalité | T2 | 110 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : plantes rares des cimes (`MAT_HRB_*` T3+) à 25 %.
- **Refuse** : minerai, objets liés.

## 4. Ancrage zonal
Herboriste du Jardin Suspendu : plantes médicinales rares poussées en altitude (LOCAL). Fournit l'apothicaire Solm `NPC_SWI_62`. Une plante de sa réserve « n'existe pas dans la base » (indice fil rouge).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_61` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_61` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
