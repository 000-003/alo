# Baume de Régénération Majeur

## Identification Cardinal
- **Item_ID** : `CSM_POT_010`
- **Catégorie** : Potion · **Type** : Soin (HP sur la durée)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 25 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Régénération de 100 HP/s pendant 10 s (1 000 HP au total) |
| Durée | 10 s |
| Cooldown | 25 s |
| Cumulable | NON — annulée par une potion de soin directe |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire de capitale / craft alchimiste confirmé
- **Recette** : 3× Fleur-de-lune + 1× Mousse-de-source + 1× Racine d'ambre *(alchimie)*
- **Prix** : 700 Yrds (achat) · 175 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un baume épais qu'on avale plutôt qu'on ne boit, laissant sur la langue un goût de miel et de résine. Il colmate les plaies sur dix secondes entières, ce qui le rend précieux pour les tanks qui n'ont pas une main libre à chaque échange. Les prêtres-guerriers de Lioda en enduisent leurs lames rituelles, ce qui n'a aucun effet mais fait très bel effet.

## Intégration Bot
- Joueur : `!use CSM_POT_010` — GM : `!sys_give CSM_POT_010 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_010, 1)`
