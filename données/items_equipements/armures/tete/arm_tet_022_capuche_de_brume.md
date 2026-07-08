# Capuche de Brume

## Identification Cardinal
- **Item_ID** : `ARM_TET_022`
- **Slot** : Tête — Capuche · **Classe** : Tissu
- **Tier** : T2 · **Rareté** : Rare
- **Niveau requis** : 16 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 26 |
| RES magique | 24 |
| Poids | 0,3 kg |
| Durabilité | 360 |
| Pénalité de vol | 0% |
| Bonus | +15% discrétion dans le Marais de Brume ; immunise au malus de vision de la brume légère |

## Acquisition & Chaînage économique
- **Source** : Vendue par la Sorcière Morgane (`NPC_UND_11`), Marais de Brume (`ZONE_UND_HUNT_002`) — uniquement aux joueurs qu'elle juge « suffisamment humides ».
- **Recette** : 4× Voile de brume condensée (drop `MOB_UND_020-024`) + 2× Lin blanchi.
- **Prix** : 1 500 Yrds (achat) · 375 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Morgane tisse la brume elle-même, à l'aiguille d'os, en fredonnant. Le vêtement n'est jamais tout à fait net aux yeux d'autrui : les contours du porteur tremblent comme une réflexion dans l'eau. Elle refuse d'en vendre aux Salamanders — « la vapeur, très peu pour moi ».

## Intégration Bot
- Joueur : `!equiper ARM_TET_022 tete` · `!inspect ARM_TET_022` — GM : `!sys_give ARM_TET_022 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_022, 1)`
