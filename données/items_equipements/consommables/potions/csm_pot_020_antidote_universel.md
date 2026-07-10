# Antidote Universel

## Identification Cardinal
- **Item_ID** : `CSM_POT_020`
- **Catégorie** : Potion · **Type** : Dissipation (poison + saignement)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 15 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Purge toutes les piles de Poison et de Saignement |
| Durée | Instantané |
| Cooldown | 12 s |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes) / craft alchimiste
- **Recette** : 2× Herbe-purge + 1× Charbon actif + 1× fiole de verre *(alchimie)*
- **Prix** : 150 Yrds (achat) · 37 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Là où l'antidote simple neutralise un venin, l'universel les balaie tous d'un coup — et arrête même les hémorragies. Son charbon actif lui donne une couleur d'encre inquiétante et un goût qu'aucun alchimiste n'a jamais réussi à améliorer. Les explorateurs de Marais de Brume ne partent jamais sans.

## Intégration Bot
- Joueur : `!use CSM_POT_020` — GM : `!sys_give CSM_POT_020 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_020, 1)`
