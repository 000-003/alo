# Décapiteuse de la Nécropole

## Identification Cardinal
- **Item_ID** : `WPN_EP2_006`
- **Famille** : Épée à deux mains · **Vitesse** : lente
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 28 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 72 |
| Poids | 6,8 kg |
| Durabilité | 660 |
| Bonus | +7 STR, +3 INT, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Penwether (`NPC_PEN_04`) ; noyau tombé par le mini-boss (`MOB_SPR_025`, 8%).
- **Recette** : 5× Os antique + 3× Fer noir.
- **Prix** : 5 800 Yrds (achat) · 1 450 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le pommeau est un crâne d'un roi oublié de la Nécropole Antique, et la lame, dit-on, se souvient de tous ceux qu'elle a fait tomber. Les Spriggans la forgent lors des veillées funèbres, mêlant l'os antique au fer noir pour une arme qui « tranche le fil de la vie comme celui d'une bourse ». Superstition ou non, aucun porteur n'a jamais osé lui donner de nom.

## Intégration Bot
- Joueur : `!equiper WPN_EP2_006` · `!inspect WPN_EP2_006` — GM : `!sys_give WPN_EP2_006 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_EP2_006, 1)`
