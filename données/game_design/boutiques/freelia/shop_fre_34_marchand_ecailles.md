# 🐾 Écaillerie du Marché — `SHOP_FRE_34`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_34` |
| **Propriétaire** | Marchand d'Écailles `NPC_FRE_34` (`T_NPC.shop_ref` → `SHOP_FRE_34`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_019` | Écaille de Dragonnet | T4 | 65 | LOCAL | 4 | semaine | Niv. 30+ |
| `MAT_DRP_006` | Cœur de Feu | T3 | 400 | LOCAL | 6 | semaine | — |
| `MAT_HRB_012` | Herbe de Mithril | T3 | 5 | LOCAL | 20 | 4j | — |
| `CSM_POT_034` | Écaille de Givre | T2 | 210 | IMPORT Jötunheimr | 8 | semaine | — |
| `MAT_DRP_007` | Écaille de Léviathan | T4 | 2 800 | IMPORT Archipel | 2 | 10j | Niv. 30+ |
| `MAT_DRP_016` | Braise de Forge | T3 | 700 | IMPORT Gattan | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : écailles de dragonnet et de wyrm (`MAT_CUI_019`, `MAT_DRP_006`) à 25 %.
- **Refuse** : viande, cosmétique, objets liés.

## 4. Ancrage zonal
Le Marchand d'Écailles `NPC_FRE_34` vend les écailles rares des grands reptiles. Une de ses écailles « brûle » au toucher — un Cœur de Feu local, à ne pas confondre avec l'Écaille de Léviathan qu'il fait venir de l'Archipel (+40 %) ni l'Écaille de Givre de Jötunheimr, dont personne ne sait comment elle arrive à Freelia.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_34` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_34` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
