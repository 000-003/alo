# 🌳 Kael le Renégat — `SHOP_ALN_07`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_07` |
| **Propriétaire** | Kael le Renégat `NPC_ALN_07` (`T_NPC.shop_ref` → `SHOP_ALN_07`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Ruelle sombre du Dôme |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=80 ou quête |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_EP1_009` | Sabre de Magma de Gattan | T4 | 22400 | IMPORT Gattan | 1 | mensuel | AFF>=80 |
| `WPN_EP2_002` | Flamberge de Voulg | T2 | 1960 | IMPORT Voulg | 2 | mensuel | AFF>=80 |
| `WPN_DAG_007` | Croc de Skreech | T4 | 22400 | IMPORT Duskarn | 1 | mensuel | AFF>=80 |
| `WPN_KAT_007` | Kusanagi d'Ombre | T4 | 23100 | IMPORT Duskarn | 1 | mensuel | AFF>=80 |
| `WPN_HAC_007` | Hache de Logi | T4 | 28000 | IMPORT Gattan | 1 | mensuel | AFF>=80 |
| `WPN_JET_004` | Étoiles de Ragnar | T4 | 21000 | IMPORT Freelia | 1 | mensuel | AFF>=80 |

## 3. Politique de rachat
- **Rachète** : armes volées (hors objets liés) à 25 %.
- **Refuse** : objets liés à l'âme, T5.

## 4. Ancrage zonal
Marchand noir canon (Salamander) : écoule les **armes militaires T4 volées** à la garde du Général Eugene — la seule filière d'armes de guerre d'Alne (D36 : ABSENT partout ailleurs). Armurier des factions qui veulent briser l'anti-PK (fil « neutralité fragile »). Fournit Morne `NPC_ALN_55` en surplus.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_07` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_07` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
