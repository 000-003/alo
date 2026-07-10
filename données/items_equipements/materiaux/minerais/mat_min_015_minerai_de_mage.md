# Minerai de Mage

## Identification Cardinal
- **Item_ID** : `MAT_MIN_015`
- **Famille** : Minerai · **Rareté** : Rare
- **Tier** : T3

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Citernes Antiques, `ZONE_SPR_HUNT_001` |
| Acheté par | `NPC_PEN_26` à 450 Yrds |
| Entre dans | `WPN_BAG_006`, `WPN_BAG_007` |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Les Citernes Antiques sous Penwether recèlent un minerai qui n'en est pas vraiment un : le Minerai de Mage est une concrétion magmatique imprégnée de résidus de mana, formée par des siècles de fuites des laboratoires spriggans. Il pulse faiblement sous les doigts, comme un cœur de pierre. Les fabricants de baguettes l'utilisent comme cœur conducteur — il amplifie le flux magique sans le déformer. Chaque baguette T3 qui se respecte contient un fragment de ce mineral.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_015` — GM : `!sys_give MAT_MIN_015 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_015, Qty)`
