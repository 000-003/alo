# 🕯️ Receleur des Ruines — `SHOP_PEN_48`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_48` |
| **Propriétaire** | Receleur des Ruines `NPC_PEN_48` |
| **Zone / Sous-lieu** | Penwether, Bibliothèque Enterrée (cache) |
| **Type** | BLACK_MARKET |
| **Accès** | caché (trappe sous rayonnages) |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_012` | Plume de Sylphe | T2 | 120 | LOCAL | 4 | semaine | — |
| `MAT_WOD_008` | Érable de Lave — `MAT_WOD_008` | T3 | 160 | LOCAL | 2 | 10j | Niv. 20+ |
| `MAT_WOD_009` | Bois d'Yggdrasil — `MAT_WOD_009` | T3 | 280 | LOCAL | 2 | 10j | Niv. 20+ |
| `MAT_WOD_012` | Cœur de Chêne — `MAT_WOD_012` | T3 | 120 | LOCAL | 3 | semaine | — |
| `MAT_WOD_011` | Bois d'Adamantium — `MAT_WOD_011` | T3 | 320 | LOCAL | 2 | 10j | Niv. 20+ |
| `CSM_POT_020` | Antidote Universel | T2 | 210 | IMPORT | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Objets volés (15%), Antiquités « chaudes » (20%)
- **Refuse** : Objets traçables, équipement neuf

## 4. Ancrage zonal
Le Receleur opère depuis une cache sous la Bibliothèque Enterrée.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_48` · `!buy MAT_DRP_012` · `!sell MAT_DRP_012`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
