# Flèche du Chasseur

## Identification Cardinal
- **Skill_ID** : `OSS_ARC_002`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Arc
- **Tier** : T1 · **Rareté** : Commun

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 6 |
| Coût Stamina | 10% de la jauge |
| Nombre de Hits | 1 |
| Multiplicateur Total | ×1.2 |
| Post-Motion Delay | 0.5s (le joueur est vulnérable) |
| Niveau Requis | 1 |
| Déblocage | Maîtrise Novice |

## Séquence d'Animation
Un tir rapide et précis. Le chasseur bande son arc et décoche une flèche droite qui atteint sa cible en un éclair.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Novice
- **Commande** : `!learn_skill OSS_ARC_002` puis `!cast fleche_du_chasseur` en combat

## Lore (Encyclopédie d'Argo)
Le premier skill appris par tout archer. Les vieux chasseurs disent qu'un bon départ fait un bon archer.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_ARC_002')`
