# 🐾 Reliquaire de la Colline — `SHOP_FRE_27`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_27` |
| **Propriétaire** | Marchand de Souvenirs `NPC_FRE_27` (`T_NPC.shop_ref` → `SHOP_FRE_27`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Colline aux Souvenirs |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_CRI_008` | Cristal d'Enregistrement | T2 | 200 | LOCAL | 12 | semaine | — |
| `CSM_CRI_009` | Pierre de Rappel | T2 | 200 | LOCAL | 12 | semaine | — |
| `CSM_PAR_003` | Parchemin de Rappel | T2 | 105 | LOCAL | 15 | 3j | — |
| `CSM_PAR_009` | Parchemin de Déliage Mineur | T2 | 135 | LOCAL | 12 | 3j | — |
| `CSM_PAR_010` | Parchemin de Purification | T2 | 140 | LOCAL | 12 | 3j | — |
| `MAT_HRB_015` | Fleur de l'Âme | T3 | 5 | LOCAL | 10 | 5j | — |

## 3. Politique de rachat
- **Rachète** : reliques et cristaux-mémoire des familiers défunts (`CSM_CRI_008/009`, `MAT_HRB_015`) à 25 %.
- **Refuse** : viande crue, armes de guerre, objets encombrants.

## 4. Ancrage zonal
Le Marchand de Souvenirs `NPC_FRE_27` vend les effets des familiers morts — cristaux d'enregistrement gravés de leur dernier souvenir. Un collier de son étal « vibre » quand on l'approche de la Colline : l'Archiviste des Âmes `NPC_FRE_63` dit que la Colline « retient » ce que la Fleur de l'Âme ne rend plus.

> `[BESOIN_ITEM]` : **Reliques de familier nommées (`RELIC_*`)** — souvenirs individualisés non fichés — matérialisés en cristaux-mémoire génériques

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_27` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_27` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
