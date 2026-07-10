# 🔨 Trafiquant Rival, Trafic inter-cités — `SHOP_BRO_93`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_93` |
| **Propriétaire** | Trafiquant Rival `NPC_BRO_93` |
| **Zone / Sous-lieu** | Brokkheim, Halle Marteau (cache) |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=45 ou quête `QST_BRO_TUNNEL_LAVE` |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_ARC_001` | Arc Court en Bois | T1 | 200 | LOCAL | 10 | jour | — |
| `WPN_BAG_001` | Baguette-Diapason | T1 | 260 | LOCAL | 10 | jour | — |
| `WPN_BOU_001` | Bouclier Rond en Bois | T1 | 180 | LOCAL | 10 | jour | — |
| `WPN_BOU_002` | Écu de Granit | T2 | 950 | LOCAL | 5 | semaine | — |
| `WPN_MAS_004` | Masse de Lave | T3 | 5200 | LOCAL | 2 | semaine | Niv. 20+ |

## 3. Politique de rachat
- **Rachète** : Marchandise inter-cités (25%)
- **Refuse** : Objets trop voyants, armes siglées Brokkheim

## 4. Ancrage zonal
Leprechaun faisant du trafic inter-cités. Prix LOCAL ×1.0, IMPORT ×1.4 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_93` · `!buy WPN_ARC_001` · `!sell WPN_ARC_001`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
