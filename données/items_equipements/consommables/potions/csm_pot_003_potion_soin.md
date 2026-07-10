# Potion de Soin

## Identification Cardinal
- **Item_ID** : `CSM_POT_003`
- **Catégorie** : Potion · **Type** : Soin (HP)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 10 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Soin instantané de 250 HP |
| Durée | Instantané |
| Cooldown | 10 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes) / craft alchimiste
- **Recette** : 3× Herbe-de-vie + 1× Fleur-de-lune + 1× fiole de verre *(alchimie)*
- **Prix** : 120 Yrds (achat) · 30 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le standard des groupes de niveau intermédiaire, la fiole rouge que les soigneurs distribuent avant chaque raid mineur. Sa recette est si répandue que chaque race la teinte à sa façon — plus cuivrée à Gattan, presque rose à Freelia. Un bon aventurier en garde toujours dix ; un aventurier prudent, vingt.

## Intégration Bot
- Joueur : `!use CSM_POT_003` — GM : `!sys_give CSM_POT_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_003, 1)`
