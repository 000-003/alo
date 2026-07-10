# 🍃 Chiffonnier Pik — `SHOP_SWI_45`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_45` |
| **Propriétaire** | Chiffonnier Pik `NPC_SWI_45` (`T_NPC.shop_ref` → `SHOP_SWI_45`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Les Racines |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_002` | Carapace Éclatée | T1 | 10 | LOCAL | ∞ | hebdo | — |
| `MAT_MIN_005` | Charbon de Forge | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_004` | Mousse de Caillasse | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_003` | Prêle des Vapeurs | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_MIN_003` | Étain des Collines | T1 | 5 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : tout junk T0-T1 (`MAT_*` communs) à 25 %.
- **Refuse** : objets liés, T3+.

## 4. Ancrage zonal
Ramasseur de rebuts des Racines : il rachète le junk que personne ne veut et le revend au rabais aux nouveaux venus (LOCAL). Alimente le forgeron Brokkr `NPC_SWI_05` en ferraille et charbon.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_45` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_45` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
