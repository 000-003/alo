# 🎭 Métronomes & Accords — `SHOP_LIO_66`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_66` |
| **Propriétaire** | Marchand de Métronomes `NPC_LIO_66` |
| **Zone / Sous-lieu** | Lioda, Prairies Chantantes |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_013` | Croc de Salamander | T2 | 120 | LOCAL | 10 | semaine | — |
| `MAT_DRP_014` | Larme de Puca | T2 | 120 | LOCAL | 10 | semaine | — |
| `MAT_DRP_015` | Épine Imp | T2 | 120 | LOCAL | 10 | semaine | — |
| `MAT_DRP_016` | Braise de Forge | T3 | 400 | LOCAL | 6 | mois | Niv. 20+ |
| `MAT_DRP_017` | Éclat de Miroir | T3 | 400 | LOCAL | 6 | mois | Niv. 20+ |
| `MAT_DRP_018` | Gemme de Sang | T3 | 400 | LOCAL | 6 | mois | Niv. 20+ |
| `CSM_POT_002` | Potion de Soin Légère | T1 | 65 | IMPORT | 10 | semaine | — |
| `CSM_POT_035` | Potion Anti-Surchauffe | T3 | 840 | IMPORT | 6 | semaine | Protection surchauffe |

## 3. Politique de rachat
- **Rachète** : Accessoires de rythme (25%), instruments légers (20%)
- **Refuse** : Armes lourdes, armures

## 4. Ancrage zonal
Le Marchand de Métronomes vend des lucioles-métronomes aux Prairies Chantantes. Ses matériaux LOCAUX (−20%) sont récoltés dans les Prairies. Les potions importées subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_66` · `!buy MAT_DRP_013` · `!metronome`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
