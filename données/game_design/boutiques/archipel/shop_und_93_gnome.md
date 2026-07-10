# 🌊 Gemmes & Mixtures — `SHOP_UND_93`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_93` |
| **Propriétaire** | Trafiquant Gnome `NPC_UND_93` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_GEM_005` | Rubis de Feu | T3 | 335 | IMPORT Granzam | 4 | 14j | — |
| `MAT_GEM_006` | Saphir des Glaces | T3 | 335 | IMPORT Granzam | 4 | 14j | — |
| `CSM_POT_012` | Potion de Mana | T2 | 105 | LOCAL | 10 | jour | — |
| `CSM_POT_018` | Élixir du Mage Gnome | T3 | 520 | LOCAL | 4 | 7j | — |
| `CSM_POT_015` | Potion de Régénération de Mana | T2 | 160 | LOCAL | 8 | 7j | — |
| `CSM_POT_033` | Résine Ignifuge | T2 | 120 | LOCAL | 8 | 7j | — |

## 3. Politique de rachat
- **Rachète** : gemmes de Granzam (30%), potions rares (25%)
- **Refuse** : armes, armures, minerais communs, nourriture

## 4. Ancrage zonal
Gnome trapu des quais. Gemmes de Granzam contre potions de l'Archipel.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_93` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
