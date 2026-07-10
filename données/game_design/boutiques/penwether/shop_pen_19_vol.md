# 🕯️ Marchand de Vol — `SHOP_PEN_19`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_19` |
| **Propriétaire** | Marchand de Vol `NPC_PEN_19` |
| **Zone / Sous-lieu** | Penwether, Route Aérienne PEN-ALN (îlot) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_JET_001` | Couteaux de Lancer | T1 | 250 | IMPORT | 4 | semaine | — |
| `WPN_JET_002` | Shuriken-Griffe | T2 | 1 190 | IMPORT | 3 | semaine | — |
| `WPN_ARC_001` | Arc Court en Bois | T1 | 280 | IMPORT | 4 | semaine | — |
| `CSM_PAR_005` | Parchemin de Sortie de Donjon | T2 | 95 | LOCAL | 5 | jour | — |
| `CSM_POT_037` | Potion d'Oxygène de Coralia | T3 | 770 | IMPORT | 2 | 10j | — |
| `CSM_NOU_002` | Truite Grillée du Zéphyr | T2 | 170 | IMPORT | 6 | jour | — |
| `CSM_NOU_001` | Ragoût de Lave | T2 | 170 | IMPORT | 6 | jour | — |

## 3. Politique de rachat
- **Rachète** : Plumes de vol (15%), Cristaux de téléportation (20%)
- **Refuse** : Armes lourdes, armures

## 4. Ancrage zonal
Le Marchand de Vol opère sur la Route Aérienne entre Penwether et Alne.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_19` · `!buy WPN_JET_001` · `!sell WPN_JET_001`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
