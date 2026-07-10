# Water Shield

## Identification Cardinal
- **Skill_ID** : `MAG_EAU_004`
- **Catégorie** : Magie — Eau
- **Tier** : T2 · **Rareté** : Peu commun
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 110 |
| Temps d'Incantation | 2s |
| Cooldown | 10 s |
| Niveau Requis | 14 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Effet de soutien : applique un bonus (+5%) à la ou aux cible(s) alliée(s). Zone d’effet à partir du T3.

## Formule de Dégâts / Effet
Sort de soutien — aucun dégât direct. Intensité indexée sur INT et la maîtrise d’école.

## Incantation
*Le joueur tape `!cast water_shield` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Guilde des Ondins d’Alne, maître Zephyrine `NPC_ALN_68`
- **Prix d'apprentissage** : 500 Yrds (≈ 50 % d’un équipement T2)
- **Commande** : `!learn_skill MAG_EAU_004`

## Lore (Encyclopédie d'Argo)
Un bouclier liquide qui absorbe une partie des dégâts, spécialité des gardes de l’Archipel.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_EAU_004')`
