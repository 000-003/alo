# 🌊 Conques & Merveilles — `SHOP_UND_34`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_34` |
| **Propriétaire** | Vendeur de Coquillages `NPC_UND_34` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_022` | Capuche de Brume | T2 | 1200 | LOCAL | 3 | 14j | — |
| `MAT_DRP_004` | Pierre d'Âme | T2 | 120 | LOCAL | 8 | 7j | — |
| `MAT_DRP_006` | Cœur de Feu | T3 | 700 | IMPORT Abysses | 4 | 14j | — |
| `MAT_GEM_002` | Gemme d'Obsidienne | T3 | 175 | LOCAL | 6 | 7j | — |
| `MAT_DRP_005` | Essence de Vide | T3 | 700 | IMPORT Abysses | 4 | 14j | — |
| `MAT_GEM_004` | Perle d'Undine | T3 | 210 | LOCAL | 6 | 7j | — |

## 3. Politique de rachat
- **Rachète** : coquillages rares (30%), conques enchantées (25%), perles (30%)
- **Refuse** : armes, armures, minerais, nourriture

## 4. Ancrage zonal
Coquillages magiques des plages de l'Archipel. Capuche de Brume exclusive.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_34` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
