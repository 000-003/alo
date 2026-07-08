# Tsujikaze (Vent du Carrefour)

## Identification Cardinal
- **Skill_ID** : `OSS_KAT_001`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Katana
- **Tier** : T2

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 90 |
| Coût Stamina | 35% de la jauge |
| Nombre de Hits | 3 |
| Multiplicateur Total | x4.0 |
| Post-Motion Delay | 1.5s (le joueur est vulnérable) |
| Niveau Requis | 25 |
| Déblocage | Maîtrise de l'arme au rang Avancé + Quête spéciale |

## Séquence d'Animation
L'OSS est composé de 3 frappes enchaînées. Le système calcule chaque hit individuellement avec répartition des dégâts.

## Effet Spécial
Les OSS ignorent 15% de la DEF ennemie. Si les 3 hits touchent tous, un bonus de dégâts "Perfect Chain" de +20% est appliqué.

## Lore
Trois coups en arc de cercle exécutés dans un mouvement fluide de dégainage. Le premier est horizontal, le second diagonal ascendant, le troisième vertical descendant. Klein l'utilise avec une maestria qui fait honneur à l'école de kenjutsu qu'il a créée dans ALO.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_KAT_001')`
