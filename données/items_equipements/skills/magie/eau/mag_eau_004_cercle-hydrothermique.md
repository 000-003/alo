# Cercle Hydrothermique

## Identification Cardinal
- **Skill_ID** : `MAG_EAU_004`
- **Catégorie** : Magie — Eau
- **Tier** : T2 · **Rareté** : Peu Commune
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 80 |
| Temps d'Incantation | 2.0s |
| Cooldown | 5 |
| Niveau Requis | 10 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Cercle hydrothermique soignant les alliés et blessant les ennemis dans la zone.

## Incantation
*Le joueur tape `!cast cercle-hydrothermique` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Selene NPC_ALN_70
- **Prix d'apprentissage** : 1500 Yrds
- **Commande** : `!learn_skill MAG_EAU_004`

## Lore (Encyclopédie d'Argo)
Cercle aux propriétés curatives découvert par les moines undines.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_EAU_004')`
