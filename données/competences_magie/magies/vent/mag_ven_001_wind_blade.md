# Wind Blade

## Identification Cardinal
- **Skill_ID** : `MAG_VEN_001`
- **Catégorie** : Magie — Vent
- **Tier** : T1
- **Race Affinité** : Sylphe (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 30 |
| Temps d'Incantation | 0.8s |
| Cooldown | Aucun |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Projette une lame d'air tranchante infligeant 100 + (INT * 0.35) dégâts de Vent. Portée : 25m.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast wind_blade` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Rapide et invisible, la lame de vent est le sort parfait pour le harcèlement aérien. Les Sylphes la lancent en plein vol sans ralentir.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_VEN_001')`
