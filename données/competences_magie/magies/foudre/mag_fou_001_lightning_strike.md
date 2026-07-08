# Lightning Strike

## Identification Cardinal
- **Skill_ID** : `MAG_FOU_001`
- **Catégorie** : Magie — Foudre
- **Tier** : T2
- **Race Affinité** : Aucune (Universel) (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 60 |
| Temps d'Incantation | 1.0s |
| Cooldown | 15s |
| Niveau Requis | 15 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Invoque un éclair sur la cible. Inflige 250 + (INT * 0.5) dégâts de Foudre. 20% de chance d'appliquer [Paralysie] pendant 1 tour.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast lightning_strike` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Un éclair réel tombe du ciel virtuel d'ALfheim. Sa vitesse d'exécution après incantation est instantanée, ce qui en fait le sort le plus difficile à esquiver.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FOU_001')`
