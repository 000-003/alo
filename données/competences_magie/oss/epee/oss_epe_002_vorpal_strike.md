# Vorpal Strike

## Identification Cardinal
- **Skill_ID** : `OSS_EPE_002`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Épée à une main
- **Tier** : T2

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 80 |
| Coût Stamina | 30% de la jauge |
| Nombre de Hits | 1 |
| Multiplicateur Total | x3.5 |
| Post-Motion Delay | 1.0s (le joueur est vulnérable) |
| Niveau Requis | 20 |
| Déblocage | Maîtrise de l'arme au rang Avancé + Quête spéciale |

## Séquence d'Animation
L'OSS est composé de 1 frappes enchaînées. Le système calcule chaque hit individuellement avec répartition des dégâts.

## Effet Spécial
Les OSS ignorent 15% de la DEF ennemie. Si les 1 hits touchent tous, un bonus de dégâts "Perfect Chain" de +20% est appliqué.

## Lore
Une estocade à pleine puissance qui concentre toute l'énergie du joueur dans un seul point. Le hit unique compense sa simplicité par une pénétration massive de l'armure (ignore 30% de la DEF). C'est le premier OSS que la plupart des épéistes apprennent dans ALO.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_EPE_002')`
