# Minerai Primordial

## Identification Cardinal
- **Item_ID** : `MAT_MIN_025`
- **Famille** : Minerai · **Rareté** : Épique
- **Tier** : T4

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Alne, `ZONE_NEU_CAP_001` |
| Acheté par | Halle `NPC_ALN_30` à 2 500 Yrds |
| Entre dans | `WPN_LEG_001`, `WPN_LEG_004` (craft T5) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Le Minerai Primordial est la substance originelle d'Alfheim — la matière première que le Cardinal a utilisée pour compiler le monde. Il ne se trouve qu'à Alne, dans une chambre verrouillée sous la Halle centrale, accessible aux seuls joueurs ayant atteint un certain seuil de réputation. Il ressemble à de l'argent en fusion figé dans le temps, avec des reflets de toutes les couleurs de l'arc-en-ciel. Les légendes disent qu'avec assez de Minerai Primordial, on pourrait coder un nouvel étage du monde.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_025` — GM : `!sys_give MAT_MIN_025 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_025, Qty)`
