# Potion de Soin Majeure

## Identification Cardinal
- **Item_ID** : `CSM_POT_005`
- **Catégorie** : Potion · **Type** : Soin (HP)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 22 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Soin instantané de 700 HP |
| Durée | Instantané |
| Cooldown | 12 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire de capitale / craft alchimiste confirmé
- **Recette** : 3× Fleur-de-lune + 1× Racine d'ambre + 1× fiole scellée *(alchimie)*
- **Prix** : 450 Yrds (achat) · 112 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Ici commence le vrai luxe du soin : une potion qui ramène un tank du bord du gouffre en une gorgée. Sa fabrication exige de la racine d'ambre, ce qui la réserve aux boutiques de capitale. Les guildes en achètent des stocks entiers avant un donjon de palier — et se disputent la facture après.

## Intégration Bot
- Joueur : `!use CSM_POT_005` — GM : `!sys_give CSM_POT_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_005, 1)`
