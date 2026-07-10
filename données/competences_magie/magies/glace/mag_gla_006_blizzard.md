# Blizzard

## Identification Cardinal
- **Skill_ID** : `MAG_GLA_006`
- **Catégorie** : Magie — Glace
- **Tier** : T3 · **Rareté** : Rare
- **Race Affinité** : Cait Sith (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 240 |
| Temps d'Incantation | 3s |
| Cooldown | 40 s |
| Niveau Requis | 25 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **620 + (INT × 0.8)** dégâts de Glace à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 620 + (INT × 0.8) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast blizzard` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École de Glace de Swilvane, maître Sora `NPC_SWI_79`
- **Prix d'apprentissage** : 2200 Yrds (≈ 50 % d’un équipement T3)
- **Commande** : `!learn_skill MAG_GLA_006`

## Lore (Encyclopédie d'Argo)
Une tempête de neige de zone qui gèle et aveugle ; redoutée dans les cols de Swilvane.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GLA_006')`
