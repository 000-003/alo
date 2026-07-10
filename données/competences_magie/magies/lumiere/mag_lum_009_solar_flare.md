# Solar Flare

## Identification Cardinal
- **Skill_ID** : `MAG_LUM_009`
- **Catégorie** : Magie — Lumière
- **Tier** : T4 · **Rareté** : Épique
- **Race Affinité** : Leprechaun (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 430 |
| Temps d'Incantation | 4s |
| Cooldown | 3 min |
| Niveau Requis | 38 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **1250 + (INT × 1.0)** dégâts de Lumière à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 1250 + (INT × 1.0) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast solar_flare` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Ordre de Lumière d’Alne, maître Selene `NPC_ALN_70`
- **Prix d'apprentissage** : 6500 Yrds (≈ 50 % d’un équipement T4)
- **Commande** : `!learn_skill MAG_LUM_009`

## Lore (Encyclopédie d'Argo)
Convoque un fragment de soleil dont l’éruption calcine une large zone.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_LUM_009')`
