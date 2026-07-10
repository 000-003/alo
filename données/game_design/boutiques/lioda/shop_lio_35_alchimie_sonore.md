# 🎭 Alchimie Sonore — `SHOP_LIO_35`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_35` |
| **Propriétaire** | Alchimiste des Sons `NPC_LIO_35` |
| **Zone / Sous-lieu** | Lioda, Quai du Lac-Tambour |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `CSM_POT_016` | Eau de Source de Lioda | T2 | 175 | LOCAL | 8 | semaine | Spécialité de Lioda — Restaure MP |
| `CSM_POT_017` | Rosée de Cristal Undine | T3 | 440 | LOCAL | 5 | mois | Restaure MP élevé, Niv. 20+ |
| `CSM_POT_025` | Purge Complète | T3 | 480 | LOCAL | 3 | mois | Niv. 25+ |
| `CSM_POT_026` | Larme de Dissipation | T3 | 440 | LOCAL | 4 | mois | Niv. 20+ |
| `CSM_POT_027` | Huile de Force du Berserker | T2 | 195 | IMPORT | 6 | semaine | Buff FORCE |
| `CSM_POT_033` | Résine Ignifuge | T2 | 210 | IMPORT | 6 | semaine | Résistance Feu |
| `CSM_POT_034` | Écaille de Givre | T2 | 210 | IMPORT | 6 | semaine | Résistance Glace |

## 3. Politique de rachat
- **Rachète** : Potions sonores (25%), ingrédients alchimiques (20%)
- **Refuse** : Armes, armures

## 4. Ancrage zonal
L'Alchimiste des Sons prépare des potions de voix et d'ouïe au Quai du Lac-Tambour, à base de carpe soprano et de rosée du lac. Ses potions LOCALES (−20%) sont uniques à Lioda. Les potions de buff importées subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_35` · `!buy CSM_POT_016` · `!sell CSM_POT_016`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
