# 🌳 Grède — `SHOP_ALN_26`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_26` |
| **Propriétaire** | Grède `NPC_ALN_26` (`T_NPC.shop_ref` → `SHOP_ALN_26`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_011` | Fromage Fermier | T1 | 20 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_012` | Viande Séchée | T1 | 25 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_014` | Ration de Campagne | T1 | 45 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_016` | Poisson Fumé | T1 | 25 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_018` | Biscuit de Marin | T1 | 20 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_022` | Ratatouille des Champs | T2 | 70 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : denrées brutes et junk à 25 %.
- **Refuse** : objets liés, T5, armes.

## 4. Ancrage zonal
Courtier en denrées inter-raciales : il spécule sur les pénuries qu'il provoque et écoule les rations neutres de base à toute la ville. Concurrent direct de Peppin `NPC_ALN_29` sur l'alimentation. Approvisionne les caravanes via le Régisseur Bost `NPC_ALN_24`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_26` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_26` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
