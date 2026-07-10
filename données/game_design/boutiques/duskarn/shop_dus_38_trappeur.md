# 🌑 Trappeur des Cavernes, Peaux & Trophées — `SHOP_DUS_38`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_38` |
| **Propriétaire** | Trappeur de Rats `NPC_DUS_38` |
| **Zone / Sous-lieu** | Duskarn, Canyon des Ombres |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_002` | Carapace Éclatée | T1 | 10 | LOCAL | 15 | jour | — |
| `MAT_CUI_003` | Glande Bouillante | T2 | 30 | LOCAL | 8 | semaine | — |
| `MAT_CUI_004` | Carapace Émaillée | T2 | 20 | LOCAL | 10 | semaine | — |
| `MAT_CUI_005` | Rouage Précieux | T3 | 40 | LOCAL | 4 | semaine | — |
| `MAT_CUI_009` | Éclat Bas-Relief | T3 | 50 | LOCAL | 3 | semaine | — |
| `MAT_DRP_003` | Noyau Fissuré | T2 | 120 | LOCAL | 5 | semaine | — |
| `MAT_DRP_012` | Plume de Sylphe | T2 | 120 | LOCAL | 4 | semaine | — |
| `MAT_DRP_013` | Croc de Salamander | T2 | 120 | LOCAL | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Peaux, dents, trophées de chasse (25%)
- **Refuse** : Armes, armures, équipement, objets de lumière sacrée

## 4. Ancrage zonal
Le Trappeur chasse les rats d'obsidienne et salamanders dans le Canyon des Ombres.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_38 · !trap_lore`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
