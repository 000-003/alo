# 🌳 Boucher Halle — `SHOP_ALN_30`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_30` |
| **Propriétaire** | Boucher Halle `NPC_ALN_30` (`T_NPC.shop_ref` → `SHOP_ALN_30`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_002` | Truite Grillée du Zéphyr | T2 | 95 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_003` | Brochette de Chasse Sauvage | T2 | 90 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_021` | Tourte du Chasseur | T2 | 85 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_025` | Côtelette Fumée | T2 | 85 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_030` | Filet Mignon d'Alne | T3 | 385 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_032` | Rôti des Cimes | T3 | 400 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : viandes, cuirs et os (`MAT_CUI_*`, drops de bête) à 25 %.
- **Refuse** : objets liés, T5, armes.

## 4. Ancrage zonal
Boucherie inter-races : sert neuf régimes contradictoires sous un seul étal. **Achète les drops de viande** des chasseurs de tous les territoires (rachat R7) et vend les pièces nobles jusqu'au Filet Mignon d'Alne (signature LOCAL). Fournit le Chef Aubin `NPC_ALN_47`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_30` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_30` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
