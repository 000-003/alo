# 🐾 Étal du Gibier Exotique — `SHOP_FRE_69`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_69` |
| **Propriétaire** | Vendeur de Gibier `NPC_FRE_69` (`T_NPC.shop_ref` → `SHOP_FRE_69`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_006` | Bouillon d'Ombre | T2 | 165 | IMPORT Duskarn | 15 | semaine | — |
| `CSM_NOU_008` | Ragoût des Geysers | T2 | 165 | IMPORT Brokkheim | 15 | semaine | — |
| `CSM_NOU_009` | Fricassée de la Nécropole | T2 | 170 | IMPORT Penwether | 12 | semaine | — |
| `CSM_NOU_028` | Festin du Chef | T3 | 400 | LOCAL | 8 | semaine | — |
| `CSM_NOU_033` | Curry Ardent | T3 | 700 | IMPORT Gattan | 8 | semaine | — |
| `CSM_NOU_034` | Plateau du Gourmet | T3 | 385 | LOCAL | 8 | semaine | — |

## 3. Politique de rachat
- **Rachète** : gibier de buff et pièces de chasse rares (`CSM_NOU_034`) à 25 %.
- **Refuse** : minerai, cosmétique, objets liés.

## 4. Ancrage zonal
Le Vendeur de Gibier `NPC_FRE_69` propose la viande qui donne des forces — bouillons d'ombre, ragoûts des geysers, curry ardent importés des neuf territoires (+40 %). Une de ses viandes « vient de nulle part » : aucun chasseur ne la lui a vendue, et pourtant l'étal ne se vide jamais.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_69` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_69` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
