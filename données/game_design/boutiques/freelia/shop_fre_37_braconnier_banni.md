# 🐾 Terrier du Braconnier — `SHOP_FRE_37`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_37` |
| **Propriétaire** | Braconnier Banni `NPC_FRE_37` (`T_NPC.shop_ref` → `SHOP_FRE_37`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs (caché) |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=60 ou nuit |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_DAG_007` | Croc de Skreech | T4 | 12 800 | LOCAL | 1 | mois | AFF>=80 |
| `ARM_TET_034` | Masque du Prédateur Nocturne | T4 | 12 400 | LOCAL | 1 | mois | AFF>=80 |
| `MAT_DRP_019` | Essence de Yggdrasil | T4 | 1 600 | LOCAL | 1 | mois | AFF>=60 |
| `MAT_HRB_025` | Plante Primordiale | T4 | 10 | LOCAL | 2 | mois | AFF>=60 |

## 3. Politique de rachat
- **Rachète** : dépouilles d'espèces protégées et composants primordiaux, sans question (30 %).
- **Refuse** : rien de vendable — c'est un braconnier.

## 4. Ancrage zonal
Le Braconnier Banni `NPC_FRE_37` chasse ce qui est interdit. Il écoule le **Croc de Skreech** et le **Masque du Prédateur Nocturne** (T4 volés, `AFF>=80`, D64) arrachés aux boss, et garde vivant « un spécimen unique » que même Léo `NPC_FRE_01` croyait éteint. Ses prises remontent au Receleur `NPC_FRE_48`.

> `[BESOIN_ITEM]` : **Spécimens vivants d'espèces protégées (`BEAST_*`)** — trafic de faune vivante non fiché — cœur de métier du Braconnier

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_37` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_37` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
