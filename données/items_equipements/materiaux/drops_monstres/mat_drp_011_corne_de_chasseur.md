# Corne de Chasseur

## Identification Cardinal
- **Item_ID** : `MAT_DRP_011`
- **Famille** : Drop de monstre · **Rare**
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_CAI_001` (taux 10%) |
| Acheté par | `NPC_FRE_31` à 150 Yrds |
| Entre dans | `WPN_ARC_005`, `WPN_LAN_005` |
| Empilable | OUI (×99) |

## Lore
Les grands cerfs des plaines de Caistrel perdent leurs bois chaque saison, mais ceux prélevés sur une bête abattue en combat conservent leur pleine puissance. Leur structure osseuse est si dense qu'elle rivalise avec le fer brut. Les marchands de lames les transforment en poignées d'armes ou en renforts d'arcs. Les chasseurs disent qu'une corne de Caistrel porte encore la fierté de son propriétaire d'origine.

## Intégration Bot
- Joueur : `!inspect MAT_DRP_011` — GM : `!sys_give MAT_DRP_011 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_DRP_011, Qty)`
