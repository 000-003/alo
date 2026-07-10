# Purification

## Identification Cardinal
- **Skill_ID** : `MAG_LUM_004`
- **Catégorie** : Magie — Lumière
- **Tier** : T2 · **Rareté** : Peu commun
- **Race Affinité** : Leprechaun (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 110 |
| Temps d'Incantation | 2s |
| Cooldown | 10 s |
| Niveau Requis | 14 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Effet utilitaire : purge / déplacement / dissipation selon la description ci-dessus.

## Formule de Dégâts / Effet
Sort utilitaire — aucun dégât direct.

## Incantation
*Le joueur tape `!cast purification` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Ordre de Lumière d’Alne, maître Selene `NPC_ALN_70`
- **Prix d'apprentissage** : 500 Yrds (≈ 50 % d’un équipement T2)
- **Commande** : `!learn_skill MAG_LUM_004`

## Lore (Encyclopédie d'Argo)
Dissipe les malédictions et les états négatifs d’un allié grâce à la lumière.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_LUM_004')`
