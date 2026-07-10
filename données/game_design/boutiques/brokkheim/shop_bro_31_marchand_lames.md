# 🔨 Marchand de Lames, Épées et Dagues — `SHOP_BRO_31`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_31` |
| **Propriétaire** | Marchand de Lames `NPC_BRO_31` |
| **Zone / Sous-lieu** | Brokkheim, Halle du Marteau |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_DAG_002` | Croc de Freelia | T2 | 850 | LOCAL | 5 | semaine | — |
| `WPN_DAG_003` | Stylet du Zéphyr | T2 | 880 | LOCAL | 5 | semaine | — |
| `WPN_RAP_001` | Rapière-Diapason | T1 | 260 | LOCAL | 10 | jour | — |
| `WPN_RAP_002` | Rapière du Zéphyr | T2 | 900 | LOCAL | 5 | semaine | — |
| `WPN_KAT_001` | Katana d'Acier Poli | T1 | 320 | LOCAL | 10 | jour | — |
| `WPN_DAG_004` | Dague Venin-d'Ombre | T2 | 950 | LOCAL | 5 | semaine | — |
| `WPN_RAP_003` | Rapière de Marée | T2 | 950 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Lames T1-T2 (25%), lames endommagées (15%)
- **Refuse** : Armures, outils, gemmes, consommables

## 4. Ancrage zonal
Expert en lames à la Halle du Marteau. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_31` · `!buy WPN_DAG_002` · `!sell WPN_DAG_002`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
