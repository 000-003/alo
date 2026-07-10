# 🌳 Kaelen Cœur-de-Fer — `SHOP_ALN_02`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_02` |
| **Propriétaire** | Kaelen Cœur-de-Fer `NPC_ALN_02` (`T_NPC.shop_ref` → `SHOP_ALN_02`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Quartier des Forges |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_MAS_003` | Marteau de Forge Leprechaun | T2 | 1470 | IMPORT Brokkheim | ∞ | hebdo | — |
| `WPN_BOU_003` | Écu de Mithril | T2 | 1400 | IMPORT Brokkheim | ∞ | hebdo | — |
| `ARM_TET_057` | Casque à Visière Rabattable | T2 | 1540 | IMPORT Brokkheim | ∞ | hebdo | — |
| `WPN_EP1_006` | Épée d'Acier de Brokkheim | T3 | 6720 | IMPORT Brokkheim | ∞ | hebdo | — |
| `WPN_EP2_004` | Grande Lame de Mithril | T3 | 8680 | IMPORT Brokkheim | ∞ | hebdo | — |
| `WPN_BOU_006` | Aegis de Mithril | T4 | 25200 | IMPORT Brokkheim | 1 | mensuel | AFF>=80 |

## 3. Politique de rachat
- **Rachète** : lingots, minerais et écus brisés (`MAT_MIN_*`) à 25 %.
- **Refuse** : objets liés à l'âme, T5, contrefaçons (fierté d'artisan).

## 4. Ancrage zonal
Forgeron ultime du monde (canon), Leprechaun établi au cœur neutre d'Alne : il **importe et affine** le meilleur de la filière forge de Brokkheim plutôt que d'écouler la piétaille. Répare les légendaires sans perte de durabilité ; méprise les armes volées de Kael `NPC_ALN_07`. Rachète le minerai de Bomil `NPC_ALN_93`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_02` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_02` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
