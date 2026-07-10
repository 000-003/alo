# Flèche Radieuse

## Identification Cardinal
- **Skill_ID** : `MAG_LUM_002`
- **Catégorie** : Magie — Lumière
- **Tier** : T1 · **Rareté** : Commune
- **Race Affinité** : Leprechaun (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 45 |
| Temps d'Incantation | 1.25s |
| Cooldown | 2 |
| Niveau Requis | 4 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Flèche radieuse : projectile de lumière bénissant l'allié touché.

## Incantation
*Le joueur tape `!cast fleche-radieuse` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Rune NPC_LEP_33
- **Prix d'apprentissage** : 500 Yrds
- **Commande** : `!learn_skill MAG_LUM_002`

## Lore (Encyclopédie d'Argo)
Flèche radieuse bénissant les forgerons.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_LUM_002')`
