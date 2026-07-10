# Gemme de Granit

## Identification Cardinal
- **Item_ID** : `MAT_GEM_001`
- **Famille** : Gemme · **Rareté** : Rare
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Mine Mithril GRA |
| Acheté par | `NPC_GRA_66` Marchand Gemmes Fines à 90 Yrds |
| Entre dans | `WPN_BOU_002`, `ARM_TET_055` (Gemme de Granzam) |
| Empilable | OUI (×99) |

## Lore
Extraite des profondeurs de la Mine Mithril de Granzam, cette gemme brute conserve l'éclat sombre de la roche mère. Les artisans la taillent avec soin, révélant des reflets argentés qui traversent sa surface. On dit que chaque gemme de granit contient un fragment de la mémoire de la montagne. Les mineurs les recherchent pour leur résistance et leur polyvalence. Elle constitue la base de tout apprentissage en joaillerie dans la région.

## Intégration Bot
- Joueur : `!inspect MAT_GEM_001` — GM : `!sys_give MAT_GEM_001 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_GEM_001, Qty)`
