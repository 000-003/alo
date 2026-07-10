# 🕯️ Baigneur des Citernes — `SHOP_PEN_27`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_27` |
| **Propriétaire** | Baigneur des Citernes `NPC_PEN_27` |
| **Zone / Sous-lieu** | Penwether, Citernes Antiques |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_021` | Onguent Rafraîchissant | T1 | 35 | LOCAL | 6 | jour | — |
| `CSM_POT_033` | Résine Ignifuge | T2 | 120 | LOCAL | 4 | semaine | — |
| `CSM_POT_027` | Huile de Force du Berserker | T2 | 110 | LOCAL | 4 | semaine | — |
| `CSM_POT_029` | Tonique de Vitalité | T2 | 110 | LOCAL | 4 | semaine | — |
| `CSM_POT_023` | Bouchons de Cire de Duskarn | T2 | 130 | LOCAL | 4 | semaine | — |
| `CSM_NOU_027` | Œufs de Chauve-Souris des Ombres | T2 | 140 | IMPORT | 4 | semaine | — |
| `MAT_CUI_008` | Lueur Résiduelle | T2 | 25 | LOCAL | 6 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Huiles de bain (15%), Sels thermaux (15%)
- **Refuse** : Armes, équipement de donjon

## 4. Ancrage zonal
Le Baigneur tient des bains publics alimentés par les eaux des Citernes.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_27` · `!buy CSM_POT_021` · `!sell CSM_POT_021`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
