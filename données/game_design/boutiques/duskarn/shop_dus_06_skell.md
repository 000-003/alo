# 🌑 Prêteur Sombre Skell, Banque & Prêts sur Gage — `SHOP_DUS_06`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_06` |
| **Propriétaire** | Prêteur Sombre Skell `NPC_DUS_06` |
| **Zone / Sous-lieu** | Duskarn, Bazar des Ombres |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_002` | Cendre Luisante | T1 | 40 | LOCAL | 8 | jour | — |
| `MAT_DRP_004` | Pierre d'Âme | T2 | 120 | LOCAL | 4 | semaine | — |
| `MAT_DRP_011` | Corne de Chasseur | T2 | 120 | LOCAL | 3 | semaine | — |
| `MAT_GEM_001` | Gemme de Granit | T2 | 70 | LOCAL | 5 | semaine | — |
| `MAT_GEM_003` | Gemme de Brise | T2 | 65 | LOCAL | 5 | semaine | — |
| `MAT_GEM_009` | Gemme d'Ombre | T3 | 210 | LOCAL | 2 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Objets de valeur en gage (50%), bijoux, artefacts liés
- **Refuse** : Consommables, armes banales, équipement courant

## 4. Ancrage zonal
Skell officie comme seul banquier de Duskarn, écoulant les saisies — gemmes, cendres et pierres d'âme.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_06 · !pret · !depot_ombre`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
