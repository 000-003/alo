# Hache du Cratère

## Identification Cardinal
- **Item_ID** : `WPN_HAC_004`
- **Famille** : Hache · **Vitesse** : lente
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 27 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 74 |
| Poids | 5,0 kg |
| Durabilité | 660 |
| Bonus | +8 STR, +3 résistance feu, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — Kagemune (`NPC_GAT_01`) ; noyau tombé par le mini-boss (`MOB_SAL_025`, 8%).
- **Recette** : 5× Gemme de feu de Voulg + 2× Obsidienne de Gattan + 1× Gemme de Granzam.
- **Prix** : 5 200 Yrds (achat) · 1 300 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Sertie d'une gemme de feu prélevée au bord d'un cratère actif, la hache dégage une chaleur qui fait onduler l'air au-dessus du fer. À pleine charge, l'impact projette une gerbe d'étincelles capable de mettre le feu à un fourré sec. Les forgerons de Gattan la battent au plus près de la lave, seul endroit où le métal reste assez malléable.

## Intégration Bot
- Joueur : `!equiper WPN_HAC_004` · `!inspect WPN_HAC_004` — GM : `!sys_give WPN_HAC_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_HAC_004, 1)`
