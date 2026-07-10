# 🔨 Marchand d'Eau Pure, Eau de trempe — `SHOP_BRO_26`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_26` |
| **Propriétaire** | Marchand d'Eau Pure `NPC_BRO_26` |
| **Zone / Sous-lieu** | Brokkheim, Quai des Canaux |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_016` | Eau de Source de Lioda | T2 | 220 | LOCAL | 5 | semaine | — |
| `CSM_POT_024` | Eau Bénite de Lioda | T2 | 170 | LOCAL | 5 | semaine | — |
| `CSM_POT_033` | Résine Ignifuge | T2 | 150 | LOCAL | 5 | semaine | — |
| `CSM_POT_034` | Écaille de Givre | T2 | 150 | LOCAL | 5 | semaine | — |
| `CSM_POT_036` | Sirop de Braise Éteinte | T2 | 200 | LOCAL | 5 | semaine | — |
| `CSM_POT_039` | Antidote de Fond | T2 | 200 | LOCAL | 5 | semaine | — |
| `CSM_POT_040` | Sérum Neutralisant | T3 | 600 | LOCAL | 2 | semaine | Niv. 20+ |
| `CSM_POT_023` | Bouchons de Cire de Duskarn | T2 | 160 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Récipients vides (5 Yrds), eau usée (10%)
- **Refuse** : Armes, armures, minerais, gemmes, outils

## 4. Ancrage zonal
Puise l'eau des geysers profonds. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_26` · `!buy CSM_POT_016` · `!sell CSM_POT_016`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
