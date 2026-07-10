# Baguette de Source

## Identification Cardinal
- **Item_ID** : `WPN_BAG_002`
- **Famille** : Baguette · **Vitesse** : moyenne
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 26 |
| Poids | 0,6 kg |
| Durabilité | 300 |
| Bonus | +4 INT |

## Acquisition & Chaînage économique
- **Source** : Craft — Finbar de l'Archipel (`NPC_UND_06`).
- **Recette** : 3× Cristal d'eau pur + 2× Sable d'Océan.
- **Prix** : 900 Yrds (achat) · 225 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Cœur de cristal d'eau serti dans un bois flotté patiné par le lac : la Baguette de Source amplifie naturellement les sorts de soin et d'eau. Les guérisseuses de l'Archipel disent qu'elle « boit » un peu de la fatigue de son porteur pour la transformer en mana. Une goutte perle en permanence à sa pointe, jamais tarie.

## Intégration Bot
- Joueur : `!equiper WPN_BAG_002` · `!inspect WPN_BAG_002` — GM : `!sys_give WPN_BAG_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_BAG_002, 1)`
