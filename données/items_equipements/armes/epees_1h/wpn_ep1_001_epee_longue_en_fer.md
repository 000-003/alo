# Épée Longue en Fer

## Identification Cardinal
- **Item_ID** : `WPN_EP1_001`
- **Famille** : Épée à une main · **Vitesse** : moyenne
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : aucune (arme neutre de départ)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 14 |
| Poids | 2,4 kg |
| Durabilité | 200 |
| Bonus | +1 STR |

## Acquisition & Chaînage économique
- **Source** : Boutique d'armes d'Alne (`ZONE_NEU_CAP_001`) — stock de départ toutes races.
- **Recette** : 3× Fer commun (récolte) + 1× Cuir de reliure.
- **Prix** : 220 Yrds (achat) · 55 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La toute première lame que le Cardinal glisse dans la main d'un nouvel arrivant. Sans âme et sans histoire, elle a pourtant fendu plus de gobelins que n'importe quelle relique du serveur — simplement parce qu'elle est là quand on n'a rien d'autre. Les forgerons d'Alne en produisent des caisses entières et jurent qu'aucune n'a jamais franchi le Palier 3. C'est l'arme des commencements, jamais celle des légendes.

## Intégration Bot
- Joueur : `!equiper WPN_EP1_001` · `!inspect WPN_EP1_001` — GM : `!sys_give WPN_EP1_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_EP1_001, 1)`
