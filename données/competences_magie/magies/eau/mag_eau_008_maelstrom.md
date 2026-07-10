# Maelstrom

## Identification Cardinal
- **Skill_ID** : `MAG_EAU_008`
- **Catégorie** : Magie — Eau
- **Tier** : T4 · **Rareté** : Épique
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 430 |
| Temps d'Incantation | 4s |
| Cooldown | 3 min |
| Niveau Requis | 38 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **1250 + (INT × 1.0)** dégâts de Eau à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 1250 + (INT × 1.0) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast maelstrom` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Guilde des Ondins d’Alne, maître Zephyrine `NPC_ALN_68`
- **Prix d'apprentissage** : 6500 Yrds (≈ 50 % d’un équipement T4)
- **Commande** : `!learn_skill MAG_EAU_008`

## Lore (Encyclopédie d'Argo)
Un vortex abyssal qui broie tout ce qu’il engloutit ; enseigné seulement aux abysses de l’Archipel.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_EAU_008')`
