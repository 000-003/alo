# Antidote

## Identification Cardinal
- **Item_ID** : `CSM_POT_019`
- **Catégorie** : Potion · **Type** : Dissipation (poison)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 3 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Purge le statut Poison (1 pile) |
| Durée | Instantané |
| Cooldown | 8 s |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes)
- **Recette** : 1× Herbe-purge + 1× eau claire *(alchimie mineure)*
- **Prix** : 40 Yrds (achat) · 10 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Vert, amer, et sentant la vase — personne ne boit d'antidote par plaisir. Mais dans les marais de Duskarn ou les tanières où les serpents crachent, c'est lui qui fait la différence entre une frayeur et une résurrection. Règle d'Argo : deux antidotes par excursion en zone venimeuse, jamais zéro.

## Intégration Bot
- Joueur : `!use CSM_POT_019` — GM : `!sys_give CSM_POT_019 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_019, 1)`
