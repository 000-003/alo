# Gale Burst

## Identification Cardinal
- **Skill_ID** : `MAG_VEN_004`
- **Catégorie** : Magie — Vent
- **Tier** : T2 · **Rareté** : Peu commun
- **Race Affinité** : Sylph (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 110 |
| Temps d'Incantation | 2s |
| Cooldown | 10 s |
| Niveau Requis | 14 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **300 + (INT × 0.6)** dégâts de Vent à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 300 + (INT × 0.6) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast gale_burst` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École du Vent de Swilvane, maître Zeph `NPC_SWI_71`
- **Prix d'apprentissage** : 500 Yrds (≈ 50 % d’un équipement T2)
- **Commande** : `!learn_skill MAG_VEN_004`

## Lore (Encyclopédie d'Argo)
Une déflagration de vent qui repousse et déséquilibre les ennemis proches.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_VEN_004')`
