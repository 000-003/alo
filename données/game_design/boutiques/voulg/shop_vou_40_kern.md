# ⚒️ Armes Lourdes de Kern — `SHOP_VOU_40`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_40` |
| **Propriétaire** | Marchand d'Armes Lourdes Kern `NPC_VOU_40` (`T_NPC.shop_ref` → `SHOP_VOU_40`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Marché de la Lave |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_EP2_001` | Espadon d'Entraînement | T1 | 290 | LOCAL | 10 | semaine | — |
| `WPN_EP2_005` | Flamberge du Cratère | T3 | 4 800 | LOCAL | 4 | 10j | Niv. 30+ |
| `WPN_HAC_004` | Hache du Cratère | T3 | 4 160 | LOCAL | 4 | 10j | Niv. 30+ |
| `WPN_MAS_002` | Masse de Granit | T2 | 1 540 | IMPORT Granzam | 6 | semaine | — |
| `WPN_LAN_003` | Hallebarde de Brokkheim | T2 | 1 400 | IMPORT Brokkheim | 5 | semaine | — |
| `WPN_EP2_008` | Colère de Logi | T4 | 16 000 | LOCAL | 1 | mois | AFF>=80 |
| `WPN_HAC_007` | Hache de Logi | T4 | 16 000 | LOCAL | 1 | mois | AFF>=80 |

## 3. Politique de rachat
- **Rachète** : armes lourdes Salamander (`WPN_EP2_*`, `WPN_HAC_*`) à 25 %.
- **Refuse** : armes légères de vol, cosmétique, objets liés.

## 4. Ancrage zonal
Kern `NPC_VOU_40` écoule le surplus militaire de la garnison — épées à deux mains et haches du Cratère en LOCAL. Ses deux pièces d'exception, la **Colère de Logi** et la **Hache de Logi** (T4, `AFF>=80`), portent le sceau de Gattan mais sont sorties de Voulg : le Contrôleur Qualité Valk `NPC_VOU_69` refuse d'en parler.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_40` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_40` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
