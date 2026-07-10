# Lame Tournoyante

## Identification Cardinal
- **Skill_ID** : `OSS_EPE_002`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Épée 1M
- **Tier** : T1 · **Rareté** : Commun

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 8 |
| Coût Stamina | 12% de la jauge |
| Nombre de Hits | 1 |
| Multiplicateur Total | ×1.3 |
| Post-Motion Delay | 0.5s (le joueur est vulnérable) |
| Niveau Requis | 2 |
| Déblocage | Maîtrise Novice |

## Séquence d'Animation
Le joueur effectue une rotation complète du buste, l'épée décrivant un cercle horizontal. Un seul coup tranchant est porté, mais le mouvement couvre un large angle frontal.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Novice
- **Commande** : `!learn_skill OSS_EPE_002` puis `!cast lame_tournoyante` en combat

## Lore (Encyclopédie d'Argo)
Le premier mouvement enseigné aux novices. Les vieux guerriers disent que sa simplicité cache une efficacité redoutable quand elle est parfaitement exécutée.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_EPE_002')`
