# Colère de Logi

## Identification Cardinal
- **Item_ID** : `WPN_EP2_008`
- **Famille** : Épée à deux mains · **Vitesse** : lente
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 42 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 130 |
| Poids | 7,5 kg |
| Durabilité | 920 |
| Bonus | +12 STR, +4 résistance feu, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Drop de Logi, le Dernier Géant de Braise (`BOSS_SAL_DUN_001`, 8%) ; forge alternative par Kagemune (`NPC_GAT_01`).
- **Recette** : 6× Gemme de feu de Voulg + 5× Mithril de Brokkheim + 3× Gemme de Granzam.
- **Prix** : 20 000 Yrds (achat) · 5 000 Yrds (revente)

## Lore (Encyclopédie d'Argo)
On raconte que Kagemune a récupéré un éclat de la massue de Logi après la première chute du géant et l'a reforgé en lame. La Colère de Logi garde la chaleur du boss : à pleine charge, elle laisse dans l'air une cicatrice orange qui met plusieurs secondes à s'effacer. Interagit avec la jauge de Surchauffe de la Caldeira — la brandir dans l'instance monte la chaleur plus vite, à double tranchant.

## Intégration Bot
- Joueur : `!equiper WPN_EP2_008` · `!inspect WPN_EP2_008` — GM : `!sys_give WPN_EP2_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_EP2_008, 1)`
