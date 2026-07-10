# 🍃 Agathe — `SHOP_SWI_25`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_25` |
| **Propriétaire** | Agathe `NPC_SWI_25` (`T_NPC.shop_ref` → `SHOP_SWI_25`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Place du Marché |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_013` | Pomme des Vergers d'Alne | T1 | 20 | IMPORT Alne | ∞ | hebdo | — |
| `CSM_NOU_004` | Miel Chantant de Lioda | T2 | 170 | IMPORT Lioda | ∞ | hebdo | — |
| `CSM_NOU_006` | Bouillon d'Ombre | T2 | 165 | IMPORT Duskarn | ∞ | hebdo | — |
| `CSM_NOU_007` | Pain de Roche de Granzam | T2 | 155 | IMPORT Granzam | ∞ | hebdo | — |
| `CSM_NOU_009` | Fricassée de la Nécropole | T2 | 170 | IMPORT Penwether | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : denrées exotiques scellées (`CSM_NOU_*`) à 25 %.
- **Refuse** : objets liés, viande crue.

## 4. Ancrage zonal
Marchande de mets exotiques des 9 races : tout ce que Swilvane ne cultive pas, elle l'importe (+40 %). Son réseau passe par Rosza `NPC_GAT_45` (lien Gattan→29). Un fruit inconnu de sa réserve reste à ficher.

> `[BESOIN_ITEM]` : Fruits frais exotiques des 9 races (agrumes, baies rares) — catégorie « fruit » non fichée au lot I-1.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_25` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_25` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
