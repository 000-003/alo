# 🍃 Miren — `SHOP_SWI_22`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_22` |
| **Propriétaire** | Miren `NPC_SWI_22` (`T_NPC.shop_ref` → `SHOP_SWI_22`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Place du Marché |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_011` | Fromage Fermier | T1 | 20 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_015` | Galette d'Avoine | T1 | 20 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_017` | Soupe Claire | T1 | 15 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_024` | Champignons Sautés | T2 | 80 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_022` | Ratatouille des Champs | T2 | 70 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : denrées fermières fraîches (`CSM_NOU_*`) à 25 %.
- **Refuse** : viande crue, objets liés.

## 4. Ancrage zonal
Crémière-fromagère du Marché : lait de chèvre des Prairies et produits fermiers (LOCAL). Sa gamme laitière signature (lait de chèvre, fromages affinés) reste à ficher.

> `[BESOIN_ITEM]` : Lait de chèvre des Prairies, fromages affinés de Swilvane — sous-catégorie laitière non fichée au lot I-1.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_22` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_22` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
