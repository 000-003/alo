# Minerai de Foudre

## Identification Cardinal
- **Item_ID** : `MAT_MIN_016`
- **Famille** : Minerai · **Rareté** : Rare
- **Tier** : T3

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Terres Grises, `ZONE_SPR_HUNT_002` |
| Acheté par | `NPC_PEN_15` à 550 Yrds |
| Entre dans | `WPN_KAT_005`, `CSM_PAR_013` |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Les Terres Grises sont parcourues d'orages magnétiques qui n'existent nulle part ailleurs — et le Minerai de Foudre en est la cicatrice. Chargé d'électricité statique, il crépite au toucher et décharge de petites étincelles quand on le brise. Les forgerons spriggans l'intègrent aux armes pour leur conférer un affixe de foudre qui paralyse les ennemis. Le Cardinal semble générer ces minerais de manière cyclique après chaque gros orage. Un joueur avisé sait où se poster.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_016` — GM : `!sys_give MAT_MIN_016 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_016, Qty)`
