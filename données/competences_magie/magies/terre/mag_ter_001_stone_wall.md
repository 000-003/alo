# Stone Wall

## Identification Cardinal
- **Skill_ID** : `MAG_TER_001`
- **Catégorie** : Magie — Terre
- **Tier** : T1
- **Race Affinité** : Gnome (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 50 |
| Temps d'Incantation | 1.5s |
| Cooldown | 20s |
| Niveau Requis | 8 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Érige un mur de pierre de 5m devant le lanceur. Le mur a 500 HP et bloque les projectiles et les charges.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast stone_wall` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
La spécialité défensive des Gnomes. Ce mur de roche surgit du sol en une fraction de seconde, bloquant les attaques à distance et forçant les mêlées à contourner.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_TER_001')`
