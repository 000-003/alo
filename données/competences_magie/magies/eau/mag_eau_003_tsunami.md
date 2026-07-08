# Tsunami

## Identification Cardinal
- **Skill_ID** : `MAG_EAU_003`
- **Catégorie** : Magie — Eau
- **Tier** : T4
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 220 |
| Temps d'Incantation | 4.5s |
| Cooldown | 120s |
| Niveau Requis | 55 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Invoque un mur d'eau de 30m balayant une ligne droite. Inflige 700 + (INT * 0.7) dégâts d'Eau et applique [Knockback] massif. Les Undines subissent 0 dégâts.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast tsunami` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Le sort le plus dévastateur de la magie aquatique. Son incantation nécessite un accès à un plan d'eau. Les Undines l'utilisent pour défendre leur archipel contre les invasions.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_EAU_003')`
