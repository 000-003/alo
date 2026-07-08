# Fire Lance

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_001`
- **Catégorie** : Magie — Feu
- **Tier** : T1
- **Race Affinité** : Salamandre (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 40 |
| Temps d'Incantation | 1.5s |
| Cooldown | Aucun |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Projette une lance de feu infligeant 120 + (INT * 0.4) dégâts de Feu à une cible unique.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast fire_lance` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Le sort le plus basique de la magie du feu. Les Salamandres l'apprennent dès l'enfance. La lance est composée de polygones de feu concentrés qui perforent les boucliers physiques.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_001')`
