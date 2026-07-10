# Wind Blade

## Identification Cardinal
- **Skill_ID** : `MAG_VEN_001`
- **Catégorie** : Magie — Vent
- **Tier** : T1 · **Rareté** : Commun
- **Race Affinité** : Sylph (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 40 |
| Temps d'Incantation | 1.5s |
| Cooldown | Aucun |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **130 + (INT × 0.4)** dégâts de Vent à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 130 + (INT × 0.4) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast wind_blade` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École du Vent de Swilvane, maître Zeph `NPC_SWI_71`
- **Prix d'apprentissage** : 150 Yrds (≈ 50 % d’un équipement T1)
- **Commande** : `!learn_skill MAG_VEN_001`

## Lore (Encyclopédie d'Argo)
La lame de vent des Sylphs : une bourrasque tranchante et silencieuse, presque invisible à l’œil.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_VEN_001')`
