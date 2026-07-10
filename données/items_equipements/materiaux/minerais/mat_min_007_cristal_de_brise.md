# Cristal de Brise

## Identification Cardinal
- **Item_ID** : `MAT_MIN_007`
- **Famille** : Minerai · **Rareté** : Peu commun
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Terres Grises, `ZONE_SPR_HUNT_002` |
| Acheté par | Marchand Pierres `NPC_PEN_15` à 60 Yrds |
| Entre dans | `WPN_ARC_004`, `WPN_BAG_010` (Cristal de brise, Sylph) |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Dans les Terres Grises, le vent ne se contente pas de souffler : il chante dans les cristaux de brise fichés dans le sol comme des dents brisées. Ces pierres translucides vibrent lorsqu'on les taille, produisant une note pure qui résonne dans le crâne des mages. Les Sylphes les utilisent pour focaliser leur magie de vent, mais tout lanceur de sorts y trouvera son compte. Le Marchand Pierres de Penwether les achète sans poser de questions — et ne parie pas sur leur origine légale.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_007` — GM : `!sys_give MAT_MIN_007 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_007, Qty)`
