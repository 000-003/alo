# 🌳 Lyra Nuage-Danse — `SHOP_ALN_05`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_05` |
| **Propriétaire** | Lyra Nuage-Danse `NPC_ALN_05` (`T_NPC.shop_ref` → `SHOP_ALN_05`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_002` | Bandeau de Plume-Vive | T1 | 270 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_003` | Cercle de Feuillage Tressé | T2 | 760 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_004` | Capuche du Guetteur des Cimes | T2 | 1120 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_005` | Heaume-Brise | T3 | 5320 | IMPORT Swilvane | ∞ | hebdo | — |
| `WPN_ARC_004` | Arc du Vent Sylphe | T2 | 1290 | IMPORT Swilvane | ∞ | hebdo | — |
| `CSM_POT_028` | Élixir de Célérité Sylphe | T2 | 195 | IMPORT Swilvane | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : plumes et cristaux de brise (`MAT_DRP_012`, `MAT_GEM_003`) à 25 %.
- **Refuse** : plaque lourde (incompatible vol), objets liés, T5.

## 4. Ancrage zonal
Vendeuse canon d'équipement de vol, Sylph installée sur le Marché Circulaire : elle propose l'entrée de gamme aérienne des 9 races (généraliste T1-T2, LOCAL) et **importe de Swilvane** les pièces de vol supérieures qui réduisent le coût mana de l'envol. Cliente du contrôleur aérien Wrenna `NPC_ALN_11`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_05` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_05` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
