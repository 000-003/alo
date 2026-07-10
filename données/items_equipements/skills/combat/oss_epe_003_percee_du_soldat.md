# Percée du Soldat

## Identification Cardinal
- **Skill_ID** : `OSS_EPE_003`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Épée 1M
- **Tier** : T1 · **Rareté** : Commun

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 10 |
| Coût Stamina | 15% de la jauge |
| Nombre de Hits | 2 |
| Multiplicateur Total | ×1.4 |
| Post-Motion Delay | 0.5s (le joueur est vulnérable) |
| Niveau Requis | 4 |
| Déblocage | Maîtrise Novice |

## Séquence d'Animation
Le joueur prend son élan et plonge en avant, l'épée tendue comme une lance. Suit un second coup porté en remontant la lame de bas en haut.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Novice
- **Commande** : `!learn_skill OSS_EPE_003` puis `!cast percee_du_soldat` en combat

## Lore (Encyclopédie d'Argo)
Une technique héritée des tactiques d'infanterie légère. Simple mais fiable, elle reste populaire chez les débutants.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_EPE_003')`
