# 🕯️ Marchand de Lumière — `SHOP_PEN_34`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_34` |
| **Propriétaire** | Marchand de Lumière `NPC_PEN_34` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_CRI_008` | Cristal d'Enregistrement | T2 | 200 | LOCAL | 10 | jour | — |
| `CSM_CRI_009` | Pierre de Rappel | T2 | 200 | LOCAL | 10 | jour | — |
| `CSM_CRI_007` | Cristal de Fuite | T3 | 1 120 | LOCAL | 4 | semaine | — |
| `CSM_CRI_001` | Cristal de Soin | T3 | 1 080 | LOCAL | 5 | semaine | — |
| `CSM_CRI_003` | Cristal de Mana | T3 | 1 200 | LOCAL | 5 | semaine | — |
| `CSM_PAR_002` | Parchemin de Retour à la Cité Natale | T1 | 50 | LOCAL | 8 | jour | — |
| `CSM_POT_032` | Vif-Argent des Cimes | T3 | 700 | IMPORT | 3 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Cristaux usagés (20%), Lanternes (15%)
- **Refuse** : Équipement lourd, armes

## 4. Ancrage zonal
Le Marchand de Lumière vend des cristaux qui éclairent les ruines obscures de Penwether.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_34` · `!buy CSM_CRI_008` · `!sell CSM_CRI_008`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
