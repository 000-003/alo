# Dark Detonation (Amélioré)

## Identification Cardinal
- **Skill_ID** : `MAG_TNB_002`
- **Catégorie** : Magie — Ténèbres
- **Tier** : T3
- **Race Affinité** : Imp (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 0 |
| Temps d'Incantation | 0.5s |
| Cooldown | Aucun |
| Niveau Requis | 40 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Sort sacrificiel. Convertit 50% des HP ACTUELS du lanceur en dégâts de Ténèbres purs dans un rayon de 10m. Ignore toute DEF et Résistance. Le lanceur tombe à Remain Light si ses HP étaient < 50%. **Réduction permanente de 5 points d'INT** après utilisation (récupérable via level-up).

## Formule de Dégâts / Effet
`Puissance = Base_Spell_Power * (INT * 0.6) * Elemental_Affinity_Multiplier`

## Incantation (Pseudo-Vieux Norrois)
*Le joueur doit taper la commande `!cast dark_detonation_(amélioré)` pour activer le sort.*

## Lore (Encyclopédie d'Argo)
Le sort interdit de Recon. En sacrifiant sa propre force vitale, le lanceur libère une explosion d'énergie sombre qui anéantit tout. La perte permanente de stats en fait un acte désespéré, un dernier recours quand la guilde est au bord de l'extinction.

## Commande IA
- `SYS_TRIGGER_SACRIFICE(Avatar_ID, Damage_Radius)`
