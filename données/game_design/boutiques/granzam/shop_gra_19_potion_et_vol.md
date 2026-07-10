# ⛏️ Potion & Vol — `SHOP_GRA_19`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GRA_19` |
| **Propriétaire** | Marchand de Vol `NPC_GRA_19` |
| **Zone / Sous-lieu** | Granzam, Route Aérienne (îlot de commerce) |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
|`CSM_POT_001`|Potion de Soin Mineure|T1|20|LOCAL (-20%)|20|jour|---|
|`CSM_POT_002`|Potion de Soin Légère|T1|35|LOCAL (-20%)|15|jour|---|
|`CSM_POT_009`|Potion de Régénération|T2|145|LOCAL (-20%)|8|jour|---|
|`CSM_POT_021`|Onguent Rafraîchissant|T1|35|LOCAL (-20%)|10|jour|---|
|`CSM_PAR_011`|Parchemin de Boule de Feu|T1|55|LOCAL (-20%)|10|jour|---|
|`CSM_PAR_014`|Parchemin de Bouclier|T1|60|LOCAL (-20%)|12|jour|---|
|`MAT_HRB_022`|Herbe du Vent|T2|5|IMPORT (+40%)|6|semaine|---|
|`CSM_POT_028`|Élixir de Célérité Sylphe|T2|110|LOCAL (-20%)|5|semaine|Niv. 20+|

## 3. Politique de rachat

## 4. Ancrage zonal

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GRA_19` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
