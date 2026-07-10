# Heavy Armor Proficiency

## Identification Cardinal
- **Skill_ID** : `PAS_CBT_040`
- **Catégorie** : Passive — Combat
- **Type** : Passif (toujours actif une fois appris ; **max 2 passives du même domaine équipées**)

## Rangs
| Rang | Bonus (réduction du malus des armures lourdes) | Condition d'acquisition |
|---|---|---|
| I | +2% | Apprentissage initial (formateur ou pratique) |
| II | +5% | Progression d'usage (palier intermédiaire) |
| III | +8% | Maîtrise (palier avancé / quête de compétence) |

> Plafond absolu **+8%** (rang III). Aucune passive n'accorde de dégâts globaux (règle CDC).

## Effet
Améliore passivement : **réduction du malus des armures lourdes**. Le bonus s'applique en permanence tant que la passive est équipée, sans coût de MP ni de stamina.

## Acquisition (Enseignement)
- **Rang I** : `!learn_skill PAS_CBT_040` auprès d'un formateur de Combat (SKILL_MASTER de capitale) ou par pratique répétée.
- **Rangs II-III** : progression d'usage automatique ; rang III peut requérir une quête de maîtrise.

## Lore (Encyclopédie d'Argo)
Porter la plaque sans en subir toute la lourdeur.

## Commande IA
- `SYS_GRANT_PASSIVE(Avatar_ID, 'PAS_CBT_040', Rang)`
