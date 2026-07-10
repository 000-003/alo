# World Pillar

## Identification Cardinal
- **Skill_ID** : `MAG_TER_010`
- **Catégorie** : Magie — Terre
- **Tier** : T5 · **Rareté** : Légendaire
- **Race Affinité** : Gnome (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 680 |
| Temps d'Incantation | 5s |
| Cooldown | 1 / combat |
| Niveau Requis | 46 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **2100 + (INT × 1.2)** dégâts de Terre à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 2100 + (INT × 1.2) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast world_pillar` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : **Quête de titre** (T5 jamais enseigné en boutique de skill) — récompense de haut niveau
- **Prix d'apprentissage** : Non achetable (déblocage par quête)
- **Commande** : `!learn_skill MAG_TER_010`

## Lore (Encyclopédie d'Argo)
Invoque un pilier du monde jailli des racines d’Yggdrasil ; titre-quête des archi-géomanciens.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_TER_010')`
