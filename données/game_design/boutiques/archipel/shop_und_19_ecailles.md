# 🌊 Écailles & Sortilèges — `SHOP_UND_19`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_19` |
| **Propriétaire** | Marchand d'Écailles `NPC_UND_19` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Route Aérienne Archipel–Alne (Îlot) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_024` | Casque d'Écaille Abyssale | T3 | 4400 | LOCAL | 3 | 14j | — |
| `MAT_DRP_012` | Plume de Sylphe | T2 | 120 | LOCAL | 8 | 7j | — |
| `MAT_DRP_014` | Larme de Puca | T2 | 120 | LOCAL | 8 | 7j | — |
| `MAT_GEM_003` | Gemme de Brise | T2 | 65 | LOCAL | 10 | 7j | — |
| `MAT_GEM_008` | Opale des Ruines | T3 | 420 | IMPORT Alne | 4 | 14j | — |
| `MAT_GEM_009` | Gemme d'Ombre | T3 | 365 | IMPORT Penwether | 4 | 14j | — |

## 3. Politique de rachat
- **Rachète** : écailles magiques T1-T3 (30%), bijoux (25%), gemmes (25%)
- **Refuse** : armes lourdes, minerais bruts, nourriture

## 4. Ancrage zonal
Bijoux et écailles enchantées. Casque d'Écaille Abyssale des profondeurs.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_19` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
