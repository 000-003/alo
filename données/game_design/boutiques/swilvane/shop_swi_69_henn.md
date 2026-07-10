# 🍃 Vannier Henn — `SHOP_SWI_69`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_69` |
| **Propriétaire** | Vannier Henn `NPC_SWI_69` (`T_NPC.shop_ref` → `SHOP_SWI_69`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Jardin Suspendu |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `BAG_002` | Sac de Toile de Swilvane | T1 | 175 | LOCAL | ∞ | hebdo | — |
| `HRN_003` | Sangle de Toile | T1 | 225 | LOCAL | ∞ | hebdo | — |
| `BELT_003` | Ceinture d'Artisan | T1 | 130 | LOCAL | ∞ | hebdo | — |
| `HRN_001` | Baudrier Simple | T1 | 200 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_019` | Herbe des Canaux | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_021` | Fleur de Grenat | T3 | 5 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : fibres et vannerie usagée à 25 %.
- **Refuse** : objets liés, minerai.

## 4. Ancrage zonal
Vannier du Jardin Suspendu : il tresse le **Sac de Toile de Swilvane** (signature, LOCAL), sangles et ceintures de fibre légère — le portage du peuple du vent. Ses fibres viennent des herbes de Meryl `NPC_SWI_12`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_69` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_69` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
