# Poisson Fumé

## Identification Cardinal
- **Item_ID** : `CSM_NOU_016`
- **Catégorie** : Nourriture · **Type** : Ration neutre
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Rassasiement : régénère 6 HP/s + 6 MP/s hors combat pendant 60 s |
| Durée | 60 s (hors combat) |
| Cooldown | — (à la consommation) |
| Cumulable | NON — interrompu par le combat |

## Acquisition & Chaînage économique
- **Source** : ports et marchés aux poissons (Archipel d'Écume, Alne)
- **Recette** : 1× poisson de lac + fumage au bois-vent *(pêcherie)*
- **Prix** : 30 Yrds (achat) · 7 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Fumé lentement sur des copeaux odorants, ce poisson garde une chair dorée et un léger goût de résine. Les mages apprécient qu'il rende un peu de mana en plus de la vitalité — rareté chez une ration de premier prix. Sur les pontons de l'Archipel, on le vend enfilé sur des brochettes de roseau, encore tiède.

## Intégration Bot
- Joueur : `!use CSM_NOU_016` — GM : `!sys_give CSM_NOU_016 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_NOU_016, 1)`
