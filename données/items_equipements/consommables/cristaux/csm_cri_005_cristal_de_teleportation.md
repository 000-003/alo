# Cristal de Téléportation

## Identification Cardinal
- **Item_ID** : `CSM_CRI_005`
- **Catégorie** : Cristal · **Type** : Téléportation
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 15 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Téléporte instantanément vers n'importe quelle ville déjà visitée (retire du groupe WA actuel, ajoute au groupe cible) |
| Durée | Instantané |
| Cooldown | 30 s |
| Cumulable | NON — **inutilisable en combat et en Anti-Crystal Zone** (salles de boss, donjons finaux) |

## Acquisition & Chaînage économique
- **Source** : maisons de cristaux de capitale, coffres de donjon (15%)
- **Recette** : 1× Éclat de saphir brut + 1× Papier-rune de destination + taille au cristal *(cristallerie)*
- **Prix** : 1 500 Yrds (achat) · 375 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le cristal bleu translucide, brillant en permanence, dont chaque aventurier rêve dès sa première marche interminable. Brisé, il transporte instantanément vers n'importe quelle ville déjà foulée — le voyage aboli d'un geste. Mais le système veille : impossible de l'utiliser en combat ou dans les zones sans-cristal, où fuir serait trop facile. Hérité tel quel du monde d'Aincrad, il reste le luxe le plus convoité du commerce.

## Intégration Bot
- Joueur : `!use CSM_CRI_005 [Nom_Ville]` — GM : `!sys_give CSM_CRI_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_CRI_005, 1)`
