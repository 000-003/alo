# 🍃 Helka l'Exilée — `SHOP_SWI_91`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_91` |
| **Propriétaire** | Helka l'Exilée `NPC_SWI_91` (`T_NPC.shop_ref` → `SHOP_SWI_91`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Taverne de l'Érable |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_001` | Ragoût de Lave | T2 | 170 | IMPORT Gattan | ∞ | hebdo | — |
| `CSM_POT_022` | Baume Thermique | T1 | 65 | IMPORT Gattan | ∞ | hebdo | — |
| `CSM_POT_036` | Sirop de Braise Éteinte | T2 | 280 | IMPORT Gattan | ∞ | hebdo | — |
| `CSM_NOU_033` | Curry Ardent | T3 | 700 | IMPORT Gattan | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : chopes vides et braises à 25 %.
- **Refuse** : objets liés, équipement de vol.

## 4. Ancrage zonal
Brasseuse salamander réfugiée de Gattan (lien réservé `NPC_GAT_54`) : elle importe la cuisine et les remèdes de feu de sa cité perdue (+40 %). Sa **bière de feu** signature (« Haleine de Logi ») n'est pas encore un objet fiché.

> `[BESOIN_ITEM]` : Bière de feu « Haleine de Logi » — boisson signature non fichée (dette d'élargissement `CSM_NOU`/boissons).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_91` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_91` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
