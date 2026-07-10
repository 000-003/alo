# 🐾 Cache du Trappeur Zephyr — `SHOP_FRE_02`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_02` |
| **Propriétaire** | Zephyr le Trappeur `NPC_FRE_02` (`T_NPC.shop_ref` → `SHOP_FRE_02`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Périphérie (forêt) |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=40 ou nuit |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_007` | Plante des Ombres | T2 | 5 | LOCAL | 30 | 3j | — |
| `MAT_HRB_008` | Fleur de Lune | T2 | 5 | LOCAL | 25 | 3j | — |
| `MAT_DRP_012` | Plume de Sylphe | T2 | 210 | IMPORT Swilvane | 8 | semaine | — |
| `CSM_POT_028` | Élixir de Célérité Sylphe | T2 | 195 | IMPORT Swilvane | 6 | semaine | — |

## 3. Politique de rachat
- **Rachète** : prises de braconnage et plantes d'appât illégales (`MAT_HRB_007/008`) à 30 %.
- **Refuse** : rien qu'il ne puisse écouler par Nox `NPC_FRE_05` ou le Receleur `NPC_FRE_48`.

## 4. Ancrage zonal
Zephyr `NPC_FRE_02`, Sylph installé sous couvert de l'alliance, vend des appâts interdits (Plante des Ombres, Fleur de Lune) qui attirent des bêtes qu'aucune loi ne protège encore. Ses plumes de Sylphe viennent de Swilvane (+40 %) par le même canal qui fait remonter les infos frontalières à Anya `NPC_FRE_06` — un fil que l'Envoyé Sylph `NPC_FRE_92` sait mensonger.

> `[BESOIN_ITEM]` : **Appâts vivants / espèces d'élevage prohibées (`LURE_*`/`BEAST_*`)** — cœur de métier de braconnier — catégorie « appât illégal » non fichée

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_02` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_02` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
