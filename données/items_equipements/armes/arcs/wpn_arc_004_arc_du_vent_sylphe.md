# Arc du Vent Sylphe

## Identification Cardinal
- **Item_ID** : `WPN_ARC_004`
- **Famille** : Arc · **Vitesse** : moyenne
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Sylph (+5% aux bonus si Sylph)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 32 |
| Poids | 0,9 kg |
| Durabilité | 300 |
| Bonus | +3 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — Brokkr de Swilvane (`NPC_SWI_05`).
- **Recette** : 3× Bois de Zéphyr + 2× Cristal de brise.
- **Prix** : 920 Yrds (achat) · 230 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Ses branches de bois de Zéphyr plient sans jamais rompre, et un cristal de brise serti dans la poignée corrige la trajectoire au moindre souffle. Les archers Sylph tirent en plein vol, laissant le vent porter la flèche bien au-delà de sa portée théorique. Léger comme une plume, il se manie d'une main quand l'autre stabilise la descente.

## Intégration Bot
- Joueur : `!equiper WPN_ARC_004` · `!inspect WPN_ARC_004` — GM : `!sys_give WPN_ARC_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_ARC_004, 1)`
