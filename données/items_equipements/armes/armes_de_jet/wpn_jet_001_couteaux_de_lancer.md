# Couteaux de Lancer

## Identification Cardinal
- **Item_ID** : `WPN_JET_001`
- **Famille** : Arme de jet · **Vitesse** : rapide
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 3 · **Affinité raciale** : aucune (arme neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 11 |
| Poids | 0,4 kg (jeu de 5) |
| Durabilité | 150 |
| Bonus | +2 AGI |

## Acquisition & Chaînage économique
- **Source** : Boutique d'armes d'Alne (`ZONE_NEU_CAP_001`).
- **Recette** : 3× Fer commun + 1× Cuir de reliure.
- **Prix** : 180 Yrds (achat) · 45 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un jeu de cinq lames équilibrées, vendues en pochette de cuir avec un baudrier de fortune. Elles ne remplacent pas une vraie arme, mais un couteau planté dans l'œil vaut mieux qu'une épée restée au fourreau. Les éclaireurs les rechargent en récupérant leurs lames sur les cadavres — économie oblige.

## Intégration Bot
- Joueur : `!equiper WPN_JET_001` · `!inspect WPN_JET_001` — GM : `!sys_give WPN_JET_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_JET_001, 1)`
