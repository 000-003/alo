# 🌑 Alchimiste Morn, Poisons & Vision Nocturne — `SHOP_DUS_03`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_03` |
| **Propriétaire** | Alchimiste Morn `NPC_DUS_03` |
| **Zone / Sous-lieu** | Duskarn, Échoppe de la Rivière d'Encre |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_019` | Antidote | T1 | 30 | LOCAL | 10 | jour | — |
| `CSM_POT_020` | Antidote Universel | T2 | 120 | LOCAL | 5 | semaine | — |
| `CSM_POT_021` | Onguent Rafraîchissant | T1 | 35 | LOCAL | 8 | jour | — |
| `CSM_POT_022` | Baume Thermique | T1 | 35 | LOCAL | 8 | jour | — |
| `CSM_POT_023` | Bouchons de Cire de Duskarn | T2 | 130 | LOCAL | 6 | semaine | — |
| `CSM_POT_025` | Purge Complète | T3 | 480 | LOCAL | 2 | semaine | Niv.20+ |
| `CSM_POT_027` | Huile de Force du Berserker | T2 | 110 | LOCAL | 6 | semaine | — |
| `CSM_POT_029` | Tonique de Vitalité | T2 | 110 | LOCAL | 6 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Poisons T1-T2 (25%), encres (25%), ingrédients d'alchimie
- **Refuse** : Armes, armures, objets de lumière sacrée, équipement lourd

## 4. Ancrage zonal
Morn distille ses potions sur la berge de la Rivière d'Encre, dont l'eau infuse ses mélanges. La production locale bénéficie d'une réduction de 20%.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_03 · !buy CSM_POT_019 · !sell CSM_POT_019`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
