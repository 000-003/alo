# 🌳 Breloquière Sim — `SHOP_ALN_85`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_85` |
| **Propriétaire** | Breloquière Sim `NPC_ALN_85` (`T_NPC.shop_ref` → `SHOP_ALN_85`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_002` | Carapace Éclatée | T1 | 10 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_012` | Plume de Corbeau | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_002` | Cendre Luisante | T1 | 40 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_006` | Plume Cendrée | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_012` | Plume de Sylphe | T2 | 120 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_014` | Larme de Puca | T2 | 120 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : curios et trophées (`MAT_CUI_*`, `MAT_DRP_*`) à 25 %.
- **Refuse** : objets liés, T5, armes.

## 4. Ancrage zonal
Souvenirs et babioles : une breloque authentique parmi mille fausses. Écoule les petits trophées et curios ramassés par les aventuriers, LOCAL et bon marché. Passe ses invendus au Gamin Pip `NPC_ALN_80`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_85` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_85` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
