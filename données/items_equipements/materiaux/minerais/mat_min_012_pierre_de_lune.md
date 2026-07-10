# Pierre de Lune

## Identification Cardinal
- **Item_ID** : `MAT_MIN_012`
- **Famille** : Minerai · **Rareté** : Rare
- **Tier** : T3

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Ruines Penwether, `ZONE_SPR_HUNT_001` |
| Acheté par | `NPC_PEN_15` à 500 Yrds |
| Entre dans | `WPN_BAG_002`, `WPN_RAP_005` |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
La Pierre de Lune de Penwether est un oxymore minéral : elle brille plus fort dans l'obscurité totale, comme si elle stockait la lumière pour la restituer aux heures sombres. Les Spriggans la récoltent sous la lune (d'où son nom) et jurent que les pierres cueillies pendant une éclipse ont un éclat plus vif. Les enchanteurs l'utilisent comme catalyseur pour les enchantements de longue durée. Argo a vérifié : oui, elle brille vraiment plus dans le noir. Non, personne ne sait pourquoi.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_012` — GM : `!sys_give MAT_MIN_012 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_012, Qty)`
