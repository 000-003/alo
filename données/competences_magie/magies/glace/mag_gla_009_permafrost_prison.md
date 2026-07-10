# Permafrost Prison

## Identification Cardinal
- **Skill_ID** : `MAG_GLA_009`
- **Catégorie** : Magie — Glace
- **Tier** : T4 · **Rareté** : Épique
- **Race Affinité** : Cait Sith (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 430 |
| Temps d'Incantation | 4s |
| Cooldown | 3 min |
| Niveau Requis | 38 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **1250 + (INT × 1.0)** dégâts de Glace à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 1250 + (INT × 1.0) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast permafrost_prison` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École de Glace de Swilvane, maître Sora `NPC_SWI_79`
- **Prix d'apprentissage** : 6500 Yrds (≈ 50 % d’un équipement T4)
- **Commande** : `!learn_skill MAG_GLA_009`

## Lore (Encyclopédie d'Argo)
Emprisonne les cibles dans un bloc de glace éternelle qui les broie lentement.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GLA_009')`
