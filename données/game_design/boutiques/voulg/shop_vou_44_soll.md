# ⚒️ Baraque de Soll — `SHOP_VOU_44`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_44` |
| **Propriétaire** | Marchand d'Esclaves Soll `NPC_VOU_44` (`T_NPC.shop_ref` → `SHOP_VOU_44`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Marché de la Lave |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=40 ou nuit |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_027` | Huile de Force du Berserker | T2 | 110 | LOCAL | 8 | semaine | — |
| `WPN_JET_001` | Couteaux de Lancer | T1 | 145 | LOCAL | 20 | semaine | — |
| `MAT_CUI_020` | Os d'Ancien | T4 | 80 | LOCAL | 2 | mois | AFF>=60 |
| `CSM_POT_023` | Bouchons de Cire de Duskarn | T2 | 225 | IMPORT Duskarn | 6 | semaine | — |

## 3. Politique de rachat
- **Rachète** : objets pris sur les captifs (25 %), fers et manilles (10 %).
- **Refuse** : rien qu'il ne puisse revendre.

## 4. Ancrage zonal
Soll `NPC_VOU_44` vend la chair — captifs de guerre livrés à l'arène de Kaelthor `NPC_VOU_01`. Il fournit l'huile de force aux gladiateurs et les bouchons de cire de Duskarn pour étouffer les cris. Un acheteur « rachète toujours les mêmes » têtes : le fil que le Vétéran Mur `NPC_VOU_95` tire sans le savoir.

> `[BESOIN_ITEM]` : **Contrats d'esclave / manilles (`SLAVE_*`)** — catégorie « traite » non fichée — cœur de métier de Soll, matérialisée en service uniquement

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_44` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_44` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
