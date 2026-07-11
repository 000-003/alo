# Lotus Flottant Doré (`DEC_PLT_005`)

## Identification Cardinal
- **Item_ID** : `DEC_PLT_005`
- **Catégorie** : Décoration · **Type** : Plante / Jardin (`PLT`)
- **Tier** : T2 · **Rareté** : Peu commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_exp_pct` **+2 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; la méditation devant le lotus « clarifie » l'esprit |
| Cumul / plafond | Catégorie `rest_exp` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : horticulteur Puca de Lioda (`ZONE_PUC_CAP_001`) ou de toute capitale à jardin d'eau.
- **Recette** : 3× `MAT_HRB_018` (Fleur de Lotus) + 1× coupe d'eau bénite *(article de série)* — horticulture Nv.15.
- **Prix** : 1 200 ¥ (achat) · 300 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Le lotus, né de la vase et pourtant immaculé, est l'emblème des Puca méditants. Flottant dans une simple coupe, il rappelle qu'aucune boue de départ ne condamne à rester impur. On dit qu'un joueur qui médite chaque soir devant son lotus grandit d'un rien plus vite — non en niveau, mais en sagesse.

## Intégration Bot
- Joueur : `!decorate DEC_PLT_005` — GM : `!sys_give DEC_PLT_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_PLT_005, 1)`
