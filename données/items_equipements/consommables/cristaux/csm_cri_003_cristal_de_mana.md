# Cristal de Mana

## Identification Cardinal
- **Item_ID** : `CSM_CRI_003`
- **Catégorie** : Cristal · **Type** : Mana instantané (MP)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 22 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Restaure 500 MP — **ignore le cooldown des potions** |
| Durée | Instantané |
| Cooldown | 5 s (propre aux cristaux) |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : maisons de cristaux de capitale, coffres de donjon (12%)
- **Recette** : 1× Éclat de saphir brut + 1× Fleur-de-lune condensée + taille au cristal *(cristallerie)*
- **Prix** : 1 500 Yrds (achat) · 375 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le pendant azuré du cristal de soin, salut des archimages à sec au pire moment. Là où la potion fait patienter, le cristal rend le mana à l'instant — de quoi enchaîner une seconde grande incantation sans laisser au boss le temps de respirer. Les mages de raid en gardent une poignée en réserve, jalousement, comme un dernier atout.

## Intégration Bot
- Joueur : `!use CSM_CRI_003` — GM : `!sys_give CSM_CRI_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_CRI_003, 1)`
