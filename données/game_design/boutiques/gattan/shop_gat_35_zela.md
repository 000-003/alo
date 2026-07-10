# 🔥 Zela — `SHOP_GAT_35`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_35` |
| **Propriétaire** | Zela `NPC_GAT_35` (`T_NPC.shop_ref` → `SHOP_GAT_35`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Intendance Militaire |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_BOU_001` | Bouclier Rond en Bois | T1 | 200 | LOCAL | ∞ | hebdo | — |
| `WPN_LAN_001` | Lance de Fantassin | T1 | 200 | LOCAL | ∞ | hebdo | — |
| `WPN_DAG_001` | Dague de Fer | T1 | 200 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_011` | Masque du Conscrit de Gattan | T1 | 200 | LOCAL | ∞ | hebdo | — |
| `BELT_002` | Ceinturon de Freelia | T1 | 240 | LOCAL | ∞ | hebdo | — |
| `HRN_001` | Baudrier Simple | T1 | 240 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : surplus à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Quartier-maîtresse : surplus réglementaire de troupe, rattaché au Quartier Militaire de Graz `NPC_GAT_02`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_35` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_35` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
