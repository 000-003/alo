# Frappe Sourde

## Identification Cardinal
- **Skill_ID** : `OSS_MAS_003`
- **Catégorie** : Original Sword Skill (OSS)
- **Type d'Arme** : Masse
- **Tier** : T1 · **Rareté** : Commun

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 10 |
| Coût Stamina | 16% de la jauge |
| Nombre de Hits | 2 |
| Multiplicateur Total | ×1.5 |
| Post-Motion Delay | 0.5s (le joueur est vulnérable) |
| Niveau Requis | 5 |
| Déblocage | Maîtrise Novice |

## Séquence d'Animation
Deux coups assénés avec un bruit sourd caractéristique. La masse s'abat lourdement sur l'ennemi qui encaisse sans pouvoir esquiver.

## Effet Spécial
Les OSS ignorent **15% de la DEF** ennemie. Perfect Chain +20%.

## Acquisition (Maîtrise d'arme)
- **Déblocage** : Maîtrise Novice
- **Commande** : `!learn_skill OSS_MAS_003` puis `!cast frappe_sourde` en combat

## Lore (Encyclopédie d'Argo)
Un skill qui ne paie pas de mine mais qui brise les os. Les squelettes du Premier Étage le craignent particulièrement.

## Commande IA
- `SYS_GRANT_OSS(Avatar_ID, 'OSS_MAS_003')`
