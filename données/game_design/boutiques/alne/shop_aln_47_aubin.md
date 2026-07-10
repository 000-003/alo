# 🌳 Chef Aubin — `SHOP_ALN_47`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_47` |
| **Propriétaire** | Chef Aubin `NPC_ALN_47` (`T_NPC.shop_ref` → `SHOP_ALN_47`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Auberge de l'Arbre Pâle |
| **Type** | BOUTIQUE |
| **Accès** | AFF>=40 |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_029` | Banquet des Neuf Races | T3 | 520 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_028` | Festin du Chef | T3 | 400 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_031` | Bisque Royale | T3 | 415 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_034` | Plateau du Gourmet | T3 | 385 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_001` | Ragoût de Lave | T2 | 170 | IMPORT Gattan | ∞ | hebdo | — |
| `CSM_NOU_007` | Pain de Roche de Granzam | T2 | 155 | IMPORT Granzam | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : ingrédients nobles à 25 %.
- **Refuse** : objets liés, T5, armes.

## 4. Ancrage zonal
Cuisine étoilée (buff food premium) : un plat interdit qui buff trop (fil « neutralité fragile »). Assemble les grands plats et le **Banquet des Neuf Races** (signature). S'approvisionne en viande chez le Boucher Halle `NPC_ALN_30`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_47` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_47` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
