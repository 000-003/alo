# 🐾 Tannerie du Marché — `SHOP_FRE_31`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_FRE_31` |
| **Propriétaire** | Tanneur `NPC_FRE_31` (`T_NPC.shop_ref` → `SHOP_FRE_31`) |
| **Zone / Sous-lieu** | `ZONE_CAI_CAP_001` — Freelia, Marché aux Crocs |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_004` | Carapace Émaillée | T2 | 20 | LOCAL | 40 | 3j | — |
| `MAT_CUI_018` | Cuir de Golem | T3 | 45 | LOCAL | 8 | semaine | Niv. 25+ |
| `MAT_CUI_005` | Rouage Précieux | T3 | 40 | LOCAL | 10 | semaine | — |
| `MAT_HRB_024` | Herbe de Résine | T2 | 5 | LOCAL | 30 | 3j | — |
| `MAT_HRB_011` | Pétale de Rose Grise | T2 | 5 | LOCAL | 30 | 3j | — |
| `MAT_HRB_016` | Herbe des Ruines | T3 | 5 | LOCAL | 25 | 3j | — |
| `MAT_HRB_003` | Prêle des Vapeurs | T1 | 5 | LOCAL | 30 | 3j | — |

## 3. Politique de rachat
- **Rachète** : cuirs bruts, carapaces et résines de tannage (`MAT_CUI_004/018`, `MAT_HRB_024`) à 25 %.
- **Refuse** : viande, gemmes, objets liés.

## 4. Ancrage zonal
Le Tanneur `NPC_FRE_31` transforme les peaux du Marché en cuir ouvré. Une peau de son atelier « porte un sceau inconnu » gravé sous le poil — ni la marque d'un dompteur, ni celle d'un mob répertorié ; il l'a poussée au fond, là où le Gardien des Dépouilles `NPC_FRE_97` range ce qui « bouge la nuit ».

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_FRE_31` · `!buy <Item_ID>` · `!sell <Item_ID>`
- GM : `!sys_market_price` · `!sys_shop_restock SHOP_FRE_31` — IA : `SYS_SET_SHOP_PRICES`, `SYS_SHOP_RESTOCK`, `SYS_GRANT_ITEM`
