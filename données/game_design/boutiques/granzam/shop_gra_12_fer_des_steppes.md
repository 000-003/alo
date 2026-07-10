# ⛏️ Fer des Steppes — `SHOP_GRA_12`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GRA_12` |
| **Propriétaire** | Marchand de Fer `NPC_GRA_12` |
| **Zone / Sous-lieu** | Granzam, Steppes de Granit (campement) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
|`MAT_MIN_002`|Cuivre Brut|T1|5|LOCAL (-20%)|25|jour|---|
|`MAT_MIN_003`|Étain des Collines|T1|0|LOCAL (-20%)|30|jour|---|
|`MAT_MIN_013`|Minerai de Cuivre Raffiné|T2|70|LOCAL (-20%)|15|jour|---|
|`MAT_DRP_011`|Corne de Chasseur|T2|120|LOCAL (-20%)|8|semaine|---|
|`MAT_DRP_012`|Plume de Sylphe|T2|120|LOCAL (-20%)|6|semaine|---|
|`MAT_HRB_005`|Herbe des Steppes|T1|5|IMPORT (+40%)|10|semaine|---|
|`CSM_NOU_007`|Pain de Roche de Granzam|T2|90|LOCAL (-20%)|25|jour|---|

## 3. Politique de rachat

## 4. Ancrage zonal

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GRA_12` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
