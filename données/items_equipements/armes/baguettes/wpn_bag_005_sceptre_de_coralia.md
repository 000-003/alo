# Sceptre de Coralia

## Identification Cardinal
- **Item_ID** : `WPN_BAG_005`
- **Famille** : Baguette · **Vitesse** : moyenne
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 24 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 55 |
| Poids | 0,8 kg |
| Durabilité | 540 |
| Bonus | +6 INT, +2 RES magique |

## Acquisition & Chaînage économique
- **Source** : Craft — Finbar (`NPC_UND_06`) ; bénédiction de Coralia (`NPC_UND_07`).
- **Recette** : 4× Cristal d'eau pur + 3× Perle des profondeurs + 1× Gemme de Granzam.
- **Prix** : 4 600 Yrds (achat) · 1 150 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Béni par Coralia, la grande guérisseuse de l'Archipel, ce sceptre décuple les sorts de restauration : un seul cast peut ramener une équipe entière du bord du gouffre. Les perles enchâssées libèrent une lueur bleue apaisante à chaque incantation. On dit que le porter au Gouffre de Léviathan aide même à tenir contre la jauge d'Apnée, tant il « respire » avec son mage.

## Intégration Bot
- Joueur : `!equiper WPN_BAG_005` · `!inspect WPN_BAG_005` — GM : `!sys_give WPN_BAG_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_BAG_005, 1)`
