# Cristal de Soin Suprême

## Identification Cardinal
- **Item_ID** : `CSM_CRI_002`
- **Catégorie** : Cristal · **Type** : Soin instantané (HP)
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 36 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Soin instantané de 2 000 HP — **ignore le cooldown des potions** |
| Durée | Instantané |
| Cooldown | 5 s (propre aux cristaux) |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : maisons de cristaux de capitale, drops de boss de palier (8%)
- **Recette** : 1× Gemme de Granzam + 1× Larme d'Yggdrasil (goutte) + taille experte *(cristallerie)*
- **Prix** : 4 800 Yrds (achat) · 1 200 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La version d'endgame du cristal de soin : deux mille points de vie rendus en un éclat, sans délai, quand un boss de palier ne pardonne aucune erreur. Son prix ferait pâlir un débutant, mais les chefs de raid le comptent comme une dépense de combat, pas de confort. Un cristal, une vie sauvée, un raid qui continue — l'arithmétique est brutale et sans appel.

## Intégration Bot
- Joueur : `!use CSM_CRI_002` — GM : `!sys_give CSM_CRI_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_CRI_002, 1)`
