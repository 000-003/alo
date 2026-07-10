# Mur de Flammes

## Identification Cardinal
- **Skill_ID** : `MAG_FEU_003`
- **Catégorie** : Magie — Feu
- **Tier** : T1 · **Rareté** : Commune
- **Race Affinité** : Salamander (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 60 |
| Temps d'Incantation | 1.5s |
| Cooldown | 5 |
| Niveau Requis | 8 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Mur de flammes persistantes bloquant les passages et brûlant les ennemis.

## Incantation
*Le joueur tape `!cast mur-de-flammes` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Ferra NPC_GAT_31
- **Prix d'apprentissage** : 500 Yrds
- **Commande** : `!learn_skill MAG_FEU_003`

## Lore (Encyclopédie d'Argo)
Technique défensive développée pendant la guerre des cendres.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_FEU_003')`
