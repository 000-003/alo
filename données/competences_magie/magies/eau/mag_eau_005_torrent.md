# Torrent

## Identification Cardinal
- **Skill_ID** : `MAG_EAU_005`
- **Catégorie** : Magie — Eau
- **Tier** : T2 · **Rareté** : Peu commun
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 110 |
| Temps d'Incantation | 2s |
| Cooldown | 10 s |
| Niveau Requis | 14 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **300 + (INT × 0.6)** dégâts de Eau à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 300 + (INT × 0.6) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast torrent` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Guilde des Ondins d’Alne, maître Zephyrine `NPC_ALN_68`
- **Prix d'apprentissage** : 500 Yrds (≈ 50 % d’un équipement T2)
- **Commande** : `!learn_skill MAG_EAU_005`

## Lore (Encyclopédie d'Argo)
Un torrent concentré qui balaie une ligne d’ennemis d’un seul geste.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_EAU_005')`
