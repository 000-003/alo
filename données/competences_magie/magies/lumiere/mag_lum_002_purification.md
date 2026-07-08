# Purification

## Identification Cardinal
- **Skill_ID** : `MAG_LUM_002`
- **Catégorie** : Magie — Lumière
- **Tier** : T2
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 80 |
| Temps d'Incantation | 2.0s |
| Cooldown | 30s |
| Niveau Requis | 22 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Supprime tous les statuts négatifs d'un allié (Poison, Paralysie, Brûlure, Cécité). Inflige 200 dégâts de Lumière aux Morts-Vivants dans un rayon de 5m.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast purification` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Un éclat de lumière pure qui brûle les impuretés. Les morts-vivants de Jötunheimr la craignent plus que toute autre magie.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_LUM_002')`
