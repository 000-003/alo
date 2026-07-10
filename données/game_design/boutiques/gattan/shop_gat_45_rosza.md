# 🔥 Rosza — `SHOP_GAT_45`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_45` |
| **Propriétaire** | Rosza `NPC_GAT_45` (`T_NPC.shop_ref` → `SHOP_GAT_45`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Place du Dragon |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_001` | Potion de Soin Mineure | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_011` | Potion de Mana Mineure | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_019` | Antidote | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_010` | Pain de Voyage | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_001` | Parchemin de Retour à Alne | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_002` | Potion de Soin Légère | T1 | 40 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : denrées et junk à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Épicière généraliste : panier universel et nécessaire du quotidien. Premier réflexe des habitants de la Place du Dragon.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_45` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_45` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
