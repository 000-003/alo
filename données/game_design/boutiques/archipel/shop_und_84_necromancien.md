# 🌊 Abysses Noirs — `SHOP_UND_84`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_84` |
| **Propriétaire** | Nécromancien des Abysses `NPC_UND_84` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Gouffre de Léviathan (accès interdit) |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=40 |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_BAG_005` | Sceptre de Coralia | T3 | 3680 | LOCAL | 1 | 30j | — |
| `CSM_POT_025` | Purge Complète | T3 | 480 | LOCAL | 2 | 21j | — |
| `CSM_POT_026` | Larme de Dissipation | T3 | 440 | LOCAL | 2 | 21j | — |
| `MAT_HRB_015` | Fleur de l'Âme | T3 | 5 | LOCAL | 3 | 14j | — |
| `MAT_HRB_007` | Plante des Ombres | T2 | 5 | LOCAL | 5 | 7j | — |

## 3. Politique de rachat
- **Rachète** : objets interdits (20%), reliques nécromantiques (25%), ingrédients noirs (30%)
- **Refuse** : objets sacrés, parchemins de soin, nourriture

## 4. Ancrage zonal
Grotte noyée au Gouffre. Sceptre de Coralia, Larmes de Dissipation.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_84` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
