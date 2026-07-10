# 🐾 Chenil de Combat — `SHOP_FRE_38`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_38` |
| **Propriétaire** | Éleveur de Worgs `NPC_FRE_38` (`T_NPC.shop_ref` → `SHOP_FRE_38`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_DAG_002` | Croc de Freelia | T2 | 680 | LOCAL | 8 | semaine | — |
| `WPN_JET_002` | Shuriken-Griffe | T2 | 680 | LOCAL | 10 | semaine | — |
| `WPN_DAG_003` | Stylet du Zéphyr | T2 | 705 | LOCAL | 6 | semaine | — |
| `CSM_NOU_014` | Ration de Campagne | T1 | 45 | LOCAL | 30 | 2j | — |
| `MAT_HRB_017` | Fleur des Forges | T2 | 5 | LOCAL | 25 | 3j | — |

## 3. Politique de rachat
- **Rachète** : crocs-armes et rations de dressage (`WPN_DAG_002`, `CSM_NOU_014`) à 25 %.
- **Refuse** : cosmétique, gemmes, objets liés.

## 4. Ancrage zonal
L'Éleveur `NPC_FRE_38` dresse les worgs de combat et arme leurs maîtres du **Croc de Freelia** et du Shuriken-Griffe. Un de ses worgs « reconnaît son maître décédé » et refuse un nouveau lien — le fil du Familiar qui s'efface, que le Maître des Familiers `NPC_FRE_60` étudie en secret.

> `[BESOIN_ITEM]` : **Worgs de combat dressés (`WORG_*`)** — familiers vivants non fichés — spécialité de l'Éleveur

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_38` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_38` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
