# 🍃 Scribe Olm — `SHOP_SWI_73`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_73` |
| **Propriétaire** | Scribe Olm `NPC_SWI_73` (`T_NPC.shop_ref` → `SHOP_SWI_73`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Bibliothèque des Courants |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_PAR_011` | Parchemin de Boule de Feu | T1 | 55 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_012` | Parchemin de Soin | T1 | 55 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_013` | Parchemin d'Éclair | T2 | 120 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_014` | Parchemin de Bouclier | T1 | 60 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_015` | Parchemin de Bourrasque | T2 | 120 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : parchemins vierges et copies ratées à 25 %.
- **Refuse** : objets liés, armes.

## 4. Ancrage zonal
Copiste de la Bibliothèque des Courants : il recopie les parchemins de sort, dont le **Parchemin de Bourrasque** (magie de vent Sylph, LOCAL). Un de ses parchemins « réécrit son propre texte » (indice fil rouge méta).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_73` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_73` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
