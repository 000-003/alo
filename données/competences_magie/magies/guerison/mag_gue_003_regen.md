# Regen

## Identification Cardinal
- **Skill_ID** : `MAG_GUE_003`
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
Restaure **130 + (INT × 0.4)** HP à la ou aux cible(s) alliée(s).

## Formule de Dégâts / Effet
`Soin = 130 + (INT × 0.4) × Healing_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast regen` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Sanctuaire de Guérison d’Alne, maître Selene `NPC_ALN_70`
- **Prix d'apprentissage** : 150 Yrds (≈ 50 % d’un équipement T1)
- **Commande** : `!learn_skill MAG_GUE_003`

## Lore (Encyclopédie d'Argo)
Un soin lent mais durable qui régénère les HP sur plusieurs secondes.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GUE_003')`
