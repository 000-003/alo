# 🐾 Boucherie du Marché aux Crocs — `SHOP_FRE_30`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_30` |
| **Propriétaire** | Boucher Marché `NPC_FRE_30` (`T_NPC.shop_ref` → `SHOP_FRE_30`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_003` | Brochette de Chasse Sauvage | T2 | 90 | LOCAL | 30 | 2j | — |
| `CSM_NOU_012` | Viande Séchée | T1 | 25 | LOCAL | 50 | 2j | — |
| `CSM_NOU_021` | Tourte du Chasseur | T2 | 85 | LOCAL | 20 | 3j | — |
| `CSM_NOU_025` | Côtelette Fumée | T2 | 85 | LOCAL | 25 | 3j | — |
| `CSM_NOU_020` | Brochette Épicée | T2 | 75 | LOCAL | 25 | 3j | — |
| `CSM_NOU_017` | Soupe Claire | T1 | 15 | LOCAL | 40 | 2j | — |
| `CSM_NOU_024` | Champignons Sautés | T2 | 80 | LOCAL | 30 | 2j | — |

## 3. Politique de rachat
- **Rachète** : viande fraîche de gibier et abats (`CSM_NOU_003/012/021/025`) à 25 %.
- **Refuse** : objets manufacturés, gemmes, armes.

## 4. Ancrage zonal
Le Boucher `NPC_FRE_30` découpe les monstres du jour au cœur du Marché aux Crocs. Une de ses chairs « palpite encore » sur l'étal : maillon du fil du Marché aux Os que Brok `NPC_FRE_07` et le Trappeur `NPC_FRE_15` alimentent en pièces de boss non tués.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_30` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_30` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
