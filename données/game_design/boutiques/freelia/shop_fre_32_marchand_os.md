# 🐾 Ossuaire du Marché — `SHOP_FRE_32`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_32` |
| **Propriétaire** | Marchand Os `NPC_FRE_32` (`T_NPC.shop_ref` → `SHOP_FRE_32`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_020` | Os d'Ancien | T4 | 80 | LOCAL | 3 | 10j | Niv. 25+ |
| `MAT_DRP_003` | Noyau Fissuré | T2 | 120 | LOCAL | 10 | 5j | — |
| `MAT_DRP_005` | Essence de Vide | T3 | 400 | LOCAL | 4 | 10j | Niv. 30+ |
| `MAT_HRB_021` | Fleur de Grenat | T3 | 5 | LOCAL | 15 | 4j | — |
| `MAT_HRB_023` | Fleur du Crépuscule | T3 | 5 | LOCAL | 15 | 4j | — |
| `MAT_DRP_015` | Épine Imp | T2 | 210 | IMPORT Duskarn | 8 | semaine | — |

## 3. Politique de rachat
- **Rachète** : os, défenses et noyaux de bêtes (`MAT_CUI_020`, `MAT_DRP_003/005`) à 25 %.
- **Refuse** : viande fraîche, cosmétique, objets liés.

## 4. Ancrage zonal
Le Marchand Os `NPC_FRE_32` vend défenses et ossements taillés. Un os de son étal « porte des runes » qu'il n'a pas gravées — le même alphabet que l'Épine Imp qu'il importe de Duskarn (+40 %), et que la Vestale des Bêtes `NPC_FRE_83` reconnaît sans vouloir le traduire.

> `[BESOIN_ITEM]` : **Os gravés / totems runiques (`BONE_*`)** — artisanat d'os runique non fiché — spécialité du Marchand Os

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_32` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_32` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
