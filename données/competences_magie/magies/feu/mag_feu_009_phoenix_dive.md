# Phoenix Dive

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_009`
- **Catégorie** : Magie — Feu
- **Tier** : T4 · **Rareté** : Épique
- **Race Affinité** : Salamander (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 430 |
| Temps d'Incantation | 4s |
| Cooldown | 3 min |
| Niveau Requis | 38 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **1250 + (INT × 1.0)** dégâts de Feu à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 1250 + (INT × 1.0) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast phoenix_dive` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École du Feu de Gattan, maître Ferra `NPC_GAT_31`
- **Prix d'apprentissage** : 6500 Yrds (≈ 50 % d’un équipement T4)
- **Commande** : `!learn_skill MAG_FEU_009`

## Lore (Encyclopédie d'Argo)
Le lanceur s’enveloppe d’un phénix spectral et fond sur l’ennemi ; laisse un sillage brûlant à l’impact.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_009')`
