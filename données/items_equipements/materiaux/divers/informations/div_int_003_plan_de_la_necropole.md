# Plan de la Nécropole

## Identification Cardinal
- **Item_ID** : `INT_003`
- **Famille** : Information · **Rareté** : Peu commun
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Archive ancienne |
| Signature | Penn |
| Acheté par | `NPC_PEN_29` Bibliothécaire à 500 Yrds |
| Empilable | NON |

## Lore
Le Bibliothécaire de Penn a déniché ce plan poussiéreux dans les catacombes. Il détaille les couloirs secrets et les chambres funéraires de la Nécropole. Les chasseurs de trésors le paient cher pour éviter les pièges millénaires.

## Intégration Bot
- Joueur : `!inspect INT_003` — GM : `!sys_give INT_003 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, INT_003, Qty)`
