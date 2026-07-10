# 🐾 Illusions de Nox — `SHOP_FRE_05`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_05` |
| **Propriétaire** | Nox le Charmeur `NPC_FRE_05` (`T_NPC.shop_ref` → `SHOP_FRE_05`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Taverne Le Chat Botté |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_028` | Capuche à Oreilles de Chaton | T1 | 150 | LOCAL | 30 | semaine | — |
| `ARM_TET_030` | Masque du Chat de Gouttière | T2 | 840 | LOCAL | 12 | semaine | — |
| `ARM_TET_065` | Bandeau à Grelots | T1 | 240 | LOCAL | 25 | semaine | — |
| `ARM_TET_037` | Voile du Crépuscule | T1 | 245 | IMPORT Duskarn | 10 | semaine | — |
| `MAT_DRP_017` | Éclat de Miroir | T3 | 700 | IMPORT Penwether | 4 | 10j | Niv. 25+ |
| `CSM_PAR_006` | Parchemin d'Identification | T1 | 30 | LOCAL | 30 | 3j | — |

## 3. Politique de rachat
- **Rachète** : masques, voiles et cosmétiques de transmogrification (`ARM_TET` légers) à 25 %.
- **Refuse** : armes de guerre, minerai brut, objets liés.

## 4. Ancrage zonal
Nox `NPC_FRE_05` (Spriggan) drape les familiers d'illusions — oreilles de chaton, masques de gouttière, voiles crépusculaires importés de Duskarn (+40 %). Son Éclat de Miroir de Penwether déforme ce qu'on voit ; le Courtier Inter-Racial `NPC_FRE_94` lui sert de couverture pour ce que ses illusions cachent vraiment.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_05` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_05` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
