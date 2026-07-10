# 🔨 Baigneur des Bassins, Soins aquatiques — `SHOP_BRO_27`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_27` |
| **Propriétaire** | Baigneur des Bassins `NPC_BRO_27` |
| **Zone / Sous-lieu** | Brokkheim, Bassins Thermaux |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_001` | Potion de Soin Mineure | T1 | 25 | LOCAL | 10 | jour | — |
| `CSM_POT_002` | Potion de Soin Légère | T1 | 45 | LOCAL | 10 | jour | — |
| `CSM_POT_003` | Potion de Soin | T2 | 120 | LOCAL | 5 | semaine | — |
| `CSM_POT_004` | Potion de Soin Supérieure | T2 | 200 | LOCAL | 5 | semaine | — |
| `CSM_POT_009` | Potion de Régénération | T2 | 180 | LOCAL | 5 | semaine | — |
| `CSM_POT_011` | Potion de Mana Mineure | T1 | 30 | LOCAL | 10 | jour | — |
| `CSM_POT_019` | Antidote | T1 | 40 | LOCAL | 10 | jour | — |
| `CSM_POT_020` | Antidote Universel | T2 | 150 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Fioles vides (5 Yrds), herbes médicinales (15%)
- **Refuse** : Armes, armures, minerais, gemmes, outils

## 4. Ancrage zonal
Entretient les bains thermaux et vend des potions de soin. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_27` · `!buy CSM_POT_001` · `!sell CSM_POT_001`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
