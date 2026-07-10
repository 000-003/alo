# 🌳 Libraire Osk — `SHOP_ALN_33`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_33` |
| **Propriétaire** | Libraire Osk `NPC_ALN_33` (`T_NPC.shop_ref` → `SHOP_ALN_33`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_PAR_011` | Parchemin de Boule de Feu | T1 | 55 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_012` | Parchemin de Soin | T1 | 55 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_013` | Parchemin d'Éclair | T2 | 120 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_014` | Parchemin de Bouclier | T1 | 60 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_015` | Parchemin de Bourrasque | T2 | 120 | LOCAL | ∞ | hebdo | — |
| `CSM_PAR_004` | Parchemin de Retour de Guilde | T2 | 110 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : parchemins de skill usagés à 25 %.
- **Refuse** : objets liés, T5, armes.

## 4. Ancrage zonal
Cartes et **parchemins de skill** T1-T2 des écoles élémentaires : un parchemin « bugué » est très recherché (fil « mémoire réécrite »). Vend les copies de sorts de départ à toutes les races (généraliste LOCAL). Concurrent du Copiste Denn `NPC_ALN_23`.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_33` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_33` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
