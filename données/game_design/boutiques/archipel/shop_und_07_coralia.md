# 🌊 Laboratoire de Coralia — `SHOP_UND_07`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_07` |
| **Propriétaire** | Coralia la Biologiste `NPC_UND_07` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Laboratoire Aquatique |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_001` | Potion de Soin Mineure | T1 | 20 | LOCAL | 20 | jour | — |
| `CSM_POT_003` | Potion de Soin | T2 | 95 | LOCAL | 15 | 3j | — |
| `CSM_POT_005` | Potion de Soin Majeure | T3 | 360 | LOCAL | 8 | 7j | — |
| `CSM_POT_037` | Potion d'Oxygène de Coralia | T3 | 440 | LOCAL | 10 | 7j | — |
| `CSM_POT_038` | Perle d'Air des Profondeurs | T4 | 1280 | LOCAL | 2 | 30j | Niv. 30+ |
| `CSM_POT_039` | Antidote de Fond | T2 | 160 | LOCAL | 8 | 7j | — |
| `CSM_POT_019` | Antidote | T1 | 30 | LOCAL | 12 | jour | — |
| `CSM_POT_011` | Potion de Mana Mineure | T1 | 25 | LOCAL | 15 | jour | — |

## 3. Politique de rachat
- **Rachète** : ingrédients alchimiques T1-T3 (30%), plantes aquatiques (35%)
- **Refuse** : armes, armures, équipement de pêche, minerais

## 4. Ancrage zonal
Coralia prépare ses potions dans son laboratoire immergé. Potions de soin les meilleures du continent. Anti-OXYGEN spécialité locale.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_07` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
