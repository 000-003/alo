# 🔨 Encanteur des Forges, Armes de maître — `SHOP_BRO_39`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_39` |
| **Propriétaire** | Encanteur des Forges `NPC_BRO_39` |
| **Zone / Sous-lieu** | Brokkheim, Halle du Marteau |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_ARC_005` | Arc Long des Collines | T3 | 4400 | LOCAL | 2 | semaine | Niv. 20+ |
| `WPN_KAT_004` | Kagutsuchi, Lame Spirituelle de Feu | T3 | 5000 | LOCAL | 2 | semaine | Niv. 20+ |
| `WPN_BOU_004` | Pavois de Braise | T3 | 4800 | LOCAL | 2 | semaine | Niv. 20+ |
| `WPN_MAS_005` | Marteau de Guerre de Granzam | T3 | 5400 | LOCAL | 2 | semaine | Niv. 20+ |
| `ARM_TET_019` | Coiffe d'Écume | T1 | 160 | LOCAL | 10 | jour | — |
| `ARM_TET_020` | Bandana du Pêcheur | T1 | 380 | LOCAL | 10 | jour | — |
| `ARM_TET_012` | Heaume de Basalte | T2 | 1100 | LOCAL | 5 | semaine | — |
| `WPN_KAT_003` | Nodachi des Brumes | T2 | 1100 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Armes de maître (30%), artefacts de forge (25%)
- **Refuse** : Armes communes, armures, outils, consommables

## 4. Ancrage zonal
Ventes aux enchères des pièces les plus prestigieuses. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_39` · `!buy WPN_ARC_005` · `!sell WPN_ARC_005`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
