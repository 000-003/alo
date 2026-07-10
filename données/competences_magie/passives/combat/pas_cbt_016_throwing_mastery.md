# Throwing Mastery

## Identification Cardinal
- **Skill_ID** : `PAS_CBT_016`
- **Catégorie** : Passive — Combat
- **Type** : Passif (toujours actif une fois appris ; **max 2 passives du même domaine équipées**)

## Rangs
| Rang | Bonus (maîtrise des armes de jet) | Condition d'acquisition |
|---|---|---|
| I | +2% | Apprentissage initial (formateur ou pratique) |
| II | +5% | Progression d'usage (palier intermédiaire) |
| III | +8% | Maîtrise (palier avancé / quête de compétence) |

> Plafond absolu **+8%** (rang III). Aucune passive n'accorde de dégâts globaux (règle CDC).

## Effet
Améliore passivement : **maîtrise des armes de jet**. Le bonus s'applique en permanence tant que la passive est équipée, sans coût de MP ni de stamina.

## Acquisition (Enseignement)
- **Rang I** : `!learn_skill PAS_CBT_016` auprès d'un formateur de Combat (SKILL_MASTER de capitale) ou par pratique répétée.
- **Rangs II-III** : progression d'usage automatique ; rang III peut requérir une quête de maîtrise.

## Lore (Encyclopédie d'Argo)
La lame quitte la main exactement là où l’œil l’a envoyée.

## Commande IA
- `SYS_GRANT_PASSIVE(Avatar_ID, 'PAS_CBT_016', Rang)`
