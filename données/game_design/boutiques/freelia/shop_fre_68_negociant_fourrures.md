# 🐾 Fourrures de Luxe de Gorim — `SHOP_FRE_68`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_68` |
| **Propriétaire** | Négociant en Fourrures `NPC_FRE_68` (`T_NPC.shop_ref` → `SHOP_FRE_68`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_042` | Loup de l'Ombre Dansante | T3 | 4 640 | LOCAL | 4 | semaine | Niv. 30+ |
| `MAT_CUI_009` | Éclat Bas-Relief | T3 | 50 | LOCAL | 8 | semaine | — |
| `CSM_NOU_032` | Rôti des Cimes | T3 | 400 | LOCAL | 6 | semaine | — |
| `MAT_DRP_010` | Perle des Abysses | T3 | 700 | IMPORT Archipel | 3 | 10j | Niv. 25+ |
| `ARM_TET_003` | Cercle de Feuillage Tressé | T2 | 1 330 | IMPORT Swilvane | 6 | semaine | — |
| `ARM_TET_039` | Masque de Suie | T2 | 785 | LOCAL | 8 | semaine | — |

## 3. Politique de rachat
- **Rachète** : fourrures nobles et pièces de parade (`ARM_TET_042`, `MAT_CUI_009`) à 25 %.
- **Refuse** : viande crue, minerai, objets liés.

## 4. Ancrage zonal
Gorim `NPC_FRE_68` habille la noblesse fauve de fourrures rares — le Loup de l'Ombre Dansante, les cercles tressés de Swilvane (+40 %). Une de ses fourrures est « chaude comme la lave » sans jamais brûler : une pièce dont il ne dira ni la bête ni le chasseur.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_68` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_68` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
