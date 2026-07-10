# Rayon de Lumière

## Identification Cardinal
- **Skill_ID** : `MAG_LUM_001`
- **Catégorie** : Magie — Lumière
- **Tier** : T1 · **Rareté** : Commune
- **Race Affinité** : Leprechaun (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 30 |
| Temps d'Incantation | 1.0s |
| Cooldown | 0 |
| Niveau Requis | 1 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Rayon de lumière : faisceau lumineux infligeant des dégâts sacrés.

## Incantation
*Le joueur tape `!cast rayon-de-lumiere` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Rune NPC_LEP_33
- **Prix d'apprentissage** : 500 Yrds
- **Commande** : `!learn_skill MAG_LUM_001`

## Lore (Encyclopédie d'Argo)
Rayon enseigné aux apprentis Leprechauns de Brokkheim.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_LUM_001')`
