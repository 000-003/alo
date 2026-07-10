# Parchemin de Purification

## Identification Cardinal
- **Item_ID** : `CSM_PAR_010`
- **Catégorie** : Parchemin · **Type** : Utilitaire (purification d'objet)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 16 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Retire une malédiction mineure posée sur un objet équipé (débloque le retrait) |
| Durée | Instantané |
| Cooldown | 10 s |
| Cumulable | NON — sans effet sur les malédictions de boss/T5 |

## Acquisition & Chaînage économique
- **Source** : temples d'Alne, scribes de Lioda
- **Recette** : 1× Papier-rune + 1× Sel-de-lune + eau bénite *(scribe sacré)*
- **Prix** : 175 Yrds (achat) · 43 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Certains objets ramassés dans les ruines refusent qu'on les retire — ils « collent » à la peau, murmurent, tirent la vitalité goutte à goutte. Ce parchemin brise ces liens mineurs et rend l'objet inerte, purifié. Contre les malédictions de boss, en revanche, il ne peut rien : là, il faut un rituel, une quête, ou beaucoup de regrets.

## Intégration Bot
- Joueur : `!use CSM_PAR_010` — GM : `!sys_give CSM_PAR_010 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_PAR_010, 1)`
