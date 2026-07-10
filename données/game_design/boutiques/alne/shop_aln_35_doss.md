# 🌳 Antiquaire Doss — `SHOP_ALN_35`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_35` |
| **Propriétaire** | Antiquaire Doss `NPC_ALN_35` (`T_NPC.shop_ref` → `SHOP_ALN_35`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_084` | Heaume du Mercenaire des Neuf Vents | T3 | 4320 | LOCAL | 2 | mensuel | AFF>=60 |
| `MAT_DRP_004` | Pierre d'Âme | T2 | 120 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_005` | Essence de Vide | T3 | 400 | LOCAL | ∞ | hebdo | — |
| `MAT_GEM_008` | Opale des Ruines | T3 | 240 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_017` | Éclat de Miroir | T3 | 400 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_018` | Gemme de Sang | T3 | 400 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : reliques et fragments (`MAT_DRP_*`) à 25 %.
- **Refuse** : objets liés, T5, contrefaçons modernes.

## 4. Ancrage zonal
Reliques « d'avant » la fondation : vend des objets datés d'une époque antérieure à l'existence d'ALO (fil méta, réservé orchestrateur — jamais confirmé). Fragments d'âme et éclats de miroir des ruines d'Alne, LOCAL. En lien avec le Doyen Aldemar `NPC_ALN_99`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_35` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_35` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
