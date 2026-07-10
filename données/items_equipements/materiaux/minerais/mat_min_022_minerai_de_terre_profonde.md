# Minerai de Terre Profonde

## Identification Cardinal
- **Item_ID** : `MAT_MIN_022`
- **Famille** : Minerai · **Rareté** : Peu commun
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Steppes Granit, `ZONE_GNO_HUNT_001` |
| Acheté par | Vieux Mineur `NPC_GRA_65` à 70 Yrds |
| Entre dans | `WPN_LAN_002`, `ARM_TET_055` (Gnome T2) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
La Terre Profonde est une argile minérale que les Gnomes extraient à la fois des steppes — ils creusent droit, sans détour, jusqu'à trouver la strate bleutée qui produit ce minerai étrange. Compacté et cuit, il devient une céramique aussi résistante que l'acier mais trois fois plus légère. Les armures T2 gnomes en sont farcies, offrant une protection honorable sans gêner le vol. Le Vieux Mineur qui l'achète est une institution à Granzam — il paie comptant et ne pose jamais de questions.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_022` — GM : `!sys_give MAT_MIN_022 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_022, Qty)`
