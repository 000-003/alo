# 🕯️ Nécromancien des Âmes — `SHOP_PEN_84`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_PEN_84` |
| **Propriétaire** | Nécromancien des Âmes `NPC_PEN_84` |
| **Zone / Sous-lieu** | Penwether, Nécropole Antique (interdit) |
| **Type** | BLACK_MARKET |
| **Accès** | caché (nécropole interdite) |

## 2. Inventaire (4 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_DRP_006` | Cœur de Feu | T3 | 400 | LOCAL | 2 | 10j | Niv. 25+ |
| `MAT_DRP_005` | Essence de Vide | T3 | 400 | LOCAL | 2 | 10j | Niv. 25+ |
| `MAT_WOD_017` | Noyer des Gnomes — `MAT_WOD_017` | T3 | 145 | LOCAL | 3 | semaine | — |
| `CSM_POT_039` | Antidote de Fond | T2 | 280 | IMPORT | 3 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Âmes capturées (20%), Reliques nécrotiques (25%)
- **Refuse** : Objets vivants, équipement neuf

## 4. Ancrage zonal
Le Nécromancien opère dans la Nécropole Antique, une zone interdite où les morts numériques ne sont pas compilés.

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_PEN_84` · `!buy MAT_DRP_006` · `!sell MAT_DRP_006`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
