# Meteor Storm

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_003`
- **Catégorie** : Magie — Feu
- **Tier** : T4
- **Race Affinité** : Salamandre (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 250 |
| Temps d'Incantation | 5.0s |
| Cooldown | 120s |
| Niveau Requis | 60 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Invoque une pluie de météorites sur une zone de 20m. Inflige 800 + (INT * 0.8) dégâts de Feu à toutes les cibles. Les alliés subissent 50% des dégâts (Friendly Fire).

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast meteor_storm` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Le sort ultime de la magie du feu. Son incantation dure 5 secondes, durant lesquelles le ciel d'ALfheim vire au rouge. Son Friendly Fire en fait une arme à double tranchant que seuls les mages les plus disciplinés utilisent.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_003')`
