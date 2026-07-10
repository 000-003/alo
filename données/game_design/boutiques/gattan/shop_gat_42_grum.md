# 🔥 Grum — `SHOP_GAT_42`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_42` |
| **Propriétaire** | Grum `NPC_GAT_42` (`T_NPC.shop_ref` → `SHOP_GAT_42`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Taverne « La Braise Joyeuse » |
| **Type** | TAVERNE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_001` | Potion de Soin Mineure | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `CSM_POT_011` | Potion de Mana Mineure | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_010` | Pain de Voyage | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_001` | Parchemin de Retour à Alne | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_009` | Fricassée de la Nécropole | T2 | 250 | IMPORT Penwether | ∞ | hebdo | — |
| `CSM_NOU_002` | Truite Grillée du Zéphyr | T2 | 250 | IMPORT Swilvane | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : rien (taverne).
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Tavernier : buffs de repas après la Caldeira. Sert la bière de Helka `NPC_GAT_54` et les rôtis de Danna `NPC_GAT_55`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_42` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_42` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
