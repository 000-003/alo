# Détection des Ressources I

## Identification Cardinal
- **Skill_ID** : `PAS_EXP_016`
- **Catégorie** : Passive — Exploration
- **Type** : Passive (équipée passivement)

## Rangs
| Rang | Bonus | Condition d'acquisition |
|---|---|---|
| I | +2% | Niv. 5 + 500 Yrds |
| II | +5% | Niv. 20 + 2 000 Yrds + Maîtrise préalable |
| III | +8% | Niv. 40 + 8 000 Yrds + Quête de maîtrise |

## Acquisition
- **Enseignant** : Mithrandur, Géologue Gnome `NPC_GRA_04`
- **Prix d'apprentissage** : 250 Yrds
- **Commande** : `!learn_skill PAS_EXP_016`
- Limite d'équipement : 2 passives du même domaine max

## Lore (Encyclopédie d'Argo)
Les minerais ne brillent pas tous en surface ; certains attendent patiemment d'être découverts.

## Commande IA
- `SYS_GRANT_PASSIVE(Avatar_ID, 'PAS_EXP_016')`
