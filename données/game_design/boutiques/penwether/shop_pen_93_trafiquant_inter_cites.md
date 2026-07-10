# 🕯️ Trafiquant Inter-Cités — `SHOP_PEN_93`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_93` |
| **Propriétaire** | Trafiquant Inter-Cités `NPC_PEN_93` |
| **Zone / Sous-lieu** | Penwether, Marché des Sept Façades (cache) |
| **Type** | BLACK_MARKET |
| **Accès** | caché (mot de passe) |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_018` | Cuir de Golem | T3 | 45 | LOCAL | 3 | semaine | — |
| `MAT_CUI_010` | Griffe Fouisseuse | T1 | 10 | LOCAL | 6 | jour | — |
| `MAT_CUI_011` | Croc de Loup | T1 | 5 | LOCAL | 6 | jour | — |
| `MAT_CUI_015` | Croc de Wyrm Mineur | T2 | 30 | LOCAL | 4 | semaine | — |
| `CSM_POT_022` | Baume Thermique | T1 | 65 | IMPORT | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Artefacts rares (30%), Marchandises de contrebande (20%)
- **Refuse** : Objets communs, nourriture

## 4. Ancrage zonal
Le Trafiquant Inter-Cités fait passer des artefacts rares entre les cités.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_93` · `!buy MAT_CUI_018` · `!sell MAT_CUI_018`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
