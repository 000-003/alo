# 🌊 L'Écume des Jours — `SHOP_UND_40`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_40` |
| **Propriétaire** | Tavernier de l'Écume `NPC_UND_40` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel |
| **Type** | TAVERNE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_018` | Biscuit de Marin | T1 | 20 | LOCAL | 40 | jour | — |
| `CSM_NOU_004` | Miel Chantant de Lioda | T2 | 95 | LOCAL | 20 | 7j | — |
| `CSM_NOU_028` | Festin du Chef | T3 | 400 | LOCAL | 5 | 14j | — |
| `CSM_NOU_031` | Bisque Royale | T3 | 415 | LOCAL | 3 | 14j | — |
| `CSM_NOU_035` | Grand Cru d'Yggdrasil | T3 | 720 | LOCAL | 2 | 30j | Niv. 25+ |
| `CSM_PAR_002` | Parchemin de Retour à la Cité Natale | T1 | 50 | LOCAL | 10 | jour | — |
| `CSM_PAR_012` | Parchemin de Soin | T1 | 55 | LOCAL | 10 | jour | — |
| `CSM_PAR_014` | Parchemin de Bouclier | T1 | 60 | LOCAL | 10 | jour | — |

## 3. Politique de rachat
- **Rachète** : consommations sur place (nourriture 25%, boissons 20%)
- **Refuse** : tout achat pour emporter (sauf parchemins)

## 4. Ancrage zonal
Estaminet des quais. Pas de torches — éclairage par coquillages luminescents.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_40` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
