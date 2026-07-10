# 🕯️ Marchand de Masques Fins — `SHOP_PEN_57`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_57` |
| **Propriétaire** | Marchand de Masques Fins `NPC_PEN_57` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `ARM_TET_075` | Capuche des Ruines Grises | T2 | 785 | LOCAL | 4 | semaine | — |
| `ARM_TET_078` | Heaume du Veilleur de Penwether | T3 | 4 560 | LOCAL | 1 | 10j | Niv. 25+ |
| `ARM_TET_085` | Chapeau de l'Encyclopédiste | T3 | 3 760 | LOCAL | 2 | 10j | Niv. 20+ |
| `ARM_TET_084` | Heaume du Mercenaire des Neuf Vents | T3 | 4 320 | LOCAL | 2 | 10j | Niv. 20+ |
| `ARM_TET_003` | Cercle de Feuillage Tressé | T2 | 760 | LOCAL | 4 | semaine | — |
| `ARM_TET_021` | Diadème de Nacre | T2 | 800 | LOCAL | 4 | semaine | — |
| `CSM_POT_018` | Élixir du Mage Gnome | T3 | 910 | IMPORT | 2 | 10j | Niv. 20+ |

## 3. Politique de rachat
- **Rachète** : Masques d'illusion (30%), Pièces d'identité (25%)
- **Refuse** : Équipement standard, objets communs

## 4. Ancrage zonal
Le Marchand de Masques Fins vend les plus belles pièces — masques d'illusion avancée, heaumes cérémoniels.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_57` · `!buy ARM_TET_075` · `!sell ARM_TET_075`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
