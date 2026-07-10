# 🌳 Contrebandier Rask — `SHOP_ALN_57`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_57` |
| **Propriétaire** | Contrebandier Rask `NPC_ALN_57` (`T_NPC.shop_ref` → `SHOP_ALN_57`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Ruelle sombre du Dôme |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=60 ou quête |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_035` | Potion Anti-Surchauffe | T3 | 840 | IMPORT Gattan | 2 | hebdo | AFF>=60 |
| `CSM_POT_037` | Potion d'Oxygène de Coralia | T3 | 770 | IMPORT Archipel | 2 | hebdo | AFF>=60 |
| `CSM_POT_038` | Perle d'Air des Profondeurs | T4 | 2240 | IMPORT Archipel | 1 | hebdo | AFF>=60 |
| `CSM_POT_040` | Sérum Neutralisant | T3 | 840 | IMPORT Archipel | 2 | hebdo | AFF>=60 |
| `CSM_CRI_002` | Cristal de Soin Suprême | T4 | 6720 | IMPORT Archipel | 1 | mensuel | AFF>=60 |
| `CSM_CRI_010` | Cristal de Ralliement de Groupe | T4 | 6300 | IMPORT Swilvane | 1 | mensuel | AFF>=60 |

## 3. Politique de rachat
- **Rachète** : marchandise de contrebande (hors lié) à 25 %.
- **Refuse** : objets liés, T5.

## 4. Ancrage zonal
Contrebande inter-cités via les 9 routes : fait passer ce qu'aucune douane ne voit. Spécialisé dans les **consommables prohibés et anti-jauges** (Surchauffe, Apnée) que les cités raciales gardent pour elles. Écoule pour Morne `NPC_ALN_55`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_57` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_57` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
