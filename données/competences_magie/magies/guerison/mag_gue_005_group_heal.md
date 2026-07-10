# Group Heal

## Identification Cardinal
- **Skill_ID** : `MAG_GUE_005`
- **Catégorie** : Magie — Guérison
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
Restaure **300 + (INT × 0.6)** HP à la ou aux cible(s) alliée(s).

## Formule de Dégâts / Effet
`Soin = 300 + (INT × 0.6) × Healing_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast group_heal` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Sanctuaire de Guérison d’Alne, maître Selene `NPC_ALN_70`
- **Prix d'apprentissage** : 500 Yrds (≈ 50 % d’un équipement T2)
- **Commande** : `!learn_skill MAG_GUE_005`

## Lore (Encyclopédie d'Argo)
Un soin de groupe instantané, colonne vertébrale de tout raid de New Aincrad.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GUE_005')`
