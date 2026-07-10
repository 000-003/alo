# ⚒️ Artificerie de Bôm — `SHOP_VOU_63`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_63` |
| **Propriétaire** | Artificier des Forges Bôm `NPC_VOU_63` (`T_NPC.shop_ref` → `SHOP_VOU_63`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Forge Magmatique |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_033` | Résine Ignifuge | T2 | 120 | LOCAL | 12 | semaine | — |
| `CSM_POT_036` | Sirop de Braise Éteinte | T2 | 160 | LOCAL | 10 | semaine | — |
| `MAT_DRP_003` | Noyau Fissuré | T2 | 120 | LOCAL | 10 | 5j | — |
| `MAT_DRP_005` | Essence de Vide | T3 | 400 | LOCAL | 4 | 10j | Niv. 30+ |
| `CSM_POT_022` | Baume Thermique | T1 | 35 | LOCAL | 30 | 2j | — |
| `MAT_HRB_024` | Herbe de Résine | T2 | 5 | LOCAL | 20 | 3j | — |

## 3. Politique de rachat
- **Rachète** : résidus explosifs, soufre et résines (`MAT_DRP_003`, `CSM_POT_033`) à 25 %.
- **Refuse** : armes tranchantes, gemmes, objets liés.

## 4. Ancrage zonal
Bôm `NPC_VOU_63`, seul artificier de Voulg, fabrique les **obus de siège** (signature) à partir de soufre et de résine ignifuge, à prix LOCAL. Un de ses explosifs « ne consume rien » — le noyau fissuré et l'essence de vide qu'il manipule viennent, dit-il, « du fond des mines » de Malakor `NPC_VOU_03`.

> `[BESOIN_ITEM]` : **Obus, grenades et charges de siège (`EXP_*`)** — catégorie « explosifs » non fichée — signature mondiale de Voulg (« obus de Bôm »)

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_63` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_63` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
