# Empyrean Dawn

## Identification Cardinal
- **Skill_ID** : `MAG_LUM_010`
- **Catégorie** : Magie — Lumière
- **Tier** : T5 · **Rareté** : Légendaire
- **Race Affinité** : Leprechaun (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 680 |
| Temps d'Incantation | 5s |
| Cooldown | 1 / combat |
| Niveau Requis | 46 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **2100 + (INT × 1.2)** dégâts de Lumière à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 2100 + (INT × 1.2) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast empyrean_dawn` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : **Quête de titre** (T5 jamais enseigné en boutique de skill) — récompense de haut niveau
- **Prix d'apprentissage** : Non achetable (déblocage par quête)
- **Commande** : `!learn_skill MAG_LUM_010`

## Lore (Encyclopédie d'Argo)
L’aube des cieux supérieurs qui efface l’ombre du monde ; titre-quête des maîtres de lumière.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_LUM_010')`
