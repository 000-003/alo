# Arc Court en Bois

## Identification Cardinal
- **Item_ID** : `WPN_ARC_001`
- **Famille** : Arc · **Vitesse** : moyenne
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 2 · **Affinité raciale** : aucune (arme neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 13 |
| Poids | 1,0 kg |
| Durabilité | 180 |
| Bonus | +1 AGI |

## Acquisition & Chaînage économique
- **Source** : Boutique d'armes d'Alne (`ZONE_NEU_CAP_001`).
- **Recette** : 2× Bois d'if + 1× Corde de nerf.
- **Prix** : 200 Yrds (achat) · 50 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le premier arc de tout aventurier prudent, taillé dans un if commun et corde d'un simple nerf séché. Sa portée est modeste, mais il tient l'ennemi à distance le temps de réfléchir. Les instructeurs d'Alne répètent qu'aucune flèche n'a jamais manqué par la faute de l'arc — seulement de l'archer.

## Intégration Bot
- Joueur : `!equiper WPN_ARC_001` · `!inspect WPN_ARC_001` — GM : `!sys_give WPN_ARC_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_ARC_001, 1)`
