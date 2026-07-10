# Thunder God’s Wrath

## Identification Cardinal
- **Skill_ID** : `MAG_FOU_008`
- **Catégorie** : Magie — Foudre
- **Tier** : T4 · **Rareté** : Épique
- **Race Affinité** : Imp (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 430 |
| Temps d'Incantation | 4s |
| Cooldown | 3 min |
| Niveau Requis | 38 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **1250 + (INT × 1.0)** dégâts de Foudre à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 1250 + (INT × 1.0) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast thunder_gods_wrath` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École de la Foudre de Voulg, maître Vork `NPC_VOU_29`
- **Prix d'apprentissage** : 6500 Yrds (≈ 50 % d’un équipement T4)
- **Commande** : `!learn_skill MAG_FOU_008`

## Lore (Encyclopédie d'Argo)
La colère du dieu du tonnerre canalisée en une frappe verticale dévastatrice.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FOU_008')`
