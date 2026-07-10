# Bâton de Chef d'Orchestre

## Identification Cardinal
- **Item_ID** : `WPN_BAG_006`
- **Famille** : Baguette · **Vitesse** : moyenne
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 26 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 58 |
| Poids | 0,6 kg |
| Durabilité | 520 |
| Bonus | +6 INT, +2 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — luthier-forgeron de Lioda (`NPC_LIO_04`).
- **Recette** : 4× Bois chantant + 3× Argent sonore + 1× Gemme de Granzam.
- **Prix** : 4 800 Yrds (achat) · 1 200 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Avec ce bâton, le mage Puca ne lance pas des sorts : il dirige une partition. Chaque geste précis enchaîne les incantations sur la mesure, et un groupe entier peut se synchroniser sur son tempo. Contre Ondaro, dont toute la mécanique repose sur le rythme, un bon chef d'orchestre vaut mieux qu'un bon bretteur.

## Intégration Bot
- Joueur : `!equiper WPN_BAG_006` · `!inspect WPN_BAG_006` — GM : `!sys_give WPN_BAG_006 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_BAG_006, 1)`
