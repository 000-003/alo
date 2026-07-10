# 🌊 Sables & Vermeils — `SHOP_UND_69`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_69` |
| **Propriétaire** | Sablim `NPC_UND_69` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_001` | Minerai de Fer | T1 | 5 | LOCAL | 20 | jour | — |
| `MAT_MIN_002` | Cuivre Brut | T1 | 5 | LOCAL | 18 | jour | — |
| `MAT_MIN_003` | Étain des Collines | T1 | 5 | LOCAL | 25 | jour | — |
| `MAT_MIN_005` | Charbon de Forge | T1 | 5 | LOCAL | 30 | jour | — |
| `MAT_MIN_007` | Cristal de Brise | T2 | 50 | LOCAL | 12 | 7j | — |
| `MAT_MIN_013` | Minerai de Cuivre Raffiné | T2 | 70 | LOCAL | 10 | 7j | — |
| `MAT_MIN_023` | Scorie de Mithril | T3 | 480 | LOCAL | 4 | 14j | — |

## 3. Politique de rachat
- **Rachète** : sable magique (25%), minerais rares (25%), résidus verrerie (20%)
- **Refuse** : armes, armures, nourriture, parchemins

## 4. Ancrage zonal
Sable des fonds marins pour Finbar le Verrier. Chaque grain connu.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_69` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
