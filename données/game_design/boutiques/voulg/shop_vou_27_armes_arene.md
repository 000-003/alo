# ⚒️ Armurerie de l'Arène de Cendres — `SHOP_VOU_27`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_27` |
| **Propriétaire** | Vendeur d'Armes d'Arène `NPC_VOU_27` (`T_NPC.shop_ref` → `SHOP_VOU_27`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Arène de Cendres |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_EP1_001` | Épée Longue en Fer | T1 | 175 | LOCAL | 15 | semaine | — |
| `WPN_EP1_003` | Sabre de Braise | T2 | 880 | LOCAL | 8 | semaine | — |
| `WPN_HAC_002` | Hache de Braise | T2 | 880 | LOCAL | 8 | semaine | — |
| `WPN_MAS_001` | Masse Cloutée | T1 | 185 | LOCAL | 12 | semaine | — |
| `WPN_HAC_001` | Hache de Bûcheron | T1 | 190 | LOCAL | 10 | semaine | — |
| `WPN_EP2_002` | Flamberge de Voulg | T2 | 1 120 | LOCAL | 4 | 10j | Niv. 20+ |
| `WPN_MAS_004` | Masse de Lave | T3 | 4 160 | LOCAL | 3 | 10j | Niv. 25+ |
| `WPN_KAT_002` | Kagutsuchi Mineur | T2 | 920 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : armes d'arène et lames de feu Salamander (`WPN_EP1_*`, `WPN_HAC_*`, `WPN_MAS_*`) à 25 %.
- **Refuse** : équipement de vol, bâtons de mage, cosmétique.

## 4. Ancrage zonal
Fournit les gladiateurs de Kaelthor `NPC_VOU_01` : la **lame d'arène** (Sabre de Braise, Flamberge de Voulg) est forgée sur place, prix LOCAL −20 %. Une lame de son stock « n'a pas été forgée ici » — l'Annonceur `NPC_VOU_20` sait à quel combattant mort elle appartenait.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_27` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_27` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
