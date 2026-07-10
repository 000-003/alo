# Lance Titanesque de Mithrandur

## Identification Cardinal
- **Item_ID** : `WPN_LAN_007`
- **Famille** : Lance · **Vitesse** : moyenne
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 40 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 120 |
| Poids | 4,0 kg |
| Durabilité | 900 |
| Bonus | +10 STR, +4 DEF |

## Acquisition & Chaînage économique
- **Source** : Drop de Mithrandur (`BOSS_GNO_DUN_001`, 8%) ; assemblage par le forgeron de Granzam (`NPC_GRA_03`).
- **Recette** : 6× Granit de Granzam + 4× Mithril de Brokkheim + 3× Gemme de Granzam.
- **Prix** : 18 000 Yrds (achat) · 4 500 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Sa hampe est un rail de mine renforcé, sa pointe un cône de granit et de mithril fondus ensemble dans la chaleur de la Mine de Mithril. Un coup bien placé traverse le roc ; contre la chair, il n'y a rien à raconter. Mithrandur, gardien de la mine, aurait forgé la première de ses propres mains avant de la perdre au combat contre les premiers aventuriers.

## Intégration Bot
- Joueur : `!equiper WPN_LAN_007` · `!inspect WPN_LAN_007` — GM : `!sys_give WPN_LAN_007 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_LAN_007, 1)`
