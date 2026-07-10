# Brise-Montagne

## Identification Cardinal
- **Skill_ID** : `OSS_EP2_004`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Épée 2M
- **Tier** : T2 · **Rareté** : Rare

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 22 |
| Coût Stamina | 28% de la jauge |
| Nombre de Hits | 2 |
| Multiplicateur Total | ×2.2 |
| Post-Motion Delay | 1.0s (le joueur est vulnérable) |
| Niveau Requis | 14 |
| Déblocage | Maîtrise Confirmé |

## Séquence d'Animation
Le joueur saute et retombe sur l'ennemi, l'épée pointée vers le bas. L'impact crée une onde de choc qui repousse les ennemis proches. Un second coup horizontal suit.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Confirmé
- **Commande** : `!learn_skill OSS_EP2_004` puis `!cast brise-montagne` en combat

## Lore (Encyclopédie d'Argo)
Les nains des montagnes auraient développé cette technique pour briser les rochers. Elle fonctionne tout aussi bien sur les armures.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_EP2_004')`
