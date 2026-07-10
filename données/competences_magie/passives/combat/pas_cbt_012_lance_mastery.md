# Lance Mastery

## Identification Cardinal
- **Skill_ID** : `PAS_CBT_012`
- **Catégorie** : Passive — Combat
- **Type** : Passif (toujours actif une fois appris ; **max 2 passives du même domaine équipées**)

## Rangs
| Rang | Bonus (maîtrise de la lance) | Condition d'acquisition |
|---|---|---|
| I | +2% | Apprentissage initial (formateur ou pratique) |
| II | +5% | Progression d'usage (palier intermédiaire) |
| III | +8% | Maîtrise (palier avancé / quête de compétence) |

> Plafond absolu **+8%** (rang III). Aucune passive n'accorde de dégâts globaux (règle CDC).

## Effet
Améliore passivement : **maîtrise de la lance**. Le bonus s'applique en permanence tant que la passive est équipée, sans coût de MP ni de stamina.

## Acquisition (Enseignement)
- **Rang I** : `!learn_skill PAS_CBT_012` auprès d'un formateur de Combat (SKILL_MASTER de capitale) ou par pratique répétée.
- **Rangs II-III** : progression d'usage automatique ; rang III peut requérir une quête de maîtrise.

## Lore (Encyclopédie d'Argo)
Tenir la distance et frapper le premier : l’âme de la lance.

## Commande IA
- `SYS_GRANT_PASSIVE(Avatar_ID, 'PAS_CBT_012', Rang)`
