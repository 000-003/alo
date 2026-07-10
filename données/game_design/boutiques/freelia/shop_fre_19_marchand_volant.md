# 🐾 Comptoir Volant de l'Îlot — `SHOP_FRE_19`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_19` |
| **Propriétaire** | Marchand Volant `NPC_FRE_19` (`T_NPC.shop_ref` → `SHOP_FRE_19`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Route Aérienne (Îlot) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_032` | Vif-Argent des Cimes | T3 | 400 | LOCAL | 15 | 3j | — |
| `CSM_POT_021` | Onguent Rafraîchissant | T1 | 35 | LOCAL | 30 | 2j | — |
| `CSM_POT_022` | Baume Thermique | T1 | 35 | LOCAL | 30 | 2j | — |
| `CSM_POT_029` | Tonique de Vitalité | T2 | 110 | LOCAL | 20 | 3j | — |
| `CSM_POT_009` | Potion de Régénération | T2 | 145 | LOCAL | 12 | 3j | — |
| `CSM_PAR_015` | Parchemin de Bourrasque | T2 | 120 | LOCAL | 15 | 3j | — |
| `CSM_CRI_005` | Cristal de Téléportation | T3 | 2 100 | IMPORT Alne | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : fioles de buff de vol et toniques (`CSM_POT_021/022/029`) à 20 %.
- **Refuse** : minerai brut, viande crue, objets liés.

## 4. Ancrage zonal
Perché sur l'îlot de la route Freelia–Alne, le Marchand Volant `NPC_FRE_19` vend le Vif-Argent des Cimes et les toniques qui tiennent en l'air. Il importe d'Alne les cristaux de téléportation (+40 %). De son perchoir, il « voit des ombres qui volent seules » — des familiers sans maître que la Vigie Route `NPC_FRE_18` compte sans les comprendre.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_19` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_19` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
