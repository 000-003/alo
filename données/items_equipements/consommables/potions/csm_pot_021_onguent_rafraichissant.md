# Onguent Rafraîchissant

## Identification Cardinal
- **Item_ID** : `CSM_POT_021`
- **Catégorie** : Potion · **Type** : Dissipation (brûlure)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 4 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Purge le statut Brûlure et retire 15 points de HEAT accumulés |
| Durée | Instantané |
| Cooldown | 8 s |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes, priorité Gattan/Voulg)
- **Recette** : 1× Mousse-de-source + 1× Menthe-des-glaces *(alchimie mineure)*
- **Prix** : 45 Yrds (achat) · 11 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un baume bleu-vert qui « chuinte » au contact de la peau brûlée, en dégageant une fraîcheur mentholée. Indispensable dès qu'on approche des territoires Salamander : il éteint les flammes accrochées à l'armure et fait tomber d'un cran la Chaleur d'une instance surchauffée. Les forgerons de Gattan en gardent un pot ouvert sur l'établi.

## Intégration Bot
- Joueur : `!use CSM_POT_021` — GM : `!sys_give CSM_POT_021 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_021, 1)`
