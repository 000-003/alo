# Phantom Arrow

## Identification Cardinal
- **Skill_ID** : `OSS_ARC_001`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Arc
- **Tier** : T3

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 120 |
| Coût Stamina | 40% de la jauge |
| Nombre de Hits | 3 |
| Multiplicateur Total | x4.5 |
| Post-Motion Delay | 2.0s (le joueur est vulnérable) |
| Niveau Requis | 30 |
| Déblocage | Maîtrise de l'arme au rang Avancé + Quête spéciale |

## Séquence d'Animation
L'OSS est composé de 3 frappes enchaînées. Le système calcule chaque hit individuellement avec répartition des dégâts.

## Effet Spécial
Les OSS ignorent 15% de la DEF ennemie. Si les 3 hits touchent tous, un bonus de dégâts "Perfect Chain" de +20% est appliqué.

## Lore
Tire trois flèches simultanées qui convergent vers la cible depuis trois angles différents. Si les trois touchent, un bonus de dégâts 'Trifecta' de +50% est appliqué. L'OSS signature de Sinon dans ALO.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_ARC_001')`
