# 🐾 Étal du Boucher Brok — `SHOP_FRE_07`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_07` |
| **Propriétaire** | Brok le Boucher `NPC_FRE_07` (`T_NPC.shop_ref` → `SHOP_FRE_07`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_001` | Glande Bouillante Pure | T2 | 120 | LOCAL | 20 | 3j | — |
| `MAT_DRP_011` | Corne de Chasseur | T2 | 120 | LOCAL | 25 | 3j | — |
| `MAT_DRP_013` | Croc de Salamander | T2 | 120 | LOCAL | 20 | 3j | — |
| `MAT_DRP_004` | Pierre d'Âme | T2 | 120 | LOCAL | 6 | semaine | — |
| `MAT_CUI_015` | Croc de Wyrm Mineur | T2 | 30 | LOCAL | 30 | 3j | — |
| `MAT_CUI_003` | Glande Bouillante | T2 | 30 | LOCAL | 25 | 3j | — |
| `MAT_CUI_008` | Lueur Résiduelle | T2 | 25 | LOCAL | 20 | 4j | — |

## 3. Politique de rachat
- **Rachète** : loot de monstres bruts — glandes, cornes, crocs (`MAT_DRP_001/011/013`, `MAT_CUI_003/015`) à 25 %.
- **Refuse** : objets manufacturés, armes T2+, cosmétique.

## 4. Ancrage zonal
Brok `NPC_FRE_07` (Gnome) et son hachoir géant débitent tout ce que les chasseurs rapportent. Une de ses **Pierres d'Âme** `MAT_DRP_004` vient d'une carcasse de boss jamais tué : la « viande qui repousse » du fil du Marché aux Os, que le Receleur `NPC_FRE_48` et le Trappeur `NPC_FRE_15` alimentent sans le dire.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_07` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_07` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
