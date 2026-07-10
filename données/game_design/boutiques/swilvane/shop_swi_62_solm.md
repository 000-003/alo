# 🍃 Apothicaire Solm — `SHOP_SWI_62`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_62` |
| **Propriétaire** | Apothicaire Solm `NPC_SWI_62` (`T_NPC.shop_ref` → `SHOP_SWI_62`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Jardin Suspendu |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_CRI_001` | Cristal de Soin | T3 | 1890 | IMPORT Undine | ∞ | hebdo | — |
| `CSM_POT_005` | Potion de Soin Majeure | T3 | 630 | IMPORT Undine | ∞ | hebdo | — |
| `CSM_POT_009` | Potion de Régénération | T2 | 145 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_031` | Potion de Force Majeure | T3 | 400 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_025` | Purge Complète | T3 | 480 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_026` | Larme de Dissipation | T3 | 440 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : flacons vides et herbes séchées à 25 %.
- **Refuse** : objets liés, armes.

## 4. Ancrage zonal
Apothicaire du Jardin Suspendu : il distille les buffs et remèdes locaux (LOCAL) mais importe le soin lourd de l'Archipel `NPC_UND_62`. On dit qu'une de ses potions « supprime les ailes temporairement » (indice fil rouge).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_62` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_62` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
