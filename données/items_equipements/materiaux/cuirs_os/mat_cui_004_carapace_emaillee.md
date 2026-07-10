# Carapace Émaillée

## Identification Cardinal
- **Item_ID** : `MAT_CUI_004`
- **Famille** : Cuir/Os · **Rareté** : Rare
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_LEP_002` Crabe Bouilloire (taux 30%) > Champs Scories |
| Acheté par | `NPC_BRO_32` Marchand Armures à 28 Yrds |
| Entre dans | `ARM_TET_040`, `WPN_BOU_002` |
| Empilable | OUI (×99) |

## Lore
Les Crabes Bouilloires des Champs Scories ont une carapace recouverte d'un émail naturel aux reflets métalliques, acquise en filtrant les minéraux en fusion des geysers. Cette carapace émaillée est extrêmement résistante à la chaleur et aux chocs. Les armuriers la paient cher pour en renforcer les boucliers et plastrons. Chaque mue libère une carapace intacte que les chasseurs de scories s'arrachent.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_004` — GM : `!sys_give MAT_CUI_004 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_004, Qty)`
