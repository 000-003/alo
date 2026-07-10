# Cure Poison

## Identification Cardinal
- **Skill_ID** : `MAG_GUE_002`
- **Catégorie** : Magie — Guérison
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
Effet utilitaire : purge / déplacement / dissipation selon la description ci-dessus.

## Formule de Dégâts / Effet
Sort utilitaire — aucun dégât direct.

## Incantation
*Le joueur tape `!cast cure_poison` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Sanctuaire de Guérison d’Alne, maître Selene `NPC_ALN_70`
- **Prix d'apprentissage** : 150 Yrds (≈ 50 % d’un équipement T1)
- **Commande** : `!learn_skill MAG_GUE_002`

## Lore (Encyclopédie d'Argo)
Purge le poison et les toxines mineures d’un allié ; premier réflexe en donjon.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GUE_002')`
