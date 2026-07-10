# 🍃 Marchand Pipo — `SHOP_SWI_19`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_19` |
| **Propriétaire** | Marchand Pipo `NPC_SWI_19` (`T_NPC.shop_ref` → `SHOP_SWI_19`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Route Aérienne (Îlot n°1) |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_012` | Potion de Mana | T2 | 105 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_013` | Potion de Mana Supérieure | T3 | 400 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_015` | Potion de Régénération de Mana | T2 | 160 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_014` | Élixir de Mana | T4 | 1440 | LOCAL | ∞ | hebdo | — |
| `CSM_CRI_003` | Cristal de Mana | T3 | 1200 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_016` | Eau de Source de Lioda | T2 | 310 | IMPORT Lioda | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : flacons de mana vides à 25 %.
- **Refuse** : objets liés, armes.

## 4. Ancrage zonal
Marchand volant posté sur l'îlot n°1 de la route aérienne : Swilvane produit les meilleures potions MP du monde, il les revend au passage des voyageurs (LOCAL). L'Eau de Source de Lioda est importée pour les mages Puca de passage.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_19` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_19` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
