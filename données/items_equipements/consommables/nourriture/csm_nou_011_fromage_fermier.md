# Fromage Fermier

## Identification Cardinal
- **Item_ID** : `CSM_NOU_011`
- **Catégorie** : Nourriture · **Type** : Ration neutre
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Rassasiement : régénère 10 HP/s hors combat pendant 60 s |
| Durée | 60 s (hors combat) |
| Cooldown | — (à la consommation) |
| Cumulable | NON — interrompu par le combat |

## Acquisition & Chaînage économique
- **Source** : épiceries et fermes (toutes villes)
- **Recette** : 1× lait de pâturage + présure *(laiterie)*
- **Prix** : 25 Yrds (achat) · 6 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un fromage jaune à croûte cireuse, produit dans les fermes autour d'Alne et vendu à la part. Plus nourrissant que le pain, il tient au corps toute une matinée de marche. Les Cait Sith en raffolent — un préjugé sur leur peuple qui, pour une fois, se vérifie largement dans les statistiques de vente.

## Intégration Bot
- Joueur : `!use CSM_NOU_011` — GM : `!sys_give CSM_NOU_011 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_NOU_011, 1)`
