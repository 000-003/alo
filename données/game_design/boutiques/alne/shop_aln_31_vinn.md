# 🌳 Maraîchère Vinn — `SHOP_ALN_31`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_ALN_31` |
| **Propriétaire** | Maraîchère Vinn `NPC_ALN_31` (`T_NPC.shop_ref` → `SHOP_ALN_31`) |
| **Zone / Sous-lieu** | `ZONE_NEU_CAP_001` — Alne, Marché Circulaire |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (6 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_002` | Fleur de Gravats | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_003` | Prêle des Vapeurs | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_020` | Herbe d'Eau Claire | T1 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_022` | Herbe du Vent | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_019` | Herbe des Canaux | T2 | 5 | LOCAL | ∞ | hebdo | — |
| `MAT_HRB_024` | Herbe de Résine | T2 | 5 | LOCAL | ∞ | hebdo | — |

## 3. Politique de rachat
- **Rachète** : plantes et fibres (`MAT_HRB_*`) à 25 %.
- **Refuse** : minerai, objets liés, T5.

## 4. Ancrage zonal
Primeur des vergers flottants : ses fruits viennent d'un verger que nul ne retrouve (fil « verger introuvable »). Vend les plantes potagères et fibres fraîches d'Alne, LOCAL. Distincte de l'herboriste Ophrys `NPC_ALN_28` (médicinal) et de Yssa `NPC_ALN_15` (flore de l'Arbre).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_ALN_31` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_ALN_31` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
