# 🌑 Nécromancien des Ombres, Résurrection Noire — `SHOP_DUS_84`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_84` |
| **Propriétaire** | Nécromancien des Ombres `NPC_DUS_84` |
| **Zone / Sous-lieu** | Duskarn, Caverne des Hurleurs (interdit) |
| **Type** | BLACK_MARKET |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_DAG_007` | Croc de Skreech | T4 | 12 800 | LOCAL | 1 | mois | AFF>=90 |
| `WPN_ARC_003` | Arc Noir Spriggan | T2 | 760 | LOCAL | 3 | semaine | — |
| `WPN_ARC_004` | Arc du Vent Sylphe | T2 | 735 | LOCAL | 3 | semaine | — |
| `MAT_DRP_014` | Larme de Puca | T2 | 120 | LOCAL | 4 | semaine | — |
| `CSM_POT_024` | Eau Bénite de Lioda | T2 | 240 | IMPORT Lioda | 2 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Âmes, artefacts de mort, reliques d'ombre (25%)
- **Refuse** : Objets de lumière sacrée, équipement de soin, armes bénies

## 4. Ancrage zonal
Le Nécromancien ranime les morts dans la Caverne des Hurleurs.

## 5. Intégration Bot
- Joueur : `!dark_resurrect · !name_trade`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
