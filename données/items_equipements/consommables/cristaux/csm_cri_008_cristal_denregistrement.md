# Cristal d'Enregistrement

## Identification Cardinal
- **Item_ID** : `CSM_CRI_008`
- **Catégorie** : Cristal · **Type** : Marquage de point de rappel
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 10 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Enregistre la position actuelle (zone LOCATION) comme point de rappel du joueur |
| Durée | Instantané (marquage persistant) |
| Cooldown | — |
| Cumulable | NON — écrase le point de rappel précédent |

## Acquisition & Chaînage économique
- **Source** : maisons de cristaux et scribes de voyage (toutes villes)
- **Recette** : 1× Éclat de saphir brut + 1× Sel-de-lune + taille au cristal *(cristallerie)*
- **Prix** : 250 Yrds (achat) · 62 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un petit cristal terne qui « photographie » un lieu et le grave comme point de retour, à rappeler ensuite avec la pierre appropriée. Les explorateurs le brisent à l'entrée d'une zone lointaine pour ne pas avoir à refaire la route. Modeste et utilitaire, il est le compagnon discret des cartographes et des marchands de frontière.

## Intégration Bot
- Joueur : `!use CSM_CRI_008` — GM : `!sys_give CSM_CRI_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_CRI_008, 1)`
