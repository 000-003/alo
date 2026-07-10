# 🔨 Trafiquant de Mithril, Mithril de contrebande — `SHOP_BRO_88`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_88` |
| **Propriétaire** | Trafiquant Mithril `NPC_BRO_88` |
| **Zone / Sous-lieu** | Brokkheim, Manufacture (cache) |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=45 ou quête `QST_BRO_FAUX_MITHRIL` |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_010` | Mithril Brut | T4 | 1500 | LOCAL | 1 | mois | Niv. 30+ |
| `MAT_HRB_012` | Herbe de Mithril | T3 | 6 | LOCAL | 2 | semaine | Niv. 20+ |
| `WPN_BOU_003` | Écu de Mithril | T2 | 1000 | LOCAL | 5 | semaine | — |
| `CSM_PAR_003` | Parchemin de Rappel | T2 | 130 | LOCAL | 5 | semaine | — |
| `CSM_PAR_004` | Parchemin de Retour de Guilde | T2 | 140 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Mithril volé (25%), lingots douteux (20%)
- **Refuse** : Armes, armures, gemmes, objets traçables

## 4. Ancrage zonal
Ancien contremaître qui détourne du mithril. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_88` · `!buy MAT_MIN_010` · `!sell MAT_MIN_010`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
