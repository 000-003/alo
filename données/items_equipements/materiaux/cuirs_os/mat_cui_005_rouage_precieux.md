# Rouage Précieux

## Identification Cardinal
- **Item_ID** : `MAT_CUI_005`
- **Famille** : Cuir/Os · **Rareté** : Rare
- **Tier** : T3

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_LEP_004` Automate Égaré (taux 15%) > Champs Scories |
| Acheté par | `NPC_BRO_48` Receleur à 50 Yrds |
| Entre dans | `WPN_MAS_006`, `BAG_010` (Leprechaun) |
| Empilable | OUI (×99) |

## Lore
Récupérés sur les carcasses d'Automates Égarés des Champs Scories, ces rouages en alliage mémoriel sont très recherchés par les horlogers et les mécatroniciens. Ils tournent sans jamais s'user, comme si la mémoire de leur créateur survivait en eux. Le Receleur les achète sans poser de questions, ce qui alimente les rumeurs sur leur véritable provenance. Certains prétendent entendre un tic-tac fantôme lorsqu'on les approche de l'oreille.

## Intégration Bot
- Joueur : `!inspect MAT_CUI_005` — GM : `!sys_give MAT_CUI_005 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_CUI_005, Qty)`
