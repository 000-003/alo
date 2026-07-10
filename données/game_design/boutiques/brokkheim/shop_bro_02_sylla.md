# 🔨 Sylla, Enchantements runiques — `SHOP_BRO_02`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_02` |
| **Propriétaire** | Sylla `NPC_BRO_02` |
| **Zone / Sous-lieu** | Brokkheim, Quai des Finitions |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_PAR_012` | Parchemin de Soin | T1 | 70 | LOCAL | 10 | jour | — |
| `CSM_PAR_014` | Parchemin de Bouclier | T1 | 75 | LOCAL | 10 | jour | — |
| `CSM_PAR_009` | Parchemin de Déliage Mineur | T2 | 170 | LOCAL | 5 | semaine | — |
| `CSM_PAR_010` | Parchemin de Purification | T2 | 175 | LOCAL | 5 | semaine | — |
| `CSM_POT_027` | Huile de Force du Berserker | T2 | 140 | LOCAL | 5 | semaine | — |
| `CSM_POT_028` | Élixir de Célérité Sylphe | T2 | 140 | LOCAL | 5 | semaine | — |
| `CSM_POT_030` | Encre de Sagesse | T2 | 140 | LOCAL | 5 | semaine | — |
| `CSM_CRI_007` | Cristal de Fuite | T3 | 1400 | LOCAL | 2 | semaine | Niv. 20+ |

## 3. Politique de rachat
- **Rachète** : Parchemins usagés (15%), encres rares (25%)
- **Refuse** : Armes, armures, minerais, gemmes

## 4. Ancrage zonal
Sylla travaille au Quai des Finitions. Elle écrit les runes dans le métal. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_02` · `!buy CSM_PAR_012` · `!sell CSM_PAR_012`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
