# 🌳 Tailleur Ison — `SHOP_ALN_66`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_66` |
| **Propriétaire** | Tailleur Ison `NPC_ALN_66` (`T_NPC.shop_ref` → `SHOP_ALN_66`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_010` | Calotte de Cendre | T1 | 135 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_046` | Casque de Prospecteur | T1 | 170 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_055` | Lunettes d'Apprenti Forgeron | T1 | 120 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_073` | Bandeau du Fouilleur | T1 | 135 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_083` | Casque du Garde de Caravane | T2 | 960 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_056` | Calot de Suie de Forge | T1 | 225 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : tissus, cuirs et chutes à 25 %.
- **Refuse** : plaque lourde, objets liés, T5.

## 4. Ancrage zonal
Capes et tenues des 9 races (T1-T2) : coud une doublure secrète sur demande (fil « marché sous le marché »). Complète l'étal de Milla `NPC_ALN_27` en coiffes de cuir et de suie généralistes, LOCAL. Approvisionne le Concierge Lom `NPC_ALN_46`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_66` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_66` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
