# Earthquake

## Identification Cardinal
- **Skill_ID** : `MAG_TER_002`
- **Catégorie** : Magie — Terre
- **Tier** : T3
- **Race Affinité** : Gnome (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 150 |
| Temps d'Incantation | 3.0s |
| Cooldown | 60s |
| Niveau Requis | 35 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Provoque un tremblement de terre dans un rayon de 20m. Inflige 400 + (INT * 0.5) dégâts de Terre et applique [Knockdown] à toutes les cibles au sol. Les cibles en vol ne sont pas affectées.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast earthquake` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Le sol d'ALfheim se fissure sous la puissance de ce sort. Les ennemis au sol perdent l'équilibre et tombent, offrant une fenêtre d'attaque gratuite. Inutile contre les cibles volantes.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_TER_002')`
