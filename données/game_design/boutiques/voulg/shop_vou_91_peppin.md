# ⚒️ Comptoir d'Alne de Peppin — `SHOP_VOU_91`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_91` |
| **Propriétaire** | Marchand d'Alne Peppin `NPC_VOU_91` (`T_NPC.shop_ref` → `SHOP_VOU_91`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Marché de la Lave |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_013` | Pomme des Vergers d'Alne | T1 | 20 | IMPORT Alne | 30 | semaine | — |
| `CSM_NOU_011` | Fromage Fermier | T1 | 35 | IMPORT Alne | 30 | semaine | — |
| `CSM_NOU_030` | Filet Mignon d'Alne | T3 | 670 | IMPORT Alne | 8 | semaine | — |
| `CSM_NOU_022` | Ratatouille des Champs | T2 | 125 | IMPORT Alne | 20 | semaine | — |
| `MAT_HRB_008` | Fleur de Lune | T2 | 5 | IMPORT Alne | 15 | semaine | — |
| `CSM_POT_016` | Eau de Source de Lioda | T2 | 310 | IMPORT Lioda | 12 | semaine | — |
| `CSM_NOU_005` | Sashimi de Perle | T2 | 175 | IMPORT Archipel | 15 | semaine | — |

## 3. Politique de rachat
- **Rachète** : produits d'Alne et denrées neutres (25 %).
- **Refuse** : armes de guerre, objets volés.

## 4. Ancrage zonal
Peppin `NPC_VOU_91` importe d'Alne le confort que Voulg n'a pas — fromages, fruits, ratatouille (+40 %). Il « voit des armes d'Alne » circuler à Voulg et des armes de Voulg partir vers Alne : le trafic de Syl `NPC_VOU_93` et Kael `NPC_ALN_07`, qu'il tait par prudence.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_91` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_91` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
