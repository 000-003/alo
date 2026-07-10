# Tonique de Vitalité

## Identification Cardinal
- **Item_ID** : `CSM_POT_029`
- **Catégorie** : Potion · **Type** : Buff (VIT)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | +5% VIT (HP max) |
| Durée | 30 min |
| Cooldown | 5 s |
| Cumulable | NON — 1 buff potion + 1 buff nourriture max |

## Acquisition & Chaînage économique
- **Source** : boutique d'apothicaire (toutes villes) / craft alchimiste
- **Recette** : 1× Racine d'ambre + 1× Champignon-de-roche + 1× fiole de verre *(alchimie)*
- **Prix** : 140 Yrds (achat) · 35 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un tonique brun et terreux, au goût de racine mâchée, que les tanks Gnome avalent comme d'autres boivent de l'eau. Il épaissit la barre de vie juste assez pour encaisser un coup de plus — et un coup de plus, dans un donjon, c'est souvent tout ce qui compte. Les vétérans disent qu'il « a le goût du sol » de Granzam. Ils n'ont pas tort.

## Intégration Bot
- Joueur : `!use CSM_POT_029` — GM : `!sys_give CSM_POT_029 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_029, 1)`
