# Morsure du Serpent

## Identification Cardinal
- **Skill_ID** : `OSS_DAG_004`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Dague
- **Tier** : T2 · **Rareté** : Rare

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 18 |
| Coût Stamina | 26% de la jauge |
| Nombre de Hits | 2 |
| Multiplicateur Total | ×2.0 |
| Post-Motion Delay | 1.0s (le joueur est vulnérable) |
| Niveau Requis | 10 |
| Déblocage | Maîtrise Confirmé |

## Séquence d'Animation
Le joueur frappe deux fois en un mouvement sinueux, imitant l'attaque d'un serpent. La première morsure accroche, la seconde injecte le venin (dégâts sur la durée).

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Confirmé
- **Commande** : `!learn_skill OSS_DAG_004` puis `!cast morsure_du_serpent` en combat

## Lore (Encyclopédie d'Argo)
Un skill venimeux transmis par la Guilde des Vipères. Les joueurs l'apprécient pour sa capacité à empoisonner les ennemis coriaces.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_DAG_004')`
