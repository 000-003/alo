# 🌊 Poissons des Profondeurs — `SHOP_UND_38`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_38` |
| **Propriétaire** | Pêcheur des Abysses `NPC_UND_38` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_017` | Soupe Claire | T1 | 15 | LOCAL | 20 | jour | — |
| `CSM_NOU_025` | Côtelette Fumée | T2 | 85 | LOCAL | 12 | 3j | — |
| `CSM_NOU_027` | Œufs de Chauve-Souris des Ombres | T2 | 80 | LOCAL | 8 | 7j | — |
| `CSM_NOU_030` | Filet Mignon d'Alne | T3 | 385 | LOCAL | 4 | 14j | — |
| `CSM_NOU_034` | Plateau du Gourmet | T3 | 385 | LOCAL | 4 | 14j | — |
| `CSM_NOU_032` | Rôti des Cimes | T3 | 400 | LOCAL | 3 | 14j | — |

## 3. Politique de rachat
- **Rachète** : poissons d'eau profonde (30%), prises abyssales (35%)
- **Refuse** : armes, armures, minerais, équipement magique

## 4. Ancrage zonal
Filets dans les eaux noires. Poissons uniques, prisés des gourmets.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_38` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
