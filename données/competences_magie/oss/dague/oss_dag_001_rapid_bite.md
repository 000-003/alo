# Rapid Bite

## Identification Cardinal
- **Skill_ID** : `OSS_DAG_001`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Dague
- **Tier** : T2

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 50 |
| Coût Stamina | 25% de la jauge |
| Nombre de Hits | 5 |
| Multiplicateur Total | x3.0 |
| Post-Motion Delay | 1.0s (le joueur est vulnérable) |
| Niveau Requis | 15 |
| Déblocage | Maîtrise de l'arme au rang Avancé + Quête spéciale |

## Séquence d'Animation
L'OSS est composé de 5 frappes enchaînées. Le système calcule chaque hit individuellement avec répartition des dégâts.

## Effet Spécial
Les OSS ignorent 15% de la DEF ennemie. Si les 5 hits touchent tous, un bonus de dégâts "Perfect Chain" de +20% est appliqué.

## Lore
Cinq coups de dague ultra-rapides ciblant les articulations de l'ennemi. Chaque hit a 10% de chance individuelle d'appliquer [Saignement] (2% HP/tour pendant 3 tours). L'arme des assassins Imps.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_DAG_001')`
