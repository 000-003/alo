# Fimbulwinter

## Identification Cardinal
- **Skill_ID** : `MAG_GLA_010`
- **Catégorie** : Magie — Glace
- **Tier** : T5 · **Rareté** : Légendaire
- **Race Affinité** : Cait Sith (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 680 |
| Temps d'Incantation | 5s |
| Cooldown | 1 / combat |
| Niveau Requis | 46 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Inflige **2100 + (INT × 1.2)** dégâts de Glace à la ou les cible(s) visée(s).

## Formule de Dégâts / Effet
`Puissance = 2100 + (INT × 1.2) × Elemental_Affinity_Multiplier`

## Incantation
*Le joueur tape `!cast fimbulwinter` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : **Quête de titre** (T5 jamais enseigné en boutique de skill) — récompense de haut niveau
- **Prix d'apprentissage** : Non achetable (déblocage par quête)
- **Commande** : `!learn_skill MAG_GLA_010`

## Lore (Encyclopédie d'Argo)
L’hiver sans fin des légendes nordiques abattu sur le champ de bataille ; titre-quête glaciaire.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_GLA_010')`
