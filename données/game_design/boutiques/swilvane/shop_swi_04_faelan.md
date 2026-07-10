# 🍃 Faelan Chant-Fleuri — `SHOP_SWI_04`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_04` |
| **Propriétaire** | Faelan Chant-Fleuri `NPC_SWI_04` (`T_NPC.shop_ref` → `SHOP_SWI_04`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Ascenseur Éolien |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_CRI_005` | Cristal de Téléportation | T3 | 1200 | LOCAL | ∞ | hebdo | — |
| `CSM_CRI_006` | Cristal de Corridor | T4 | 3600 | LOCAL | ∞ | hebdo | — |
| `CSM_CRI_010` | Cristal de Ralliement de Groupe | T4 | 3600 | LOCAL | ∞ | hebdo | — |
| `CSM_CRI_007` | Cristal de Fuite | T3 | 1120 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_005` | Parchemin de Sortie de Donjon | T2 | 95 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_028` | Élixir de Célérité Sylphe | T2 | 110 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : cristaux de voyage usagés (`CSM_CRI_*`) à 25 %.
- **Refuse** : objets liés, denrées périssables.

## 4. Ancrage zonal
Dompteuse d'aigles à l'Ascenseur Éolien : elle vend l'attirail du voyage céleste rapide (téléport, corridor, ralliement de vol). L'Élixir de Célérité Sylphe accélère les montées ; fournit les guildes de raid via `NPC_SWI_09`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_04` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_04` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
