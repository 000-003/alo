# Purge Complète

## Identification Cardinal
- **Item_ID** : `CSM_POT_025`
- **Catégorie** : Potion · **Type** : Dissipation (tous statuts négatifs)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 26 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Purge tous les statuts négatifs (poison, brûlure, gel, malédiction, saignement, Vacarme) |
| Durée | Instantané |
| Cooldown | 30 s |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire de capitale / craft alchimiste confirmé
- **Recette** : 2× Herbe-purge + 1× Sel-de-lune + 1× Racine d'ambre + 1× fiole scellée *(alchimie)*
- **Prix** : 600 Yrds (achat) · 150 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La fiole « en cas de tout » : un mélange laiteux qui balaie d'un trait la collection complète des misères qu'un donjon peut infliger. Chère à produire, elle se réserve aux instants critiques — quand on cumule trois debuffs et qu'on n'a plus le temps de choisir lequel purger. Un raid organisé en garde toujours quelques-unes pour ses tanks.

## Intégration Bot
- Joueur : `!use CSM_POT_025` — GM : `!sys_give CSM_POT_025 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_025, 1)`
