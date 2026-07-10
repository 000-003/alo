# 🌑 Herboriste d'Encre, Plantes & Champignons d'Ombre — `SHOP_DUS_36`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_36` |
| **Propriétaire** | Herboriste d'Encre `NPC_DUS_36` |
| **Zone / Sous-lieu** | Duskarn, Échoppe de la Rivière d'Encre |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_006` | Fleur de Soufre | T2 | 5 | LOCAL | 15 | semaine | — |
| `MAT_HRB_008` | Fleur de Lune | T2 | 5 | LOCAL | 12 | semaine | — |
| `MAT_HRB_010` | Fleur de Savane | T2 | 5 | LOCAL | 15 | semaine | — |
| `MAT_HRB_012` | Herbe de Mithril | T3 | 5 | LOCAL | 6 | semaine | — |
| `MAT_HRB_013` | Fleur d'Obsidienne | T3 | 5 | LOCAL | 5 | semaine | — |
| `MAT_HRB_014` | Herbe des Neiges | T3 | 5 | LOCAL | 5 | semaine | — |
| `MAT_HRB_015` | Fleur de l'Âme | T3 | 5 | LOCAL | 4 | semaine | AFF>=65 |
| `MAT_HRB_002` | Fleur de Gravats | T1 | 5 | LOCAL | 8 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Plantes, champignons, mousses (25%)
- **Refuse** : Armes, armures, équipement, objets de lumière sacrée

## 4. Ancrage zonal
L'Herboriste cultive sur les berges de la Rivière d'Encre des plantes qui ne poussent nulle part ailleurs.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_36 · !herb_lore`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
