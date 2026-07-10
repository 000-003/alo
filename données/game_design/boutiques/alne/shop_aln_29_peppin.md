# 🌳 Marchand Peppin — `SHOP_ALN_29`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_29` |
| **Propriétaire** | Marchand Peppin `NPC_ALN_29` (`T_NPC.shop_ref` → `SHOP_ALN_29`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_013` | Pomme des Vergers d'Alne | T1 | 10 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_015` | Galette d'Avoine | T1 | 20 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_017` | Soupe Claire | T1 | 15 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_020` | Brochette Épicée | T2 | 75 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_024` | Champignons Sautés | T2 | 80 | LOCAL | ∞ | hebdo | — |
| `CSM_NOU_026` | Tarte aux Baies Chantantes | T2 | 80 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : épices et denrées à 25 %.
- **Refuse** : objets liés, T5, armes.

## 4. Ancrage zonal
Épices et **Poivre d'Alne** (signature) : il fournit Rosza `NPC_GAT_45` à Gattan, et sa route d'épice cache un autre trafic (fil « marché sous le marché »). Vend les produits frais des vergers flottants d'Alne, LOCAL et bon marché.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_29` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_29` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
