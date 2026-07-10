# Potion de Soin Suprême

## Identification Cardinal
- **Item_ID** : `CSM_POT_006`
- **Catégorie** : Potion · **Type** : Soin (HP)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 28 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Soin instantané de 950 HP |
| Durée | Instantané |
| Cooldown | 12 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire de capitale / craft alchimiste confirmé
- **Recette** : 4× Fleur-de-lune + 2× Racine d'ambre + 1× fiole scellée *(alchimie)*
- **Prix** : 750 Yrds (achat) · 187 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La limite haute de ce qu'une simple fiole peut contenir sans devenir un élixir. D'un rouge profond qui semble absorber la lumière, elle est le dernier cran avant de dépendre des soigneurs. Les vétérans l'appellent la « seconde chance » : celle qu'on garde pour l'instant où tout part de travers.

## Intégration Bot
- Joueur : `!use CSM_POT_006` — GM : `!sys_give CSM_POT_006 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_006, 1)`
