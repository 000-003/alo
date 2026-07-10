# 🐾 Rituel du Nécromancien — `SHOP_FRE_84`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_84` |
| **Propriétaire** | Nécromancien des Bêtes `NPC_FRE_84` (`T_NPC.shop_ref` → `SHOP_FRE_84`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Colline aux Souvenirs (interdit) |
| **Type** | MARCHÉ NOIR |
| **Accès** | AFF>=60 ou nuit |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_010` | Baume de Régénération Majeur | T3 | 560 | LOCAL | 4 | semaine | AFF>=40 |
| `CSM_CRI_001` | Cristal de Soin | T3 | 1 080 | LOCAL | 2 | 10j | AFF>=40 |
| `CSM_POT_040` | Sérum Neutralisant | T3 | 480 | LOCAL | 5 | semaine | — |
| `CSM_POT_025` | Purge Complète | T3 | 480 | LOCAL | 5 | semaine | AFF>=40 |

## 3. Politique de rachat
- **Rachète** : composants de résurrection interdite — sangs, cristaux d'âme (30 %).
- **Refuse** : denrées, cosmétique, objets sans lien d'âme.

## 4. Ancrage zonal
Le Nécromancien des Bêtes `NPC_FRE_84` ranime les familiers morts — contre un prix. Il vend les baumes et cristaux de soin qui « fixent » l'âme rappelée, arrachée à la Colline que l'Archiviste `NPC_FRE_63` croit inviolable. Son art est le revers noir du fil du Familiar qui s'efface.

> `[BESOIN_ITEM]` : **Rituels de résurrection noire (`RITE_*`)** — service interdit non fiché — cœur de métier du Nécromancien

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_84` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_84` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
