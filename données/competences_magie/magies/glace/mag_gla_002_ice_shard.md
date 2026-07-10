# Ice Shard

## Identification Cardinal
- **Skill_ID** : `MAG_GLA_002`
- **Catégorie** : Magie — Glace
- **Tier** : T1 · **Rareté** : Commun
- **Race Affinité** : Cait Sith (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 40 |
| Temps d'Incantation | 1.5s |
| Cooldown | Aucun |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **130 + (INT × 0.4)** dégâts de Glace à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 130 + (INT × 0.4) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast ice_shard` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École de Glace de Swilvane, maître Sora `NPC_SWI_79`
- **Prix d'apprentissage** : 150 Yrds (≈ 50 % d’un équipement T1)
- **Commande** : `!learn_skill MAG_GLA_002`

## Lore (Encyclopédie d'Argo)
Un éclat de glace acéré lancé à distance, rapide et silencieux.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GLA_002')`
