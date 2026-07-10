# Ration de Campagne

## Identification Cardinal
- **Item_ID** : `CSM_NOU_014`
- **Catégorie** : Nourriture · **Type** : Ration neutre
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Rassasiement : régénère 10 HP/s + 5 MP/s hors combat pendant 60 s |
| Durée | 60 s (hors combat) |
| Cooldown | — (à la consommation) |
| Cumulable | NON — interrompu par le combat |

## Acquisition & Chaînage économique
- **Source** : intendances militaires (Voulg, Granzam) et comptoirs d'aventuriers
- **Recette** : 1× pain de voyage + 1× viande séchée + 1× fromage, conditionnés *(intendance)*
- **Prix** : 55 Yrds (achat) · 13 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le paquet tout-en-un des armées et des grandes guildes : pain, viande, fromage, le tout scellé dans une toile cirée. Elle restaure vie *et* mana, ce qui en fait le repas d'étape le plus efficace du bas niveau. Les recrues de Voulg apprennent à la manger en marchant — perdre du temps à s'asseoir, dans une forteresse, c'est déjà une faute.

## Intégration Bot
- Joueur : `!use CSM_NOU_014` — GM : `!sys_give CSM_NOU_014 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_NOU_014, 1)`
