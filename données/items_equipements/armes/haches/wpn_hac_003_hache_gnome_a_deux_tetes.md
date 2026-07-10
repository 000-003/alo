# Hache Gnome à Deux Têtes

## Identification Cardinal
- **Item_ID** : `WPN_HAC_003`
- **Famille** : Hache · **Vitesse** : lente
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 15 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 40 |
| Poids | 4,8 kg |
| Durabilité | 440 |
| Bonus | +4 STR, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Granzam (`NPC_GRA_03`).
- **Recette** : 4× Fer gnome + 3× Granit de Granzam.
- **Prix** : 1 150 Yrds (achat) · 288 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Deux tranchants opposés pour ne jamais avoir à réarmer : la hache mord à l'aller comme au retour. Les Gnomes la préfèrent aux armes à pointe, jugeant plus honnête de « briser » que de « percer ». Son poids ferait ployer un homme ordinaire, mais un mineur de Granzam la manie comme sa pioche du matin.

## Intégration Bot
- Joueur : `!equiper WPN_HAC_003` · `!inspect WPN_HAC_003` — GM : `!sys_give WPN_HAC_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_HAC_003, 1)`
