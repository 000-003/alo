# 🕯️ Marchand de Voiles — `SHOP_PEN_52`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_52` |
| **Propriétaire** | Marchand de Voiles `NPC_PEN_52` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_064` | Chapeau de Ménestrel | T1 | 130 | LOCAL | 6 | jour | — |
| `ARM_TET_065` | Bandeau à Grelots | T1 | 240 | LOCAL | 6 | jour | — |
| `ARM_TET_066` | Tricorne du Troubadour | T2 | 800 | LOCAL | 4 | semaine | — |
| `ARM_TET_067` | Serre-tête Diapason | T2 | 1 160 | LOCAL | 4 | semaine | — |
| `ARM_TET_068` | Couronne d'Accords Mineurs | T3 | 3 520 | LOCAL | 3 | semaine | — |
| `ARM_TET_020` | Bandana du Pêcheur | T1 | 305 | LOCAL | 6 | jour | — |
| `MAT_CUI_009` | Éclat Bas-Relief | T3 | 85 | IMPORT | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Voiles d'occasion (20%), Tissus légers (15%)
- **Refuse** : Armes lourdes, armures

## 4. Ancrage zonal
Le Marchand de Voiles confectionne des voiles et des étoffes légères.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_52` · `!buy ARM_TET_064` · `!sell ARM_TET_064`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
