# Cristal de Mana Suprême

## Identification Cardinal
- **Item_ID** : `CSM_CRI_004`
- **Catégorie** : Cristal · **Type** : Mana instantané (MP)
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 36 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Restaure 1 000 MP — **ignore le cooldown des potions** |
| Durée | Instantané |
| Cooldown | 5 s (propre aux cristaux) |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : maisons de cristaux de capitale, drops de boss de palier (8%)
- **Recette** : 1× Gemme de mana de Granzam + 1× Éclat de saphir pur + taille experte *(cristallerie)*
- **Prix** : 5 400 Yrds (achat) · 1 350 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Mille points de mana rendus d'un claquement de doigts : l'ultime filet de sécurité des lanceurs de sorts d'endgame. Sa gemme de mana taillée à Granzam le rend rare et ruineux, mais un archimage privé de mana au dernier tiers d'un combat de palier coûte bien plus cher. Il pulse doucement, comme un cœur bleu, jusqu'à l'instant où on le brise.

## Intégration Bot
- Joueur : `!use CSM_CRI_004` — GM : `!sys_give CSM_CRI_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_CRI_004, 1)`
