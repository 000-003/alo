# Thunderstorm

## Identification Cardinal
- **Skill_ID** : `MAG_FOU_006`
- **Catégorie** : Magie — Foudre
- **Tier** : T3 · **Rareté** : Rare
- **Race Affinité** : Imp (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 240 |
| Temps d'Incantation | 3s |
| Cooldown | 40 s |
| Niveau Requis | 25 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **620 + (INT × 0.8)** dégâts de Foudre à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 620 + (INT × 0.8) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast thunderstorm` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École de la Foudre de Voulg, maître Vork `NPC_VOU_29`
- **Prix d'apprentissage** : 2200 Yrds (≈ 50 % d’un équipement T3)
- **Commande** : `!learn_skill MAG_FOU_006`

## Lore (Encyclopédie d'Argo)
Une tempête d’éclairs qui s’abat sur une zone ; le ciel de Duskarn s’en souvient.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FOU_006')`
