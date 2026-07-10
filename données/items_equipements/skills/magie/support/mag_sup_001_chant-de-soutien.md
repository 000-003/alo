# Chant de Soutien

## Identification Cardinal
- **Skill_ID** : `MAG_SUP_001`
- **Catégorie** : Magie — Support
- **Tier** : T1 · **Rareté** : Commune
- **Race Affinité** : Puca (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 30 |
| Temps d'Incantation | 1.0s |
| Cooldown | 0 |
| Niveau Requis | 1 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Chant de soutien : booste l'attaque et la défense d'un allié pendant un temps limité.

## Incantation
*Le joueur tape `!cast chant-de-soutien` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Lyra NPC_PUC_22
- **Prix d'apprentissage** : 500 Yrds
- **Commande** : `!learn_skill MAG_SUP_001`

## Lore (Encyclopédie d'Argo)
Premier chant appris par tous les bardes Puca.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_SUP_001')`
