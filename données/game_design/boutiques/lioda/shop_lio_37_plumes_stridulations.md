# 🎭 Plumes & Stridulations — `SHOP_LIO_37`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_37` |
| **Propriétaire** | Plumeux des Prairies `NPC_LIO_37` |
| **Zone / Sous-lieu** | Lioda, Prairies Chantantes |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_006` | Plume Cendrée | T1 | 5 | LOCAL | 30 | 2j | — |
| `MAT_CUI_008` | Lueur Résiduelle | T2 | 25 | LOCAL | 12 | semaine | — |
| `MAT_CUI_015` | Croc de Wyrm Mineur | T2 | 30 | LOCAL | 6 | mois | Niv. 15+ |
| `MAT_CUI_016` | Peau de Serpent | T2 | 20 | LOCAL | 10 | semaine | — |
| `MAT_CUI_017` | Griffe d'Ours | T3 | 35 | LOCAL | 4 | mois | Niv. 20+ |
| `MAT_CUI_018` | Cuir de Golem | T3 | 45 | LOCAL | 3 | mois | Niv. 25+ |
| `CSM_POT_019` | Antidote | T1 | 55 | IMPORT | 12 | semaine | — |
| `CSM_CRI_001` | Cristal de Soin | T3 | 1890 | IMPORT | 4 | mois | Niv. 20+ |

## 3. Politique de rachat
- **Rachète** : Plumes rares (25%), fourrures (20%)
- **Refuse** : Armes, armures lourdes

## 4. Ancrage zonal
Le Plumeux des Prairies vend les plumes du grillon virtuose des Prairies Chantantes, prisées des luthiers pour leurs cordes. Ses matériaux LOCAUX (−20%) sont récoltés dans les Prairies. Les cuirs exotiques importés subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_37` · `!buy MAT_CUI_006` · `!plumes`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
