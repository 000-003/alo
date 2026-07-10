# 🎭 Fausses Partitions — `SHOP_LIO_84`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_84` |
| **Propriétaire** | Faussaire de Partitions `NPC_LIO_84` |
| **Zone / Sous-lieu** | Lioda, Bois des Échos (interdit) |
| **Type** | MARCHÉ NOIR |
| **Accès** | condition (introduction, mot de passe) |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_036` | Sirop de Braise Éteinte | T2 | 160 | LOCAL | 4 | semaine | Niv. 15+ |
| `CSM_POT_039` | Antidote de Fond | T2 | 160 | LOCAL | 4 | semaine | — |
| `CSM_POT_040` | Sérum Neutralisant | T3 | 480 | LOCAL | 3 | semaine | Niv. 20+ |
| `WPN_BAG_007` | Diapason de Silence | T3 | 7000 | IMPORT | 1 | mois | Niv. 30+, rare |
| `WPN_DAG_005` | Lame Furtive du Zéphyr | T3 | 6020 | IMPORT | 1 | mois | Niv. 25+ |

## 3. Politique de rachat
- **Rachète** : Partitions contrefaites (30%), parchemins (20%)
- **Refuse** : Armes, armures, objets physiques

## 4. Ancrage zonal
Le Faussaire de Partitions contrefait les partitions interdites dans le Bois des Échos. Ses articles LOCAUX (−20%) sont des mixtures illicites. Les baguettes et dagues importées subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_84` · `!buy CSM_POT_036` · `!falsifie`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
