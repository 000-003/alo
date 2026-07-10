# Potion de Mana

## Identification Cardinal
- **Item_ID** : `CSM_POT_012`
- **Catégorie** : Potion · **Type** : Mana (MP)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 10 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Restaure 150 MP |
| Durée | Instantané |
| Cooldown | 10 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes) / craft alchimiste
- **Recette** : 3× Fleur-de-lune + 1× fiole de verre *(alchimie)*
- **Prix** : 130 Yrds (achat) · 32 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La ration de base de tout groupe équilibré : un tank sans potion de mana, ça n'existe pas, mais un mage sans potion de mana, c'est un mage mort. Sa couleur azur soutenu est devenue un symbole tacite — brandir une potion de mana vide, dans un raid, veut dire « couvrez-moi, je suis à sec ».

## Intégration Bot
- Joueur : `!use CSM_POT_012` — GM : `!sys_give CSM_POT_012 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_012, 1)`
