# 🍃 Brelane — `SHOP_SWI_20`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_20` |
| **Propriétaire** | Brelane `NPC_SWI_20` (`T_NPC.shop_ref` → `SHOP_SWI_20`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Place du Marché |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_019` | Coiffe d'Écume | T1 | 225 | IMPORT Undine | ∞ | hebdo | — |
| `ARM_TET_028` | Capuche à Oreilles de Chaton | T1 | 265 | IMPORT Freelia | ∞ | hebdo | — |
| `ARM_TET_037` | Voile du Crépuscule | T1 | 245 | IMPORT Duskarn | ∞ | hebdo | — |
| `ARM_TET_064` | Chapeau de Ménestrel | T1 | 230 | IMPORT Lioda | ∞ | hebdo | — |
| `ARM_TET_073` | Bandeau du Fouilleur | T1 | 240 | IMPORT Penwether | ∞ | hebdo | — |
| `ARM_TET_020` | Bandana du Pêcheur | T1 | 530 | IMPORT Undine | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : coiffes de tissu usagées (`ARM_TET_*` légères) à 25 %.
- **Refuse** : plaque et heaumes lourds (culture du vol), objets liés.

## 4. Ancrage zonal
Marchande de tissus des 9 races : elle importe les coiffes souples de chaque territoire pour les Sylphs qui refusent le métal lourd. Croise le colporteur Venn `NPC_SWI_59` pour ses arrivages inter-cités.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_20` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_20` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
