# Cuivre Brut

## Identification Cardinal
- **Item_ID** : `MAT_MIN_002`
- **Famille** : Minerai · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Steppes Granit, `ZONE_GNO_HUNT_001` |
| Acheté par | Marchand Fer `NPC_GRA_12` à 5 Yrds |
| Entre dans | `WPN_MAS_001`, `MAT_MIN_013` (alliage) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Le cuivre des Steppes Granit tire sa teinte orangée des poussières volcaniques que le vent y dépose depuis des siècles. Les Gnomes le disent « metal femelle » — malléable, docile, idéal pour apprendre. Ses billes de métal doux s'écrasent sous le marteau d'un forgeron débutant sans pleurer. Mais ne vous y trompez pas : allié à l'étain, il devient le bronze qui équipe la moitié des milices d'Alfheim. Les joueurs crafters le connaissent comme leur première leçon d'humilité à l'enclume.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_002` — GM : `!sys_give MAT_MIN_002 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_002, Qty)`
