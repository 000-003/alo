# Soupe Claire

## Identification Cardinal
- **Item_ID** : `CSM_NOU_017`
- **Catégorie** : Nourriture · **Type** : Ration neutre
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Rassasiement : régénère 9 MP/s hors combat pendant 60 s |
| Durée | 60 s (hors combat) |
| Cooldown | — (à la consommation) |
| Cumulable | NON — interrompu par le combat |

## Acquisition & Chaînage économique
- **Source** : tavernes et auberges (toutes villes)
- **Recette** : 1× légumes des champs + 1× os à moelle, bouillon *(cuisine)*
- **Prix** : 20 Yrds (achat) · 5 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Chaude, transparente, presque monacale, la soupe claire ne remplit pas le ventre mais éclaircit l'esprit — elle rend du mana, pas de la vie. C'est le repas des mages fauchés et des érudits d'Alne qui ont dépensé leur dernier Yrd en parchemins. Modeste, mais réconfortante après une longue nuit de veille sur les grimoires.

## Intégration Bot
- Joueur : `!use CSM_NOU_017` — GM : `!sys_give CSM_NOU_017 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_NOU_017, 1)`
