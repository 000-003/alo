# 🌳 Colporteuse Anse — `SHOP_ALN_86`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_86` |
| **Propriétaire** | Colporteuse Anse `NPC_ALN_86` (`T_NPC.shop_ref` → `SHOP_ALN_86`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Débarcadère aérien (itinérante) |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_002` | Potion de Soin Légère | T1 | 65 | IMPORT Archipel | ∞ | hebdo | — |
| `CSM_POT_012` | Potion de Mana | T2 | 180 | IMPORT Granzam | ∞ | hebdo | — |
| `CSM_POT_020` | Antidote Universel | T2 | 210 | IMPORT Lioda | ∞ | hebdo | — |
| `CSM_POT_009` | Potion de Régénération | T2 | 250 | IMPORT Archipel | ∞ | hebdo | — |
| `CSM_POT_022` | Baume Thermique | T1 | 65 | IMPORT Gattan | ∞ | hebdo | — |
| `CSM_POT_021` | Onguent Rafraîchissant | T1 | 65 | IMPORT Undine | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : petit bric-à-brac à 25 %.
- **Refuse** : objets liés, T5, armes lourdes.

## 4. Ancrage zonal
Colportage inter-cités : croise Ferro `NPC_GAT_07` de Gattan (trêve commerciale tendue, lien honoré). Son bât mêle les consommables courants de toutes les cités, revendus avec la marge du voyageur (IMPORT +40 %). Enregistrée au Débarcadère de Halvard `NPC_ALN_10`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_86` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_86` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
