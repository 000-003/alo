# ⚒️ Entrepôt de Somb — `SHOP_VOU_49`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_49` |
| **Propriétaire** | Receleur de la Lave Somb `NPC_VOU_49` (`T_NPC.shop_ref` → `SHOP_VOU_49`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Marché de la Lave |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=60 ou nuit |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_018` | Adamantium | T4 | 2 400 | LOCAL | 2 | mois | AFF>=60 |
| `MAT_MIN_017` | Pierre Philosophale | T4 | 2 000 | LOCAL | 1 | mois | AFF>=60 |
| `WPN_EP1_009` | Sabre de Magma de Gattan | T4 | 12 800 | LOCAL | 1 | mois | AFF>=80 |
| `MAT_MIN_024` | Minerai de Lumière | T4 | 2 800 | IMPORT Granzam | 1 | mois | AFF>=60 |
| `WPN_MAS_006` | Maillet de MK | T4 | 25 900 | IMPORT Brokkheim | 1 | mois | AFF>=80 |

## 3. Politique de rachat
- **Rachète** : minerai et objets volés des mines et de la forge, sans question (30 %).
- **Refuse** : rien — c'est un receleur.

## 4. Ancrage zonal
Somb `NPC_VOU_49` écoule ce qui disparaît des inventaires de l'Intendant Grakk `NPC_VOU_35` : adamantium, pierre philosophale, et le **Sabre de Magma de Gattan** volé (T4, `AFF>=80`, D64). Les armes de guerre volées passent par lui avant de rejoindre le Trafiquant Syl `NPC_VOU_93`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_49` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_49` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
