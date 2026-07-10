# Fire Lance

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_001`
- **Catégorie** : Magie — Feu
- **Tier** : T1 · **Rareté** : Commun
- **Race Affinité** : Salamander (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 40 |
| Temps d'Incantation | 1.5s |
| Cooldown | Aucun |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **130 + (INT × 0.4)** dégâts de Feu à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 130 + (INT × 0.4) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast fire_lance` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École du Feu de Gattan, maître Ferra `NPC_GAT_31`
- **Prix d'apprentissage** : 150 Yrds (≈ 50 % d’un équipement T1)
- **Commande** : `!learn_skill MAG_FEU_001`

## Lore (Encyclopédie d'Argo)
Le sort le plus basique de la magie du feu, appris dès l’enfance par les Salamanders ; une lance de polygones ignés qui perfore les boucliers physiques.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_001')`
