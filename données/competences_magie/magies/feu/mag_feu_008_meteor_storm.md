# Meteor Storm

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_008`
- **Catégorie** : Magie — Feu
- **Tier** : T4 · **Rareté** : Épique
- **Race Affinité** : Salamander (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 430 |
| Temps d'Incantation | 4s |
| Cooldown | 3 min |
| Niveau Requis | 38 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **1250 + (INT × 1.0)** dégâts de Feu à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 1250 + (INT × 1.0) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast meteor_storm` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École du Feu de Gattan, maître Ferra `NPC_GAT_31`
- **Prix d'apprentissage** : 6500 Yrds (≈ 50 % d’un équipement T4)
- **Commande** : `!learn_skill MAG_FEU_008`

## Lore (Encyclopédie d'Argo)
Le sort de siège des archimages Salamander : une pluie de météores embrasés qui ravage une zone entière.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_008')`
