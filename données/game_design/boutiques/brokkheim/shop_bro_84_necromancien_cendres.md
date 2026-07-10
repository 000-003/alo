# 🔨 Nécromancien des Cendres, Reliques funéraires — `SHOP_BRO_84`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_84` |
| **Propriétaire** | Nécromancien Cendres `NPC_BRO_84` |
| **Zone / Sous-lieu** | Brokkheim, Atelier Englouti (interdit) |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=50 ou quête `QST_BRO_CENDRES_ROI` |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_018` | Gemme de Sang | T3 | 500 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_HRB_015` | Fleur de l'Âme | T3 | 7 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_WOD_015` | Épicéa des Glaces — `MAT_WOD_015` | T3 | 320 | LOCAL | 2 | semaine | Niv. 20+ |
| `ARM_TET_002` | Bandeau de Plume-Vive | T1 | 340 | LOCAL | 10 | jour | — |
| `ARM_TET_003` | Cercle de Feuillage Tressé | T2 | 950 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Cendres de forge (20%), objets funéraires (25%)
- **Refuse** : Armes vivantes, équipement neuf, gemmes

## 4. Ancrage zonal
Ancien prêtre banni pour avoir tenté de ranimer les morts. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_84` · `!buy MAT_DRP_018` · `!sell MAT_DRP_018`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
