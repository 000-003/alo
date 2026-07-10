# Rapière-Diapason

## Identification Cardinal
- **Item_ID** : `WPN_RAP_001`
- **Famille** : Rapière · **Vitesse** : rapide
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 3 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 11 |
| Poids | 1,2 kg |
| Durabilité | 160 |
| Bonus | +2 AGI |

## Acquisition & Chaînage économique
- **Source** : Boutique d'armes de Lioda (`ZONE_PUC_CAP_001`).
- **Recette** : 2× Argent sonore + 1× Corde de résonance.
- **Prix** : 260 Yrds (achat) · 65 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Frappée sur le pommeau, elle émet un la parfait — les bretteurs de Lioda s'en servent pour s'accorder avant le duel comme d'autres essuient leur lame. Sa mince tige d'argent sonore vibre à chaque estoc, transformant le combat en une suite de notes claires. On dit qu'un maître de l'amphithéâtre peut deviner la santé de sa rapière à l'oreille seule.

## Intégration Bot
- Joueur : `!equiper WPN_RAP_001` · `!inspect WPN_RAP_001` — GM : `!sys_give WPN_RAP_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_RAP_001, 1)`
