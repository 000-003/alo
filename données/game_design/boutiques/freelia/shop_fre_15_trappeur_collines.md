# 🐾 Pelleterie des Collines — `SHOP_FRE_15`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_15` |
| **Propriétaire** | Trappeur Collines `NPC_FRE_15` (`T_NPC.shop_ref` → `SHOP_FRE_15`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Collines de l'Ouest (`HUNT_002`) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_014` | Cuir de Loup | T2 | 20 | LOCAL | 50 | 2j | — |
| `MAT_CUI_016` | Peau de Serpent | T2 | 20 | LOCAL | 40 | 3j | — |
| `MAT_CUI_007` | Queue Annelée | T1 | 10 | LOCAL | 50 | 2j | — |
| `MAT_CUI_010` | Griffe Fouisseuse | T1 | 10 | LOCAL | 40 | 3j | — |
| `MAT_CUI_002` | Carapace Éclatée | T1 | 10 | LOCAL | 50 | 2j | — |
| `MAT_CUI_017` | Griffe d'Ours | T3 | 35 | LOCAL | 8 | semaine | Niv. 25+ |
| `MAT_HRB_014` | Herbe des Neiges | T3 | 5 | LOCAL | 20 | 4j | — |

## 3. Politique de rachat
- **Rachète** : peaux et fourrures de worgs et de bêtes des Collines (`MAT_CUI_002/007/010/014/016`) à 25 %.
- **Refuse** : objets manufacturés, gemmes, denrées.

## 4. Ancrage zonal
Le Trappeur `NPC_FRE_15` écorche sur la frontière Sylph/Puca. Une de ses fourrures « n'est d'aucun mob connu » — récoltée là où la Gardienne Collines `NPC_FRE_13` est payée à ne pas regarder, sur le sentier qui alimente aussi le Marché aux Os.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_15` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_15` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
