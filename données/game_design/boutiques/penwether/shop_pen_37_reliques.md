# 🕯️ Marchand de Reliques — `SHOP_PEN_37`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_37` |
| **Propriétaire** | Marchand de Reliques `NPC_PEN_37` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_GEM_009` | Gemme d'Ombre | T3 | 210 | LOCAL | 3 | semaine | — |
| `MAT_GEM_008` | Opale des Ruines | T3 | 240 | LOCAL | 3 | semaine | — |
| `MAT_DRP_018` | Gemme de Sang | T3 | 400 | LOCAL | 2 | 10j | Niv. 20+ |
| `MAT_DRP_010` | Perle des Abysses | T3 | 400 | LOCAL | 2 | 10j | Niv. 20+ |
| `MAT_WOD_006` | Cèdre des Ombres — `MAT_WOD_006` | T2 | 25 | LOCAL | 6 | semaine | — |
| `MAT_WOD_005` | Bois d'Ébène — `MAT_WOD_005` | T2 | 35 | LOCAL | 6 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Reliques des ruines (20%), Statuettes (25%)
- **Refuse** : Objets neufs, consommables

## 4. Ancrage zonal
Marchand de reliques dont une statuette bouge la nuit — un Spriggan dont la simulation a échoué.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_37` · `!buy MAT_GEM_009` · `!sell MAT_GEM_009`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
