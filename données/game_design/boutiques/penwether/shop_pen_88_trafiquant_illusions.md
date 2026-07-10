# 🕯️ Trafiquant d'Illusions — `SHOP_PEN_88`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_88` |
| **Propriétaire** | Trafiquant d'Illusions `NPC_PEN_88` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades (cache) |
| **Type** | BLACK_MARKET |
| **Accès** | caché (sous les planches) |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_077` | Masque d'Illusion Mineure | T3 | 3 440 | LOCAL | 1 | 15j | Niv. 25+ |
| `WPN_BAG_007` | Diapason de Silence | T3 | 4 000 | LOCAL | 2 | 10j | Niv. 25+ |
| `WPN_BAG_004` | Baguette de Pénombre | T2 | 785 | LOCAL | 3 | semaine | — |
| `WPN_BAG_002` | Baguette de Source | T2 | 720 | LOCAL | 3 | semaine | — |
| `WPN_BAG_003` | Baguette de Refrain | T2 | 760 | LOCAL | 3 | semaine | — |
| `CSM_POT_026` | Larme de Dissipation | T3 | 770 | IMPORT | 2 | 10j | — |

## 3. Politique de rachat
- **Rachète** : Illusions volées (25%), Masques d'emprunt (20%)
- **Refuse** : Objets authentiques, équipement standard

## 4. Ancrage zonal
Le Trafiquant d'Illusions opère dans une cache sous le Marché des Sept Façades.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_88` · `!buy ARM_TET_077` · `!sell ARM_TET_077`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
