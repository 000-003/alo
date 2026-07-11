# Carré d'Herbes Aromatiques (`DEC_PLT_003`)

## Identification Cardinal
- **Item_ID** : `DEC_PLT_003`
- **Catégorie** : Décoration · **Type** : Plante / Jardin (`PLT`)
- **Tier** : T2 · **Rareté** : Peu commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `craft_cost_pct` **−3 %** (réduction des frais d'alchimie/cuisine lancées depuis le logement) |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — n'affecte que les frais, jamais les matériaux |
| Déclenchement | Passif ; l'aromate maison remplace un ingrédient d'appoint acheté |
| Cumul / plafond | Catégorie `craft_cost` **plafonnée à −5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : herboriste de toute capitale ; favori des joueurs-cuisiniers et alchimistes (cf. `T_JOBS`).
- **Recette** : 3× `MAT_HRB_005` (Herbe des Steppes) + 2× `MAT_HRB_001` (Lin Sylvestre) + 1× jardinière *(article de série)* — horticulture Nv.16.
- **Prix** : 1 500 ¥ (achat) · 375 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Thym des steppes, lin sauvage, une pincée de menthe des canaux : le carré aromatique du cuisinier chez lui est un petit trésor d'économie domestique. Nul besoin de courir chez l'herboriste pour une feuille manquante. Les grands chefs Cait Sith jurent que leurs meilleurs plats naissent sur le rebord de leur propre cuisine.

## Intégration Bot
- Joueur : `!decorate DEC_PLT_003` — GM : `!sys_give DEC_PLT_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_PLT_003, 1)`
