# 🐾 Couveuse de la Ménagerie — `SHOP_FRE_23`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_23` |
| **Propriétaire** | Vendeur d'Œufs `NPC_FRE_23` (`T_NPC.shop_ref` → `SHOP_FRE_23`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Ménagerie Royale |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_NOU_027` | Œufs de Chauve-Souris des Ombres | T2 | 80 | LOCAL | 15 | 3j | — |
| `CSM_NOU_011` | Fromage Fermier | T1 | 20 | LOCAL | 30 | 2j | — |
| `CSM_NOU_015` | Galette d'Avoine | T1 | 20 | LOCAL | 40 | 2j | — |
| `CSM_NOU_018` | Biscuit de Marin | T1 | 20 | LOCAL | 40 | 2j | — |
| `CSM_NOU_023` | Poisson au Sel | T2 | 80 | LOCAL | 25 | 3j | — |
| `MAT_HRB_018` | Fleur de Lotus | T3 | 5 | LOCAL | 15 | 4j | — |

## 3. Politique de rachat
- **Rachète** : couvées, œufs de chasse et litière (`CSM_NOU_027`, `MAT_HRB_018`) à 25 %.
- **Refuse** : armes, minerai, objets liés.

## 4. Ancrage zonal
Le Vendeur d'Œufs `NPC_FRE_23` fournit la Ménagerie en couvées de toutes races et la nourriture des nouveau-nés. Un œuf de son présentoir « n'éclôt jamais » — le Soigneur `NPC_FRE_22` refuse de dire pourquoi, et le Vétérinaire Royal `NPC_FRE_61` l'a fait retirer du registre.

> `[BESOIN_ITEM]` : **Œufs de familier vivants (`EGG_*`)** — catégorie « couvée » non fichée — fonds de commerce du Vendeur d'Œufs

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_23` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_23` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
