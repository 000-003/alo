# Coup de Taille

## Identification Cardinal
- **Skill_ID** : `OSS_HAC_003`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Hache
- **Tier** : T1 · **Rareté** : Commun

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 12 |
| Coût Stamina | 18% de la jauge |
| Nombre de Hits | 2 |
| Multiplicateur Total | ×1.5 |
| Post-Motion Delay | 0.5s (le joueur est vulnérable) |
| Niveau Requis | 6 |
| Déblocage | Maîtrise Novice |

## Séquence d'Animation
Le joueur enchaîne un coup vertical et un coup horizontal. La croix formée par les deux entailles est brutale mais efficace.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Novice
- **Commande** : `!learn_skill OSS_HAC_003` puis `!cast coup_de_taille` en combat

## Lore (Encyclopédie d'Argo)
Un skill simple venu des abattoirs. Pas glamour, mais les monstres ne se soucient pas de l'esthétique de leur mort.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_HAC_003')`
