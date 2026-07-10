# ⚒️ Étal du Boucher de la Lave — `SHOP_VOU_43`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_43` |
| **Propriétaire** | Boucher de la Lave Horg `NPC_VOU_43` (`T_NPC.shop_ref` → `SHOP_VOU_43`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Marché de la Lave |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_003` | Brochette de Chasse Sauvage | T2 | 90 | LOCAL | 20 | 2j | — |
| `CSM_NOU_012` | Viande Séchée | T1 | 25 | LOCAL | 40 | 2j | — |
| `CSM_NOU_016` | Poisson Fumé | T1 | 25 | LOCAL | 30 | 2j | — |
| `CSM_NOU_021` | Tourte du Chasseur | T2 | 85 | LOCAL | 15 | 3j | — |
| `CSM_NOU_025` | Côtelette Fumée | T2 | 85 | LOCAL | 15 | 3j | — |
| `MAT_CUI_014` | Cuir de Loup | T2 | 20 | LOCAL | 25 | 3j | — |
| `MAT_CUI_011` | Croc de Loup | T1 | 5 | LOCAL | 40 | 2j | — |
| `CSM_NOU_014` | Ration de Campagne | T1 | 75 | IMPORT Granzam | 30 | semaine | — |

## 3. Politique de rachat
- **Rachète** : viande, cuirs et crocs des mobs (`MAT_CUI_011/014`, `CSM_NOU` de chasse) à 25 %.
- **Refuse** : armes, gemmes, objets liés.

## 4. Ancrage zonal
Horg `NPC_VOU_43` découpe pour toute la garnison ; il transforme la viande de mob en rations locales et importe les rations de campagne de Granzam (+40 %). Une de ses viandes « rend malade » — le Médecin de Guerre Feld `NPC_VOU_38` soigne trop de soldats qui en ont mangé.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_43` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_43` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
