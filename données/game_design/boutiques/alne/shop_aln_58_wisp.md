# 🌳 Informatrice Wisp — `SHOP_ALN_58`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_58` |
| **Propriétaire** | Informatrice Wisp `NPC_ALN_58` (`T_NPC.shop_ref` → `SHOP_ALN_58`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Ruelle sombre du Dôme |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=60 ou quête |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_009` | Poudre d'Étoile | T4 | 2800 | IMPORT Penwether | 1 | mensuel | AFF>=60 |
| `MAT_MIN_021` | Minerai d'Ombre | T4 | 3920 | IMPORT Duskarn | 1 | mensuel | AFF>=60 |
| `MAT_MIN_017` | Pierre Philosophale | T4 | 3500 | IMPORT Brokkheim | 1 | mensuel | AFF>=60 |
| `MAT_DRP_008` | Fragment d'Obsidienne | T4 | 2800 | IMPORT Gattan | 1 | mensuel | AFF>=60 |

## 3. Politique de rachat
- **Rachète** : matières rares (hors lié) à 25 %.
- **Refuse** : objets liés, T5.

## 4. Ancrage zonal
Vend des rumeurs (K2 d'ailleurs) : correspondante de Fitch `NPC_GAT_89` de Gattan — réseau inter-cités (lien honoré). Avec ses tuyaux, elle écoule les **matières rares de contrebande** (poudre d'étoile, minerai d'ombre) trop compromettantes pour un étal légal.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_58` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_58` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
