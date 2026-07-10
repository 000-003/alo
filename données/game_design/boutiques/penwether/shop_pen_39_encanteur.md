# 🕯️ Encanteur des Vestiges — `SHOP_PEN_39`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_39` |
| **Propriétaire** | Encanteur des Vestiges `NPC_PEN_39` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_GEM_004` | Perle d'Undine | T3 | 210 | LOCAL | 3 | semaine | — |
| `MAT_GEM_003` | Gemme de Brise | T2 | 65 | LOCAL | 4 | semaine | — |
| `MAT_MIN_011` | Cristal Violet | T3 | 320 | LOCAL | 3 | semaine | — |
| `MAT_MIN_012` | Pierre de Lune | T3 | 400 | LOCAL | 3 | semaine | — |
| `CSM_CRI_004` | Cristal de Mana Suprême | T4 | 7 560 | IMPORT | 2 | 10j | Niv. 25+ |
| `CSM_CRI_002` | Cristal de Soin Suprême | T4 | 6 720 | IMPORT | 2 | 10j | Niv. 25+ |

## 3. Politique de rachat
- **Rachète** : Artefacts de valeur (25%), Gemmes rares (30%)
- **Refuse** : Objets communs, équipement standard

## 4. Ancrage zonal
L'Encanteur organise des enchères aux ruines.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_39` · `!buy MAT_GEM_004` · `!sell MAT_GEM_004`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
