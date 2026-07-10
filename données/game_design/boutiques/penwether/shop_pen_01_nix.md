# 🕯️ Receleuse Nix — `SHOP_PEN_01`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_01` |
| **Propriétaire** | Receleuse Nix `NPC_PEN_01` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BLACK_MARKET |
| **Accès** | libre (étal) |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_004` | Pierre d'Âme | T2 | 120 | LOCAL | 3 | semaine | — |
| `MAT_DRP_002` | Cendre Luisante | T1 | 40 | LOCAL | 5 | jour | — |
| `MAT_DRP_014` | Larme de Puca | T2 | 120 | LOCAL | 3 | semaine | — |
| `MAT_DRP_011` | Corne de Chasseur | T2 | 120 | LOCAL | 3 | semaine | — |
| `MAT_DRP_003` | Noyau Fissuré | T2 | 120 | LOCAL | 4 | semaine | — |
| `CSM_POT_019` | Antidote | T1 | 55 | IMPORT | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Objets d'occasion (20%), Artefacts des ruines (20%)
- **Refuse** : Objets neufs, équipement standard, consommables

## 4. Ancrage zonal
Nix écoute les objets du Marché des Sept Façades. Chaque pièce qu'elle vend porte un fragment de souvenir du précédent porteur.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_01` · `!buy MAT_DRP_004` · `!sell MAT_DRP_004`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
