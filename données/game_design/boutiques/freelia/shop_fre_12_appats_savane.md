# 🐾 Appâts de la Savane — `SHOP_FRE_12`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_12` |
| **Propriétaire** | Marchand d'Appâts `NPC_FRE_12` (`T_NPC.shop_ref` → `SHOP_FRE_12`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Savane des Crocs (`HUNT_001`) |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_005` | Herbe des Steppes | T1 | 5 | LOCAL | 60 | 2j | — |
| `MAT_HRB_010` | Fleur de Savane | T2 | 5 | LOCAL | 60 | 2j | — |
| `MAT_HRB_002` | Fleur de Gravats | T1 | 5 | LOCAL | 50 | 2j | — |
| `MAT_HRB_004` | Mousse de Caillasse | T1 | 5 | LOCAL | 50 | 2j | — |
| `MAT_HRB_020` | Herbe d'Eau Claire | T1 | 5 | LOCAL | 40 | 2j | — |
| `MAT_CUI_001` | Fourrure Grise | T1 | 10 | LOCAL | 50 | 2j | — |
| `MAT_CUI_011` | Croc de Loup | T1 | 5 | LOCAL | 40 | 2j | — |

## 3. Politique de rachat
- **Rachète** : herbes et fourrures d'appât de base (`MAT_HRB_*`, `MAT_CUI_001`) à 25 %.
- **Refuse** : objets manufacturés, gemmes, armes.

## 4. Ancrage zonal
Poste d'appât des novices, à l'orée de la Savane : le Marchand d'Appâts `NPC_FRE_12` vend l'herbe et la fourrure qui attirent les proies faciles. Un de ses appâts « attire ce qu'il ne devrait pas » — la Gardienne Savane `NPC_FRE_10` a vu venir, une fois, une bête qui n'était pas sur la carte.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_12` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_12` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
