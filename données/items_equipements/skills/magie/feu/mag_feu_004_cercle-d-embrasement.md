# Cercle d'Embrasement

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_004`
- **Catégorie** : Magie — Feu
- **Tier** : T2 · **Rareté** : Peu Commune
- **Race Affinité** : Salamander (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 80 |
| Temps d'Incantation | 2.0s |
| Cooldown | 5 |
| Niveau Requis | 10 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Cercle d'embrasement au sol infligeant des dégâts de feu continus aux ennemis dans la zone.

## Incantation
*Le joueur tape `!cast cercle-d-embrasement` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Ferra NPC_GAT_31
- **Prix d'apprentissage** : 1500 Yrds
- **Commande** : `!learn_skill MAG_FEU_004`

## Lore (Encyclopédie d'Argo)
Cercle rituel utilisé par les Salamanders pour les cérémonies du feu.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_004')`
