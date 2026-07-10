# 🌳 Receleuse Morne — `SHOP_ALN_55`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_55` |
| **Propriétaire** | Receleuse Morne `NPC_ALN_55` (`T_NPC.shop_ref` → `SHOP_ALN_55`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Ruelle sombre du Dôme |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=60 ou quête |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_DAG_005` | Lame Furtive du Zéphyr | T3 | 6020 | IMPORT Swilvane | 1 | mensuel | AFF>=60 |
| `WPN_DAG_006` | Kriss de la Nécropole | T3 | 6300 | IMPORT Penwether | 1 | mensuel | AFF>=60 |
| `ARM_TET_042` | Loup de l'Ombre Dansante | T3 | 8120 | IMPORT Duskarn | 1 | mensuel | AFF>=60 |
| `WPN_ARC_006` | Arc Spectral de Penwether | T3 | 6580 | IMPORT Penwether | 1 | mensuel | AFF>=60 |

## 3. Politique de rachat
- **Rachète** : biens « tombés » (hors lié) à 25 %.
- **Refuse** : objets liés, T5.

## 4. Ancrage zonal
Recel de la Ruelle du Dôme : écoule ce qui « tombe » via Snyk `NPC_GAT_80` de Gattan (lien inter-cités honoré). **Armes et coiffes T3 de contrebande**, sans provenance. Cliente de Rask `NPC_ALN_57` pour le transport.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_55` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_55` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
