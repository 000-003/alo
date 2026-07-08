# Star Splash

## Identification Cardinal
- **Skill_ID** : `OSS_RAP_003`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Rapière
- **Tier** : T3

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 140 |
| Coût Stamina | 50% de la jauge |
| Nombre de Hits | 8 |
| Multiplicateur Total | x5.5 |
| Post-Motion Delay | 2.5s (le joueur est vulnérable) |
| Niveau Requis | 40 |
| Déblocage | Maîtrise de l'arme au rang Avancé + Quête spéciale |

## Séquence d'Animation
L'OSS est composé de 8 frappes enchaînées. Le système calcule chaque hit individuellement avec répartition des dégâts.

## Effet Spécial
Les OSS ignorent 15% de la DEF ennemie. Si les 8 hits touchent tous, un bonus de dégâts "Perfect Chain" de +20% est appliqué.

## Lore
Huit estocades qui s'enchaînent comme une pluie d'étoiles. Chaque hit cible un point vital différent de l'ennemi, rendant l'esquive quasi impossible si la première frappe touche. L'arme brille d'un éclat stellaire pendant l'exécution.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_RAP_003')`
