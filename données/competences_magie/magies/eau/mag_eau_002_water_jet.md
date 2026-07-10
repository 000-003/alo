# Water Jet

## Identification Cardinal
- **Skill_ID** : `MAG_EAU_002`
- **Catégorie** : Magie — Eau
- **Tier** : T1 · **Rareté** : Commun
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 40 |
| Temps d'Incantation | 1.5s |
| Cooldown | Aucun |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **130 + (INT × 0.4)** dégâts de Eau à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 130 + (INT × 0.4) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast water_jet` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Guilde des Ondins d’Alne, maître Zephyrine `NPC_ALN_68`
- **Prix d'apprentissage** : 150 Yrds (≈ 50 % d’un équipement T1)
- **Commande** : `!learn_skill MAG_EAU_002`

## Lore (Encyclopédie d'Argo)
Un jet d’eau sous pression, discret mais capable de repousser un adversaire au bord d’un pont.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_EAU_002')`
