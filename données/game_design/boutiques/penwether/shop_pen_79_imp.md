# 🕯️ Marchand Imp — `SHOP_PEN_79`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_79` |
| **Propriétaire** | Marchand Imp `NPC_PEN_79` |
| **Zone / Sous-lieu** | Penwether, Faubourg des Masques |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_015` | Minerai de Mage | T3 | 630 | IMPORT | 3 | semaine | — |
| `MAT_MIN_016` | Minerai de Foudre | T3 | 770 | IMPORT | 3 | semaine | — |
| `MAT_MIN_019` | Minerai de Glace Éternelle | T3 | 560 | IMPORT | 3 | semaine | — |
| `MAT_MIN_020` | Minerai de Feu Infernal | T3 | 630 | IMPORT | 3 | semaine | — |
| `CSM_NOU_013` | Pomme des Vergers d'Alne | T1 | 22 | IMPORT | 10 | jour | — |
| `CSM_NOU_014` | Ration de Campagne | T1 | 77 | IMPORT | 8 | jour | — |
| `CSM_NOU_018` | Biscuit de Marin | T1 | 35 | IMPORT | 8 | jour | — |

## 3. Politique de rachat
- **Rachète** : Marchandises impériales (25%), Objets de Duskarn (25%)
- **Refuse** : Objets des ruines, antiquités locales

## 4. Ancrage zonal
Le Marchand Imp est un commerçant de Duskarn installé au Faubourg des Masques.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_79` · `!buy MAT_MIN_015` · `!sell MAT_MIN_015`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
