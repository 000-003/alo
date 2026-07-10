# Lame du Vent

## Identification Cardinal
- **Skill_ID** : `OSS_KAT_002`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Katana
- **Tier** : T1 · **Rareté** : Commun

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 8 |
| Coût Stamina | 12% de la jauge |
| Nombre de Hits | 1 |
| Multiplicateur Total | ×1.2 |
| Post-Motion Delay | 0.5s (le joueur est vulnérable) |
| Niveau Requis | 1 |
| Déblocage | Maîtrise Novice |

## Séquence d'Animation
Un iai rapide : le katana est dégainé et rengainé en une fraction de seconde. La lame trace un arc argenté dans l'air, aussi rapide qu'une bourrasque.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Novice
- **Commande** : `!learn_skill OSS_KAT_002` puis `!cast lame_du_vent` en combat

## Lore (Encyclopédie d'Argo)
Le premier skill que tout katana apprend. La vitesse de dégainage est primordiale, car un samouraï se définit par la rapidité de sa lame.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_KAT_002')`
