# 🌑 Loueur de Dagues, Location d'Armes de Duel — `SHOP_DUS_33`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_33` |
| **Propriétaire** | Loueur de Dagues `NPC_DUS_33` |
| **Zone / Sous-lieu** | Duskarn, Bazar des Ombres |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_HAC_001` | Hache de Bûcheron | T1 | 190 | LOCAL | 4 | jour | Caution 200 Yrds |
| `WPN_BOU_001` | Bouclier Rond en Bois | T1 | 145 | LOCAL | 4 | jour | Caution 100 Yrds |
| `WPN_LAN_001` | Lance de Fantassin | T1 | 170 | LOCAL | 3 | jour | Caution 200 Yrds |
| `WPN_ARC_001` | Arc Court en Bois | T1 | 160 | LOCAL | 4 | jour | Caution 150 Yrds |
| `WPN_ARC_002` | Arc de Chasse Cait Sith | T2 | 720 | LOCAL | 3 | jour | Caution 400 Yrds |
| `WPN_LAN_002` | Pique de Granit | T2 | 760 | LOCAL | 2 | jour | Caution 500 Yrds |

## 3. Politique de rachat
- **Rachète** : Dagues de duel d'occasion (25%)
- **Refuse** : Tout autre équipement, objets personnels

## 4. Ancrage zonal
Le Loueur de Dagues fournit les duelistes du Bazar des Ombres en armes de location. Sa « dague maudite » revient toujours tachée de noir.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_DUS_33 · !rent_dagger · !duel_dus`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
