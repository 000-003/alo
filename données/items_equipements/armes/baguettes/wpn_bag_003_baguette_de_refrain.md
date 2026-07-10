# Baguette de Refrain

## Identification Cardinal
- **Item_ID** : `WPN_BAG_003`
- **Famille** : Baguette · **Vitesse** : moyenne
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 13 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 26 |
| Poids | 0,5 kg |
| Durabilité | 310 |
| Bonus | +4 INT |

## Acquisition & Chaînage économique
- **Source** : Craft — luthier-forgeron de Lioda (`NPC_LIO_04`).
- **Recette** : 3× Bois chantant + 2× Corde de résonance.
- **Prix** : 950 Yrds (achat) · 238 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Elle « garde » la dernière incantation lancée et peut la répéter à moindre coût, comme un refrain : d'où sa valeur pour les mages Puca qui tissent leurs sorts en boucle. Une corde de résonance tendue le long du fût vibre à chaque cast, prolongeant l'effet d'une fraction de mesure. Les maîtres disent qu'elle « chante avec » celui qui la tient.

## Intégration Bot
- Joueur : `!equiper WPN_BAG_003` · `!inspect WPN_BAG_003` — GM : `!sys_give WPN_BAG_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_BAG_003, 1)`
