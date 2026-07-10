# Ice Lance

## Identification Cardinal
- **Skill_ID** : `MAG_GLA_005`
- **Catégorie** : Magie — Glace
- **Tier** : T2 · **Rareté** : Peu commun
- **Race Affinité** : Cait Sith (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 110 |
| Temps d'Incantation | 2s |
| Cooldown | 10 s |
| Niveau Requis | 14 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **300 + (INT × 0.6)** dégâts de Glace à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 300 + (INT × 0.6) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast ice_lance` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École de Glace de Swilvane, maître Sora `NPC_SWI_79`
- **Prix d'apprentissage** : 500 Yrds (≈ 50 % d’un équipement T2)
- **Commande** : `!learn_skill MAG_GLA_005`

## Lore (Encyclopédie d'Argo)
Une lance de glace qui transperce et cloue une cible sur place un instant.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GLA_005')`
