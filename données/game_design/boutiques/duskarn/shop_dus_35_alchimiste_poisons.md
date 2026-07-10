# 🌑 Alchimiste des Poisons, Poisons Rares & Solvants — `SHOP_DUS_35`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_35` |
| **Propriétaire** | Alchimiste des Poisons `NPC_DUS_35` |
| **Zone / Sous-lieu** | Duskarn, Échoppe de la Rivière d'Encre |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_026` | Larme de Dissipation | T3 | 440 | LOCAL | 2 | semaine | Niv.20+ |
| `CSM_POT_030` | Encre de Sagesse | T2 | 110 | LOCAL | 8 | semaine | — |
| `CSM_POT_036` | Sirop de Braise Éteinte | T2 | 160 | LOCAL | 6 | semaine | — |
| `CSM_POT_037` | Potion d'Oxygène de Coralia | T3 | 770 | IMPORT Freelia | 2 | semaine | Niv.20+ |
| `CSM_POT_017` | Rosée de Cristal Undine | T3 | 770 | IMPORT Lioda | 2 | semaine | Niv.20+ |
| `CSM_POT_039` | Antidote de Fond | T2 | 280 | IMPORT Freelia | 3 | semaine | — |
| `CSM_POT_040` | Sérum Neutralisant | T3 | 840 | IMPORT Freelia | 2 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Poisons T1-T2 (25%), ingrédients alchimiques, encres
- **Refuse** : Armes, armures, objets de lumière sacrée

## 4. Ancrage zonal
À l'Échoppe de la Rivière d'Encre, l'Alchimiste distille des larmes de dissipation et des sérums neutralisants.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_35 · !poison_lore`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
