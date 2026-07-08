# Holy Light

## Identification Cardinal
- **Skill_ID** : `MAG_LUM_001`
- **Catégorie** : Magie — Lumière
- **Tier** : T1
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 45 |
| Temps d'Incantation | 1.2s |
| Cooldown | 10s |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Restaure 150 + (INT * 0.3) HP à une cible alliée unique.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast holy_light` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Le sort de soin mono-cible le plus fiable. Sa lumière dorée enveloppe l'allié blessé et referme ses plaies polygonales en un instant.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_LUM_001')`
