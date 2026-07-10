# ⚒️ Réseau de Syl — `SHOP_VOU_93`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_93` |
| **Propriétaire** | Trafiquant d'Armes Syl `NPC_VOU_93` (`T_NPC.shop_ref` → `SHOP_VOU_93`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Marché de la Lave |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=80 ou quête |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_EP2_007` | Titanite de Granzam | T4 | 15 200 | LOCAL | 1 | mois | AFF>=80 |
| `WPN_HAC_008` | Hache Titanesque de Granzam | T4 | 15 200 | LOCAL | 1 | mois | AFF>=80 |
| `WPN_LAN_007` | Lance Titanesque de Mithrandur | T4 | 25 200 | IMPORT Granzam | 1 | mois | AFF>=80 |
| `WPN_LAN_008` | Pertuisane de l'Artisan-Maître | T4 | 24 500 | IMPORT Brokkheim | 1 | mois | AFF>=80 |
| `WPN_JET_004` | Étoiles de Ragnar | T4 | 12 000 | LOCAL | 2 | mois | AFF>=80 |

## 3. Politique de rachat
- **Rachète** : armes de guerre de haute facture, sans provenance (30 %).
- **Refuse** : junk, denrées, objets de faible valeur.

## 4. Ancrage zonal
Syl `NPC_VOU_93` fait sortir les armes de guerre T4 de Voulg vers Alne, en réseau avec Kael `NPC_ALN_07` (D64). Titanite, haches titanesques et étoiles de Ragnar volées passent la Porte de la Fournaise sans que le Portier Grim `NPC_VOU_70` ne les voie — un maillon du fil du Traître de la Porte.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_93` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_93` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
