# Tectonic Shift

## Identification Cardinal
- **Skill_ID** : `MAG_TER_008`
- **Catégorie** : Magie — Terre
- **Tier** : T4 · **Rareté** : Épique
- **Race Affinité** : Gnome (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 430 |
| Temps d'Incantation | 4s |
| Cooldown | 3 min |
| Niveau Requis | 38 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **1250 + (INT × 1.0)** dégâts de Terre à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 1250 + (INT × 1.0) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast tectonic_shift` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École de la Terre d’Alne, maître Roan `NPC_ALN_69`
- **Prix d'apprentissage** : 6500 Yrds (≈ 50 % d’un équipement T4)
- **Commande** : `!learn_skill MAG_TER_008`

## Lore (Encyclopédie d'Argo)
Soulève et fracasse une plaque du terrain, remodelant le champ de bataille.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_TER_008')`
