# Radiant Beam

## Identification Cardinal
- **Skill_ID** : `MAG_LUM_007`
- **Catégorie** : Magie — Lumière
- **Tier** : T3 · **Rareté** : Rare
- **Race Affinité** : Leprechaun (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 240 |
| Temps d'Incantation | 3s |
| Cooldown | 40 s |
| Niveau Requis | 25 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **620 + (INT × 0.8)** dégâts de Lumière à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 620 + (INT × 0.8) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast radiant_beam` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Ordre de Lumière d’Alne, maître Selene `NPC_ALN_70`
- **Prix d'apprentissage** : 2200 Yrds (≈ 50 % d’un équipement T3)
- **Commande** : `!learn_skill MAG_LUM_007`

## Lore (Encyclopédie d'Argo)
Un rayon continu de lumière qui perce en ligne et brûle les créatures d’ombre.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_LUM_007')`
