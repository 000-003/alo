# Shadow Step

## Identification Cardinal
- **Skill_ID** : `MAG_TEN_003`
- **Catégorie** : Magie — Ténèbres
- **Tier** : T1 · **Rareté** : Commun
- **Race Affinité** : Spriggan (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 40 |
| Temps d'Incantation | 1.5s |
| Cooldown | Aucun |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Effet utilitaire : purge / déplacement / dissipation selon la description ci-dessus.

## Formule de Dégâts / Effet
Sort utilitaire — aucun dégât direct.

## Incantation
*Le joueur tape `!cast shadow_step` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Cercle des Ombres d’Alne, maître Roan `NPC_ALN_69`
- **Prix d'apprentissage** : 150 Yrds (≈ 50 % d’un équipement T1)
- **Commande** : `!learn_skill MAG_TEN_003`

## Lore (Encyclopédie d'Argo)
Un pas de téléportation courte d’une ombre à l’autre, marque de fabrique des assassins Imp-Spriggan.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_TEN_003')`
