# ⚒️ Reliquaire d'Orla — `SHOP_VOU_28`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_28` |
| **Propriétaire** | Marchande de Reliques Orla `NPC_VOU_28` (`T_NPC.shop_ref` → `SHOP_VOU_28`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Arène de Cendres |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_CRI_008` | Cristal d'Enregistrement | T2 | 200 | LOCAL | 10 | semaine | — |
| `CSM_CRI_009` | Pierre de Rappel | T2 | 200 | LOCAL | 10 | semaine | — |
| `CSM_PAR_006` | Parchemin d'Identification | T1 | 30 | LOCAL | 20 | 3j | — |
| `MAT_DRP_004` | Pierre d'Âme | T2 | 120 | LOCAL | 6 | semaine | — |
| `MAT_DRP_017` | Éclat de Miroir | T3 | 400 | LOCAL | 4 | 10j | — |
| `CSM_PAR_010` | Parchemin de Purification | T2 | 140 | LOCAL | 12 | semaine | — |
| `MAT_GEM_008` | Opale des Ruines | T3 | 240 | LOCAL | 3 | 10j | Niv. 25+ |

## 3. Politique de rachat
- **Rachète** : reliques, pierres d'âme et éclats des morts de l'arène (`MAT_DRP_004/017`, `MAT_GEM_008`) à 25 %.
- **Refuse** : objets liés, armes neuves, denrées périssables.

## 4. Ancrage zonal
Orla `NPC_VOU_28` dépouille les défunts de l'arène et revend leurs effets. Une **pierre d'âme** de son étal « date d'avant » — avant Voulg, peut-être avant le serveur ; le Gardien des Cachots Drog `NPC_VOU_25` blêmit quand on la lui montre.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_28` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_28` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
