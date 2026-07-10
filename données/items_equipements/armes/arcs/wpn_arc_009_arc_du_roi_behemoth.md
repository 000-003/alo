# Arc du Roi Béhémoth

## Identification Cardinal
- **Item_ID** : `WPN_ARC_009`
- **Famille** : Arc · **Vitesse** : moyenne
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 40 · **Affinité raciale** : Cait Sith (+5% aux bonus si Cait Sith)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 112 |
| Poids | 1,5 kg |
| Durabilité | 820 |
| Bonus | +11 AGI, +3 VIT |

## Acquisition & Chaînage économique
- **Source** : Drop du Roi Béhémoth Ragnar (`BOSS_CAI_DUN_001`, 8%) ; montage par Brok (`NPC_FRE_07`).
- **Recette** : 5× Croc de béhémoth + 4× Mithril de Brokkheim + 2× Gemme de Granzam.
- **Prix** : 16 000 Yrds (achat) · 4 000 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Ses branches sont taillées dans les cornes recourbées de Ragnar lui-même : un seul trophée du Roi Béhémoth suffit à équiper un maître-archer pour la vie. La tension est telle qu'un tireur ordinaire ne peut le bander à mi-course. Les Cait Sith considèrent qu'abattre Ragnar puis porter son arc est le plus grand hommage qu'un chasseur puisse rendre à sa proie.

## Intégration Bot
- Joueur : `!equiper WPN_ARC_009` · `!inspect WPN_ARC_009` — GM : `!sys_give WPN_ARC_009 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_ARC_009, 1)`
