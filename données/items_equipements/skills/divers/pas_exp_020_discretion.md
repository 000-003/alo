# Discrétion

## Identification Cardinal
- **Skill_ID** : `PAS_EXP_020`
- **Catégorie** : Passive — Exploration
- **Type** : Passive (équipée passivement)

## Rangs
| Rang | Bonus | Condition d'acquisition |
|---|---|---|
| I | +2% | Niv. 5 + 500 Yrds |
| II | +5% | Niv. 20 + 2 000 Yrds + Maîtrise préalable |
| III | +8% | Niv. 40 + 8 000 Yrds + Quête de maîtrise |

## Acquisition
- **Enseignant** : Gorim, Explorateur de Granzam `NPC_GRA_07`
- **Prix d'apprentissage** : 250 Yrds
- **Commande** : `!learn_skill PAS_EXP_020`
- Limite d'équipement : 2 passives du même domaine max

## Lore (Encyclopédie d'Argo)
Être invisible n'est pas un don, c'est une discipline : marcher là où le sol ne craque pas.

## Commande IA
- `SYS_GRANT_PASSIVE(Avatar_ID, 'PAS_EXP_020')`
