# Pique de Granit

## Identification Cardinal
- **Item_ID** : `WPN_LAN_002`
- **Famille** : Lance · **Vitesse** : moyenne
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 34 |
| Poids | 3,2 kg |
| Durabilité | 360 |
| Bonus | +3 STR |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Granzam (`NPC_GRA_03`).
- **Recette** : 3× Granit de Granzam + 2× Fer gnome.
- **Prix** : 950 Yrds (achat) · 238 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Fer de lance coulé dans le granit compacté des Steppes, si dense qu'il perce un bouclier de bois d'un seul appui. Les phalanges de Granzam la plantent au sol pour recevoir les charges de cavalerie sauvage. On dit que sa pointe ne se tord jamais — elle casse net ou tient bon, comme un Gnome.

## Intégration Bot
- Joueur : `!equiper WPN_LAN_002` · `!inspect WPN_LAN_002` — GM : `!sys_give WPN_LAN_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_LAN_002, 1)`
