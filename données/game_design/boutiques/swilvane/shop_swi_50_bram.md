# 🍃 Tavernier Bram — `SHOP_SWI_50`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_50` |
| **Propriétaire** | Tavernier Bram `NPC_SWI_50` (`T_NPC.shop_ref` → `SHOP_SWI_50`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Taverne de l'Érable |
| **Type** | TAVERNE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_001` | Potion de Soin Mineure | T1 | 20 | LOCAL | ∞ | hebdo | [UNIVERSEL] |
| `CSM_POT_011` | Potion de Mana Mineure | T1 | 25 | LOCAL | ∞ | hebdo | [UNIVERSEL] |
| `CSM_NOU_010` | Pain de Voyage | T1 | 15 | LOCAL | ∞ | hebdo | [UNIVERSEL] |
| `CSM_POT_019` | Antidote | T1 | 30 | LOCAL | ∞ | hebdo | [UNIVERSEL] |
| `CSM_PAR_002` | Parchemin de Retour à la Cité Natale | T1 | 50 | LOCAL | ∞ | hebdo | [UNIVERSEL] |
| `CSM_NOU_019` | Ragoût de Taverne | T2 | 80 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : restes de table et flacons vides à 25 %.
- **Refuse** : objets liés, armes.

## 4. Ancrage zonal
Tavernier de l'Érable : **seul détenteur du panier universel** de Swilvane (soin/mana mineurs, pain, antidote, retour cité natale). Son Ragoût de Taverne buffe l'AGI (signature) ; il entend tout ce qui se dit. La **torche** du panier reste non fichée (`[BESOIN_ITEM]`).

> `[BESOIN_ITEM]` : Torche (6ᵉ article du panier universel R1) — non fichée au lot I-1 (déjà relevée à Gattan et Alne).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_50` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_50` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
