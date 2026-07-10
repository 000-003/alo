# 🍃 Hob — `SHOP_SWI_26`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_26` |
| **Propriétaire** | Hob `NPC_SWI_26` (`T_NPC.shop_ref` → `SHOP_SWI_26`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Place du Marché |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_012` | Viande Séchée | T1 | 40 | IMPORT Freelia | ∞ | hebdo | — |
| `CSM_NOU_003` | Brochette de Chasse Sauvage | T2 | 160 | IMPORT Freelia | ∞ | hebdo | — |
| `CSM_NOU_025` | Côtelette Fumée | T2 | 145 | IMPORT Freelia | ∞ | hebdo | — |
| `CSM_NOU_021` | Tourte du Chasseur | T2 | 145 | IMPORT Freelia | ∞ | hebdo | — |
| `MAT_CUI_015` | Croc de Wyrm Mineur | T2 | 30 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : drops de viande et carcasses (`MAT_CUI_*`) à 25 %.
- **Refuse** : objets liés, plaque.

## 4. Ancrage zonal
Boucher du Marché : la viande rouge est un BESOIN de Swilvane, importée de la savane Cait Sith (+40 %). Il découpe les dépouilles du trappeur Borg `NPC_SWI_15` (« un lot marqué »).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_26` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_26` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
