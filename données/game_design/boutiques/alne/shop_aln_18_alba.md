# 🌳 Cartographe Alba — `SHOP_ALN_18`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_18` |
| **Propriétaire** | Cartographe Alba `NPC_ALN_18` (`T_NPC.shop_ref` → `SHOP_ALN_18`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_090` | Béret du Cartographe | T2 | 920 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_002` | Parchemin de Retour à la Cité Natale | T1 | 50 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_003` | Parchemin de Rappel | T2 | 105 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_005` | Parchemin de Sortie de Donjon | T2 | 95 | LOCAL | ∞ | hebdo | — |
| `CSM_CRI_005` | Cristal de Téléportation | T3 | 1200 | LOCAL | 3 | hebdo | — |
| `CSM_CRI_007` | Cristal de Fuite | T3 | 1120 | LOCAL | 3 | hebdo | — |

## 3. Politique de rachat
- **Rachète** : parchemins usagés à 25 %.
- **Refuse** : objets liés, T5, armes.

## 4. Ancrage zonal
Vend la **carte du monde ALO complet** (signature d'Alne) et tout le nécessaire du voyageur : parchemins de retour et cristaux de déplacement. Une région manque volontairement sur chacune de ses cartes — indice du fil « le Dôme qui change ». Travaille avec Maître Halvard `NPC_ALN_10` du Débarcadère.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_18` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_18` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
