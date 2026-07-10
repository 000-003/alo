# Hache de Logi

## Identification Cardinal
- **Item_ID** : `WPN_HAC_007`
- **Famille** : Hache · **Vitesse** : lente
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 42 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 130 |
| Poids | 6,0 kg |
| Durabilité | 900 |
| Bonus | +12 STR, +4 résistance feu, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Drop de Logi (`BOSS_SAL_DUN_001`, 8%) ; reforge par Kagemune (`NPC_GAT_01`).
- **Recette** : 6× Gemme de feu de Voulg + 5× Mithril de Brokkheim + 3× Gemme de Granzam.
- **Prix** : 20 000 Yrds (achat) · 5 000 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Forgée d'un éclat de la massue du Dernier Géant de Braise, la hache reste incandescente en permanence, comme si Logi refusait de s'éteindre tout à fait. La brandir dans la Caldeira fait grimper la jauge de Surchauffe plus vite — arme à double tranchant pour qui reste trop longtemps face au boss. On dit que sa chaleur résiduelle a déjà fait fondre plus d'un fourreau.

## Intégration Bot
- Joueur : `!equiper WPN_HAC_007` · `!inspect WPN_HAC_007` — GM : `!sys_give WPN_HAC_007 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_HAC_007, 1)`
