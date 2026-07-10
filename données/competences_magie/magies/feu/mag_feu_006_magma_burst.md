# Magma Burst

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_006`
- **Catégorie** : Magie — Feu
- **Tier** : T3 · **Rareté** : Rare
- **Race Affinité** : Salamander (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 240 |
| Temps d'Incantation | 3s |
| Cooldown | 40 s |
| Niveau Requis | 25 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **620 + (INT × 0.8)** dégâts de Feu à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 620 + (INT × 0.8) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast magma_burst` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École du Feu de Gattan, maître Ferra `NPC_GAT_31`
- **Prix d'apprentissage** : 2200 Yrds (≈ 50 % d’un équipement T3)
- **Commande** : `!learn_skill MAG_FEU_006`

## Lore (Encyclopédie d'Argo)
Une éruption localisée qui projette du magma en gerbe ; interagit avec la jauge de Surchauffe de la Caldeira.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_006')`
