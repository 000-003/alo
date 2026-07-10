# Maîtrise Épée 1M I

## Identification Cardinal
- **Skill_ID** : `PAS_CBT_010`
- **Catégorie** : Passive — Combat
- **Type** : Passive (équipée passivement)

## Rangs
| Rang | Bonus | Condition d'acquisition |
|---|---|---|
| I | +2% | Niv. 5 + 500 Yrds |
| II | +5% | Niv. 20 + 2 000 Yrds + Maîtrise préalable |
| III | +8% | Niv. 40 + 8 000 Yrds + Quête de maîtrise |

## Acquisition
- **Enseignant** : Finbar, Escrimeur Undine `NPC_UND_03`
- **Prix d'apprentissage** : 250 Yrds
- **Commande** : `!learn_skill PAS_CBT_010`
- Limite d'équipement : 2 passives du même domaine max

## Lore (Encyclopédie d'Argo)
L'épée à une main est l'outil le plus équilibré : ni trop lourde, ni trop légère, elle obéit à son maître.

## Commande IA
- `SYS_GRANT_PASSIVE(Avatar_ID, 'PAS_CBT_010')`
