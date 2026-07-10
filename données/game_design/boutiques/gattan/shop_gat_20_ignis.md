# 🔥 Ignis — `SHOP_GAT_20`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_20` |
| **Propriétaire** | Ignis `NPC_GAT_20` (`T_NPC.shop_ref` → `SHOP_GAT_20`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Marché Central |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_EP1_001` | Épée Longue en Fer | T1 | 200 | LOCAL | ∞ | hebdo | — |
| `WPN_KAT_001` | Katana d'Acier Poli | T1 | 200 | LOCAL | ∞ | hebdo | — |
| `WPN_HAC_001` | Hache de Bûcheron | T1 | 200 | LOCAL | ∞ | hebdo | — |
| `WPN_MAS_001` | Masse Cloutée | T1 | 200 | LOCAL | ∞ | hebdo | — |
| `WPN_MAS_004` | Masse de Lave | T3 | 3200 | LOCAL | ∞ | hebdo | — |
| `WPN_HAC_004` | Hache du Cratère | T3 | 3200 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : armes à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Forgeron du marché : armes de troupe et une masse de lave pour les recrues. Renvoie les commandes fines vers Kagemune `NPC_GAT_01`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_20` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_20` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
