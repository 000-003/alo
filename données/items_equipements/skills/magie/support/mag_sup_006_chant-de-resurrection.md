# Chant de Résurrection

## Identification Cardinal
- **Skill_ID** : `MAG_SUP_006`
- **Catégorie** : Magie — Support
- **Tier** : T3 · **Rareté** : Rare
- **Race Affinité** : Puca (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 300 |
| Temps d'Incantation | 3.0s |
| Cooldown | 60 |
| Niveau Requis | 30 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Chant de résurrection : ranime un allié tombé au combat avec 40% de ses PV.
**Zone d'effet** : Oui

## Incantation
*Le joueur tape `!cast chant-de-resurrection` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Lyra NPC_PUC_22
- **Prix d'apprentissage** : 5000 Yrds
- **Commande** : `!learn_skill MAG_SUP_006`

## Lore (Encyclopédie d'Argo)
Chant secret des prêtres Puca, ramenant les âmes.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_SUP_006')`
