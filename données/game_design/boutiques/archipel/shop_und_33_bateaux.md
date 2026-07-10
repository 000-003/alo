# 🌊 Gondoles & Voiliers — `SHOP_UND_33`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_33` |
| **Propriétaire** | Loueur de Bateaux `NPC_UND_33` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_090` | Béret du Cartographe | T2 | 920 | LOCAL | 3 | 7j | — |
| `CSM_PAR_005` | Parchemin de Sortie de Donjon | T2 | 95 | LOCAL | 10 | jour | — |
| `MAT_WOD_004` | Bois de Frêne — MAT_WOD_004 | T2 | 20 | LOCAL | 15 | 7j | — |
| `MAT_WOD_007` | Bois de Charme — MAT_WOD_007 | T2 | 30 | LOCAL | 12 | 7j | — |
| `MAT_WOD_012` | Cœur de Chêne — MAT_WOD_012 | T3 | 120 | LOCAL | 6 | 7j | — |
| `MAT_WOD_001` | Bois d'If — MAT_WOD_001 | T1 | 5 | LOCAL | 20 | jour | — |
| `CSM_CRI_008` | Cristal d'Enregistrement | T2 | 200 | LOCAL | 8 | 7j | — |

## 3. Politique de rachat
- **Rachète** : matériel nautique usagé (20%), bois d'œuvre (25%)
- **Refuse** : armes, armures, potions, minerais, objets magiques

## 4. Ancrage zonal
Location de gondoles, voiliers, barques. Vente de bois de réparation et cristaux d'enregistrement.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_33` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
