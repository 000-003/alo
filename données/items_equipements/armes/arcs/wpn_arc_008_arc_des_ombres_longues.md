# Arc des Ombres Longues

## Identification Cardinal
- **Item_ID** : `WPN_ARC_008`
- **Famille** : Arc · **Vitesse** : moyenne
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 38 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 108 |
| Poids | 1,3 kg |
| Durabilité | 800 |
| Bonus | +9 AGI, +5 INT |

## Acquisition & Chaînage économique
- **Source** : Craft — arquier de Penwether (`NPC_PEN_04`) ; tombé par le boss de zone (`MOB_SPR_026`, 8%).
- **Recette** : 5× Bois noir + 4× Mithril de Brokkheim + 2× Gemme de Granzam.
- **Prix** : 15 000 Yrds (achat) · 3 750 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La flèche partie de cet arc laisse dans l'air une traînée d'ombre qui persiste une seconde, brouillant la ligne de vue de l'adversaire sur l'archer. Renforcé de mithril, il conserve la légèreté du bois noir tout en encaissant des tensions dignes d'une baliste. Les tireurs d'élite de Penwether l'appellent « celui qui efface l'archer ».

## Intégration Bot
- Joueur : `!equiper WPN_ARC_008` · `!inspect WPN_ARC_008` — GM : `!sys_give WPN_ARC_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_ARC_008, 1)`
