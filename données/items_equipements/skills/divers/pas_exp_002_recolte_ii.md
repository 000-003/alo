# Récolte II

## Identification Cardinal
- **Skill_ID** : `PAS_EXP_002`
- **Catégorie** : Passive — Exploration
- **Type** : Passive (équipée passivement)

## Rangs
| Rang | Bonus | Condition d'acquisition |
|---|---|---|
| I | +2% | Niv. 5 + 500 Yrds |
| II | +5% | Niv. 20 + 2 000 Yrds + Maîtrise préalable |
| III | +8% | Niv. 40 + 8 000 Yrds + Quête de maîtrise |

## Acquisition
- **Enseignant** : Brok, Traqueur de Freelia `NPC_FRE_03`
- **Prix d'apprentissage** : 1 000 Yrds
- **Commande** : `!learn_skill PAS_EXP_002`
- Limite d'équipement : 2 passives du même domaine max

## Lore (Encyclopédie d'Argo)
Connaître les cycles de la sève et des lunes permet des récoltes que les glaneurs novices ne peuvent qu'envier.

## Commande IA
- `SYS_GRANT_PASSIVE(Avatar_ID, 'PAS_EXP_002')`
