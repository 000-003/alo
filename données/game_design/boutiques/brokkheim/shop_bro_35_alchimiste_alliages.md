# 🔨 Alchimiste des Alliages, Métaux composites — `SHOP_BRO_35`

## 1. Identification Cardinal
| Champ | Valeur |
|---|---|
| **SHOP_ID** | `SHOP_BRO_35` |
| **Propriétaire** | Alchimiste des Alliages `NPC_BRO_35` |
| **Zone / Sous-lieu** | Brokkheim, Halle du Marteau |
| **Type** | BOUTIQUE |
| **Accès** | libre |

## 2. Inventaire (8 articles)
| Item_ID | Nom | Tier | Prix (Yrds) | Origine | Stock | Restock | Condition |
|---|---|---|---|---|---|---|---|
| `MAT_MIN_008` | Obsidienne de Gattan | T3 | 300 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_MIN_009` | Granit de Granzam | T3 | 250 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_MIN_014` | Minerai d'Étain Fin | T3 | 350 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_DRP_005` | Essence de Vide | T3 | 500 | LOCAL | 2 | semaine | Niv. 20+ |
| `MAT_MIN_007` | Cristal de Brise | T2 | 60 | LOCAL | 5 | semaine | — |
| `MAT_WOD_016` | Acacia des Savanes — `MAT_WOD_016` | T2 | 22 | LOCAL | 5 | semaine | — |
| `ARM_TET_011` | Masque du Conscrit de Gattan | T1 | 300 | LOCAL | 10 | jour | — |
| `CSM_NOU_020` | Brochette Épicée | T2 | 95 | LOCAL | 5 | semaine | — |

## 3. Politique de rachat
- **Rachète** : Alliages T2 (25%), métaux rares (30%)
- **Refuse** : Armes, armures, consommables, gemmes

## 4. Ancrage zonal
Prépare des composites uniques. Prix locaux ×1.0 (R4 Brokkheim).

## 5. Intégration Bot
- Joueur : `!shop_list SHOP_BRO_35` · `!buy MAT_MIN_008` · `!sell MAT_MIN_008`
- GM : `!sys_market_price` — IA : `SYS_SET_SHOP_PRICES`, `SYS_GRANT_ITEM`
