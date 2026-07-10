# 🐾 Cartes de la Tour — `SHOP_FRE_51`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_51` |
| **Propriétaire** | Cartographe Tour `NPC_FRE_51` (`T_NPC.shop_ref` → `SHOP_FRE_51`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Tour d'Observation |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_PAR_005` | Parchemin de Sortie de Donjon | T2 | 95 | LOCAL | 15 | 3j | — |
| `CSM_PAR_013` | Parchemin d'Éclair | T2 | 120 | LOCAL | 12 | 3j | — |
| `CSM_PAR_014` | Parchemin de Bouclier | T1 | 60 | LOCAL | 15 | 3j | — |
| `ARM_TET_076` | Monocle du Chercheur de Trésors | T2 | 1 200 | LOCAL | 6 | semaine | — |
| `ARM_TET_046` | Casque de Prospecteur | T1 | 170 | LOCAL | 12 | semaine | — |
| `CSM_POT_030` | Encre de Sagesse | T2 | 110 | LOCAL | 10 | semaine | — |

## 3. Politique de rachat
- **Rachète** : cartes annotées et longues-vues (`ARM_TET_076`, `CSM_PAR_005`) à 25 %.
- **Refuse** : viande, faune vivante, objets liés.

## 4. Ancrage zonal
Theron `NPC_FRE_51`, du haut de la Tour d'Observation, vend les cartes des territoires qu'il scrute et le Monocle du Chercheur de Trésors. Une de ses cartes porte « une zone blanche » qu'aucun relevé ne comble — la même que l'Éclaireur Vétéran `NPC_FRE_55` prétend avoir brûlée.

> `[BESOIN_ITEM]` : **Cartes régionales détaillées (`MAP_*`)** — cartographie de zone non fichée — fonds de la boutique de Theron

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_51` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_51` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
