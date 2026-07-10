# 🕯️ Masquier Orin — `SHOP_PEN_03`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_03` |
| **Propriétaire** | Masquier Orin `NPC_PEN_03` |
| **Zone / Sous-lieu** | Penwether, Atelier des Visages |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_074` | Masque Fêlé d'Apprenti | T1 | 250 | LOCAL | 6 | jour | — |
| `ARM_TET_029` | Serre-tête du Traqueur | T1 | 255 | LOCAL | 5 | semaine | — |
| `ARM_TET_030` | Masque du Chat de Gouttière | T2 | 840 | LOCAL | 4 | semaine | — |
| `ARM_TET_039` | Masque de Suie | T2 | 785 | LOCAL | 4 | semaine | — |
| `ARM_TET_040` | Capuche de l'Échoteur | T2 | 1 120 | LOCAL | 3 | semaine | — |
| `ARM_TET_011` | Masque du Conscrit de Gattan | T1 | 240 | LOCAL | 5 | jour | — |
| `ARM_TET_031` | Capuchon de la Savane | T2 | 1 160 | LOCAL | 3 | semaine | — |
| `CSM_POT_028` | Élixir de Célérité Sylphe | T2 | 195 | IMPORT | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Masques usagés (25%), Pigments rares (20%)
- **Refuse** : Armes, armures, équipement non cosmétique

## 4. Ancrage zonal
Orin fabrique des masques qui modifient l'identité enregistrée dans le Cardinal.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_03` · `!buy ARM_TET_074` · `!sell ARM_TET_074`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
