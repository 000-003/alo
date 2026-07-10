# Endurance à la Chaleur I

## Identification Cardinal
- **Skill_ID** : `PAS_EXP_013`
- **Catégorie** : Passive — Exploration
- **Type** : Passive (équipée passivement)

## Rangs
| Rang | Bonus | Condition d'acquisition |
|---|---|---|
| I | +2% | Niv. 5 + 500 Yrds |
| II | +5% | Niv. 20 + 2 000 Yrds + Maîtrise préalable |
| III | +8% | Niv. 40 + 8 000 Yrds + Quête de maîtrise |

## Acquisition
- **Enseignant** : Aile-Libre, Cavalier Sylphe `NPC_SYL_02`
- **Prix d'apprentissage** : 250 Yrds
- **Commande** : `!learn_skill PAS_EXP_013`
- Limite d'équipement : 2 passives du même domaine max

## Lore (Encyclopédie d'Argo)
La chaleur du Cratère de Gattan est une forge qui brûle les faibles et trempe les forts.

## Commande IA
- `SYS_GRANT_PASSIVE(Avatar_ID, 'PAS_EXP_013')`
