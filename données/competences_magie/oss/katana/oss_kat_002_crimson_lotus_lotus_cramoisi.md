# Crimson Lotus (Lotus Cramoisi)

## Identification Cardinal
- **Skill_ID** : `OSS_KAT_002`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Katana
- **Tier** : T4

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 200 |
| Coût Stamina | 70% de la jauge |
| Nombre de Hits | 7 |
| Multiplicateur Total | x7.0 |
| Post-Motion Delay | 3.0s (le joueur est vulnérable) |
| Niveau Requis | 55 |
| Déblocage | Maîtrise de l'arme au rang Avancé + Quête spéciale |

## Séquence d'Animation
L'OSS est composé de 7 frappes enchaînées. Le système calcule chaque hit individuellement avec répartition des dégâts.

## Effet Spécial
Les OSS ignorent 15% de la DEF ennemie. Si les 7 hits touchent tous, un bonus de dégâts "Perfect Chain" de +20% est appliqué.

## Lore
Sept frappes enflammées qui dessinent un lotus dans l'air. Chaque pétale est un coup de katana enveloppé de flammes. Le dernier coup (le cœur du lotus) inflige des dégâts de Feu bonus. Exclusif au Kagutsuchi.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_KAT_002') — Nécessite le katana Kagutsuchi équipé`
