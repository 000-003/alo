# Coup de Boutoir

## Identification Cardinal
- **Skill_ID** : `OSS_LAN_002`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Lance
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
Un coup d'épaulé simple mais efficace. Le joueur plante ses pieds et pousse la lance en avant, transperçant l'ennemi d'un mouvement rectiligne.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Novice
- **Commande** : `!learn_skill OSS_LAN_002` puis `!cast coup_de_boutoir` en combat

## Lore (Encyclopédie d'Argo)
Le movement de base de la lance, enseigné aux soldats dès leur premier jour. La simplicité qui sauve des vies.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_LAN_002')`
