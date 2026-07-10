# 🐾 Charrette du Colporteur — `SHOP_FRE_47`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_47` |
| **Propriétaire** | Marchand Itinérant `NPC_FRE_47` (`T_NPC.shop_ref` → `SHOP_FRE_47`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, itinérant (routes inter-cités) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_013` | Pomme des Vergers d'Alne | T1 | 20 | IMPORT Alne | 30 | semaine | — |
| `CSM_NOU_022` | Ratatouille des Champs | T2 | 125 | IMPORT Alne | 25 | semaine | — |
| `CSM_PAR_001` | Parchemin de Retour à Alne | T1 | 85 | IMPORT Alne | 20 | semaine | — |
| `CSM_POT_012` | Potion de Mana | T2 | 180 | IMPORT Alne | 15 | semaine | — |
| `CSM_NOU_004` | Miel Chantant de Lioda | T2 | 170 | IMPORT Lioda | 20 | semaine | — |
| `CSM_POT_003` | Potion de Soin | T2 | 170 | IMPORT Archipel | 12 | semaine | — |
| `CSM_PAR_004` | Parchemin de Retour de Guilde | T2 | 195 | IMPORT Alne | 12 | semaine | — |

## 3. Politique de rachat
- **Rachète** : marchandises d'autres cités en bon état (25 %).
- **Refuse** : faune vivante, prises de braconnage.

## 4. Ancrage zonal
Le Marchand Itinérant `NPC_FRE_47` fait la navette avec Alne et Swilvane : tout son stock est IMPORT (+40 %) — pommes d'Alne, miel de Lioda, potions de soin de l'Archipel. Il porte les nouvelles autant que les vivres, relais honnête du réseau des colporteurs neutres.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_47` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_47` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
