# 🌑 Marchand de Poudre, Poudres & Réactifs — `SHOP_DUS_67`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_67` |
| **Propriétaire** | Marchand de Poudre `NPC_DUS_67` |
| **Zone / Sous-lieu** | Duskarn, Canyon des Ombres |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_001` | Glande Bouillante Pure | T2 | 120 | LOCAL | 5 | semaine | — |
| `MAT_DRP_015` | Épine Imp | T2 | 120 | LOCAL | 6 | semaine | — |
| `MAT_DRP_016` | Braise de Forge | T3 | 400 | LOCAL | 3 | semaine | — |
| `MAT_DRP_018` | Gemme de Sang | T3 | 400 | LOCAL | 2 | semaine | — |
| `MAT_MIN_006` | Soufre Cristallisé | T2 | 40 | LOCAL | 8 | semaine | — |
| `MAT_MIN_007` | Cristal de Brise | T2 | 50 | LOCAL | 6 | semaine | — |
| `MAT_MIN_013` | Minerai de Cuivre Raffiné | T2 | 125 | IMPORT Granzam | 4 | semaine | — |
| `MAT_HRB_024` | Herbe de Résine | T2 | 5 | LOCAL | 12 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Poudres, réactifs, ingrédients alchimiques (25%)
- **Refuse** : Armes, armures, équipement lourd, objets de lumière sacrée

## 4. Ancrage zonal
Au Canyon des Ombres, il vend les poudres que les Imp utilisent pour leurs ombres.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_67 · !poudre_voyante`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
