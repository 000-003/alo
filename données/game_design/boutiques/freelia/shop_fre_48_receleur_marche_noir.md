# 🐾 Arrière-Boutique du Receleur — `SHOP_FRE_48`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_48` |
| **Propriétaire** | Receleur Marché Noir `NPC_FRE_48` (`T_NPC.shop_ref` → `SHOP_FRE_48`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs (caché) |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=60 ou nuit |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_ARC_009` | Arc du Roi Béhémoth | T4 | 12 800 | LOCAL | 1 | mois | AFF>=80 |
| `WPN_JET_004` | Étoiles de Ragnar | T4 | 12 000 | LOCAL | 1 | mois | AFF>=80 |
| `MAT_DRP_008` | Fragment d'Obsidienne | T4 | 1 600 | LOCAL | 1 | mois | AFF>=60 |
| `CSM_CRI_007` | Cristal de Fuite | T3 | 1 960 | IMPORT Duskarn | 4 | semaine | AFF>=40 |

## 3. Politique de rachat
- **Rachète** : objets et prises volés, sans provenance (30 %).
- **Refuse** : rien — c'est un receleur.

## 4. Ancrage zonal
Le Receleur `NPC_FRE_48` écoule ce qui ne doit pas exister : l'**Arc du Roi Béhémoth** et les **Étoiles de Ragnar** (T4 volés aux boss, `AFF>=80`, D64) arrachés par le Braconnier `NPC_FRE_37` et Zephyr `NPC_FRE_02`. C'est lui, le débouché final du Marché aux Os.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_48` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_48` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
