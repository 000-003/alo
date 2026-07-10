# 🐾 Comptoir de Lioda — `SHOP_FRE_91`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_91` |
| **Propriétaire** | Marchand Puca `NPC_FRE_91` (`T_NPC.shop_ref` → `SHOP_FRE_91`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_016` | Eau de Source de Lioda | T2 | 310 | IMPORT Lioda | 15 | semaine | — |
| `CSM_POT_024` | Eau Bénite de Lioda | T2 | 240 | IMPORT Lioda | 12 | semaine | — |
| `CSM_NOU_026` | Tarte aux Baies Chantantes | T2 | 140 | IMPORT Lioda | 20 | semaine | — |
| `WPN_BAG_003` | Baguette de Refrain | T2 | 1 330 | IMPORT Lioda | 4 | 10j | — |
| `ARM_TET_068` | Couronne d'Accords Mineurs | T3 | 6 160 | IMPORT Lioda | 4 | semaine | Niv. 25+ |
| `CSM_NOU_031` | Bisque Royale | T3 | 730 | IMPORT Lioda | 8 | semaine | — |

## 3. Politique de rachat
- **Rachète** : marchandises et instruments de Lioda (25 %).
- **Refuse** : faune vivante, prises de braconnage.

## 4. Ancrage zonal
Le Marchand Puca `NPC_FRE_91`, visiteur de Lioda, apporte la musique et les douceurs de l'amphithéâtre — eaux de source, baguettes de refrain, tartes chantantes (+40 %). Il échange partitions contre bêtes apprivoisées, tissant le lien Freelia–Lioda que Luthien `NPC_SWI_06` a jadis noué.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_91` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_91` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
