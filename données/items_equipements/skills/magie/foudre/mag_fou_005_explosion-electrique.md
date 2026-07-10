# Explosion Électrique

## Identification Cardinal
- **Skill_ID** : `MAG_FOU_005`
- **Catégorie** : Magie — Foudre
- **Tier** : T2 · **Rareté** : Peu Commune
- **Race Affinité** : Imp (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 115 |
| Temps d'Incantation | 2.0s |
| Cooldown | 10 |
| Niveau Requis | 14 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Explosion électrique : décharge sphérique endommageant tous les ennemis proches.

## Incantation
*Le joueur tape `!cast explosion-electrique` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Vork NPC_VOU_29
- **Prix d'apprentissage** : 1500 Yrds
- **Commande** : `!learn_skill MAG_FOU_005`

## Lore (Encyclopédie d'Argo)
Explosion ayant jadis alimenté toute la ville de Duskarn.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FOU_005')`
