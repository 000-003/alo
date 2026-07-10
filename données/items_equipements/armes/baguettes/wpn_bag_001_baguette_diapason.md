# Baguette-Diapason

## Identification Cardinal
- **Item_ID** : `WPN_BAG_001`
- **Famille** : Baguette · **Vitesse** : moyenne
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 3 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 12 |
| Poids | 0,5 kg |
| Durabilité | 160 |
| Bonus | +2 INT |

## Acquisition & Chaînage économique
- **Source** : Boutique de Lioda (`ZONE_PUC_CAP_001`).
- **Recette** : 2× Bois chantant + 1× Argent sonore.
- **Prix** : 260 Yrds (achat) · 65 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Plus baguette de chef d'orchestre que sceptre de mage : chaque incantation lancée de Lioda commence par une note pure qui « accorde » le sort. Les apprentis de l'Amphithéâtre s'en servent pour apprendre à caler leur magie sur le tempo. Frappée sur une table, elle donne le la — d'où son nom.

## Intégration Bot
- Joueur : `!equiper WPN_BAG_001` · `!inspect WPN_BAG_001` — GM : `!sys_give WPN_BAG_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_BAG_001, 1)`
