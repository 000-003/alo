# 🌳 Rôtisseur Grett — `SHOP_ALN_79`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_79` |
| **Propriétaire** | Rôtisseur Grett `NPC_ALN_79` (`T_NPC.shop_ref` → `SHOP_ALN_79`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_006` | Bouillon d'Ombre | T2 | 165 | IMPORT Duskarn | ∞ | hebdo | — |
| `CSM_NOU_008` | Ragoût des Geysers | T2 | 165 | IMPORT Brokkheim | ∞ | hebdo | — |
| `CSM_NOU_009` | Fricassée de la Nécropole | T2 | 170 | IMPORT Penwether | ∞ | hebdo | — |
| `CSM_NOU_023` | Poisson au Sel | T2 | 140 | IMPORT Archipel | ∞ | hebdo | — |
| `CSM_NOU_027` | Œufs de Chauve-Souris des Ombres | T2 | 80 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_033` | Curry Ardent | T3 | 700 | IMPORT Gattan | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : restes et abats à 25 %.
- **Refuse** : objets liés, T5, armes.

## 4. Ancrage zonal
Brochettes de rue (buffs mineurs) : recette « empruntée » à Danna `NPC_GAT_55` de Gattan (lien inter-cités honoré). Cuisine de rue épicée des 9 territoires, importée et rôtie sur place. Concurrent bon marché de l'Auberge.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_79` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_79` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
