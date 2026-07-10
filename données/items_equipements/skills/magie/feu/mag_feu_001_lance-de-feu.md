# Lance de Feu

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_001`
- **Catégorie** : Magie — Feu
- **Tier** : T1 · **Rareté** : Commune
- **Race Affinité** : Salamander (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 30 |
| Temps d'Incantation | 1.0s |
| Cooldown | 0 |
| Niveau Requis | 1 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Projectile de feu basique infligeant des dégâts de feu à une cible unique.

## Incantation
*Le joueur tape `!cast lance-de-feu` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Ferra NPC_GAT_31
- **Prix d'apprentissage** : 500 Yrds
- **Commande** : `!learn_skill MAG_FEU_001`

## Lore (Encyclopédie d'Argo)
Sort de base enseigné aux apprentis Salamanders de Gattan.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_001')`
