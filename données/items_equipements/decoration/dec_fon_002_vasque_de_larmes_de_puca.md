# Vasque de Larmes de Puca (`DEC_FON_002`)

## Identification Cardinal
- **Item_ID** : `DEC_FON_002`
- **Catégorie** : Décoration · **Type** : Fontaine (`FON`)
- **Tier** : T3 · **Rareté** : Rare · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Puca (fabrication)

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_exp_pct` **+3 %** |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; la mélodie de la vasque « accorde » l'esprit à l'étude |
| Cumul / plafond | Catégorie `rest_exp` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : luthier-fontainier Puca de Lioda (`ZONE_PUC_CAP_001`) ; les Puca, race de musiciens, accordent chaque goutte.
- **Recette** : 3× `MAT_DRP_014` (Larme de Puca) + 6× `MAT_MIN_009` (Granit de Granzam, vasque) + 1× `MAT_GEM_003` (Gemme de Brise) — fontainerie Nv.28.
- **Prix** : 7 000 ¥ (achat) · 1 750 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Les Puca pleurent en musique. Chaque larme, cristallisée puis remise en eau, tombe dans la vasque avec une note pure ; l'ensemble compose une mélodie sans fin, jamais deux fois la même. On étudie mieux, on retient mieux, bercé par ce hasard harmonieux. Les bardes de Lioda disent qu'y écouter longtemps révèle son propre thème intérieur.

## Intégration Bot
- Joueur : `!decorate DEC_FON_002` — GM : `!sys_give DEC_FON_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_FON_002, 1)`
