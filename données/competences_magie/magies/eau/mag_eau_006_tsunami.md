# Tsunami

## Identification Cardinal
- **Skill_ID** : `MAG_EAU_006`
- **Catégorie** : Magie — Eau
- **Tier** : T3 · **Rareté** : Rare
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 240 |
| Temps d'Incantation | 3s |
| Cooldown | 40 s |
| Niveau Requis | 25 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **620 + (INT × 0.8)** dégâts de Eau à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 620 + (INT × 0.8) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast tsunami` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Guilde des Ondins d’Alne, maître Zephyrine `NPC_ALN_68`
- **Prix d'apprentissage** : 2200 Yrds (≈ 50 % d’un équipement T3)
- **Commande** : `!learn_skill MAG_EAU_006`

## Lore (Encyclopédie d'Argo)
Une vague colossale qui submerge une zone ; le sort qui donna aux Undines leur réputation guerrière.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_EAU_006')`
