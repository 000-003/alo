# Élixir de Vie

## Identification Cardinal
- **Item_ID** : `CSM_POT_007`
- **Catégorie** : Potion · **Type** : Soin (HP)
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 34 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Soin instantané de 1 800 HP |
| Durée | Instantané |
| Cooldown | 15 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : maître-alchimiste de capitale (craft) / marché noir
- **Recette** : 3× Racine d'ambre + 1× Larme d'Yggdrasil (goutte) + 1× flacon de cristal *(alchimie experte)*
- **Prix** : 1 600 Yrds (achat) · 400 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un flacon de cristal empli d'un liquide doré qui brille faiblement dans le noir. Chaque élixir contient une goutte de sève d'Yggdrasil, et c'est pourquoi il coûte le prix d'une armure : on ne fabrique pas de la vie avec de l'herbe de bord de route. Les raids d'endgame les comptent à l'unité, comme des flèches.

## Intégration Bot
- Joueur : `!use CSM_POT_007` — GM : `!sys_give CSM_POT_007 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_007, 1)`
