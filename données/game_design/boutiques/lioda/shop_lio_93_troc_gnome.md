# 🎭 Troc Gnome — `SHOP_LIO_93`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_LIO_93` |
| **Propriétaire** | Trafiquant Gnome `NPC_LIO_93` |
| **Zone / Sous-lieu** | Lioda, Atelier des Cordes |
| **Type** | ÉTAL |
| **Accès** | libre |

## 2. Inventaire (7 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_015` | Minerai de Mage | T3 | 360 | LOCAL | 4 | mois | Niv. 20+ |
| `MAT_WOD_009` | Bois d'Yggdrasil | T3 | 280 | LOCAL | 3 | mois | Niv. 25+ |
| `MAT_GEM_004` | Perle d'Undine | T3 | 365 | IMPORT | 4 | mois | Niv. 20+ |
| `MAT_GEM_007` | Diamant de Mithril | T4 | 1680 | IMPORT | 2 | mois | Niv. 30+, rare |
| `ARM_TET_046` | Casque de Prospecteur | T1 | 295 | IMPORT | 2 | mois | Niv. 15+ |
| `ARM_TET_048` | Casque à Lanterne | T2 | 1470 | IMPORT | 2 | mois | Niv. 20+ |
| `WPN_MAS_002` | Masse de Granit | T2 | 1540 | IMPORT | 2 | mois | Niv. 20+ |

## 3. Politique de rachat
- **Rachète** : Gemmes de Granzam (25%), cuivre (20%)
- **Refuse** : Armes lourdes, nourriture

## 4. Ancrage zonal
Le Trafiquant Gnome échange des gemmes de Granzam contre le cuivre de Lioda, à l'Atelier des Cordes. Ses minerais LOCAUX (−20%) viennent des mines de Lioda. Les gemmes et armures importées subissent la surtaxe IMPORT (+40%).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_LIO_93` · `!buy MAT_MIN_015` · `!troc_gnome`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
