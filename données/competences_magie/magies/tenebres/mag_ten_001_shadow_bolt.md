# Shadow Bolt

## Identification Cardinal
- **Skill_ID** : `MAG_TEN_001`
- **Catégorie** : Magie — Ténèbres
- **Tier** : T1 · **Rareté** : Commun
- **Race Affinité** : Spriggan (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 40 |
| Temps d'Incantation | 1.5s |
| Cooldown | Aucun |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **130 + (INT × 0.4)** dégâts de Ténèbres à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 130 + (INT × 0.4) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast shadow_bolt` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Cercle des Ombres d’Alne, maître Roan `NPC_ALN_69`
- **Prix d'apprentissage** : 150 Yrds (≈ 50 % d’un équipement T1)
- **Commande** : `!learn_skill MAG_TEN_001`

## Lore (Encyclopédie d'Argo)
Un trait d’ombre pure qui ronge autant le corps que le moral ; premier sort des Spriggans.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_TEN_001')`
