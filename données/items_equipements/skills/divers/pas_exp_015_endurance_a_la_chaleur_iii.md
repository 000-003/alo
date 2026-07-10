# Endurance à la Chaleur III

## Identification Cardinal
- **Skill_ID** : `PAS_EXP_015`
- **Catégorie** : Passive — Exploration
- **Type** : Passive (équipée passivement)

## Rangs
| Rang | Bonus | Condition d'acquisition |
|---|---|---|
| I | +2% | Niv. 5 + 500 Yrds |
| II | +5% | Niv. 20 + 2 000 Yrds + Maîtrise préalable |
| III | +8% | Niv. 40 + 8 000 Yrds + Quête de maîtrise |

## Acquisition
- **Enseignant** : Krognar, Guide du Désert Salamandre `NPC_SAL_03`
- **Prix d'apprentissage** : 4 000 Yrds
- **Commande** : `!learn_skill PAS_EXP_015`
- Limite d'équipement : 2 passives du même domaine max

## Lore (Encyclopédie d'Argo)
Marcher dans le brasier sans transpirer est le signe d'une volonté forgée dans le magma.

## Commande IA
- `SYS_GRANT_PASSIVE(Avatar_ID, 'PAS_EXP_015')`
