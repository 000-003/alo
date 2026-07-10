# Stone Wall

## Identification Cardinal
- **Skill_ID** : `MAG_TER_001`
- **Catégorie** : Magie — Terre
- **Tier** : T1 · **Rareté** : Commun
- **Race Affinité** : Gnome (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 40 |
| Temps d'Incantation | 1.5s |
| Cooldown | Aucun |
| Niveau Requis | 5 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Effet de soutien : applique un bonus (+5%) à la ou aux cible(s) alliée(s). Zone d’effet à partir du T3.

## Formule de Dégâts / Effet
Sort de soutien — aucun dégât direct. Intensité indexée sur INT et la maîtrise d’école.

## Incantation
*Le joueur tape `!cast stone_wall` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : École de la Terre d’Alne, maître Roan `NPC_ALN_69`
- **Prix d'apprentissage** : 150 Yrds (≈ 50 % d’un équipement T1)
- **Commande** : `!learn_skill MAG_TER_001`

## Lore (Encyclopédie d'Argo)
Un pan de roche surgi du sol pour bloquer une charge ; base de la géomancie gnome.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_TER_001')`
