# Armorsmithing (Armurier de plaques)

## Identification Cardinal
- **Skill_ID** : `PAS_CRA_007`
- **Catégorie** : Passive — Craft
- **Type** : Passif (toujours actif une fois appris ; **max 2 passives du même domaine équipées**)

## Rangs
| Rang | Bonus (qualité des armures de plaque) | Condition d'acquisition |
|---|---|---|
| I | +2% | Apprentissage initial (formateur ou pratique) |
| II | +5% | Progression d'usage (palier intermédiaire) |
| III | +8% | Maîtrise (palier avancé / quête de compétence) |

> Plafond absolu **+8%** (rang III). Aucune passive n'accorde de dégâts globaux (règle CDC).

## Effet
Améliore passivement : **qualité des armures de plaque**. Le bonus s'applique en permanence tant que la passive est équipée, sans coût de MP ni de stamina.

## Acquisition (Enseignement)
- **Rang I** : `!learn_skill PAS_CRA_007` auprès d'un formateur de Craft (SKILL_MASTER de capitale) ou par pratique répétée.
- **Rangs II-III** : progression d'usage automatique ; rang III peut requérir une quête de maîtrise.

## Lore (Encyclopédie d'Argo)
Battre la plaque pour protéger les lignes de front.

## Commande IA
- `SYS_GRANT_PASSIVE(Avatar_ID, 'PAS_CRA_007', Rang)`
