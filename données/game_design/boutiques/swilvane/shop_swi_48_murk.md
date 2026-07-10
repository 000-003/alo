# 🍃 Informateur Murk — `SHOP_SWI_48`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_48` |
| **Propriétaire** | Informateur Murk `NPC_SWI_48` (`T_NPC.shop_ref` → `SHOP_SWI_48`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Les Racines |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=60 |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_018` | Gemme de Sang | T3 | 700 | IMPORT contrebande | ∞ | hebdo | AFF>=60 |
| `CSM_POT_023` | Bouchons de Cire de Duskarn | T2 | 225 | IMPORT Duskarn | ∞ | hebdo | AFF>=60 |
| `CSM_PAR_010` | Parchemin de Purification | T2 | 140 | LOCAL | ∞ | hebdo | AFF>=60 |
| `MAT_DRP_005` | Essence de Vide | T3 | 700 | IMPORT contrebande | ∞ | hebdo | AFF>=60 |

## 3. Politique de rachat
- **Rachète** : objets compromettants et gemmes de sang à 25 %.
- **Refuse** : rien (marché noir).

## 4. Ancrage zonal
Vendeur de rumeurs des Racines : son vrai fonds de commerce, ce sont les secrets K2 des autres PNJ (réseau avec Fitch `NPC_GAT_89`, lien rumeurs→58) — une marchandise d'information encore non fichée.

> `[BESOIN_ITEM]` : Dossiers d'information / rumeurs K2 vendables (`INTEL_*`) — catégorie « objet d'information » non fichée.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_48` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_48` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
