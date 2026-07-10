# Coup de Poing

## Identification Cardinal
- **Skill_ID** : `OSS_MAS_002`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Masse
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
Un coup court et sec porté avec le bout de la masse. Pas élégant, mais l'impact fait toujours mal. Le mouvement est direct, sans fioriture.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Novice
- **Commande** : `!learn_skill OSS_MAS_002` puis `!cast coup_de_poing` en combat

## Lore (Encyclopédie d'Argo)
Les forgerons disent que manier une masse, c'est comme taper sur une enclume. La différence, c'est que l'enclume ne vous tape pas dessus.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_MAS_002')`
