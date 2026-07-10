# 🐾 Appâts Exotiques — `SHOP_FRE_66`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_66` |
| **Propriétaire** | Fournisseur d'Appâts `NPC_FRE_66` (`T_NPC.shop_ref` → `SHOP_FRE_66`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_013` | Fleur d'Obsidienne | T3 | 5 | LOCAL | 20 | 4j | — |
| `MAT_HRB_001` | Lin Sylvestre | T1 | 5 | LOCAL | 40 | 2j | — |
| `CSM_POT_033` | Résine Ignifuge | T2 | 120 | LOCAL | 15 | 3j | — |
| `MAT_DRP_014` | Larme de Puca | T2 | 210 | IMPORT Lioda | 8 | semaine | — |
| `MAT_DRP_009` | Poudre d'Étoile | T4 | 1 600 | LOCAL | 2 | mois | Niv. 30+ |

## 3. Politique de rachat
- **Rachète** : composants d'appât rares (`MAT_HRB_013`, `CSM_POT_033`) à 25 %.
- **Refuse** : viande crue, armes, objets liés.

## 4. Ancrage zonal
Le Fournisseur d'Appâts `NPC_FRE_66` sert les dompteurs chevronnés en leurres exotiques — Fleur d'Obsidienne, Larme de Puca importée de Lioda (+40 %), résine liante. Un de ses appâts « sent le soufre » et n'attire, dit-il, « rien de ce monde ».

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_66` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_66` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
