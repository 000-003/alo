# 🐾 Taverne Le Chat Botté — `SHOP_FRE_40`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_40` |
| **Propriétaire** | Tavernier Chat Botté `NPC_FRE_40` (`T_NPC.shop_ref` → `SHOP_FRE_40`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Taverne Le Chat Botté |
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
| `CSM_NOU_002` | Truite Grillée du Zéphyr | T2 | 95 | LOCAL | 30 | jour | — |
| `CSM_NOU_016` | Poisson Fumé | T1 | 25 | LOCAL | 30 | jour | — |
| `CSM_NOU_019` | Ragoût de Taverne | T2 | 80 | LOCAL | 30 | jour | — |

## 3. Politique de rachat
- **Rachète** : rien (débit de boisson) — sert d'auberge et de scène.
- **Refuse** : revente d'objets (adressez-vous au Marché aux Crocs).

## 4. Ancrage zonal
Seule taverne de Freelia : le Tavernier `NPC_FRE_40` sert la **Truite Grillée du Zéphyr** (buff d'AGI, signature) et le panier universel du voyageur. Sa salle bruit de chuchotements — le fil des Yeux dans l'Ombre y passe, entre le Barde Félin `NPC_FRE_42` et l'Ombre du Trône `NPC_FRE_88`.

> `[BESOIN_ITEM]` : **Torche (panier universel R1)** — consommable d'éclairage manquant au lot I-1 — déjà relevé à Gattan, Alne, Swilvane, Voulg

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_40` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_40` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
