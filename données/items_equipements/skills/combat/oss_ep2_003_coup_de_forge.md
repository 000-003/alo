# Coup de Forge

## Identification Cardinal
- **Skill_ID** : `OSS_EP2_003`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Épée 2M
- **Tier** : T1 · **Rareté** : Commun

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 12 |
| Coût Stamina | 18% de la jauge |
| Nombre de Hits | 2 |
| Multiplicateur Total | ×1.5 |
| Post-Motion Delay | 0.5s (le joueur est vulnérable) |
| Niveau Requis | 5 |
| Déblocage | Maîtrise Novice |

## Séquence d'Animation
Deux coups descendants portés avec la force d'un marteau de forgeron. Le joueur soulève l'épée au-dessus de sa tête et l'abat avec tout son poids, deux fois.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Novice
- **Commande** : `!learn_skill OSS_EP2_003` puis `!cast coup_de_forge` en combat

## Lore (Encyclopédie d'Argo)
Une technique inventée par un forgeron joueur qui trouvait que ses muscles servaient mieux au combat qu'à l'enclume.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_EP2_003')`
