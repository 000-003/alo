# Soin Léger

## Identification Cardinal
- **Skill_ID** : `MAG_GUE_001`
- **Catégorie** : Magie — Guérison
- **Tier** : T1 · **Rareté** : Commune
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 30 |
| Temps d'Incantation | 1.0s |
| Cooldown | 0 |
| Niveau Requis | 1 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Soin léger restituant une quantité modérée de PV à une cible alliée.

## Incantation
*Le joueur tape `!cast soin-leger` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Zephyrine NPC_ALN_68
- **Prix d'apprentissage** : 500 Yrds
- **Commande** : `!learn_skill MAG_GUE_001`

## Lore (Encyclopédie d'Argo)
Sort de premiers secours enseigné dans tous les temples d'Alne.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GUE_001')`
