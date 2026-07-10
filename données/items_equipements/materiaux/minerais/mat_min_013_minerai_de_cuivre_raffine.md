# Minerai de Cuivre Raffiné

## Identification Cardinal
- **Item_ID** : `MAT_MIN_013`
- **Famille** : Minerai · **Rareté** : Peu commun
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Lac Souterrain, `ZONE_GNO_HUNT_001` |
| Acheté par | `NPC_GRA_31` à 90 Yrds |
| Entre dans | `WPN_MAS_003`, `ARM_TET_040` (alliage T2) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Le cuivre raffiné du Lac Souterrain est un cuivre qui a été lavé par les eaux de filtration pendant des cycles géologiques — les Gnomes disent que l'eau y dissout les impuretés que le feu ne peut pas toucher. Le résultat est un métal d'une pureté rare, qui rougit à peine et se marie aux alliages comme un premier violon dans un orchestre. Les artisans gnomes le réservent aux pièces mécaniques de précision : engrenages, charnières de portes de donjon, et cadrans de vol.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_013` — GM : `!sys_give MAT_MIN_013 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_013, Qty)`
