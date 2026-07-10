# Bénédiction du Forgeron

## Identification Cardinal
- **Skill_ID** : `OSS_MAS_004`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Masse
- **Tier** : T2 · **Rareté** : Rare

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 20 |
| Coût Stamina | 25% de la jauge |
| Nombre de Hits | 2 |
| Multiplicateur Total | ×2.0 |
| Post-Motion Delay | 1.0s (le joueur est vulnérable) |
| Niveau Requis | 12 |
| Déblocage | Maîtrise Confirmé |

## Séquence d'Animation
Le joueur frappe l'ennemi puis se renforce : le premier coup inflige des dégâts, le second améliore la prochaine attaque du groupe. Un skill de soutien offensif.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Confirmé
- **Commande** : `!learn_skill OSS_MAS_004` puis `!cast benediction_du_forgeron` en combat

## Lore (Encyclopédie d'Argo)
Un skill inventé par un forgeron qui en avait assez d'être mis à l'écart des combats. Il prouve qu'un coup de marteau peut être un buff.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_MAS_004')`
