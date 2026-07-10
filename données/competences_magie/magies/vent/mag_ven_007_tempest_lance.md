# Tempest Lance

## Identification Cardinal
- **Skill_ID** : `MAG_VEN_007`
- **Catégorie** : Magie — Vent
- **Tier** : T3 · **Rareté** : Rare
- **Race Affinité** : Sylph (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 240 |
| Temps d'Incantation | 3s |
| Cooldown | 40 s |
| Niveau Requis | 25 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **620 + (INT × 0.8)** dégâts de Vent à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 620 + (INT × 0.8) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast tempest_lance` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École du Vent de Swilvane, maître Zeph `NPC_SWI_71`
- **Prix d'apprentissage** : 2200 Yrds (≈ 50 % d’un équipement T3)
- **Commande** : `!learn_skill MAG_VEN_007`

## Lore (Encyclopédie d'Argo)
Une lance de tempête qui perce en ligne droite tout ce qui se trouve sur sa trajectoire.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_VEN_007')`
