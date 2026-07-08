# Shadow Bolt

## Identification Cardinal
- **Skill_ID** : `MAG_TNB_001`
- **Catégorie** : Magie — Ténèbres
- **Tier** : T1
- **Race Affinité** : Imp (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 40 |
| Temps d'Incantation | 1.0s |
| Cooldown | Aucun |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Projette un projectile d'ombre infligeant 110 + (INT * 0.4) dégâts de Ténèbres. 15% de chance d'appliquer [Cécité] pendant 2s.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast shadow_bolt` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Un éclair d'ombre qui jaillit des doigts du lanceur. Les Imps y sont naturellement doués grâce à leur vision nocturne qui leur permet de manipuler l'obscurité comme une arme.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_TNB_001')`
