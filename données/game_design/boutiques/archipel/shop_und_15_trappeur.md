# 🌊 Pelleteries & Venins — `SHOP_UND_15`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_15` |
| **Propriétaire** | Trappeur des Marais `NPC_UND_15` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Marais de Brume |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_001` | Fourrure Grise | T1 | 10 | LOCAL | 15 | jour | — |
| `MAT_CUI_014` | Cuir de Loup | T2 | 20 | LOCAL | 10 | 3j | — |
| `MAT_CUI_015` | Croc de Wyrm Mineur | T2 | 30 | LOCAL | 8 | 7j | — |
| `MAT_CUI_016` | Peau de Serpent | T2 | 20 | LOCAL | 12 | 3j | — |
| `MAT_CUI_017` | Griffe d'Ours | T3 | 35 | LOCAL | 5 | 7j | — |
| `MAT_DRP_013` | Croc de Salamander | T2 | 120 | LOCAL | 6 | 7j | — |

## 3. Politique de rachat
- **Rachète** : peaux brutes T1-T2 (25%), venins (30%), trophées (25%)
- **Refuse** : armes, armures, équipement magique, nourriture

## 4. Ancrage zonal
Peaux de grenouille géante et venins réputés chez les alchimistes.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_15` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
