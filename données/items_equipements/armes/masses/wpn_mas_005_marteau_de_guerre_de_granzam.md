# Marteau de Guerre de Granzam

## Identification Cardinal
- **Item_ID** : `WPN_MAS_005`
- **Famille** : Masse · **Vitesse** : lente
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 29 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 75 |
| Poids | 5,6 kg |
| Durabilité | 700 |
| Bonus | +8 STR, +2 DEF, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Granzam (`NPC_GRA_03`) ; noyau tombé par le mini-boss (`MOB_GNO_025`, 8%).
- **Recette** : 5× Granit de Granzam + 3× Fer gnome + 1× Gemme de Granzam.
- **Prix** : 5 400 Yrds (achat) · 1 350 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le marteau de guerre des sapeurs de Granzam, capable de fissurer un mur d'un seul coup bien senti. Sa masse concentre une force telle qu'un impact au sol soulève un nuage de poussière et déséquilibre tout ce qui se trouve autour. On dit que le magnétisme des profondeurs de la Mine de Mithril « aide » la tête à retomber juste — superstition de mineur, mais elle a la vie dure.

## Intégration Bot
- Joueur : `!equiper WPN_MAS_005` · `!inspect WPN_MAS_005` — GM : `!sys_give WPN_MAS_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_MAS_005, 1)`
