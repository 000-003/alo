# 🍃 Tenebris le Vagabond — `SHOP_SWI_03`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_03` |
| **Propriétaire** | Tenebris le Vagabond `NPC_SWI_03` (`T_NPC.shop_ref` → `SHOP_SWI_03`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Taverne de l'Érable |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_017` | Éclat de Miroir | T3 | 700 | IMPORT Penwether | ∞ | hebdo | — |
| `MAT_DRP_004` | Pierre d'Âme | T2 | 210 | IMPORT Penwether | ∞ | hebdo | — |
| `MAT_GEM_008` | Opale des Ruines | T3 | 420 | IMPORT Penwether | ∞ | hebdo | — |
| `CSM_CRI_008` | Cristal d'Enregistrement | T2 | 200 | LOCAL | ∞ | hebdo | — |
| `MAT_DRP_003` | Noyau Fissuré | T2 | 210 | IMPORT Penwether | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : reliques et éclats de ruines (`MAT_DRP_*`) à 25 %.
- **Refuse** : objets liés, marchandises neuves ordinaires.

## 4. Ancrage zonal
Vagabond spriggan qui rapporte des reliques des Ruines Grises de Penwether jusqu'au comptoir de Bram `NPC_SWI_50`. Ses « boîtes de reliques » (gacha) sont sa signature mais aucun contenant scellé n'est encore fiché.

> `[BESOIN_ITEM]` : Boîtes de reliques / clés de gacha (`GACHA_*`) — catégorie non fichée (accroche du roster : « une clé qui n'ouvre rien d'ici »).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_03` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_03` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
