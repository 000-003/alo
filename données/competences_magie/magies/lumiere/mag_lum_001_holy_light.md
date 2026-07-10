# Holy Light

## Identification Cardinal
- **Skill_ID** : `MAG_LUM_001`
- **Catégorie** : Magie — Lumière
- **Tier** : T1 · **Rareté** : Commun
- **Race Affinité** : Leprechaun (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 40 |
| Temps d'Incantation | 1.5s |
| Cooldown | Aucun |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **130 + (INT × 0.4)** dégâts de Lumière à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 130 + (INT × 0.4) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast holy_light` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Ordre de Lumière d’Alne, maître Selene `NPC_ALN_70`
- **Prix d'apprentissage** : 150 Yrds (≈ 50 % d’un équipement T1)
- **Commande** : `!learn_skill MAG_LUM_001`

## Lore (Encyclopédie d'Argo)
Un trait de lumière sacrée, particulièrement efficace contre les morts-vivants et les ombres.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_LUM_001')`
