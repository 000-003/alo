# Minerai de Fer

## Identification Cardinal
- **Item_ID** : `MAT_MIN_001`
- **Famille** : Minerai · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Zones neutres, `ZONE_NEU_*` |
| Acheté par | Hob `NPC_SWI_26` à 4 Yrds |
| Entre dans | `WPN_EP1_001`, `WPN_DAG_001`, `WPN_HAC_001` |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Le fer d'Alfheim est aussi banal que la terre sous vos pieds — et presque aussi lourd. Les veines affleurent dans chaque zone neutre, grises et rugueuses, attendant qu'un piocheur novice vienne s'y casser les dents. Pourtant, ce métal ingrat est l'épine dorsale de toute civilisation dans ce monde. Chaque épée T1, chaque clou de charpente, chaque fer à cheval de Pégase commence ici. Un conseil d'Argo : ne méprisez jamais le fer. Sans lui, vos alliages T4 ne seraient que des roches bien rangées.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_001` — GM : `!sys_give MAT_MIN_001 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_001, Qty)`
