# 🔨 Plongeur des Canaux, Objets récupérés — `SHOP_BRO_29`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_29` |
| **Propriétaire** | Plongeur des Canaux `NPC_BRO_29` |
| **Zone / Sous-lieu** | Brokkheim, Canaux de Refroidissement |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_046` | Casque de Prospecteur | T1 | 210 | LOCAL | 10 | jour | — |
| `ARM_TET_049` | Heaume de Granit Brut | T2 | 1500 | LOCAL | 5 | semaine | — |
| `MAT_DRP_001` | Glande Bouillante Pure | T2 | 150 | LOCAL | 5 | semaine | — |
| `MAT_DRP_002` | Cendre Luisante | T1 | 50 | LOCAL | 10 | jour | — |
| `WPN_JET_001` | Couteaux de Lancer | T1 | 180 | LOCAL | 10 | jour | — |
| `WPN_JET_002` | Shuriken-Griffe | T2 | 850 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Objets rouillés (15%), métaux récupérés (20%)
- **Refuse** : Consommables périssables, gemmes de valeur

## 4. Ancrage zonal
Récupère ce qui tombe dans les canaux. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_29` · `!buy ARM_TET_046` · `!sell ARM_TET_046`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
