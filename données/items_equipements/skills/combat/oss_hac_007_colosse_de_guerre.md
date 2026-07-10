# Colosse de Guerre

## Identification Cardinal
- **Skill_ID** : `OSS_HAC_007`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Hache
- **Tier** : T3 · **Rareté** : Épique

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 48 |
| Coût Stamina | 48% de la jauge |
| Nombre de Hits | 6 |
| Multiplicateur Total | ×3.5 |
| Post-Motion Delay | 2.0s (le joueur est vulnérable) |
| Niveau Requis | 28 |
| Déblocage | Maîtrise Confirmé + Entraîneur |

## Séquence d'Animation
Le joueur active une aura de colosse, augmentant sa taille perçue. Six coups balayants écrasent tout sur son passage, repoussant les ennemis les plus lourds.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Confirmé + Entraîneur
- **Commande** : `!learn_skill OSS_HAC_007` puis `!cast colosse_de_guerre` en combat

## Lore (Encyclopédie d'Argo)
Les tanks utilisent ce skill pour attirer l'attention des boss. Difficile d'ignorer un guerrier géant qui vous frappe avec une hache démesurée.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_HAC_007')`
