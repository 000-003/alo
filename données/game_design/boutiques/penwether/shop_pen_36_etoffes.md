# 🕯️ Marchand d'Étoffes — `SHOP_PEN_36`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_36` |
| **Propriétaire** | Marchand d'Étoffes `NPC_PEN_36` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_001` | Fourrure Grise | T1 | 10 | LOCAL | 15 | jour | — |
| `MAT_CUI_002` | Carapace Éclatée | T1 | 10 | LOCAL | 15 | jour | — |
| `MAT_CUI_006` | Plume Cendrée | T1 | 5 | LOCAL | 15 | jour | — |
| `MAT_CUI_007` | Queue Annelée | T1 | 10 | LOCAL | 12 | jour | — |
| `MAT_CUI_014` | Cuir de Loup | T2 | 20 | LOCAL | 8 | semaine | — |
| `MAT_CUI_016` | Peau de Serpent | T2 | 20 | LOCAL | 8 | semaine | — |
| `MAT_CUI_017` | Griffe d'Ours | T3 | 35 | LOCAL | 4 | semaine | — |
| `CSM_NOU_012` | Viande Séchée | T1 | 40 | IMPORT | 10 | jour | — |

## 3. Politique de rachat
- **Rachète** : Tissus d'occasion (20%), Fourrures (20%)
- **Refuse** : Armes, armures métalliques

## 4. Ancrage zonal
Le Marchand d'Étoffes tisse des vêtements à partir de matériaux récupérés dans les ruines.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_36` · `!buy MAT_CUI_001` · `!sell MAT_CUI_001`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
