# Plante des Ombres

## Identification Cardinal
- **Item_ID** : `MAT_HRB_007`
- **Famille** : Plante · **Rareté** : Rare
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Canyon Duskarn |
| Acheté par | Herboriste `NPC_DUS_36` à 4 Yrds |
| Entre dans | `CSM_POT_020`, `WPN_DAG_004` |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Cette plante cryptogame prospère dans l'obscurité permanente du canyon de Duskarn. Ses feuilles noires sont enduites d'une cire toxique qui paralyse les proies. Les herboristes la manipulent avec des gants imprégnés de contre-poison. Elle ne peut être récoltée que lors des éclipses, lorsque son venin est le plus concentré. Les assassins de la guilde des ombres en raffolent.

## Intégration Bot
- Joueur : `!inspect MAT_HRB_007` — GM : `!sys_give MAT_HRB_007 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_HRB_007, Qty)`
