# Inferno Wall

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_002`
- **Catégorie** : Magie — Feu
- **Tier** : T2
- **Race Affinité** : Salamandre (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 80 |
| Temps d'Incantation | 2.5s |
| Cooldown | 30s |
| Niveau Requis | 20 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Crée un mur de flammes de 10m de long devant le lanceur pendant 15s. Toute entité traversant le mur subit 200 dégâts de Feu + statut [Brûlure].

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast inferno_wall` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Un sort défensif redoutable qui transforme le champ de bataille en enfer. Les Salamandres l'utilisent pour couper la retraite des ennemis ou protéger les healers pendant l'incantation.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_002')`
