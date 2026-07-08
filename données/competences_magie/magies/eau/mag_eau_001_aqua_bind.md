# Aqua Bind

## Identification Cardinal
- **Skill_ID** : `MAG_EAU_001`
- **Catégorie** : Magie — Eau
- **Tier** : T1
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 35 |
| Temps d'Incantation | 1.0s |
| Cooldown | 15s |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Entrave la cible dans une sphère d'eau pendant 3s. La cible ne peut pas bouger ni attaquer mais peut caster des sorts.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast aqua_bind` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Le sort de contrôle fondamental des Undines. L'eau emprisonne la cible dans une bulle qui réduit ses mouvements à néant. Les tanks l'utilisent pour figer les mobs dangereux.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_EAU_001')`
