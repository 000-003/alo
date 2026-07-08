# Frost Nova

## Identification Cardinal
- **Skill_ID** : `MAG_GLA_001`
- **Catégorie** : Magie — Glace
- **Tier** : T2
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 70 |
| Temps d'Incantation | 1.5s |
| Cooldown | 25s |
| Niveau Requis | 18 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Libère une onde de gel dans un rayon de 10m autour du lanceur. Inflige 180 dégâts de Glace et réduit la vitesse d'attaque et de déplacement des cibles de 30% pendant 5s.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast frost_nova` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
L'air se cristallise autour du lanceur, gelant les polygones des ennemis proches. Un sort de contrôle qui peut sauver un groupe encerclé.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GLA_001')`
