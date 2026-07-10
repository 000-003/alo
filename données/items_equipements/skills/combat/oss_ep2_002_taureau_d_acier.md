# Taureau d'Acier

## Identification Cardinal
- **Skill_ID** : `OSS_EP2_002`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Épée 2M
- **Tier** : T1 · **Rareté** : Commun

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 10 |
| Coût Stamina | 15% de la jauge |
| Nombre de Hits | 1 |
| Multiplicateur Total | ×1.4 |
| Post-Motion Delay | 0.5s (le joueur est vulnérable) |
| Niveau Requis | 3 |
| Déblocage | Maîtrise Novice |

## Séquence d'Animation
Le joueur charge tête baissée, l'épée tenue horizontalement, et percute l'ennemi avec tout le poids de son corps. Un coup puissant mais prévisible.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Novice
- **Commande** : `!learn_skill OSS_EP2_002` puis `!cast taureau_d_acier` en combat

## Lore (Encyclopédie d'Argo)
Un skill brut hérité des gladiateurs d'arène. Il ne paie pas de mine mais reste un classique chez les débutants.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_EP2_002')`
