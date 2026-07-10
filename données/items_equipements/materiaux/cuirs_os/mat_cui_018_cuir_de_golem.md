# Cuir de Golem

## Identification Cardinal
- **Item_ID** : `MAT_CUI_018`
- **Famille** : Cuir/Os · **Rareté** : Rare
- **Tier** : T3

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_GNO_004` Golem Miniature (taux 10%) > Steppes Granit |
| Acheté par | `NPC_GRA_69` Vendeur Noyaux à 55 Yrds |
| Entre dans | `BAG_007`, `WPN_BOU_005` |
| Empilable | OUI (×99) |

## Lore
Les Golems Miniatures des Steppes Granit sont des constructs oubliés dont l'enveloppe de cuir traité à l'arcanite résiste mieux que l'acier. Le Vendeur Noyaux les dépèce pour extraire leur âme mécanique, mais revend le cuir aux enchères spécialisées. Ce matériau conserve une mémoire des formes et peut être réanimé temporairement par un mot de commande. Artificiers et golemologues se le disputent.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_018` — GM : `!sys_give MAT_CUI_018 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_018, Qty)`
