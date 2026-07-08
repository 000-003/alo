# Skill Connect (Méta-Compétence)

## Identification Cardinal
- **Skill_ID** : `OSS_SKC_001`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Toutes armes
- **Tier** : T5

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 0 |
| Coût Stamina | 100% de la jauge |
| Nombre de Hits | 0 |
| Multiplicateur Total | x0 |
| Post-Motion Delay | 5.0s (le joueur est vulnérable) |
| Niveau Requis | 70 |
| Déblocage | Maîtrise de l'arme au rang Avancé + Quête spéciale |

## Séquence d'Animation
L'OSS est composé de 0 frappes enchaînées. Le système calcule chaque hit individuellement avec répartition des dégâts.

## Effet Spécial
Les OSS ignorent 15% de la DEF ennemie. Si les 0 hits touchent tous, un bonus de dégâts "Perfect Chain" de +20% est appliqué.

## Lore
Skill Connect n'est pas un OSS à proprement parler. C'est une méta-compétence qui permet d'enchaîner deux Sword Skills sans le Post-Motion Delay habituel. Le timing requis est de l'ordre de la milliseconde — si le joueur active le second skill exactement dans la fenêtre de 0.3s après la fin du premier, les deux se combinent sans délai. Un exploit du moteur Cardinal que Kirito a été le premier à découvrir.

## Commande IA
- `SYS_VALIDATE_SKILL_CONNECT(Avatar_ID, Skill_A, Skill_B) — Vérifie le timing`
