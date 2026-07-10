# Explosion Ignée

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_005`
- **Catégorie** : Magie — Feu
- **Tier** : T2 · **Rareté** : Peu Commune
- **Race Affinité** : Salamander (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 115 |
| Temps d'Incantation | 2.0s |
| Cooldown | 10 |
| Niveau Requis | 14 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Explosion ignée dévastatrice sur une zone réduite autour du lanceur.

## Incantation
*Le joueur tape `!cast explosion-ignee` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Ferra NPC_GAT_31
- **Prix d'apprentissage** : 1500 Yrds
- **Commande** : `!learn_skill MAG_FEU_005`

## Lore (Encyclopédie d'Argo)
Sort explosif mis au point par Ferra elle-même.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_005')`
