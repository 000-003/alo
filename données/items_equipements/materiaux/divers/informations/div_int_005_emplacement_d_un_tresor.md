# Emplacement d'un Trésor

## Identification Cardinal
- **Item_ID** : `INT_005`
- **Famille** : Information · **Rareté** : Rare
- **Tier** : T3

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Butin caché |
| Signature | Grave |
| Acheté par | `NPC_GRA_48` Receleur à 1000 Yrds |
| Empilable | NON |

## Lore
Le Receleur de Grave a mis la main sur un parchemin indiquant l'emplacement d'un trésor oublié. Il le vend au plus offrant, sans garantie. Certains reviennent enrichis, d'autres ne reviennent pas du tout. L'aventure a un prix.

## Intégration Bot
- Joueur : `!inspect INT_005` — GM : `!sys_give INT_005 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, INT_005, Qty)`
