# Potion de Soin Supérieure

## Identification Cardinal
- **Item_ID** : `CSM_POT_004`
- **Catégorie** : Potion · **Type** : Soin (HP)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 15 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Soin instantané de 380 HP |
| Durée | Instantané |
| Cooldown | 10 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes) / craft alchimiste
- **Recette** : 4× Herbe-de-vie + 2× Fleur-de-lune + 1× fiole de verre *(alchimie)*
- **Prix** : 200 Yrds (achat) · 50 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Plus dense, presque sirupeuse, elle tache les doigts d'un rouge tenace que les guerriers portent comme une décoration. C'est la dernière potion « de confort » avant les prix qui piquent : après elle, se soigner devient un investissement. On la reconnaît à son bouchon cireux, scellé pour survivre aux chutes du sac.

## Intégration Bot
- Joueur : `!use CSM_POT_004` — GM : `!sys_give CSM_POT_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_004, 1)`
