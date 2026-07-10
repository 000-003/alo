# 🍃 Plumassier Volm — `SHOP_SWI_65`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_65` |
| **Propriétaire** | Plumassier Volm `NPC_SWI_65` (`T_NPC.shop_ref` → `SHOP_SWI_65`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Atelier Ailé |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_006` | Plume Cendrée | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_012` | Plume de Corbeau | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_012` | Plume de Sylphe | T2 | 120 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_013` | Œil de Chauve-Souris | T1 | 10 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : plumes de mobs (`MAT_CUI_*`/`MAT_DRP_012`) à 25 %.
- **Refuse** : objets liés, minerai.

## 4. Ancrage zonal
Plumassier de l'Atelier Ailé : il vend les plumes décoratives et de matériau, dont la **Plume de Sylphe** (signature, LOCAL). Fournit la teinturière Iris `NPC_SWI_64`. Une de ses plumes « pèse le poids d'un corps » (indice fil rouge).

> `[BESOIN_ITEM]` : Plumes d'apparat décoratives assemblées (`WING_*` cosmétiques) — non fichées.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_65` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_65` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
