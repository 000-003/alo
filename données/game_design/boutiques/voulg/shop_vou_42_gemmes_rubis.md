# ⚒️ Gemmes de Feu de Rubis — `SHOP_VOU_42`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_42` |
| **Propriétaire** | Marchande de Gemmes de Feu Rubis `NPC_VOU_42` (`T_NPC.shop_ref` → `SHOP_VOU_42`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Marché de la Lave |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_GEM_005` | Rubis de Feu | T3 | 190 | LOCAL | 6 | 7j | — |
| `MAT_GEM_002` | Gemme d'Obsidienne | T3 | 175 | LOCAL | 8 | 7j | — |
| `MAT_DRP_018` | Gemme de Sang | T3 | 400 | LOCAL | 4 | 10j | Niv. 25+ |
| `MAT_MIN_011` | Cristal Violet | T3 | 320 | LOCAL | 5 | 10j | — |
| `MAT_GEM_007` | Diamant de Mithril | T4 | 1 680 | IMPORT Brokkheim | 1 | mois | AFF>=60 |
| `MAT_MIN_004` | Minerai d'Argent | T2 | 65 | LOCAL | 12 | semaine | — |

## 3. Politique de rachat
- **Rachète** : gemmes et cristaux de feu bruts (`MAT_GEM_002/005`, `MAT_DRP_018`) à 25 %.
- **Refuse** : armes, armures, denrées, objets liés.

## 4. Ancrage zonal
Rubis `NPC_VOU_42` vend les gemmes brutes tirées du cratère et des mines — rubis de feu et gemmes d'obsidienne en LOCAL. Une **gemme de sang** de son étal « regarde » celui qui la porte ; elle refuse de dire qui la lui a cédée, mais Somb le Receleur `NPC_VOU_49` en a écoulé de semblables.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_42` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_42` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
