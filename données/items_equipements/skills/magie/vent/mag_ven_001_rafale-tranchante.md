# Rafale Tranchante

## Identification Cardinal
- **Skill_ID** : `MAG_VEN_001`
- **Catégorie** : Magie — Vent
- **Tier** : T1 · **Rareté** : Commune
- **Race Affinité** : Sylph (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 30 |
| Temps d'Incantation | 1.0s |
| Cooldown | 0 |
| Niveau Requis | 1 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Rafale tranchante projetée vers une cible infligeant des dégâts de vent.

## Incantation
*Le joueur tape `!cast rafale-tranchante` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Zeph NPC_SWI_71
- **Prix d'apprentissage** : 500 Yrds
- **Commande** : `!learn_skill MAG_VEN_001`

## Lore (Encyclopédie d'Argo)
Premier sort enseigné aux Sylphes de Swilvane.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_VEN_001')`
