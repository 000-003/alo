# Tornado

## Identification Cardinal
- **Skill_ID** : `MAG_VEN_008`
- **Catégorie** : Magie — Vent
- **Tier** : T4 · **Rareté** : Épique
- **Race Affinité** : Sylph (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 430 |
| Temps d'Incantation | 4s |
| Cooldown | 3 min |
| Niveau Requis | 38 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **1250 + (INT × 1.0)** dégâts de Vent à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 1250 + (INT × 1.0) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast tornado` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École du Vent de Swilvane, maître Zeph `NPC_SWI_71`
- **Prix d'apprentissage** : 6500 Yrds (≈ 50 % d’un équipement T4)
- **Commande** : `!learn_skill MAG_VEN_008`

## Lore (Encyclopédie d'Argo)
Une tornade dévastatrice qui arpente le champ de bataille selon la volonté du lanceur.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_VEN_008')`
