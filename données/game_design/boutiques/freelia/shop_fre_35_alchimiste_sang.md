# 🐾 Officine de Sang — `SHOP_FRE_35`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_35` |
| **Propriétaire** | Alchimiste Sang `NPC_FRE_35` (`T_NPC.shop_ref` → `SHOP_FRE_35`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_018` | Gemme de Sang | T3 | 400 | LOCAL | 4 | 10j | Niv. 25+ |
| `MAT_CUI_013` | Œil de Chauve-Souris | T1 | 10 | LOCAL | 30 | 3j | — |
| `CSM_POT_027` | Huile de Force du Berserker | T2 | 110 | LOCAL | 15 | 3j | — |
| `CSM_POT_031` | Potion de Force Majeure | T3 | 400 | LOCAL | 8 | semaine | — |
| `MAT_HRB_006` | Fleur de Soufre | T2 | 5 | LOCAL | 25 | 3j | — |
| `CSM_POT_020` | Antidote Universel | T2 | 120 | LOCAL | 20 | 3j | — |

## 3. Politique de rachat
- **Rachète** : sangs, glandes et yeux de monstre (`MAT_DRP_018`, `MAT_CUI_013`) à 25 %.
- **Refuse** : armes de guerre, cosmétique, objets liés.

## 4. Ancrage zonal
L'Alchimiste Sang `NPC_FRE_35` distille les fluides de bête en huiles de force et antidotes. Un de ses sangs « ne coagule pas » — il le garde scellé ; c'est la même Gemme de Sang que le Nécromancien des Bêtes `NPC_FRE_84` réclame pour ses résurrections interdites sur la Colline.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_35` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_35` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
