# 🔥 Vosk — `SHOP_GAT_96`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_GAT_96` |
| **Propriétaire** | Vosk `NPC_GAT_96` (`T_NPC.shop_ref` → `SHOP_GAT_96`) |
| **Zone / Sous-lieu** | `ZONE_SAL_CAP_001` — Gattan, Atelier du Tailleur |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `BAG_004` | Sac de Marche Renforcé | T2 | 880 | LOCAL | ∞ | hebdo | — |
| `BAG_005` | Sac d'Explorateur | T2 | 880 | LOCAL | ∞ | hebdo | — |
| `HRN_002` | Harnais de Chasseur | T1 | 240 | LOCAL | ∞ | hebdo | — |
| `BELT_003` | Ceinture d'Artisan | T1 | 240 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_073` | Bandeau du Fouilleur | T1 | 200 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_074` | Masque Fêlé d'Apprenti | T1 | 200 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : textiles usés à 25%.
- **Refuse** : objets liés à l'âme, T5, et l'équipement de vol Sylph (embargo de guerre Gattan).

## 4. Ancrage zonal
Tailleur : sacs, sangles et coiffes de tissu. Gattan manque de tissus légers ; Vosk assemble surtout du portage robuste.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_GAT_96` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_GAT_96` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
