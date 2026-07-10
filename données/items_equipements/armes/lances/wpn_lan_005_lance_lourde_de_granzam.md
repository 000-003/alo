# Lance Lourde de Granzam

## Identification Cardinal
- **Item_ID** : `WPN_LAN_005`
- **Famille** : Lance · **Vitesse** : moyenne
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 27 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 68 |
| Poids | 3,6 kg |
| Durabilité | 640 |
| Bonus | +6 STR, +2 DEF |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Granzam (`NPC_GRA_03`) ; noyau tombé par le mini-boss (`MOB_GNO_025`, 8%).
- **Recette** : 4× Granit de Granzam + 3× Fer gnome + 1× Gemme de Granzam.
- **Prix** : 4 900 Yrds (achat) · 1 225 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Deux fois plus épaisse qu'une pique ordinaire, elle sert autant de lance que de levier : les mineurs-soldats de Granzam s'en servent pour renverser les créatures des Carrières Brisées avant de les achever. Sa masse absorbe les chocs qui briseraient une arme plus fine. On dit qu'un Gnome bien campé sur ses jambes ne recule d'un pouce pour personne.

## Intégration Bot
- Joueur : `!equiper WPN_LAN_005` · `!inspect WPN_LAN_005` — GM : `!sys_give WPN_LAN_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_LAN_005, 1)`
