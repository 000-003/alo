# Genesis Bloom

## Identification Cardinal
- **Skill_ID** : `MAG_GUE_010`
- **Catégorie** : Magie — Guérison
- **Tier** : T5 · **Rareté** : Légendaire
- **Race Affinité** : Undine (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 680 |
| Temps d'Incantation | 5s |
| Cooldown | 1 / combat |
| Niveau Requis | 46 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Restaure **2100 + (INT × 1.2)** HP à la ou aux cible(s) alliée(s).

## Formule de Dégâts / Effet
`Soin = 2100 + (INT × 1.2) × Healing_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast genesis_bloom` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : **Quête de titre** (T5 jamais enseigné en boutique de skill) — récompense de haut niveau
- **Prix d'apprentissage** : Non achetable (déblocage par quête)
- **Commande** : `!learn_skill MAG_GUE_010`

## Lore (Encyclopédie d'Argo)
La fleur de la Genèse : ressuscite plusieurs alliés à la fois. Titre-quête ultime des guérisseurs.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GUE_010')`
