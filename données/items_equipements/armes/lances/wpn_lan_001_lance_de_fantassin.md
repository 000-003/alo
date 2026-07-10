# Lance de Fantassin

## Identification Cardinal
- **Item_ID** : `WPN_LAN_001`
- **Famille** : Lance · **Vitesse** : moyenne
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 2 · **Affinité raciale** : aucune (arme neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 15 |
| Poids | 2,8 kg |
| Durabilité | 200 |
| Bonus | +1 STR |

## Acquisition & Chaînage économique
- **Source** : Boutique d'armes d'Alne (`ZONE_NEU_CAP_001`).
- **Recette** : 2× Fer commun + 2× Bois d'if.
- **Prix** : 210 Yrds (achat) · 53 Yrds (revente)

## Lore (Encyclopédie d'Argo)
L'arme du rang, celle qu'on tient à dix pour arrêter une charge. Sa longue hampe garde l'ennemi à distance, seul luxe du soldat sans armure. Les instructeurs d'Alne disent qu'une lance vaut deux épées tant qu'on reste en formation — et rien du tout dès qu'on la rompt.

## Intégration Bot
- Joueur : `!equiper WPN_LAN_001` · `!inspect WPN_LAN_001` — GM : `!sys_give WPN_LAN_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_LAN_001, 1)`
