# Pain de Voyage

## Identification Cardinal
- **Item_ID** : `CSM_NOU_010`
- **Catégorie** : Nourriture · **Type** : Ration neutre
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Rassasiement : régénère 8 HP/s hors combat pendant 60 s |
| Durée | 60 s (hors combat) |
| Cooldown | — (à la consommation) |
| Cumulable | NON — interrompu par le combat |

## Acquisition & Chaînage économique
- **Source** : boulangeries et épiceries (toutes villes)
- **Recette** : 1× Farine de racine dure + 1× eau de source *(boulangerie)*
- **Prix** : 20 Yrds (achat) · 5 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La miche qui ne moisit jamais, compagne fidèle de tous les sacs d'aventurier. Sans saveur particulière mais toujours là quand on n'a rien d'autre, elle restaure lentement la vitalité à l'étape du soir. On dit qu'un aventurier reconnaît un débutant à la fraîcheur de son pain de voyage : les vétérans, eux, en ont toujours un vieux au fond du sac.

## Intégration Bot
- Joueur : `!use CSM_NOU_010` — GM : `!sys_give CSM_NOU_010 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_NOU_010, 1)`
