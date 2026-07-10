# ⛏️ Granit des Carrières — `SHOP_GRA_15`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GRA_15` |
| **Propriétaire** | Marchand de Granit `NPC_GRA_15` |
| **Zone / Sous-lieu** | Granzam, Carrières Brisées |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
|`MAT_MIN_014`|Minerai d'Étain Fin|T3|280|LOCAL (-20%)|10|jour|---|
|`MAT_MIN_015`|Minerai de Mage|T3|360|LOCAL (-20%)|6|semaine|Niv. 22+|
|`MAT_MIN_016`|Minerai de Foudre|T3|440|LOCAL (-20%)|4|semaine|Niv. 25+|
|`MAT_MIN_019`|Minerai de Glace Éternelle|T3|320|LOCAL (-20%)|3|semaine|Niv. 25+|
|`MAT_GEM_003`|Gemme de Brise|T2|65|LOCAL (-20%)|10|jour|---|
|`MAT_DRP_008`|Fragment d'Obsidienne|T4|1600|LOCAL (-20%)|2|mois|Niv. 35+|
|`MAT_HRB_002`|Fleur de Gravats|T1|5|IMPORT (+40%)|8|semaine|---|

## 3. Politique de rachat

## 4. Ancrage zonal

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GRA_15` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
