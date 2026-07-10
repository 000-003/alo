# Potion de Soin Légère

## Identification Cardinal
- **Item_ID** : `CSM_POT_002`
- **Catégorie** : Potion · **Type** : Soin (HP)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 5 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Soin instantané de 110 HP |
| Durée | Instantané |
| Cooldown | 10 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes)
- **Recette** : 2× Herbe-de-vie + 1× eau claire *(alchimie mineure)*
- **Prix** : 45 Yrds (achat) · 11 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La grande sœur de la Mineure : un doigt de fleur-de-lune y ajoute une teinte bleutée et un soupçon d'efficacité. C'est la potion des niveaux 5 à 8, celle qu'on achète en même temps que sa première vraie arme. Les alchimistes de rue jurent qu'elle guérit mieux si on la boit d'un trait — ils mentent, mais l'aplomb aide toujours.

## Intégration Bot
- Joueur : `!use CSM_POT_002` — GM : `!sys_give CSM_POT_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_002, 1)`
