# 🔥 Rikko « Boum-Boum » — `SHOP_GAT_62`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_62` |
| **Propriétaire** | Rikko « Boum-Boum » `NPC_GAT_62` (`T_NPC.shop_ref` → `SHOP_GAT_62`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Atelier de l’Artificier |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_006` | Soufre Cristallisé | T2 | 50 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_006` | Cœur de Feu | T3 | 190 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_006` | Fleur de Soufre | T2 | 85 | IMPORT Brokkheim | ∞ | hebdo | — |
| `MAT_DRP_001` | Glande Bouillante Pure | T2 | 50 | LOCAL | ∞ | hebdo | — |
| `MAT_MIN_016` | Minerai de Foudre | T3 | 335 | IMPORT Duskarn | ∞ | hebdo | — |
| `CSM_PAR_002` | Parchemin de Retour à la Cité Natale | T1 | 40 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : réactifs instables à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Artificier licencié : soufre, réactifs volatils et un parchemin de retour ; les obus finis restent un [BESOIN_ITEM] partagé avec Voulg.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_62` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_62` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
