# 🔨 Maîtresse Vera, Automates et Mécanismes — `SHOP_BRO_04`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_04` |
| **Propriétaire** | Maîtresse Vera `NPC_BRO_04` |
| **Zone / Sous-lieu** | Brokkheim, Atelier Cliquetant |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_005` | Rouage Précieux | T3 | 50 | LOCAL | 2 | semaine | Niv. 20+ |
| `CSM_CRI_008` | Cristal d'Enregistrement | T2 | 250 | LOCAL | 5 | semaine | — |
| `CSM_CRI_009` | Pierre de Rappel | T2 | 250 | LOCAL | 5 | semaine | — |
| `MAT_DRP_003` | Noyau Fissuré | T2 | 150 | LOCAL | 5 | semaine | — |
| `MAT_DRP_011` | Corne de Chasseur | T2 | 150 | LOCAL | 5 | semaine | — |
| `MAT_DRP_012` | Plume de Sylphe | T2 | 150 | LOCAL | 5 | semaine | — |
| `MAT_DRP_013` | Croc de Salamander | T2 | 150 | LOCAL | 5 | semaine | — |
| `MAT_DRP_014` | Larme de Puca | T2 | 150 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Pièces d'automates (25%), composants (20%)
- **Refuse** : Armes, armures, gemmes, consommables

## 4. Ancrage zonal
Vera construit des automates à l'Atelier Cliquetant. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_04` · `!buy MAT_CUI_005` · `!sell MAT_CUI_005`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
