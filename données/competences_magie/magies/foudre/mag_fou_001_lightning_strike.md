# Lightning Strike

## Identification Cardinal
- **Skill_ID** : `MAG_FOU_001`
- **Catégorie** : Magie — Foudre
- **Tier** : T1 · **Rareté** : Commun
- **Race Affinité** : Imp (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 40 |
| Temps d'Incantation | 1.5s |
| Cooldown | Aucun |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **130 + (INT × 0.4)** dégâts de Foudre à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 130 + (INT × 0.4) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast lightning_strike` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École de la Foudre de Voulg, maître Vork `NPC_VOU_29`
- **Prix d'apprentissage** : 150 Yrds (≈ 50 % d’un équipement T1)
- **Commande** : `!learn_skill MAG_FOU_001`

## Lore (Encyclopédie d'Argo)
Un éclair unique et instantané, sort de prédilection des embusqueurs Imps.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FOU_001')`
