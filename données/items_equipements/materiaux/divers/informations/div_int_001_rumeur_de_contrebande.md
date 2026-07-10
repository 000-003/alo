# Rumeur de Contrebande

## Identification Cardinal
- **Item_ID** : `INT_001`
- **Famille** : Information · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Rumeur urbaine |
| Signature | Vougy |
| Acheté par | `NPC_VOU_48` Murk à 100 Yrds |
| Empilable | NON |

## Lore
Murk colporte des rumeurs de contrebande entre les docks de Vougy et les cavernes de Gattan. L'information est vague mais peut mener à des rencontres intéressantes dans les bas-fonds. À prendre avec des pincettes et une bourse bien garnie.

## Intégration Bot
- Joueur : `!inspect INT_001` — GM : `!sys_give INT_001 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, INT_001, Qty)`
