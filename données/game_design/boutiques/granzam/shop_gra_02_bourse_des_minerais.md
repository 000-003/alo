# ⛏️ Bourse des Minerais — `SHOP_GRA_02`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GRA_02` |
| **Propriétaire** | Négociante Marla `NPC_GRA_02` |
| **Zone / Sous-lieu** | Granzam, Grande Halle des Minerais |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
|`MAT_MIN_001`|Minerai de Fer|T1|5|LOCAL (-20%)|40|jour|---|
|`MAT_MIN_004`|Minerai d'Argent|T2|65|LOCAL (-20%)|15|jour|---|
|`MAT_GEM_001`|Gemme de Granit|T2|70|LOCAL (-20%)|12|jour|---|
|`MAT_GEM_002`|Gemme d'Obsidienne|T3|175|LOCAL (-20%)|8|semaine|Niv. 20+|
|`MAT_MIN_009`|Granit de Granzam|T3|200|LOCAL (-20%)|10|jour|---|
|`MAT_DRP_002`|Cendre Luisante|T1|40|LOCAL (-20%)|10|jour|---|
|`MAT_HRB_001`|Lin Sylvestre|T1|5|IMPORT (+40%)|8|semaine|---|
|`CSM_PAR_006`|Parchemin d'Identification|T1|30|LOCAL (-20%)|15|jour|---|

## 3. Politique de rachat

## 4. Ancrage zonal

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GRA_02` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
