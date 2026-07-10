# 🌳 Tenancier Krebs — `SHOP_ALN_48`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_48` |
| **Propriétaire** | Tenancier Krebs `NPC_ALN_48` (`T_NPC.shop_ref` → `SHOP_ALN_48`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Taverne du Sous-Sol |
| **Type** | TAVERNE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_001` | Potion de Soin Mineure | T1 | 20 | LOCAL | ∞ | hebdo | [UNIVERSEL] |
| `CSM_POT_011` | Potion de Mana Mineure | T1 | 25 | LOCAL | ∞ | hebdo | [UNIVERSEL] |
| `CSM_POT_019` | Antidote | T1 | 30 | LOCAL | ∞ | hebdo | [UNIVERSEL] |
| `CSM_NOU_010` | Pain de Voyage | T1 | 15 | LOCAL | ∞ | hebdo | [UNIVERSEL] |
| `CSM_PAR_001` | Parchemin de Retour à Alne | T1 | 50 | LOCAL | ∞ | hebdo | [UNIVERSEL] |
| `CSM_NOU_019` | Ragoût de Taverne | T2 | 80 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : chopes vides et junk à 25 %.
- **Refuse** : objets liés, T5, armes.

## 4. Ancrage zonal
Taverne du Sous-Sol, voisine bruyante du casino de Maelis `NPC_ALN_06` : c'est ici, et **nulle part ailleurs à Alne**, qu'on trouve le **panier universel** (soin/mana/antidote mineurs, pain de voyage, parchemin de retour) — le premier réflexe de l'aventurier de passage.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_48` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_48` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
