# Revitalisation Sacrée

## Identification Cardinal
- **Skill_ID** : `MAG_GUE_006`
- **Catégorie** : Magie — Guérison
- **Tier** : T3 · **Rareté** : Rare
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 300 |
| Temps d'Incantation | 3.0s |
| Cooldown | 60 |
| Niveau Requis | 30 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Revitalisation sacrée : résurrection d'un allié avec un pourcentage de ses PV.
**Zone d'effet** : Oui

## Incantation
*Le joueur tape `!cast revitalisation-sacree` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Zephyrine NPC_ALN_68
- **Prix d'apprentissage** : 5000 Yrds
- **Commande** : `!learn_skill MAG_GUE_006`

## Lore (Encyclopédie d'Argo)
Rituel de résurrection enseigné aux prêtres d'Alne.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GUE_006')`
