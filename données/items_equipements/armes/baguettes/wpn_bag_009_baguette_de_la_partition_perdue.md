# Baguette de la Partition Perdue

## Identification Cardinal
- **Item_ID** : `WPN_BAG_009`
- **Famille** : Baguette · **Vitesse** : moyenne
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 41 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 108 |
| Poids | 0,7 kg |
| Durabilité | 840 |
| Bonus | +11 INT, +3 AGI |

## Acquisition & Chaînage économique
- **Source** : Drop d'Ondaro (`BOSS_PUC_DUN_001`, 8%) ; montage par le luthier-forgeron de Lioda (`NPC_LIO_04`).
- **Recette** : 6× Argent sonore + 4× Mithril de Brokkheim + 2× Gemme de Granzam.
- **Prix** : 17 500 Yrds (achat) · 4 375 Yrds (revente)

## Lore (Encyclopédie d'Argo)
On dit qu'elle contient une mesure de la Partition Originelle, ce chant que le Cardinal aurait joué pour compiler le monde — une légende que les maîtres de Lioda répètent à voix basse. Entre de bonnes mains, elle enchaîne les sorts sans jamais rompre le tempo, comme si la musique s'écrivait d'elle-même. Ondaro la protégeait au cœur de l'Amphithéâtre ; la lui reprendre est le rêve de tout mage-musicien.

## Intégration Bot
- Joueur : `!equiper WPN_BAG_009` · `!inspect WPN_BAG_009` — GM : `!sys_give WPN_BAG_009 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_BAG_009, 1)`
