# Gale Burst

## Identification Cardinal
- **Skill_ID** : `MAG_VEN_002`
- **Catégorie** : Magie — Vent
- **Tier** : T2
- **Race Affinité** : Sylphe (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 70 |
| Temps d'Incantation | 1.5s |
| Cooldown | 25s |
| Niveau Requis | 18 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Projette un souffle de vent violent dans un cône de 15m. Inflige 180 dégâts de Vent et applique [Knockback] à toutes les cibles.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast gale_burst` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Un cri du vent qui repousse tout ce qui se trouve devant le lanceur. Les Sylphes l'utilisent pour protéger leurs arrières ou éjecter les ennemis des plateformes.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_VEN_002')`
