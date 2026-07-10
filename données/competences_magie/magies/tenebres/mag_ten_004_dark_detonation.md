# Dark Detonation

## Identification Cardinal
- **Skill_ID** : `MAG_TEN_004`
- **Catégorie** : Magie — Ténèbres
- **Tier** : T2 · **Rareté** : Peu commun
- **Race Affinité** : Spriggan (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 110 |
| Temps d'Incantation | 2s |
| Cooldown | 10 s |
| Niveau Requis | 14 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **300 + (INT × 0.6)** dégâts de Ténèbres à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 300 + (INT × 0.6) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast dark_detonation` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Cercle des Ombres d’Alne, maître Roan `NPC_ALN_69`
- **Prix d'apprentissage** : 500 Yrds (≈ 50 % d’un équipement T2)
- **Commande** : `!learn_skill MAG_TEN_004`

## Lore (Encyclopédie d'Argo)
Une charge d’ombre implantée qui explose à retardement ; version améliorée du sort ancestral.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_TEN_004')`
