# Ragnarök Flame

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_010`
- **Catégorie** : Magie — Feu
- **Tier** : T5 · **Rareté** : Légendaire
- **Race Affinité** : Salamander (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 680 |
| Temps d'Incantation | 5s |
| Cooldown | 1 / combat |
| Niveau Requis | 46 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **2100 + (INT × 1.2)** dégâts de Feu à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 2100 + (INT × 1.2) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast ragnarok_flame` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : **Quête de titre** (T5 jamais enseigné en boutique de skill) — récompense de haut niveau
- **Prix d'apprentissage** : Non achetable (déblocage par quête)
- **Commande** : `!learn_skill MAG_FEU_010`

## Lore (Encyclopédie d'Argo)
La flamme de fin du monde, dit-on tirée du cœur même de Logi ; obtenue seulement par une quête de titre.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_010')`
