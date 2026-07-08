# Savage Fulcrum

## Identification Cardinal
- **Skill_ID** : `OSS_EPE_003`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Épée à une main
- **Tier** : T3

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 120 |
| Coût Stamina | 45% de la jauge |
| Nombre de Hits | 3 |
| Multiplicateur Total | x4.5 |
| Post-Motion Delay | 1.8s (le joueur est vulnérable) |
| Niveau Requis | 35 |
| Déblocage | Maîtrise de l'arme au rang Avancé + Quête spéciale |

## Séquence d'Animation
L'OSS est composé de 3 frappes enchaînées. Le système calcule chaque hit individuellement avec répartition des dégâts.

## Effet Spécial
Les OSS ignorent 15% de la DEF ennemie. Si les 3 hits touchent tous, un bonus de dégâts "Perfect Chain" de +20% est appliqué.

## Lore
Trois frappes en triangle — horizontale, verticale, diagonale — qui créent une onde de choc triangulaire. Les trois hits convergent vers le même point, ce qui garantit des dégâts maximaux si la première touche.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_EPE_003')`
