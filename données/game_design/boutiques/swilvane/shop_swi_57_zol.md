# 🍃 Brocanteur Zol — `SHOP_SWI_57`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_57` |
| **Propriétaire** | Brocanteur Zol `NPC_SWI_57` (`T_NPC.shop_ref` → `SHOP_SWI_57`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Taverne de l'Érable |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_002` | Cendre Luisante | T1 | 40 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_011` | Corne de Chasseur | T2 | 120 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_014` | Larme de Puca | T2 | 210 | IMPORT Lioda | ∞ | hebdo | — |
| `MAT_DRP_010` | Perle des Abysses | T3 | 700 | IMPORT Undine | ∞ | hebdo | — |
| `MAT_CUI_008` | Lueur Résiduelle | T2 | 25 | LOCAL | ∞ | hebdo | — |
| `MAT_CUI_005` | Rouage Précieux | T3 | 40 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : vieilleries et curiosités (`MAT_DRP_*`/`MAT_CUI_*`) à 25 %.
- **Refuse** : objets liés neufs, T5.

## 4. Ancrage zonal
Antiquaire près de la Taverne : objets d'occasion et curiosités des neuf races. Un livre de son étal appartient à la Bibliothèque des Courants (lien avec le scribe Olm `NPC_SWI_73`).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_57` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_57` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
