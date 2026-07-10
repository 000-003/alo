# 🕯️ Marchand d'Encens — `SHOP_PEN_54`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_54` |
| **Propriétaire** | Marchand d'Encens `NPC_PEN_54` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_HRB_012` | Herbe de Mithril | T3 | 5 | LOCAL | 6 | semaine | — |
| `MAT_HRB_018` | Fleur de Lotus | T3 | 5 | LOCAL | 4 | semaine | — |
| `MAT_HRB_021` | Fleur de Grenat | T3 | 5 | LOCAL | 4 | semaine | — |
| `MAT_HRB_006` | Fleur de Soufre | T2 | 5 | LOCAL | 8 | semaine | — |
| `MAT_WOD_007` | Bois de Charme — `MAT_WOD_007` | T2 | 50 | IMPORT | 6 | semaine | — |
| `MAT_WOD_015` | Épicéa des Glaces — `MAT_WOD_015` | T3 | 450 | IMPORT | 4 | semaine | — |
| `MAT_CUI_003` | Glande Bouillante | T2 | 50 | IMPORT | 6 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Encens rares (20%), Herbes aromatiques (15%)
- **Refuse** : Équipement lourd, armes

## 4. Ancrage zonal
Le Marchand d'Encens brûle des herbes des ruines pour produire des fumées qui révèlent les strates de données.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_54` · `!buy MAT_HRB_012` · `!sell MAT_HRB_012`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
