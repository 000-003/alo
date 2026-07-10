# Parchemin de Retour à la Cité Natale

## Identification Cardinal
- **Item_ID** : `CSM_PAR_002`
- **Catégorie** : Parchemin · **Type** : Retour (capitale de race)
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : Aucune (destination = capitale de la race du joueur)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Téléporte vers la capitale raciale du joueur (Swilvane, Gattan, Freelia, Lioda, Archipel, Duskarn, Granzam, Brokkheim, Penwether) |
| Durée | Canalisation 8 s (interrompue par les dégâts) |
| Cooldown | 60 s |
| Cumulable | NON — inutilisable en Anti-Crystal Zone |

## Acquisition & Chaînage économique
- **Source** : scribes des capitales raciales
- **Recette** : 1× Papier-rune + 1× Encre-de-seiche + sceau de cité *(scribe)*
- **Prix** : 60 Yrds (achat) · 15 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Chaque race grave sur ce parchemin le sceau de sa propre capitale, si bien qu'un même modèle ramène un Sylph à Swilvane et un Imp à Duskarn. C'est le mal du pays réduit à un carré de papier. Les jeunes aventuriers l'usent jusqu'à la corde ; les vétérans, eux, savent qu'on ne rentre jamais tout à fait au même endroit qu'on a quitté.

## Intégration Bot
- Joueur : `!use CSM_PAR_002` — GM : `!sys_give CSM_PAR_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_PAR_002, 1)`
