# Flame Whip

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_005`
- **Catégorie** : Magie — Feu
- **Tier** : T2 · **Rareté** : Peu commun
- **Race Affinité** : Salamander (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 110 |
| Temps d'Incantation | 2s |
| Cooldown | 10 s |
| Niveau Requis | 14 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **300 + (INT × 0.6)** dégâts de Feu à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 300 + (INT × 0.6) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast flame_whip` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École du Feu de Gattan, maître Ferra `NPC_GAT_31`
- **Prix d'apprentissage** : 500 Yrds (≈ 50 % d’un équipement T2)
- **Commande** : `!learn_skill MAG_FEU_005`

## Lore (Encyclopédie d'Argo)
Un fouet incandescent qui frappe en arc, cher aux gladiateurs de l’arène de Voulg.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_005')`
