# ⚒️ Enchanteresse de la Forge — `SHOP_VOU_06`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_06` |
| **Propriétaire** | Fyra Étincelle `NPC_VOU_06` (`T_NPC.shop_ref` → `SHOP_VOU_06`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Forge Magmatique |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_006` | Cœur de Feu | T3 | 400 | LOCAL | 6 | 7j | — |
| `MAT_DRP_016` | Braise de Forge | T3 | 400 | LOCAL | 8 | 5j | — |
| `MAT_MIN_023` | Scorie de Mithril | T3 | 840 | IMPORT Brokkheim | 5 | semaine | — |
| `MAT_MIN_010` | Mithril Brut | T4 | 2 100 | IMPORT Brokkheim | 2 | 10j | Niv. 30+ |
| `CSM_POT_035` | Potion Anti-Surchauffe | T3 | 480 | LOCAL | 8 | semaine | — |
| `MAT_HRB_017` | Fleur des Forges | T2 | 5 | LOCAL | 20 | 3j | — |
| `MAT_DRP_009` | Poudre d'Étoile | T4 | 1 600 | LOCAL | 3 | 10j | Niv. 30+ |

## 3. Politique de rachat
- **Rachète** : composants d'enchantement de feu (`MAT_DRP_006/016`, `MAT_HRB_017`) à 25 %.
- **Refuse** : armes brutes, nourriture, junk.

## 4. Ancrage zonal
Fyra `NPC_VOU_06` (Leprechaun) tient sa science des alliages de Brokkheim (scorie et mithril, +40 %). Sa formule d'enchantement inclut un « minerai inconnu » qu'elle ne nomme jamais — le même que la forge d'Ignéal `NPC_VOU_09` consomme sans qu'aucun convoi ne l'ait livré.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_06` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_06` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
