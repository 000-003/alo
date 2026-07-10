# Cercle de Rétablissement

## Identification Cardinal
- **Skill_ID** : `MAG_GUE_003`
- **Catégorie** : Magie — Guérison
- **Tier** : T1 · **Rareté** : Commune
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 60 |
| Temps d'Incantation | 1.5s |
| Cooldown | 5 |
| Niveau Requis | 8 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Cercle de rétablissement : zone de soin continu pour les alliés à l'intérieur.

## Incantation
*Le joueur tape `!cast cercle-de-retablissement` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Zephyrine NPC_ALN_68
- **Prix d'apprentissage** : 500 Yrds
- **Commande** : `!learn_skill MAG_GUE_003`

## Lore (Encyclopédie d'Argo)
Zone de soin utilisée dans les hôpitaux de campagne.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GUE_003')`
