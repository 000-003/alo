# 🌊 La Criée du Matin — `SHOP_UND_31`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_31` |
| **Propriétaire** | Marchand de Poissons `NPC_UND_31` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_023` | Poisson au Sel | T2 | 80 | LOCAL | 30 | jour | — |
| `CSM_NOU_005` | Sashimi de Perle | T2 | 100 | LOCAL | 15 | jour | — |
| `CSM_NOU_003` | Brochette de Chasse Sauvage | T2 | 90 | LOCAL | 20 | jour | — |
| `CSM_NOU_016` | Poisson Fumé | T1 | 25 | LOCAL | 25 | jour | — |
| `CSM_NOU_019` | Ragoût de Taverne | T2 | 80 | LOCAL | 15 | 3j | — |
| `CSM_NOU_024` | Champignons Sautés | T2 | 80 | LOCAL | 15 | 3j | — |
| `CSM_NOU_026` | Tarte aux Baies Chantantes | T2 | 80 | LOCAL | 10 | 7j | — |

## 3. Politique de rachat
- **Rachète** : poissons frais (25%), prises abyssales (30%)
- **Refuse** : armes, armures, minerais, équipement magique, parchemins

## 4. Ancrage zonal
Poisson au Sel, Sashimi de Perle, Brochettes — pêché à l'aube.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_31` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
