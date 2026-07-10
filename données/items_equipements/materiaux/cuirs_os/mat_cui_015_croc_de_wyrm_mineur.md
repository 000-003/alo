# Croc de Wyrm Mineur

## Identification Cardinal
- **Item_ID** : `MAT_CUI_015`
- **Famille** : Cuir/Os · **Rareté** : Rare
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_CAI_002` Wyrm des Cavernes (taux 20%) > Cavernes |
| Acheté par | `NPC_BRO_01` Forgeron à 40 Yrds |
| Entre dans | `WPN_DAG_005`, `WPN_ARC_005` |
| Empilable | OUI (×99) |

## Lore
Les crocs des Wyrmes Mineurs qui hantent les Cavernes sont en fait des dents fossilisées d'une espèce plus ancienne. Le Forgeron de Bronzebourg les utilise comme incrustations dans les armes de prestige. Leur structure cristalline les rend aussi durs que l'acier trempé mais bien plus légers. Les mineurs tombent parfois sur des nids abandonnés contenant des dizaines de ces crocs. La rumeur veut qu'ils puissent empoisonner les blessures qu'ils infligent.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_015` — GM : `!sys_give MAT_CUI_015 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_015, Qty)`
