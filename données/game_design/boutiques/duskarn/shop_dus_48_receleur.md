# 🌑 Receleur des Ombres, Marché Noir du Bazar — `SHOP_DUS_48`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_DUS_48` |
| **Propriétaire** | Receleur des Ombres `NPC_DUS_48` |
| **Zone / Sous-lieu** | Duskarn, Bazar des Ombres (caché) |
| **Type** | BLACK_MARKET |
| **Accès** | libre |

## 2. Inventaire (5 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `WPN_ARC_008` | Arc des Ombres Longues | T4 | 12 000 | LOCAL | 1 | mois | AFF>=85 |
| `MAT_DRP_005` | Essence de Vide | T3 | 400 | LOCAL | 2 | semaine | Niv.20+ |
| `MAT_DRP_006` | Cœur de Feu | T3 | 400 | LOCAL | 2 | semaine | Niv.20+ |
| `MAT_DRP_010` | Perle des Abysses | T3 | 700 | IMPORT Freelia | 1 | semaine | — |
| `MAT_DRP_017` | Éclat de Miroir | T3 | 400 | LOCAL | 2 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Objets « trouvés », artefacts d'ombre (25%)
- **Refuse** : Armes neuves, équipement certifié, objets de lumière sacrée

## 4. Ancrage zonal
Dans une arrière-salle du Bazar, il écoule les objets « trouvés ». L'Arc des Ombres Longues appartenait à un chasseur disparu.

## 5. Intégration Bot
- Joueur : `!blackmarket_dus · !fence_goods`
- GM : `!sys_market_price — IA : SYS_SET_SHOP_PRICES, SYS_GRANT_ITEM`
