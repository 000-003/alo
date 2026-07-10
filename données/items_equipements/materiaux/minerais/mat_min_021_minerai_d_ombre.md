# Minerai d'Ombre

## Identification Cardinal
- **Item_ID** : `MAT_MIN_021`
- **Famille** : Minerai · **Rareté** : Épique
- **Tier** : T4

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Nécropole Antique, `ZONE_SPR_DUN_001` |
| Acheté par | Nécro `NPC_PEN_84` à 2 800 Yrds |
| Entre dans | `WPN_EP1_011`, `WPN_KAT_008`, `WPN_ARC_008` (fer d'ombre) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Le Minerai d'Ombre de la Nécropole Antique est une aberration : il n'a pas de masse propre. Lorsqu'on le soulève, il pèse moins que sa taille ne l'indique — comme si une partie de lui-même manquait, logée ailleurs. Les armes forgées avec peuvent passer à travers les armures légères comme à travers une ombre, littéralement. Le PNJ Nécro de Penwether le recherche pour ses expériences. Les Imp et Spriggans se le disputent en silence — c'est dire sa valeur.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_021` — GM : `!sys_give MAT_MIN_021 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_021, Qty)`
