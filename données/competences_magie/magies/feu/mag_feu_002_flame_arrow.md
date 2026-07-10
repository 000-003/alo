# Flame Arrow

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_002`
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
*Le joueur tape `!cast flame_arrow` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École du Feu de Gattan, maître Ferra `NPC_GAT_31`
- **Prix d'apprentissage** : 150 Yrds (≈ 50 % d’un équipement T1)
- **Commande** : `!learn_skill MAG_FEU_002`

## Lore (Encyclopédie d'Argo)
Une flèche de flamme rapide et peu coûteuse, l’outil de harcèlement favori des jeunes mages de Gattan.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_002')`
