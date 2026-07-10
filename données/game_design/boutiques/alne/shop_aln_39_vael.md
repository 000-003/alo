# 🌳 Runiste Vael — `SHOP_ALN_39`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_39` |
| **Propriétaire** | Runiste Vael `NPC_ALN_39` (`T_NPC.shop_ref` → `SHOP_ALN_39`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Quartier des Forges |
| **Type** | BOUTIQUE |
| **Accès** | AFF>=20 |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_016` | Braise de Forge | T3 | 700 | IMPORT Gattan | ∞ | hebdo | — |
| `MAT_MIN_015` | Minerai de Mage | T3 | 630 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_GEM_009` | Gemme d'Ombre | T3 | 365 | IMPORT Duskarn | ∞ | hebdo | — |
| `MAT_MIN_011` | Cristal Violet | T3 | 560 | IMPORT Duskarn | ∞ | hebdo | — |
| `MAT_MIN_016` | Minerai de Foudre | T3 | 770 | IMPORT Granzam | ∞ | hebdo | — |
| `MAT_GEM_004` | Perle d'Undine | T3 | 365 | IMPORT Archipel | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : réactifs runiques (`MAT_MIN_*`, `MAT_GEM_*`) à 25 %.
- **Refuse** : objets liés, T5, armes.

## 4. Ancrage zonal
Graveur de runes neutre : grave une rune interdite sur commande spéciale (fil « neutralité fragile »). Vend les réactifs de gravure — minerais magiques et gemmes importés (BESOIN d'Alne, +40 %). Sertit avec les gemmes de Vireth `NPC_ALN_34`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_39` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_39` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
