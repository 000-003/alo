# Plasma Nova

## Identification Cardinal
- **Skill_ID** : `MAG_FOU_009`
- **Catégorie** : Magie — Foudre
- **Tier** : T4 · **Rareté** : Épique
- **Race Affinité** : Imp (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 430 |
| Temps d'Incantation | 4s |
| Cooldown | 3 min |
| Niveau Requis | 38 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **1250 + (INT × 1.0)** dégâts de Foudre à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 1250 + (INT × 1.0) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast plasma_nova` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École de la Foudre de Voulg, maître Vork `NPC_VOU_29`
- **Prix d'apprentissage** : 6500 Yrds (≈ 50 % d’un équipement T4)
- **Commande** : `!learn_skill MAG_FOU_009`

## Lore (Encyclopédie d'Argo)
Une explosion de plasma qui vaporise tout dans un large rayon.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FOU_009')`
