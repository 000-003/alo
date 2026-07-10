# 🌑 Marchand de Vol, Potions de Vol & Buffs — `SHOP_DUS_19`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_19` |
| **Propriétaire** | Marchand de Vol `NPC_DUS_19` |
| **Zone / Sous-lieu** | Duskarn, Route Aérienne (Îlot) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_028` | Élixir de Célérité Sylphe | T2 | 110 | LOCAL | 8 | jour | — |
| `CSM_POT_032` | Vif-Argent des Cimes | T3 | 400 | LOCAL | 3 | semaine | Niv.20+ |
| `CSM_POT_031` | Potion de Force Majeure | T3 | 400 | LOCAL | 3 | semaine | Niv.20+ |
| `CSM_PAR_014` | Parchemin de Bouclier | T1 | 60 | LOCAL | 6 | jour | — |
| `CSM_PAR_015` | Parchemin de Bourrasque | T2 | 120 | LOCAL | 4 | semaine | — |
| `CSM_POT_033` | Résine Ignifuge | T2 | 120 | LOCAL | 6 | semaine | — |
| `CSM_POT_034` | Écaille de Givre | T2 | 120 | LOCAL | 6 | semaine | — |
| `CSM_POT_035` | Potion Anti-Surchauffe | T3 | 840 | IMPORT Gattan | 2 | semaine | Niv.20+ |

## 3. Politique de rachat
- **Rachète** : Potions de buff (25%), ingrédients alchimiques
- **Refuse** : Armes, armures, équipement lourd, objets de lumière sacrée

## 4. Ancrage zonal
Le Marchand de Vol vend ses fioles sur l'Îlot de la Route Aérienne, observant les ombres qui patrouillent sans monture.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_19 · !buy CSM_POT_031 · !buff_route`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
