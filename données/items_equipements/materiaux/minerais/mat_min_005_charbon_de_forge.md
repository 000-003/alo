# Charbon de Forge

## Identification Cardinal
- **Item_ID** : `MAT_MIN_005`
- **Famille** : Minerai · **Rareté** : Commun
- **Tier** : T1

## Usage & Filière
| Champ | Valeur |
|---|---|
| Source | Terrils BRO, `ZONE_LEP_CAP_001` |
| Acheté par | Charbonnier `NPC_BRO_50` à 2 Yrds |
| Entre dans | combustible de forge : `WPN_EP1_003`, `WPN_HAC_002` |
| Empilable | OUI (×99) |

## Lore (Encyclopédie d'Argo)
Les terrils qui ceinturent Brokkheim sont noirs, gras, et sentent le soufre à trois cents mètres. Les Leprechauns n'y voient pas une pollution — ils y voient leur banque. Le charbon de forge est le seul combustible capable d'atteindre les températures nécessaires au travail du mithril. Sans lui, pas de forge, pas d'armes, pas d'armures. Les joueurs qui sous-estiment ce matériau basique se retrouvent vite à grelotter devant une enclume froide. Argo vous le dit : le charbon, c'est l'estomac de l'économie.

## Intégration Bot
- Joueur : `!inspect MAT_MIN_005` — GM : `!sys_give MAT_MIN_005 [Qty]` — IA : `SYS_GRANT_ITEM(Avatar_ID, MAT_MIN_005, Qty)`
