# Potion de Mana Supérieure

## Identification Cardinal
- **Item_ID** : `CSM_POT_013`
- **Catégorie** : Potion · **Type** : Mana (MP)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 22 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Restaure 400 MP |
| Durée | Instantané |
| Cooldown | 12 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire de capitale / craft alchimiste confirmé
- **Recette** : 4× Fleur-de-lune + 1× Éclat de saphir brut + 1× fiole scellée *(alchimie)*
- **Prix** : 500 Yrds (achat) · 125 Yrds (revente)

## Lore (Encyclopédie d'Argo)
On y ajoute un éclat de saphir pilé, qui lui donne des reflets profonds et une capacité que les fioles ordinaires n'ont pas. Les mages d'assaut la sirotent entre deux sorts dévastateurs comme d'autres reprennent leur souffle. Chère, oui — mais moins chère qu'un raid raté faute de mana.

## Intégration Bot
- Joueur : `!use CSM_POT_013` — GM : `!sys_give CSM_POT_013 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_013, 1)`
