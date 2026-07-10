# 🕯️ Marchand d'Eaux — `SHOP_PEN_26`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_26` |
| **Propriétaire** | Marchand d'Eaux `NPC_PEN_26` |
| **Zone / Sous-lieu** | Penwether, Citernes Antiques |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_024` | Eau Bénite de Lioda | T2 | 135 | LOCAL | 4 | semaine | — |
| `CSM_POT_017` | Rosée de Cristal Undine | T3 | 440 | LOCAL | 2 | 10j | Niv. 20+ |
| `CSM_POT_036` | Sirop de Braise Éteinte | T2 | 160 | LOCAL | 4 | semaine | — |
| `CSM_POT_034` | Écaille de Givre | T2 | 120 | LOCAL | 4 | semaine | — |
| `MAT_HRB_003` | Prêle des Vapeurs | T1 | 0 | LOCAL | 10 | jour | — |
| `MAT_HRB_019` | Herbe des Canaux | T2 | 0 | LOCAL | 8 | jour | — |
| `CSM_NOU_008` | Ragoût des Geysers | T2 | 165 | IMPORT | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Eaux des citernes (20%), Sels rares (15%)
- **Refuse** : Équipement de combat, armes

## 4. Ancrage zonal
Le Marchand d'Eaux puise dans les Citernes Antiques, où l'eau se charge de résidus de mémoire numérique.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_26` · `!buy CSM_POT_024` · `!sell CSM_POT_024`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
