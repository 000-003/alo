# 🍃 Marchand Torvin — `SHOP_SWI_93`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_93` |
| **Propriétaire** | Marchand Torvin `NPC_SWI_93` (`T_NPC.shop_ref` → `SHOP_SWI_93`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Place du Marché |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_GEM_001` | Gemme de Granit | T2 | 125 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_GEM_002` | Gemme d'Obsidienne | T3 | 310 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_GEM_005` | Rubis de Feu | T3 | 335 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_GEM_007` | Diamant de Mithril | T4 | 1680 | IMPORT Brokkheim | ∞ | hebdo | — |
| `MAT_MIN_009` | Granit de Granzam | T3 | 350 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_MIN_008` | Obsidienne de Gattan | T3 | 420 | IMPORT Gattan | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : gemmes et pierres brutes (`MAT_GEM_*`/`MAT_MIN_*`) à 25 %.
- **Refuse** : objets liés, armes.

## 4. Ancrage zonal
Marchand gnome, gemmes de Granzam (+40 %, lien Ilka `NPC_GAT_33`) : il **fournit la bijoutière Belle `NPC_SWI_24`** en pierres précieuses brutes que Swilvane ne mine pas.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_93` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_93` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
