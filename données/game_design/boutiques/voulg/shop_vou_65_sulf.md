# ⚒️ Alchimie de la Forge de Sulf — `SHOP_VOU_65`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_65` |
| **Propriétaire** | Alchimiste de la Forge Sulf `NPC_VOU_65` (`T_NPC.shop_ref` → `SHOP_VOU_65`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Forge Magmatique |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_013` | Minerai de Cuivre Raffiné | T2 | 70 | LOCAL | 12 | semaine | — |
| `CSM_POT_034` | Écaille de Givre | T2 | 120 | LOCAL | 8 | semaine | — |
| `CSM_POT_040` | Sérum Neutralisant | T3 | 480 | LOCAL | 5 | semaine | — |
| `CSM_POT_025` | Purge Complète | T3 | 480 | LOCAL | 5 | semaine | — |
| `MAT_HRB_012` | Herbe de Mithril | T3 | 10 | IMPORT Brokkheim | 6 | semaine | — |
| `MAT_MIN_019` | Minerai de Glace Éternelle | T3 | 560 | IMPORT Granzam | 4 | semaine | — |
| `CSM_POT_020` | Antidote Universel | T2 | 120 | LOCAL | 15 | 3j | — |

## 3. Politique de rachat
- **Rachète** : composants alchimiques et alliages (`MAT_MIN_013`, `MAT_HRB_012`) à 25 %.
- **Refuse** : armes, nourriture, junk.

## 4. Ancrage zonal
Sulf `NPC_VOU_65` compose les alliages rares de la forge. Sa dernière formule, murmure-t-il, « donne des armes intelligentes » — la même piste que le Contrôleur Valk `NPC_VOU_69` voit dans les lames qui « réussissent tous les tests, trop bien ».

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_65` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_65` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
