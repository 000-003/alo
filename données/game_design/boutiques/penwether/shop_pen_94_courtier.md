# 🕯️ Courtier des Vestiges — `SHOP_PEN_94`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_94` |
| **Propriétaire** | Courtier des Vestiges `NPC_PEN_94` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_ARC_006` | Arc Spectral de Penwether | T3 | 3 760 | LOCAL | 1 | 15j | Niv. 25+ |
| `WPN_BAG_005` | Sceptre de Coralia | T3 | 3 680 | LOCAL | 1 | 15j | Niv. 25+ |
| `WPN_BAG_006` | Bâton de Chef d'Orchestre | T3 | 3 840 | LOCAL | 1 | 15j | Niv. 25+ |
| `ARM_TET_005` | Heaume-Brise | T3 | 3 040 | LOCAL | 1 | 10j | Niv. 20+ |
| `ARM_TET_012` | Heaume de Basalte | T2 | 880 | LOCAL | 3 | semaine | — |
| `ARM_TET_058` | Bandeau du Marteleur | T2 | 1 080 | LOCAL | 3 | semaine | — |
| `CSM_NOU_009` | Fricassée de la Nécropole | T2 | 95 | LOCAL | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Artefacts des ruines (25%), Pièces de collection (30%)
- **Refuse** : Équipement commun, consommables bas de gamme

## 4. Ancrage zonal
Le Courtier des Vestiges est un négociant neutre qui traite avec toutes les factions.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_94` · `!buy WPN_ARC_006` · `!sell WPN_ARC_006`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
