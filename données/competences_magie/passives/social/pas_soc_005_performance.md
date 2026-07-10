# Performance (Représentation)

## Identification Cardinal
- **Skill_ID** : `PAS_SOC_005`
- **Catégorie** : Passive — Social
- **Type** : Passif (toujours actif une fois appris ; **max 2 passives du même domaine équipées**)

## Rangs
| Rang | Bonus (efficacité des chants et spectacles) | Condition d'acquisition |
|---|---|---|
| I | +2% | Apprentissage initial (formateur ou pratique) |
| II | +5% | Progression d'usage (palier intermédiaire) |
| III | +8% | Maîtrise (palier avancé / quête de compétence) |

> Plafond absolu **+8%** (rang III). Aucune passive n'accorde de dégâts globaux (règle CDC).

## Effet
Améliore passivement : **efficacité des chants et spectacles**. Le bonus s'applique en permanence tant que la passive est équipée, sans coût de MP ni de stamina.

## Acquisition (Enseignement)
- **Rang I** : `!learn_skill PAS_SOC_005` auprès d'un formateur de Social (SKILL_MASTER de capitale) ou par pratique répétée.
- **Rangs II-III** : progression d'usage automatique ; rang III peut requérir une quête de maîtrise.

## Lore (Encyclopédie d'Argo)
Sur la scène de Lioda, captiver une foule et en tirer faveurs et Yrds.

## Commande IA
- `SYS_GRANT_PASSIVE(Avatar_ID, 'PAS_SOC_005', Rang)`
