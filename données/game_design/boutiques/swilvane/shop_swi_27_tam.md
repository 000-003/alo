# 🍃 Tam — `SHOP_SWI_27`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_27` |
| **Propriétaire** | Tam `NPC_SWI_27` (`T_NPC.shop_ref` → `SHOP_SWI_27`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Place du Marché |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_CRI_009` | Pierre de Rappel | T2 | 200 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_001` | Parchemin de Retour à Alne | T1 | 85 | IMPORT Alne | ∞ | hebdo | — |
| `CSM_PAR_004` | Parchemin de Retour de Guilde | T2 | 110 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_003` | Parchemin de Rappel | T2 | 105 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_006` | Parchemin d'Identification | T1 | 30 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : parchemins de rappel usagés (`CSM_PAR_*`) à 25 %.
- **Refuse** : objets liés, armes.

## 4. Ancrage zonal
Cartographe du Marché : il vend le nécessaire de repérage (rappel, identification) mais sa spécialité — les **cartes des courants aériens** — n'est pas encore un objet fiché (« une zone barrée »).

> `[BESOIN_ITEM]` : Cartes des courants aériens / atlas de Swilvane — catégorie « carte du monde » non fichée (déjà relevée à Alne).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_27` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_27` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
