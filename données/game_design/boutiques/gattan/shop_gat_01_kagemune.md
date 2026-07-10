# 🔥 Kagemune — `SHOP_GAT_01`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_01` |
| **Propriétaire** | Kagemune `NPC_GAT_01` (`T_NPC.shop_ref` → `SHOP_GAT_01`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Grande Forge |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_EP1_003` | Sabre de Braise | T2 | 800 | LOCAL | ∞ | hebdo | — |
| `WPN_EP2_002` | Flamberge de Voulg | T2 | 800 | LOCAL | ∞ | hebdo | — |
| `WPN_KAT_002` | Kagutsuchi Mineur | T2 | 800 | LOCAL | ∞ | hebdo | — |
| `WPN_HAC_002` | Hache de Braise | T2 | 800 | LOCAL | ∞ | hebdo | — |
| `WPN_BOU_004` | Pavois de Braise | T3 | 3200 | LOCAL | ∞ | hebdo | — |
| `WPN_EP1_009` | Sabre de Magma de Gattan | T4 | 11200 | LOCAL | ∞ | hebdo | AFF>=80 |

## 3. Politique de rachat
- **Rachète** : armes et lingots à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Forge maîtresse de Gattan : Kagemune bat les lames lourdes de Salamander dans la lave. Il écoule sa production via Graz `NPC_GAT_02` et brûle le charbon de Orim `NPC_GAT_23`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_01` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_01` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
