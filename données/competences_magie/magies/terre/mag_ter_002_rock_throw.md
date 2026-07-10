# Rock Throw

## Identification Cardinal
- **Skill_ID** : `MAG_TER_002`
- **Catégorie** : Magie — Terre
- **Tier** : T1 · **Rareté** : Commun
- **Race Affinité** : Gnome (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 40 |
| Temps d'Incantation | 1.5s |
| Cooldown | Aucun |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **130 + (INT × 0.4)** dégâts de Terre à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 130 + (INT × 0.4) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast rock_throw` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École de la Terre d’Alne, maître Roan `NPC_ALN_69`
- **Prix d'apprentissage** : 150 Yrds (≈ 50 % d’un équipement T1)
- **Commande** : `!learn_skill MAG_TER_002`

## Lore (Encyclopédie d'Argo)
Un projectile de pierre brute, économique et fiable, appris à la Carrière.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_TER_002')`
