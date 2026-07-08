# Spiral Thrust

## Identification Cardinal
- **Skill_ID** : `OSS_LAN_001`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Lance
- **Tier** : T2

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 85 |
| Coût Stamina | 30% de la jauge |
| Nombre de Hits | 2 |
| Multiplicateur Total | x3.8 |
| Post-Motion Delay | 1.5s (le joueur est vulnérable) |
| Niveau Requis | 20 |
| Déblocage | Maîtrise de l'arme au rang Avancé + Quête spéciale |

## Séquence d'Animation
L'OSS est composé de 2 frappes enchaînées. Le système calcule chaque hit individuellement avec répartition des dégâts.

## Effet Spécial
Les OSS ignorent 15% de la DEF ennemie. Si les 2 hits touchent tous, un bonus de dégâts "Perfect Chain" de +20% est appliqué.

## Lore
Deux coups de lance en rotation hélicoïdale. Le premier est une estocade perforante, le second un balayage circulaire. L'attaque couvre un arc de 360° autour du lancier, protégeant ses flancs.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_LAN_001')`
