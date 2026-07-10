# 🎭 Étal Cait Sith — `SHOP_LIO_91`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_91` |
| **Propriétaire** | Marchand Cait Sith `NPC_LIO_91` |
| **Zone / Sous-lieu** | Lioda, Quai du Lac-Tambour |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_CUI_003` | Glande Bouillante | T2 | 30 | LOCAL | 10 | semaine | — |
| `WPN_BAG_006` | Bâton de Chef d'Orchestre | T3 | 3840 | LOCAL | 1 | mois | Niv. 25+ |
| `WPN_DAG_003` | Stylet du Zéphyr | T2 | 1230 | IMPORT | 2 | mois | — |
| `WPN_RAP_003` | Rapière de Marée | T2 | 1330 | IMPORT | 2 | mois | — |
| `ARM_TET_029` | Serre-tête du Traqueur | T1 | 450 | IMPORT | 2 | mois | Niv. 15+ |
| `ARM_TET_030` | Masque du Chat de Gouttière | T2 | 1470 | IMPORT | 2 | mois | Niv. 20+ |
| `CSM_POT_004` | Potion de Soin Supérieure | T2 | 280 | IMPORT | 6 | semaine | — |
| `CSM_POT_009` | Potion de Régénération | T2 | 250 | IMPORT | 4 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Fourrures exotiques (30%), peaux rares (25%)
- **Refuse** : Armes lourdes, consommables bas de gamme

## 4. Ancrage zonal
Le Marchand Cait Sith visite le Quai du Lac-Tambour pour troquer fourrures contre instruments de Lioda. Ses fourrures LOCALES (−20%) viennent de Freelia. Les armes et armures importées subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_91` · `!buy MAT_CUI_003` · `!troque`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
