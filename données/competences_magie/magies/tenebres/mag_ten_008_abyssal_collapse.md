# Abyssal Collapse

## Identification Cardinal
- **Skill_ID** : `MAG_TEN_008`
- **Catégorie** : Magie — Ténèbres
- **Tier** : T4 · **Rareté** : Épique
- **Race Affinité** : Spriggan (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 430 |
| Temps d'Incantation | 4s |
| Cooldown | 3 min |
| Niveau Requis | 38 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **1250 + (INT × 1.0)** dégâts de Ténèbres à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 1250 + (INT × 1.0) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast abyssal_collapse` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Cercle des Ombres d’Alne, maître Roan `NPC_ALN_69`
- **Prix d'apprentissage** : 6500 Yrds (≈ 50 % d’un équipement T4)
- **Commande** : `!learn_skill MAG_TEN_008`

## Lore (Encyclopédie d'Argo)
Ouvre un puits de vide qui implose et engloutit une zone entière.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_TEN_008')`
