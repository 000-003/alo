# ⚒️ Convoi de Torvin — `SHOP_VOU_57`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_57` |
| **Propriétaire** | Négociant Torvin `NPC_VOU_57` (`T_NPC.shop_ref` → `SHOP_VOU_57`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, itinérant (route Gattan-Voulg) |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_PAR_001` | Parchemin de Retour à Alne | T1 | 85 | IMPORT Alne | 20 | semaine | — |
| `CSM_NOU_007` | Pain de Roche de Granzam | T2 | 155 | IMPORT Granzam | 25 | semaine | — |
| `CSM_POT_009` | Potion de Régénération | T2 | 250 | IMPORT Archipel | 12 | semaine | — |
| `WPN_EP1_007` | Sabre-Griffe Cait Sith | T2 | 1 400 | IMPORT Freelia | 4 | 10j | — |
| `CSM_NOU_004` | Miel Chantant de Lioda | T2 | 170 | IMPORT Lioda | 20 | semaine | — |
| `MAT_DRP_012` | Plume de Sylphe | T2 | 210 | IMPORT Swilvane | 8 | semaine | — |
| `CSM_POT_012` | Potion de Mana | T2 | 180 | IMPORT Alne | 15 | semaine | — |

## 3. Politique de rachat
- **Rachète** : marchandises d'autres cités en bon état (25 %).
- **Refuse** : armes de guerre volées (il les laisse à Syl `NPC_VOU_93`).

## 4. Ancrage zonal
Torvin `NPC_VOU_57`, point de contact de Torvin `NPC_GAT_18`, fait la navette avec Gattan et Alne : tout son stock est IMPORT (+40 %). Il porte « plus que des lettres » — sabres Cait Sith et plumes de Sylphe passent dans ses caisses, ce que le Douanier Mere `NPC_VOU_71` ne consigne jamais.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_57` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_57` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
