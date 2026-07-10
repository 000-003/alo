# Antidote de Fond

## Identification Cardinal
- **Item_ID** : `CSM_POT_039`
- **Catégorie** : Potion · **Type** : Anti-jauge D12 (DOT)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 18 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Stoppe tout dégât sur la durée (DOT) actif pendant 30 s |
| Durée | 30 s (immunité DOT) |
| Cooldown | 25 s |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes) / craft alchimiste
- **Recette** : 2× Herbe-purge + 1× Charbon actif + 1× fiole de verre *(alchimie)*
- **Prix** : 200 Yrds (achat) · 50 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Contre les environnements qui « grignotent » lentement la vie — brume acide, sève corrosive, air empoisonné — cet antidote coupe l'hémorragie de fond pendant une demi-minute. Les explorateurs du Marais de Brume et des zones à DOT le boivent en prévention, pas en réaction. Trente secondes de répit peuvent valoir la traversée entière d'une salle mortelle.

## Intégration Bot
- Joueur : `!use CSM_POT_039` — GM : `!sys_give CSM_POT_039 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_039, 1)`

## Note
Interagit avec la jauge/paramètre D12 `DOT` (dégâts environnementaux sur la durée). Immunité temporaire pilotable via `SYS_SET_ENV_HAZARD(Zone_ID, DOT, Valeur)`.
