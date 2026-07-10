# Parchemin de Sortie de Donjon

## Identification Cardinal
- **Item_ID** : `CSM_PAR_005`
- **Catégorie** : Parchemin · **Type** : Retour (entrée de donjon)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Téléporte de l'intérieur d'un donjon vers son entrée (zone LOCATION rattachée) |
| Durée | Canalisation 5 s (interrompue par les dégâts) |
| Cooldown | 30 s |
| Cumulable | NON — inutilisable dans une salle de boss active |

## Acquisition & Chaînage économique
- **Source** : scribes et comptoirs près des donjons (toutes villes)
- **Recette** : 2× Papier-rune + 1× Encre-de-seiche + 1× Champignon-de-roche *(scribe)*
- **Prix** : 120 Yrds (achat) · 30 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La corde de rappel de tout explorateur : brisé au fond d'un donjon, il renvoie sagement à l'entrée sans devoir refaire le chemin en sens inverse. Inutilisable une fois la porte du boss franchie — le jeu ne laisse pas fuir si facilement une fois le combat engagé. Un groupe prudent en emporte un par membre ; un groupe téméraire regrette de ne pas l'avoir fait.

## Intégration Bot
- Joueur : `!use CSM_PAR_005` — GM : `!sys_give CSM_PAR_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_PAR_005, 1)`
