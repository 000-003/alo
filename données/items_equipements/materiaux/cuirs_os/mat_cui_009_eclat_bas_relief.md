# Éclat Bas-Relief

## Identification Cardinal
- **Item_ID** : `MAT_CUI_009`
- **Famille** : Cuir/Os · **Rareté** : Rare
- **Tier** : T3

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_SPR_004` Statue Frémissante (taux 15%) > Nécropole |
| Acheté par | `NPC_PEN_48` Receleur à 60 Yrds |
| Entre dans | `ARM_TET_070`, `WPN_BAG_006` |
| Empilable | OUI (×99) |

## Lore
Lorsqu'une Statue Frémissante de la Nécropole est brisée, des fragments de bas-relief s'en détachent, portant encore les motifs gravés d'une civilisation oubliée. Le Receleur les achète et les revend aux antiquaires, mais certains portent des inscriptions qui intéressent les érudits de l'Interdit. Chaque éclat vibre imperceptiblement sous le doigt. Les collectionneurs les classent par période stylistique.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_009` — GM : `!sys_give MAT_CUI_009 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_009, Qty)`
