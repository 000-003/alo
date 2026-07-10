# 🔨 Marchand d'Armures, Heaumes et Casques — `SHOP_BRO_32`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_32` |
| **Propriétaire** | Marchand d'Armures `NPC_BRO_32` |
| **Zone / Sous-lieu** | Brokkheim, Halle du Marteau |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_048` | Casque à Lanterne | T2 | 1050 | LOCAL | 5 | semaine | — |
| `ARM_TET_055` | Lunettes d'Apprenti Forgeron | T1 | 150 | LOCAL | 10 | jour | — |
| `ARM_TET_057` | Casque à Visière Rabattable | T2 | 1100 | LOCAL | 5 | semaine | — |
| `ARM_TET_058` | Bandeau du Marteleur | T2 | 1350 | LOCAL | 5 | semaine | — |
| `ARM_TET_059` | Lunettes de Précision Runique | T3 | 4900 | LOCAL | 2 | semaine | Niv. 20+ |
| `ARM_TET_061` | Masque de la Forge-Mère | T4 | 17000 | LOCAL | 1 | mois | Niv. 30+ |
| `ARM_TET_056` | Calot de Suie de Forge | T1 | 280 | LOCAL | 10 | jour | — |
| `ARM_TET_060` | Heaume d'Alliage Étoilé | T3 | 6200 | LOCAL | 2 | semaine | Niv. 20+ |

## 3. Politique de rachat
- **Rachète** : Armures T1 (20%), heaumes usagés (15%)
- **Refuse** : Armes, outils, gemmes, consommables

## 4. Ancrage zonal
Spécialiste des armures forgées à Brokkheim. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_32` · `!buy ARM_TET_048` · `!sell ARM_TET_048`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
