# 🍃 Ailier Thal — `SHOP_SWI_63`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_63` |
| **Propriétaire** | Ailier Thal `NPC_SWI_63` (`T_NPC.shop_ref` → `SHOP_SWI_63`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Atelier Ailé |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_001` | Capuche de l'Initié Sylvestre | T1 | 145 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_002` | Bandeau de Plume-Vive | T1 | 270 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_003` | Cercle de Feuillage Tressé | T2 | 760 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_005` | Heaume-Brise | T3 | 3040 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_006` | Couronne de Sève Chantante | T3 | 4480 | LOCAL | ∞ | hebdo | — |
| `ARM_TET_007` | Diadème du Zéphyr Éternel | T4 | 12800 | LOCAL | ∞ | hebdo | AFF>=80 |

## 3. Politique de rachat
- **Rachète** : coiffes de vol usagées (`ARM_TET_*` Sylph) à 25 %.
- **Refuse** : plaque, heaumes lourds, objets liés.

## 4. Ancrage zonal
Artisan d'ailes de l'Atelier Ailé : il équipe la tête des voltigeurs, du bandeau d'initié au **Diadème du Zéphyr Éternel** (T4, `AFF>=80`) — la 2ᵉ et dernière pièce T4 légale de la ville. Sa vraie signature, les **ailes d'apparat cosmétiques**, n'est pas encore un objet fiché.

> `[BESOIN_ITEM]` : Ailes cosmétiques d'apparat (`WING_*`) — signature mondiale de Swilvane, catégorie non fichée.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_63` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_63` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
