# 🔥 Snyk — `SHOP_GAT_80`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_80` |
| **Propriétaire** | Snyk `NPC_GAT_80` (`T_NPC.shop_ref` → `SHOP_GAT_80`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Bas-Fonds |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=30 ou quête |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_009` | Poudre d'Étoile | T4 | 1960 | IMPORT Alne | 2-10 | hebdo | AFF>=80 |
| `MAT_DRP_019` | Essence de Yggdrasil | T4 | 1960 | IMPORT Alne | 2-10 | hebdo | AFF>=80 |
| `MAT_HRB_010` | Fleur de Savane | T2 | 85 | IMPORT Freelia | 2-10 | hebdo | — |
| `MAT_HRB_011` | Pétale de Rose Grise | T2 | 85 | IMPORT Penwether | 2-10 | hebdo | — |

## 3. Politique de rachat
- **Rachète** : objets sous le manteau à 25% (sans questions).
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan) · peut proposer des articles « ABSENT » de Gattan (sa raison d’être).

## 4. Ancrage zonal
Receleur : marchandises « tombées du chariot » et composants trop précieux pour les étals officiels ; son réseau couvre Alne et Freelia.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_80` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_80` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
