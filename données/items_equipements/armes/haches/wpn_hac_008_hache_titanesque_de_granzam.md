# Hache Titanesque de Granzam

## Identification Cardinal
- **Item_ID** : `WPN_HAC_008`
- **Famille** : Hache · **Vitesse** : lente
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 41 · **Affinité raciale** : Gnome (+5% aux bonus si Gnome)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 128 |
| Poids | 6,5 kg |
| Durabilité | 940 |
| Bonus | +11 STR, +4 DEF, -1 AGI |

## Acquisition & Chaînage économique
- **Source** : Drop de Mithrandur (`BOSS_GNO_DUN_001`, 8%) ; assemblage par le forgeron de Granzam (`NPC_GRA_03`).
- **Recette** : 6× Granit de Granzam + 5× Mithril de Brokkheim + 3× Gemme de Granzam.
- **Prix** : 19 000 Yrds (achat) · 4 750 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Une tête de granit et de mithril de la taille d'un bouclier, montée sur un manche assez épais pour servir de poutre. Il faut la STR d'un Gnome de forge pour la soulever sans traîner le fer au sol. Les mineurs de Granzam disent qu'elle ne « coupe » pas : elle décide simplement que quelque chose doit cesser d'exister.

## Intégration Bot
- Joueur : `!equiper WPN_HAC_008` · `!inspect WPN_HAC_008` — GM : `!sys_give WPN_HAC_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_HAC_008, 1)`
