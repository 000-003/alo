# Espadon de Granit

## Identification Cardinal
- **Item_ID** : `WPN_EP2_003`
- **Famille** : Épée à deux mains · **Vitesse** : lente
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 16 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 40 |
| Poids | 7,0 kg |
| Durabilité | 460 |
| Bonus | +4 STR, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Granzam (`NPC_GRA_03`).
- **Recette** : 6× Granit de Granzam + 2× Fer gnome.
- **Prix** : 1 350 Yrds (achat) · 338 Yrds (revente)

## Lore (Encyclopédie d'Argo)
On dit à Granzam que ce n'est pas une épée mais « un mur qu'on tient à deux mains ». Le tranchant compte moins que la masse : un coup bien placé fait ployer les genoux avant même d'ouvrir la garde. Les mineurs reconvertis en soldats l'apprécient car elle se manie comme la pioche qu'ils connaissaient déjà.

## Intégration Bot
- Joueur : `!equiper WPN_EP2_003` · `!inspect WPN_EP2_003` — GM : `!sys_give WPN_EP2_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_EP2_003, 1)`
