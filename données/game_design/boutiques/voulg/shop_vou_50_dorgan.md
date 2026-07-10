# ⚒️ Taverne du Brasier — `SHOP_VOU_50`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_VOU_50` |
| **Propriétaire** | Tavernier du Brasier Dorgan `NPC_VOU_50` (`T_NPC.shop_ref` → `SHOP_VOU_50`) |
| **Zone / Sous-lieu** | `ZONE_SAL_TWN_001` — Voulg, Taverne du Brasier |
| **Type** | TAVERNE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_001` | Potion de Soin Mineure | T1 | 25 | UNIVERSEL | 99 | jour | — |
| `CSM_POT_011` | Potion de Mana Mineure | T1 | 30 | UNIVERSEL | 99 | jour | — |
| `CSM_NOU_010` | Pain de Voyage | T1 | 20 | UNIVERSEL | 99 | jour | — |
| `CSM_POT_019` | Antidote | T1 | 40 | UNIVERSEL | 50 | jour | — |
| `CSM_PAR_002` | Parchemin de Retour à la Cité Natale | T1 | 60 | UNIVERSEL | 30 | jour | — |
| `CSM_NOU_001` | Ragoût de Lave | T2 | 95 | LOCAL | 30 | jour | — |
| `CSM_NOU_019` | Ragoût de Taverne | T2 | 80 | LOCAL | 30 | jour | — |
| `CSM_POT_029` | Tonique de Vitalité | T2 | 110 | LOCAL | 15 | 2j | — |

## 3. Politique de rachat
- **Rachète** : rien (débit de boisson) — sert d'auberge.
- **Refuse** : revente d'objets (adressez-vous au Marché de la Lave).

## 4. Ancrage zonal
Seule taverne de Voulg : Dorgan `NPC_VOU_50` y sert le **ragoût de lave** (buff de FOR, signature) et le panier universel du voyageur. Il « entend les soldats parler » — sa salle est le premier maillon de la moitié des fils rouges de la forteresse.

> `[BESOIN_ITEM]` : **Torche (panier universel R1)** — consommable d'éclairage manquant au lot I-1 — déjà relevé à Gattan, Alne et Swilvane

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_VOU_50` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_VOU_50` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
