# Parchemin de Retour de Guilde

## Identification Cardinal
- **Item_ID** : `CSM_PAR_004`
- **Catégorie** : Parchemin · **Type** : Retour (siège de guilde)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 10 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Téléporte vers le siège de la guilde du joueur (groupe GUILD) ; sans guilde, échoue |
| Durée | Canalisation 8 s (interrompue par les dégâts) |
| Cooldown | 60 s |
| Cumulable | NON — inutilisable en Anti-Crystal Zone |

## Acquisition & Chaînage économique
- **Source** : intendants de guilde et scribes de capitale
- **Recette** : 2× Papier-rune + 1× Encre-de-seiche + sceau de guilde *(scribe)*
- **Prix** : 140 Yrds (achat) · 35 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Frappé du blason de sa guilde, ce parchemin ramène droit au foyer commun, là où l'on range le butin et où l'on panse les querelles. Il ne fonctionne que si l'on appartient à une guilde — un rappel amer pour les solitaires. Les grandes compagnies en distribuent à tous leurs membres, gravés à la main par leur scribe attitré.

## Intégration Bot
- Joueur : `!use CSM_PAR_004` — GM : `!sys_give CSM_PAR_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_PAR_004, 1)`
