# Grande Table de Frêne (`DEC_FUR_003`)

## Identification Cardinal
- **Item_ID** : `DEC_FUR_003`
- **Catégorie** : Décoration · **Type** : Mobilier (`FUR`)
- **Tier** : T2 · **Rareté** : Peu commun · **Équipable** : NON
- **base_atk / base_def** : 0 / 0 · **Affinité raciale** : Aucune

## Effet (buff de logement)
| Paramètre | Valeur |
|---|---|
| Buff | `rest_exp_pct` **+2 %** (léger bonus d'EXP de repos — « bien-vivre ») |
| Portée | **Logement uniquement** (`T_PROPERTIES.deco_buffs`) — inactif en extérieur et en combat |
| Déclenchement | Passif au `!rest` ; symbolise un repas partagé entre convives invités |
| Cumul / plafond | Catégorie `rest_exp` **plafonnée à +5 % cumulés** par logement |

## Acquisition & Chaînage économique
- **Source** : ébéniste de toute capitale ; pièce d'apparat prisée des jeunes mariés.
- **Recette** : 10× `MAT_WOD_004` (Bois de Frêne) + 2× `MAT_MIN_002` (Cuivre Brut, clous) — menuiserie Nv.14.
- **Prix** : 1 000 ¥ (achat) · 250 ¥ (revente 25 %).

## Lore (Encyclopédie d'Argo)
Une tablée n'est jamais vide dans ALfheim : le Cardinal peuple les longues tables de convives fantômes le temps d'un banquet d'invités. Rassasié d'un repas partagé — fût-il codé —, l'avatar « digère » son expérience du jour un peu mieux durant le sommeil. Les guildes de bouche en font le cœur de leurs foyers.

## Intégration Bot
- Joueur : `!decorate DEC_FUR_003` — GM : `!sys_give DEC_FUR_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, DEC_FUR_003, 1)`
