# 🌳 Bomil l'Émigré — `SHOP_ALN_93`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_93` |
| **Propriétaire** | Bomil l'Émigré `NPC_ALN_93` (`T_NPC.shop_ref` → `SHOP_ALN_93`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Quartier des Forges |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_001` | Minerai de Fer | T1 | 5 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_MIN_004` | Minerai d'Argent | T2 | 110 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_MIN_009` | Granit de Granzam | T3 | 350 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_MIN_022` | Minerai de Terre Profonde | T2 | 100 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_GEM_010` | Gemme Primordiale | T4 | 2100 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_MIN_010` | Mithril Brut | T4 | 2100 | IMPORT Brokkheim | 1 | mensuel | AFF>=60 |

## 3. Politique de rachat
- **Rachète** : minerais et gemmes brutes (`MAT_MIN_*`, `MAT_GEM_*`) à 25 %.
- **Refuse** : objets liés, T5, armes.

## 4. Ancrage zonal
Émigré gnome de Granzam : **fournit les gemmes** et le minerai de la ville (lien Ilka `NPC_GAT_33`→Granzam honoré). Importe le minerai brut, le granit et jusqu'au mithril de Brokkheim (BESOIN d'Alne, +40 %). Vend à Kaelen `NPC_ALN_02` et à Vireth `NPC_ALN_34`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_93` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_93` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
