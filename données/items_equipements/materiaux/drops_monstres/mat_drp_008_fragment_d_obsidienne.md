# Fragment d'Obsidienne

## Identification Cardinal
- **Item_ID** : `MAT_DRP_008`
- **Famille** : Drop de monstre · **Légendaire**
- **Tier** : T4

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `BOSS_SAL_DUN_001` Logi (Caldeira, taux 8%) |
| Acheté par | `NPC_GRA_60` à 2000 Yrds |
| Entre dans | `WPN_EP2_005`, `WPN_KAT_006` |
| Empilable | OUI (×99) |

## Lore
Ces éclats de verre volcanique proviennent de créatures nées dans les entrailles du monde. Leur tranchant est si parfait qu'ils peuvent couper la matière et les sorts à la fois. Les forgerons de lames de Gramour les intègrent aux épées T4 pour leur conférer un fil qui ne s'émousse jamais. La légende prétend que ces fragments viennent d'un météore noir tombé avant l'apparition des premiers mortels.

## Intégration Bot
- Joueur : `!inspect MAT_DRP_008` — GM : `!sys_give MAT_DRP_008 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_DRP_008, Qty)`
