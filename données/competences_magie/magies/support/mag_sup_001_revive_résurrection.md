# Revive (Résurrection)

## Identification Cardinal
- **Skill_ID** : `MAG_SUP_001`
- **Catégorie** : Magie — Support (Lumière)
- **Tier** : T3
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 200 |
| Temps d'Incantation | 5.0s |
| Cooldown | 300s |
| Niveau Requis | 30 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Ressuscite un joueur en état de Remain Light avec 30% de ses HP. Le lanceur doit être adjacent à la flamme. Échoue si le timer de 60s est écoulé.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast revive_(résurrection)` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Le sort le plus sacré d'ALfheim. Seuls les mages Undine de haut niveau peuvent ramener une âme depuis le seuil de la mort polygonale. Son temps d'incantation de 5 secondes le rend extrêmement vulnérable en combat.

## Commande IA
- `SYS_REVIVE_PLAYER(Avatar_ID, Target_ID)`
