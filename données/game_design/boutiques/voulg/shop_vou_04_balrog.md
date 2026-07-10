# ⚒️ Atelier de Siège de Balrog — `SHOP_VOU_04`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_04` |
| **Propriétaire** | Balrog Mur-de-Pierre `NPC_VOU_04` (`T_NPC.shop_ref` → `SHOP_VOU_04`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Quartier Général |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_BOU_001` | Bouclier Rond en Bois | T1 | 145 | LOCAL | 20 | semaine | — |
| `WPN_BOU_002` | Écu de Granit | T2 | 1 330 | IMPORT Granzam | 8 | semaine | — |
| `WPN_BOU_004` | Pavois de Braise | T3 | 3 840 | LOCAL | 4 | 10j | Niv. 25+ |
| `WPN_LAN_001` | Lance de Fantassin | T1 | 170 | LOCAL | 25 | semaine | — |
| `WPN_LAN_002` | Pique de Granit | T2 | 1 330 | IMPORT Granzam | 10 | semaine | — |
| `WPN_LAN_005` | Lance Lourde de Granzam | T3 | 6 860 | IMPORT Granzam | 4 | 10j | Niv. 25+ |
| `MAT_MIN_009` | Granit de Granzam | T3 | 350 | IMPORT Granzam | 15 | semaine | — |
| `WPN_HAC_005` | Hache de Siège de Granzam | T3 | 7 560 | IMPORT Granzam | 3 | 10j | Niv. 25+ |

## 3. Politique de rachat
- **Rachète** : pièces de balistes et boucliers lourds endommagés (25 %), granit brut `MAT_MIN_009` (20 %).
- **Refuse** : équipement de vol, armes légères, cosmétique.

## 4. Ancrage zonal
Balrog `NPC_VOU_04` (Gnome) monte les balistes de la forteresse ; il importe le granit et les pavois de Granzam (`NPC_GRA_*`, +40 %) mais forge sur place les pavois de braise. Il jure que le plan de ses dernières machines lui est venu « déjà tracé » — un fil que l'Intendant Grakk `NPC_VOU_35` refuse d'entendre.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_04` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_04` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
