# ⚒️ Atelier de Gravure de Lorek — `SHOP_VOU_68`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_68` |
| **Propriétaire** | Graveur de Lames Lorek `NPC_VOU_68` (`T_NPC.shop_ref` → `SHOP_VOU_68`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Forge Magmatique |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_EP1_004` | Lame Noire Spriggan | T2 | 1 330 | IMPORT Penwether | 4 | 10j | — |
| `WPN_DAG_002` | Croc de Freelia | T2 | 1 190 | IMPORT Freelia | 6 | semaine | — |
| `WPN_KAT_003` | Nodachi des Brumes | T2 | 1 540 | IMPORT Swilvane | 4 | 10j | — |
| `CSM_PAR_014` | Parchemin de Bouclier | T1 | 60 | LOCAL | 15 | 3j | — |
| `MAT_CUI_009` | Éclat Bas-Relief | T3 | 50 | LOCAL | 6 | semaine | — |
| `CSM_PAR_012` | Parchemin de Soin | T1 | 55 | LOCAL | 15 | 3j | — |

## 3. Politique de rachat
- **Rachète** : lames vierges à graver (25 %), matériaux de gravure (`MAT_CUI_009`) à 20 %.
- **Refuse** : armes déjà gravées, objets liés.

## 4. Ancrage zonal
Lorek `NPC_VOU_68` grave noms et blasons sur les lames apportées de tout Alfheim (+40 %). Une lame « était déjà gravée avant d'être forgée » — un nom qu'il n'a pas inscrit, et que l'Ombre du Cratère `NPC_VOU_88` semble reconnaître.

> `[BESOIN_ITEM]` : **Gravures et sceaux personnalisés (`ENGRAVE_*`)** — service de personnalisation non fiché — métier de Lorek

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_68` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_68` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
