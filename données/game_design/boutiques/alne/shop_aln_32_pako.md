# 🌳 Éleveur Pako — `SHOP_ALN_32`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_32` |
| **Propriétaire** | Éleveur Pako `NPC_ALN_32` (`T_NPC.shop_ref` → `SHOP_ALN_32`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | ÉTAL |
| **Accès** | AFF>=20 |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_011` | Croc de Loup | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_013` | Œil de Chauve-Souris | T1 | 10 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_011` | Corne de Chasseur | T2 | 120 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_013` | Croc de Salamander | T2 | 120 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_007` | Queue Annelée | T1 | 10 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_010` | Griffe Fouisseuse | T1 | 10 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : parts de bêtes et appâts (`MAT_CUI_*`, `MAT_DRP_*`) à 25 %.
- **Refuse** : objets liés, T5, armes.

## 4. Ancrage zonal
Marchand de familiers exotiques : vend une créature sans fiche au bestiaire (fil méta « Premier Familier », écho de Freelia). En rayon, l'appât et le fourrage de dressage — parts de bêtes achetées aux chasseurs (rachat R7). Correspond avec la Dresseuse Fenna `NPC_ALN_71`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_32` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_32` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
