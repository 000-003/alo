# Pomme des Vergers d'Alne

## Identification Cardinal
- **Item_ID** : `CSM_NOU_013`
- **Catégorie** : Nourriture · **Type** : Ration neutre
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Rassasiement : régénère 6 HP/s hors combat pendant 45 s |
| Durée | 45 s (hors combat) |
| Cooldown | — (à la consommation) |
| Cumulable | NON — interrompu par le combat |

## Acquisition & Chaînage économique
- **Source** : étals de fruits d'Alne (`ZONE_NEU_CAP_001`) et marchés
- **Recette** : récolte (verger d'Alne)
- **Prix** : 15 Yrds (achat) · 3 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Rouge vif, croquante, sucrée juste ce qu'il faut : la pomme d'Alne est le petit plaisir bon marché de tout aventurier de passage à la capitale neutre. On raconte pourtant qu'un verger « introuvable » produirait des pommes bien plus étranges quelque part sous la ville — mais ça, c'est une histoire pour un autre jour, et un autre prix.

## Intégration Bot
- Joueur : `!use CSM_NOU_013` — GM : `!sys_give CSM_NOU_013 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_NOU_013, 1)`
