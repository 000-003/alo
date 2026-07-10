# 🍃 Receleur Somb — `SHOP_SWI_42`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_SWI_42` |
| **Propriétaire** | Receleur Somb `NPC_SWI_42` (`T_NPC.shop_ref` → `SHOP_SWI_42`) |
| **Zone / Sous-lieu** | `ZONE_SYL_CAP_001` — Swilvane, Les Racines |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=60 / nuit |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_RAP_007` | Rapière Faucon-du-Ciel | T4 | 21000 | IMPORT contrebande | ∞ | hebdo | AFF>=80 |
| `WPN_BAG_010` | Baguette du Zéphyr Supérieur | T4 | 23100 | IMPORT contrebande | ∞ | hebdo | AFF>=80 |
| `ARM_TET_008` | Casque de la Garde Sylvane | T4 | 20300 | IMPORT contrebande | ∞ | hebdo | AFF>=80 |
| `MAT_MIN_010` | Mithril Brut | T4 | 2100 | IMPORT Brokkheim | ∞ | hebdo | AFF>=60 |
| `WPN_DAG_004` | Dague Venin-d'Ombre | T2 | 1330 | IMPORT Duskarn | ∞ | hebdo | AFF>=60 |
| `CSM_PAR_009` | Parchemin de Déliage Mineur | T2 | 240 | IMPORT contrebande | ∞ | hebdo | AFF>=60 |

## 3. Politique de rachat
- **Rachète** : objets volés et T4 « tombés du nid » à 25 %.
- **Refuse** : rien — il achète tout ce que le Marché refuse.

## 4. Ancrage zonal
Receleur des Racines : il écoule les vols du Marché du haut et le minerai détourné de la Forge de Brokkr `NPC_SWI_05`. Seul débouché des armes de vol T4 (`AFF>=80`, stock rare), conformément à D64. Réseau avec Snyk `NPC_GAT_80` (lien recel→55).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_SWI_42` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_SWI_42` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
