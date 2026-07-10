# 🌊 Les Abysses & l'Épave — `SHOP_UND_37`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_UND_37` |
| **Propriétaire** | Plongeur d'Épaves `NPC_UND_37` (`T_NPC.shop_ref` → ce SHOP_ID) |
| **Zone / Sous-lieu** | Archipel, Quais de l'Archipel (profondeur) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_RAP_003` | Rapière de Marée | T2 | 760 | LOCAL | 2 | 14j | — |
| `WPN_RAP_006` | Rapière des Abysses | T3 | 3840 | LOCAL | 1 | 21j | — |
| `WPN_LAN_004` | Trident de Marée | T3 | 3600 | LOCAL | 1 | 21j | — |
| `WPN_HAC_006` | Hache d'Abordage Leprechaun | T3 | 3840 | LOCAL | 2 | 14j | — |
| `WPN_BOU_002` | Écu de Granit | T2 | 760 | LOCAL | 3 | 14j | — |
| `MAT_DRP_016` | Braise de Forge | T3 | 400 | LOCAL | 4 | 14j | — |

## 3. Politique de rachat
- **Rachète** : objets d'épaves T1-T3 (25%), armes aquatiques (25%)
- **Refuse** : nourriture, consommables alchimiques, minerais

## 4. Ancrage zonal
Rapière de Marée, Trident des Abysses, Hache d'Abordage — trouvailles uniques des épaves.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_UND_37` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
