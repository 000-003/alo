# Lance d'Eau

## Identification Cardinal
- **Skill_ID** : `MAG_EAU_001`
- **Catégorie** : Magie — Eau
- **Tier** : T1 · **Rareté** : Commune
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 30 |
| Temps d'Incantation | 1.0s |
| Cooldown | 0 |
| Niveau Requis | 1 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Lance d'eau pressurisée transperçant une cible unique.

## Incantation
*Le joueur tape `!cast lance-d-eau` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Selene NPC_ALN_70
- **Prix d'apprentissage** : 500 Yrds
- **Commande** : `!learn_skill MAG_EAU_001`

## Lore (Encyclopédie d'Argo)
Sort de base des pêcheurs undines d'Archipel.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_EAU_001')`
