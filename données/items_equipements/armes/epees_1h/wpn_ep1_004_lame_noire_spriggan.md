# Lame Noire Spriggan

## Identification Cardinal
- **Item_ID** : `WPN_EP1_004`
- **Famille** : Épée à une main · **Vitesse** : moyenne
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 14 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 30 |
| Poids | 2,5 kg |
| Durabilité | 340 |
| Bonus | +3 INT |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Penwether (`NPC_PEN_04`).
- **Recette** : 3× Fer noir + 2× Poussière de Nécropole.
- **Prix** : 950 Yrds (achat) · 238 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le fer noir des Spriggans ne renvoie aucune lumière : dans la pénombre des Terres Grises, la lame disparaît et seul son sifflement trahit sa trajectoire. Les chasseurs de trésors l'affectionnent car elle ne trahit jamais leur position par un reflet. On raconte qu'une lame bien forgée « boit » la clarté des illusions et révèle ce qui se cache derrière.

## Intégration Bot
- Joueur : `!equiper WPN_EP1_004` · `!inspect WPN_EP1_004` — GM : `!sys_give WPN_EP1_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_EP1_004, 1)`
