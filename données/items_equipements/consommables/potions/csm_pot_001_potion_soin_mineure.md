# Potion de Soin Mineure

## Identification Cardinal
- **Item_ID** : `CSM_POT_001`
- **Catégorie** : Potion · **Type** : Soin (HP)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Soin instantané de 60 HP |
| Durée | Instantané |
| Cooldown | 10 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes)
- **Recette** : 1× Herbe-de-vie + 1× eau claire *(alchimie mineure)*
- **Prix** : 25 Yrds (achat) · 6 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La première fiole que tout aventurier glisse dans sa ceinture avant de franchir la porte d'une ville. Trouble, tièdes, au goût d'herbe écrasée, ces potions se vendent par caisses entières aux abords des zones de chasse débutantes. On dit qu'un joueur sans potion mineure est un joueur qui n'a pas encore compris qu'il allait mourir — moi comprise, la première fois.

## Intégration Bot
- Joueur : `!use CSM_POT_001` — GM : `!sys_give CSM_POT_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_001, 1)`
