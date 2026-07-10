# ⚒️ Officine de Murk — `SHOP_VOU_48`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_48` |
| **Propriétaire** | Informateur de la Lave Murk `NPC_VOU_48` (`T_NPC.shop_ref` → `SHOP_VOU_48`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Marché de la Lave |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=40 ou nuit |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_CRI_007` | Cristal de Fuite | T3 | 1 120 | LOCAL | 4 | semaine | AFF>=40 |
| `CSM_PAR_003` | Parchemin de Rappel | T2 | 180 | IMPORT Alne | 8 | semaine | — |
| `CSM_PAR_005` | Parchemin de Sortie de Donjon | T2 | 170 | IMPORT Alne | 8 | semaine | — |
| `CSM_POT_026` | Larme de Dissipation | T3 | 770 | IMPORT Lioda | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : cristaux de fuite et parchemins d'évasion (25 %).
- **Refuse** : objets encombrants, denrées.

## 4. Ancrage zonal
Murk `NPC_VOU_48` vend le moyen de disparaître — cristal de fuite, parchemins de sortie — à qui paie ses rumeurs K2. Son réseau court jusqu'aux informateurs de Gattan (Fitch `NPC_GAT_89`) et d'Alne. Ce qu'il sait sur « la rue qui n'existe pas » n'est jamais en rayon.

> `[BESOIN_ITEM]` : **Objets d'information / rumeurs K2 (`INTEL_*`)** — catégorie « renseignement » non fichée — vrai fonds de commerce de Murk

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_48` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_48` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
