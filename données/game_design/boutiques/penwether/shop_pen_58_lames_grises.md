# 🕯️ Marchand de Lames Grises — `SHOP_PEN_58`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_58` |
| **Propriétaire** | Marchand de Lames Grises `NPC_PEN_58` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_DAG_006` | Kriss de la Nécropole | T3 | 3 600 | LOCAL | 1 | 15j | Niv. 25+ |
| `WPN_DAG_002` | Croc de Freelia | T2 | 1 190 | IMPORT | 3 | semaine | — |
| `WPN_DAG_003` | Stylet du Zéphyr | T2 | 1 230 | IMPORT | 3 | semaine | — |
| `WPN_DAG_004` | Dague Venin-d'Ombre | T2 | 1 330 | IMPORT | 3 | semaine | — |
| `WPN_RAP_002` | Rapière du Zéphyr | T2 | 1 260 | IMPORT | 3 | semaine | — |
| `WPN_RAP_003` | Rapière de Marée | T2 | 1 330 | IMPORT | 3 | semaine | — |
| `WPN_RAP_004` | Rapière Griffe-Agile | T3 | 6 160 | IMPORT | 1 | 10j | Niv. 25+ |

## 3. Politique de rachat
- **Rachète** : Lames usagées (20%), Épées des ruines (20%)
- **Refuse** : Armes lourdes, équipement de mêlée lourde

## 4. Ancrage zonal
Le Marchand de Lames Grises vend des armes légères aux Spriggans.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_58` · `!buy WPN_DAG_006` · `!sell WPN_DAG_006`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
