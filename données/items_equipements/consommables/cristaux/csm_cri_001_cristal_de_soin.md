# Cristal de Soin

## Identification Cardinal
- **Item_ID** : `CSM_CRI_001`
- **Catégorie** : Cristal · **Type** : Soin instantané (HP)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 22 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Soin instantané de 800 HP — **ignore le cooldown des potions** |
| Durée | Instantané |
| Cooldown | 5 s (propre aux cristaux) |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : maisons de cristaux de capitale, coffres de donjon (12%)
- **Recette** : 1× Éclat de saphir brut + 1× Herbe-de-vie condensée + taille au cristal *(cristallerie)*
- **Prix** : 1 350 Yrds (achat) · 337 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le trésor des raids : un cristal qu'on brise d'un geste pour se soigner *instantanément*, sans subir le délai qui bride les potions. C'est cette différence — l'immédiateté — qui justifie un prix trois fois supérieur. Hérité du système de SAO, il brille d'une lueur verte qui s'éteint dès qu'il a rendu la vie. On ne le gaspille pas : on le garde pour l'instant où une demi-seconde décide de tout.

## Intégration Bot
- Joueur : `!use CSM_CRI_001` — GM : `!sys_give CSM_CRI_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_CRI_001, 1)`
