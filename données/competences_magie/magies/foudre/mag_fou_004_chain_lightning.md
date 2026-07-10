# Chain Lightning

## Identification Cardinal
- **Skill_ID** : `MAG_FOU_004`
- **Catégorie** : Magie — Foudre
- **Tier** : T2 · **Rareté** : Peu commun
- **Race Affinité** : Imp (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 110 |
| Temps d'Incantation | 2s |
| Cooldown | 10 s |
| Niveau Requis | 14 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **300 + (INT × 0.6)** dégâts de Foudre à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 300 + (INT × 0.6) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast chain_lightning` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École de la Foudre de Voulg, maître Vork `NPC_VOU_29`
- **Prix d'apprentissage** : 500 Yrds (≈ 50 % d’un équipement T2)
- **Commande** : `!learn_skill MAG_FOU_004`

## Lore (Encyclopédie d'Argo)
Un éclair qui rebondit de cible en cible ; efficace contre les groupes serrés.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FOU_004')`
