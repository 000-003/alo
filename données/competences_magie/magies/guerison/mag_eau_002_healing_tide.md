# Healing Tide

## Identification Cardinal
- **Skill_ID** : `MAG_EAU_002`
- **Catégorie** : Magie — Eau (Guérison)
- **Tier** : T2
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 60 |
| Temps d'Incantation | 2.0s |
| Cooldown | 20s |
| Niveau Requis | 15 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Restaure 300 + (INT * 0.5) HP à tous les alliés dans un rayon de 15m.

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast healing_tide` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Le sort de soin de zone des Undines. Une vague d'énergie aquatique balaye les alliés, refermant leurs plaies polygonales. C'est grâce à ce sort qu'Asuna a gagné le surnom de 'Berserk Healer'.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_EAU_002')`
