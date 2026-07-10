# 🌳 Sommelier Dranz — `SHOP_ALN_45`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_45` |
| **Propriétaire** | Sommelier Dranz `NPC_ALN_45` (`T_NPC.shop_ref` → `SHOP_ALN_45`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Auberge de l'Arbre Pâle |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_035` | Grand Cru d'Yggdrasil | T3 | 720 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_004` | Miel Chantant de Lioda | T2 | 170 | IMPORT Lioda | ∞ | hebdo | — |
| `CSM_NOU_005` | Sashimi de Perle | T2 | 175 | IMPORT Archipel | ∞ | hebdo | — |
| `CSM_POT_016` | Eau de Source de Lioda | T2 | 310 | IMPORT Lioda | ∞ | hebdo | — |
| `CSM_POT_024` | Eau Bénite de Lioda | T2 | 240 | IMPORT Lioda | ∞ | hebdo | — |
| `CSM_POT_036` | Sirop de Braise Éteinte | T2 | 280 | IMPORT Gattan | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : bouteilles vides et flacons à 25 %.
- **Refuse** : objets liés, T5, armes.

## 4. Ancrage zonal
Cave de l'Arbre Pâle : un cru qui n'existe plus qu'en une bouteille. Importe les boissons fines des cités (eaux de Lioda, **Grand Cru d'Yggdrasil** signature) et les met en cave premium. Sert la clientèle de l'Aubergiste Merida `NPC_ALN_44`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_45` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_45` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
