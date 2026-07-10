# Full Restore

## Identification Cardinal
- **Skill_ID** : `MAG_GUE_009`
- **Catégorie** : Magie — Guérison
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
Restaure **1250 + (INT × 1.0)** HP à la ou aux cible(s) alliée(s).

## Formule de Dégâts / Effet
`Soin = 1250 + (INT × 1.0) × Healing_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast full_restore` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Sanctuaire de Guérison d’Alne, maître Selene `NPC_ALN_70`
- **Prix d'apprentissage** : 6500 Yrds (≈ 50 % d’un équipement T4)
- **Commande** : `!learn_skill MAG_GUE_009`

## Lore (Encyclopédie d'Argo)
Restaure la quasi-totalité des HP d’un allié et purge tous ses états négatifs.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GUE_009')`
