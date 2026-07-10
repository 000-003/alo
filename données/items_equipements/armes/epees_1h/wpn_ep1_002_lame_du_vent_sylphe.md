# Lame du Vent Sylphe

## Identification Cardinal
- **Item_ID** : `WPN_EP1_002`
- **Famille** : Épée à une main · **Vitesse** : moyenne
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 4 · **Affinité raciale** : Sylph (+5% aux bonus si Sylph)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 12 |
| Poids | 1,8 kg |
| Durabilité | 185 |
| Bonus | +2 AGI |

## Acquisition & Chaînage économique
- **Source** : Boutique d'équipement de Swilvane (`ZONE_SYL_CAP_001`).
- **Recette** : 2× Bois de Zéphyr + 2× Cristal de brise (récolte, périphérie de Swilvane).
- **Prix** : 300 Yrds (achat) · 75 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Forgée si fine qu'elle siffle en fendant l'air, cette lame apprend au jeune Sylph que la vitesse vaut mieux que la force. Sa garde évidée capte les courants ascendants : bien orientée, elle allège d'un souffle celui qui la porte en vol. Les instructeurs de Swilvane disent qu'on ne la maîtrise vraiment que le jour où l'on cesse de la serrer.

## Intégration Bot
- Joueur : `!equiper WPN_EP1_002` · `!inspect WPN_EP1_002` — GM : `!sys_give WPN_EP1_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_EP1_002, 1)`
