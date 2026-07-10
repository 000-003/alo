# Viande Séchée

## Identification Cardinal
- **Item_ID** : `CSM_NOU_012`
- **Catégorie** : Nourriture · **Type** : Ration neutre
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Rassasiement : régénère 12 HP/s hors combat pendant 60 s |
| Durée | 60 s (hors combat) |
| Cooldown | — (à la consommation) |
| Cumulable | NON — interrompu par le combat |

## Acquisition & Chaînage économique
- **Source** : boucheries et comptoirs de chasse (toutes villes)
- **Recette** : 1× Viande de gibier + Sel-de-lune, séchage *(boucherie)*
- **Prix** : 30 Yrds (achat) · 7 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Des lanières de viande fumée et salée qui se mâchent longtemps et rassasient durablement. C'est la ration du chasseur qui ne veut pas allumer de feu et trahir sa position. Coriace, corsée, elle a nourri plus d'embuscades réussies que n'importe quel festin. À garder toujours : elle survit à tout, même à un naufrage.

## Intégration Bot
- Joueur : `!use CSM_NOU_012` — GM : `!sys_give CSM_NOU_012 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_NOU_012, 1)`
