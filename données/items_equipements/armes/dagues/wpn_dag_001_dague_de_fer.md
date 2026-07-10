# Dague de Fer

## Identification Cardinal
- **Item_ID** : `WPN_DAG_001`
- **Famille** : Dague · **Vitesse** : rapide
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 1 · **Affinité raciale** : aucune (arme neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 10 |
| Poids | 0,6 kg |
| Durabilité | 150 |
| Bonus | +2 AGI |

## Acquisition & Chaînage économique
- **Source** : Boutique d'armes d'Alne (`ZONE_NEU_CAP_001`) — stock de départ.
- **Recette** : 2× Fer commun + 1× Cuir de reliure.
- **Prix** : 150 Yrds (achat) · 38 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La lame de secours de tout aventurier prudent : légère, discrète, glissée dans une botte. On ne gagne pas de raid avec une Dague de Fer, mais bien des gorges de gobelins lui doivent leur silence. Les marchands d'Alne la donnent presque, sachant qu'un client vivant revient dépenser.

## Intégration Bot
- Joueur : `!equiper WPN_DAG_001` · `!inspect WPN_DAG_001` — GM : `!sys_give WPN_DAG_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_DAG_001, 1)`
