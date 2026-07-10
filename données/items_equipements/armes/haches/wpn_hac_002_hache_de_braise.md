# Hache de Braise

## Identification Cardinal
- **Item_ID** : `WPN_HAC_002`
- **Famille** : Hache · **Vitesse** : lente
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 13 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 40 |
| Poids | 4,2 kg |
| Durabilité | 400 |
| Bonus | +4 STR, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — Kagemune (`NPC_GAT_01`).
- **Recette** : 4× Acier de braise + 2× Obsidienne de Gattan.
- **Prix** : 1 100 Yrds (achat) · 275 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le fer de la hache reste tiède au repos et rougeoie sous l'effort, cautérisant les plaies qu'il ouvre. Les berserkers Salamander la font tournoyer en hurlant, indifférents à la chaleur qui remonte le manche. On dit qu'un bon coup laisse dans l'air une odeur de forge — et le silence de l'adversaire.

## Intégration Bot
- Joueur : `!equiper WPN_HAC_002` · `!inspect WPN_HAC_002` — GM : `!sys_give WPN_HAC_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_HAC_002, 1)`
