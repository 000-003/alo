# 🔨 Marchand Undine, Eaux et Cristaux d'import — `SHOP_BRO_91`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_91` |
| **Propriétaire** | Marchand Undine `NPC_BRO_91` |
| **Zone / Sous-lieu** | Brokkheim, Canaux Refroidissement |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_CRI_001` | Cristal de Soin | T3 | 1890 | IMPORT | 2 | semaine | ×1.4 |
| `CSM_CRI_003` | Cristal de Mana | T3 | 2100 | IMPORT | 2 | semaine | ×1.4 |
| `CSM_CRI_005` | Cristal de Téléportation | T3 | 2100 | IMPORT | 2 | semaine | ×1.4 |
| `CSM_PAR_011` | Parchemin de Boule de Feu | T1 | 100 | IMPORT | 10 | jour | ×1.4 |
| `CSM_POT_017` | Rosée de Cristal Undine | T3 | 770 | IMPORT | 2 | semaine | ×1.4 |
| `CSM_NOU_004` | Miel Chantant de Lioda | T2 | 170 | IMPORT | 5 | semaine | ×1.4 |
| `CSM_PAR_015` | Parchemin de Bourrasque | T2 | 210 | IMPORT | 5 | semaine | ×1.4 |
| `CSM_PAR_013` | Parchemin d'Éclair | T2 | 210 | IMPORT | 5 | semaine | ×1.4 |

## 3. Politique de rachat
- **Rachète** : Récipients vides (5 Yrds), cristaux usagés (10%)
- **Refuse** : Armes, armures, minerais, outils

## 4. Ancrage zonal
Undine de l'Archipel. Importe cristaux marins et eaux pures. Prix IMPORT ×1.4 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_91` · `!buy CSM_CRI_001` · `!sell CSM_CRI_001`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
