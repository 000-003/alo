# 🔨 Marchand de Métaux Rares, Lingots exotiques — `SHOP_BRO_37`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_37` |
| **Propriétaire** | Marchand de Métaux Rares `NPC_BRO_37` |
| **Zone / Sous-lieu** | Brokkheim, Halle du Marteau |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_011` | Cristal Violet | T3 | 400 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_MIN_012` | Pierre de Lune | T3 | 500 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_DRP_016` | Braise de Forge | T3 | 500 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_DRP_017` | Éclat de Miroir | T3 | 500 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_HRB_007` | Plante des Ombres | T2 | 4 | LOCAL | 5 | semaine | — |
| `CSM_NOU_003` | Brochette de Chasse Sauvage | T2 | 115 | LOCAL | 5 | semaine | — |
| `CSM_NOU_001` | Ragoût de Lave | T2 | 120 | LOCAL | 5 | semaine | — |
| `CSM_NOU_007` | Pain de Roche de Granzam | T2 | 110 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Métaux rares (30%), lingots (25%)
- **Refuse** : Armes, armures, consommables, gemmes

## 4. Ancrage zonal
Seul à proposer des mineraux exotiques. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_37` · `!buy MAT_MIN_011` · `!sell MAT_MIN_011`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
