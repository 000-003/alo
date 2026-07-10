# 🎭 Lingots Sonnants — `SHOP_LIO_67`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_67` |
| **Propriétaire** | Marchand de Cuivre `NPC_LIO_67` |
| **Zone / Sous-lieu** | Lioda, Atelier des Cordes |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_001` | Minerai de Fer | T1 | 5 | LOCAL | 35 | jour | — |
| `MAT_MIN_003` | Étain des Collines | T1 | 5 | LOCAL | 40 | jour | — |
| `MAT_MIN_009` | Granit de Granzam | T3 | 200 | LOCAL | 8 | semaine | Niv. 20+ |
| `MAT_MIN_023` | Scorie de Mithril | T3 | 480 | LOCAL | 4 | semaine | Niv. 25+ |
| `MAT_GEM_002` | Gemme d'Obsidienne | T3 | 310 | IMPORT | 4 | mois | Niv. 20+ |
| `WPN_DAG_001` | Dague de Fer | T1 | 210 | IMPORT | 3 | mois | — |
| `WPN_BOU_001` | Bouclier Rond en Bois | T1 | 250 | IMPORT | 3 | mois | — |
| `MAT_MIN_014` | Minerai d'Étain Fin | T3 | 490 | IMPORT | 6 | semaine | Niv. 15+ |

## 3. Politique de rachat
- **Rachète** : Lingots sonnants (25%), cuivre raffiné (20%)
- **Refuse** : Armes, armures, nourriture

## 4. Ancrage zonal
Le Marchand de Cuivre approvisionne l'Atelier des Cordes en lingots de qualité. Ses métaux LOCAUX (−20%) sont extraits des mines de Lioda. Les gemmes et minerais rares importés subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_67` · `!buy MAT_MIN_001` · `!sell MAT_MIN_001`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
