# Noyau Fissuré

## Identification Cardinal
- **Item_ID** : `MAT_DRP_003`
- **Famille** : Drop de monstre · **Rare**
- **Tier** : T2

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | drop `MOB_GNO_004` Golem (taux 10%) |
| Acheté par | `NPC_GRA_69` à 150 Yrds |
| Entre dans | `WPN_BAG_004`, `CSM_CRI_003` |
| Empilable | OUI (×99) |

## Lore
Le cœur brisé d'un Golem de pierre conserve encore assez d'énergie tellurique pour être réutilisé. Chaque fissure raconte un combat perdu, un sort encaissé, un siècle d'usure. Les vendeurs de noyaux les rachètent pour les recharger et les revendre aux artisans golems. Un noyau fissuré bien entretenu peut encore alimenter un automate de taille moyenne pendant des décennies.

## Intégration Bot
- Joueur : `!inspect MAT_DRP_003` — GM : `!sys_give MAT_DRP_003 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_DRP_003, Qty)`
