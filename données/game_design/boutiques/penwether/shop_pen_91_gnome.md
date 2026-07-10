# 🕯️ Marchand Gnome — `SHOP_PEN_91`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_91` |
| **Propriétaire** | Marchand Gnome `NPC_PEN_91` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_GEM_002` | Gemme d'Obsidienne | T3 | 310 | IMPORT | 4 | semaine | — |
| `MAT_MIN_006` | Soufre Cristallisé | T2 | 70 | IMPORT | 6 | semaine | — |
| `MAT_MIN_007` | Cristal de Brise | T2 | 85 | IMPORT | 5 | semaine | — |
| `MAT_MIN_023` | Scorie de Mithril | T3 | 840 | IMPORT | 3 | semaine | — |
| `MAT_MIN_014` | Minerai d'Étain Fin | T3 | 490 | IMPORT | 3 | semaine | — |
| `MAT_MIN_003` | Étain des Collines | T1 | 5 | IMPORT | 10 | jour | — |
| `MAT_MIN_002` | Cuivre Brut | T1 | 5 | IMPORT | 10 | jour | — |

## 3. Politique de rachat
- **Rachète** : Gemmes taillées (30%), Minerais rares (25%)
- **Refuse** : Antiquités, objets des ruines

## 4. Ancrage zonal
Le Marchand Gnome importe des gemmes et des métaux précieux de toutes les cités.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_91` · `!buy MAT_GEM_002` · `!sell MAT_GEM_002`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
