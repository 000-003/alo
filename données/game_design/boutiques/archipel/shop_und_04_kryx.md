# 🌊 Trésors des Abysses — `SHOP_UND_04`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_04` |
| **Propriétaire** | Kryx le Plongeur `NPC_UND_04` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Gouffre de Léviathan (entrée) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_002` | Cendre Luisante | T1 | 40 | LOCAL | 8 | 7j | — |
| `MAT_DRP_010` | Perle des Abysses | T3 | 400 | LOCAL | 4 | 14j | — |
| `MAT_DRP_011` | Corne de Chasseur | T2 | 120 | LOCAL | 6 | 7j | — |
| `MAT_DRP_003` | Noyau Fissuré | T2 | 120 | LOCAL | 5 | 7j | — |
| `ARM_TET_019` | Coiffe d'Écume | T1 | 130 | LOCAL | 5 | 7j | — |
| `MAT_DRP_015` | Épine Imp | T2 | 120 | LOCAL | 8 | 7j | — |
| `MAT_DRP_007` | Écaille de Léviathan | T4 | 1600 | LOCAL | 1 | 30j | Niv. 35+ |
| `MAT_DRP_001` | Glande Bouillante Pure | T2 | 210 | IMPORT Brokkheim | 4 | 14j | — |

## 3. Politique de rachat
- **Rachète** : trésors sous-marins T1-T3 (25%), perles rares (30%), artefacts d'épaves (25%)
- **Refuse** : armes, armures, consommables alchimiques, minerais

## 4. Ancrage zonal
Kryx plonge dans le Gouffre de Léviathan depuis trente ans. Ses trésors proviennent des épaves englouties — perles des abysses, écailles de Léviathan et artéfacts.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_04` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
