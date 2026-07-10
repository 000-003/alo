# Hymne de Protection

## Identification Cardinal
- **Skill_ID** : `MAG_SUP_003`
- **Catégorie** : Magie — Support
- **Tier** : T1 · **Rareté** : Commune
- **Race Affinité** : Puca (+30% efficacité si cette race)

## Paramètres de Combat
| Paramètre | Valeur |
|---|---|
| Coût MP | 60 |
| Temps d'Incantation | 1.5s |
| Cooldown | 5 |
| Niveau Requis | 8 |
| Interruptible (Casting Break) | Oui (si dégâts > 5% Max HP reçus) |

## Effet
Hymne de protection : confère une réduction de dégâts au groupe.

## Incantation
*Le joueur tape `!cast hymne-de-protection` pour lancer le sort.*

## Acquisition (Enseignement)
- **Enseignant** : Lyra NPC_PUC_22
- **Prix d'apprentissage** : 500 Yrds
- **Commande** : `!learn_skill MAG_SUP_003`

## Lore (Encyclopédie d'Argo)
Hymne chanté avant les batailles.

## Commande IA
- `SYS_GRANT_SPELL(Avatar_ID, 'MAG_SUP_003')`
