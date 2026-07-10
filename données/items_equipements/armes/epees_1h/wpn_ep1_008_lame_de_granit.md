# Lame de Granit

## Identification Cardinal
- **Item_ID** : `WPN_EP1_008`
- **Famille** : Épée à une main · **Vitesse** : moyenne
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 26 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 70 |
| Poids | 3,4 kg |
| Durabilité | 700 |
| Bonus | +6 STR, +2 DEF |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron de Granzam (`NPC_GRA_03`).
- **Recette** : 5× Granit de Granzam + 2× Gemme de Granzam.
- **Prix** : 5 200 Yrds (achat) · 1 300 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les Gnomes ne cherchent pas la finesse : ils veulent une lame qui ne cède jamais, dût-elle peser le double. Coulée dans un alliage de granit compacté et de fer des Steppes, la Lame de Granit encaisse les parades les plus brutales sans une ébréchure. On dit qu'un forgeron de Granzam mesure la valeur d'une épée non à son tranchant, mais au nombre de coups qu'elle survit.

## Intégration Bot
- Joueur : `!equiper WPN_EP1_008` · `!inspect WPN_EP1_008` — GM : `!sys_give WPN_EP1_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_EP1_008, 1)`
