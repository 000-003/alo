# Masse de Lave

## Identification Cardinal
- **Item_ID** : `WPN_MAS_004`
- **Famille** : Masse · **Vitesse** : lente
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 27 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 74 |
| Poids | 5,2 kg |
| Durabilité | 660 |
| Bonus | +8 STR, +3 résistance feu, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — Kagemune (`NPC_GAT_01`).
- **Recette** : 5× Gemme de feu de Voulg + 2× Obsidienne de Gattan + 1× Gemme de Granzam.
- **Prix** : 5 200 Yrds (achat) · 1 300 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Sa tête est un noyau d'obsidienne empli de gemme de feu en fusion, retenue par une cage de fer : à l'impact, des gouttes incandescentes giclent sur une courte portée. Les Salamander la font tourner lentement pour accumuler l'élan, transformant chaque coup en petite éruption. On la range dans un seau d'eau — jamais au fourreau.

## Intégration Bot
- Joueur : `!equiper WPN_MAS_004` · `!inspect WPN_MAS_004` — GM : `!sys_give WPN_MAS_004 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_MAS_004, 1)`
