# Revive (Résurrection)

## Identification Cardinal
- **Skill_ID** : `MAG_GUE_006`
- **Catégorie** : Magie — Guérison
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
Restaure **620 + (INT × 0.8)** HP à la ou aux cible(s) alliée(s).

## Formule de Dégâts / Effet
`Soin = 620 + (INT × 0.8) × Healing_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast revive` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Sanctuaire de Guérison d’Alne, maître Selene `NPC_ALN_70`
- **Prix d'apprentissage** : 2200 Yrds (≈ 50 % d’un équipement T3)
- **Commande** : `!learn_skill MAG_GUE_006`

## Lore (Encyclopédie d'Argo)
La magie suprême des Undines : ramène un allié tombé. La raison pour laquelle on les arrache pour chaque raid massif.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GUE_006')`
