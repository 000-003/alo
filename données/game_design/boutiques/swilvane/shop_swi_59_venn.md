# 🍃 Négociant Venn — `SHOP_SWI_59`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_59` |
| **Propriétaire** | Négociant Venn `NPC_SWI_59` (`T_NPC.shop_ref` → `SHOP_SWI_59`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Débarcadère (itinérant) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_001` | Minerai de Fer | T1 | 5 | IMPORT Brokkheim | ∞ | hebdo | — |
| `MAT_MIN_002` | Cuivre Brut | T1 | 5 | IMPORT Brokkheim | ∞ | hebdo | — |
| `MAT_MIN_004` | Minerai d'Argent | T2 | 110 | IMPORT Brokkheim | ∞ | hebdo | — |
| `MAT_MIN_013` | Minerai de Cuivre Raffiné | T2 | 125 | IMPORT Brokkheim | ∞ | hebdo | — |
| `MAT_MIN_023` | Scorie de Mithril | T3 | 840 | IMPORT Brokkheim | ∞ | hebdo | — |
| `MAT_MIN_014` | Minerai d'Étain Fin | T3 | 490 | IMPORT Brokkheim | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : minerai et métal (`MAT_MIN_*`) à 25 %.
- **Refuse** : objets liés, armes.

## 4. Ancrage zonal
Marchand itinérant Alne↔Swilvane : il comble le BESOIN premier de la cité du vent — le **minerai et le métal de Brokkheim** (+40 %), que Swilvane ne produit pas. Croise Anse `NPC_ALN_86` sur la route et livre Brokkr `NPC_SWI_05`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_59` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_59` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
