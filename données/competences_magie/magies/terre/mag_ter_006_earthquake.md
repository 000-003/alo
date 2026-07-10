# Earthquake

## Identification Cardinal
- **Skill_ID** : `MAG_TER_006`
- **Catégorie** : Magie — Terre
- **Tier** : T3 · **Rareté** : Rare
- **Race Affinité** : Gnome (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 240 |
| Temps d'Incantation | 3s |
| Cooldown | 40 s |
| Niveau Requis | 25 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **620 + (INT × 0.8)** dégâts de Terre à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 620 + (INT × 0.8) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast earthquake` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École de la Terre d’Alne, maître Roan `NPC_ALN_69`
- **Prix d'apprentissage** : 2200 Yrds (≈ 50 % d’un équipement T3)
- **Commande** : `!learn_skill MAG_TER_006`

## Lore (Encyclopédie d'Argo)
Un séisme localisé qui déséquilibre et blesse tous les ennemis au sol ; signature de Granzam.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_TER_006')`
