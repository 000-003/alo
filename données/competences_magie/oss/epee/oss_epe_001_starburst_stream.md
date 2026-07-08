# Starburst Stream

## Identification Cardinal
- **Skill_ID** : `OSS_EPE_001`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Épée à une main (Dual Wield)
- **Tier** : T5

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 300 |
| Coût Stamina | 80% de la jauge |
| Nombre de Hits | 16 |
| Multiplicateur Total | x8.0 |
| Post-Motion Delay | 3.5s (le joueur est vulnérable) |
| Niveau Requis | 80 |
| Déblocage | Maîtrise de l'arme au rang Avancé + Quête spéciale |

## Séquence d'Animation
L'OSS est composé de 16 frappes enchaînées. Le système calcule chaque hit individuellement avec répartition des dégâts.

## Effet Spécial
Les OSS ignorent 15% de la DEF ennemie. Si les 16 hits touchent tous, un bonus de dégâts "Perfect Chain" de +20% est appliqué.

## Lore
L'OSS légendaire de Kirito. 16 frappes enchaînées alternant les deux lames dans une séquence impossible à suivre à l'œil nu. Chaque hit génère une traînée d'étoiles bleues et dorées. L'ultime expression du Dual Wielding, une compétence si rare que le Système Cardinal ne l'a attribuée qu'à un seul joueur dans l'histoire de SAO.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_EPE_001') — Réservé aux joueurs ayant le temps de réaction le plus rapide du serveur`
