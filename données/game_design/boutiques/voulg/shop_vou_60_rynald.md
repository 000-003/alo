# ⚒️ Runes de Feu de Rynald — `SHOP_VOU_60`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_60` |
| **Propriétaire** | Maître des Runes de Feu Rynald `NPC_VOU_60` (`T_NPC.shop_ref` → `SHOP_VOU_60`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Forge Magmatique |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_PAR_011` | Parchemin de Boule de Feu | T1 | 55 | LOCAL | 20 | 3j | — |
| `CSM_CRI_003` | Cristal de Mana | T3 | 1 200 | LOCAL | 6 | semaine | — |
| `MAT_MIN_015` | Minerai de Mage | T3 | 360 | LOCAL | 8 | semaine | — |
| `CSM_POT_018` | Élixir du Mage Gnome | T3 | 910 | IMPORT Granzam | 5 | semaine | — |
| `CSM_POT_030` | Encre de Sagesse | T2 | 110 | LOCAL | 10 | semaine | — |
| `MAT_HRB_015` | Fleur de l'Âme | T3 | 5 | LOCAL | 6 | 10j | — |

## 3. Politique de rachat
- **Rachète** : composants runiques et cristaux de mana (`CSM_CRI_003`, `MAT_MIN_015`, `MAT_HRB_015`) à 25 %.
- **Refuse** : armes brutes, nourriture, junk.

## 4. Ancrage zonal
Rynald `NPC_VOU_60` grave les runes de puissance sur les lames de la forge. Il avoue à demi-mot « une rune qu'il ne maîtrise pas » — apparue dans son grimoire après la nuit où la flamme du cratère a faibli, selon la Vestale `NPC_VOU_83`.

> `[BESOIN_ITEM]` : **Runes et gravures de feu (`RUN_*`)** — catégorie « runes gravées » non fichée — spécialité de Rynald

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_60` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_60` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
