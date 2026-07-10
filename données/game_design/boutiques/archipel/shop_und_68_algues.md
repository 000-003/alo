# 🌊 Algues & Remèdes — `SHOP_UND_68`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_68` |
| **Propriétaire** | Alguea `NPC_UND_68` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_001` | Lin Sylvestre | T1 | 5 | LOCAL | 25 | jour | — |
| `MAT_HRB_002` | Fleur de Gravats | T1 | 5 | LOCAL | 20 | jour | — |
| `MAT_HRB_003` | Prêle des Vapeurs | T1 | 5 | LOCAL | 25 | jour | — |
| `MAT_HRB_004` | Mousse de Caillasse | T1 | 5 | LOCAL | 30 | jour | — |
| `MAT_HRB_005` | Herbe des Steppes | T1 | 5 | LOCAL | 25 | jour | — |
| `MAT_HRB_014` | Herbe des Neiges | T3 | 5 | LOCAL | 8 | 7j | — |
| `MAT_HRB_016` | Herbe des Ruines | T3 | 5 | LOCAL | 8 | 7j | — |

## 3. Politique de rachat
- **Rachète** : algues médicinales (35%), herbes rares (30%)
- **Refuse** : armes, armures, minerais, équipement de pêche

## 4. Ancrage zonal
Algues médicinales des fonds. Soigne brûlures, intoxications, potions.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_68` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
