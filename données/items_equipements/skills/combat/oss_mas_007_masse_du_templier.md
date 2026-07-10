# Masse du Templier

## Identification Cardinal
- **Skill_ID** : `OSS_MAS_007`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Masse
- **Tier** : T3 · **Rareté** : Épique

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 48 |
| Coût Stamina | 48% de la jauge |
| Nombre de Hits | 6 |
| Multiplicateur Total | ×3.4 |
| Post-Motion Delay | 2.0s (le joueur est vulnérable) |
| Niveau Requis | 28 |
| Déblocage | Maîtrise Confirmé + Entraîneur |

## Séquence d'Animation
Le joueur invoque une aura sacrée autour de sa masse. Six coups lumineux frappent les ennemis, les dégâts étant augmentés contre les créatures maudites ou mortes-vivantes.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Confirmé + Entraîneur
- **Commande** : `!learn_skill OSS_MAS_007` puis `!cast masse_du_templier` en combat

## Lore (Encyclopédie d'Argo)
Les Templiers de l'Église d'Aincrad ont développé ce skill pour purifier les donjons maudits. Très efficace contre les zombies et les vampires.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_MAS_007')`
