# 🍃 Cueilleuse Meryl — `SHOP_SWI_12`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_12` |
| **Propriétaire** | Cueilleuse Meryl `NPC_SWI_12` (`T_NPC.shop_ref` → `SHOP_SWI_12`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Prairies de Sylvain |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_001` | Lin Sylvestre | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_022` | Herbe du Vent | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_008` | Fleur de Lune | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_002` | Fleur de Gravats | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_020` | Herbe d'Eau Claire | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_005` | Herbe des Steppes | T1 | 5 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : herbes fraîches de base (`MAT_HRB_*`) à 25 %.
- **Refuse** : minerai, objets liés, viande.

## 4. Ancrage zonal
Herboriste des Prairies : elle vend la flore T1-T2 du plateau sylvestre en abondance (LOCAL). Fournit l'apothicaire Solm `NPC_SWI_62` et l'herboriste Nael `NPC_SWI_61` en matière première.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_12` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_12` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
