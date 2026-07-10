# 🔨 Marchand de Charbon, Combustible de forge — `SHOP_BRO_52`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_52` |
| **Propriétaire** | Marchand de Charbon `NPC_BRO_52` |
| **Zone / Sous-lieu** | Brokkheim, Terrils |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_004` | Minerai d'Argent | T2 | 80 | LOCAL | 5 | semaine | — |
| `MAT_CUI_003` | Glande Bouillante | T2 | 35 | LOCAL | 5 | semaine | — |
| `MAT_CUI_004` | Carapace Émaillée | T2 | 28 | LOCAL | 5 | semaine | — |
| `MAT_CUI_006` | Plume Cendrée | T1 | 8 | LOCAL | 10 | jour | — |
| `MAT_CUI_007` | Queue Annelée | T1 | 11 | LOCAL | 10 | jour | — |
| `MAT_WOD_008` | Érable de Lave — `MAT_WOD_008` | T3 | 200 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_WOD_009` | Bois d'Yggdrasil — `MAT_WOD_009` | T3 | 350 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_WOD_010` | Palissandre d'Ombre — `MAT_WOD_010` | T3 | 280 | LOCAL | 2 | semaine | Niv. 20+ |

## 3. Politique de rachat
- **Rachète** : Charbon usagé (10%), cendres (15%)
- **Refuse** : Armes, armures, gemmes, consommables alimentaires

## 4. Ancrage zonal
Approvisionne les forges en combustible. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_52` · `!buy MAT_MIN_004` · `!sell MAT_MIN_004`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
