# Hache de Bûcheron

## Identification Cardinal
- **Item_ID** : `WPN_HAC_001`
- **Famille** : Hache · **Vitesse** : lente
- **Tier** : T1 · **Rareté** : Commun
- **Niveau requis** : 3 · **Affinité raciale** : aucune (arme neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 18 |
| Poids | 3,5 kg |
| Durabilité | 240 |
| Bonus | +2 STR, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Boutique d'armes d'Alne (`ZONE_NEU_CAP_001`).
- **Recette** : 3× Fer commun + 2× Bois d'if.
- **Prix** : 240 Yrds (achat) · 60 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un outil avant d'être une arme, mais qui fend le crâne aussi bien que le bois. Lourde et lente, elle punit l'hésitation autant qu'elle récompense le premier coup bien placé. Les colons d'Alne la gardent près de la porte : contre un rôdeur, on n'a pas toujours le temps de dégainer mieux.

## Intégration Bot
- Joueur : `!equiper WPN_HAC_001` · `!inspect WPN_HAC_001` — GM : `!sys_give WPN_HAC_001 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_HAC_001, 1)`
