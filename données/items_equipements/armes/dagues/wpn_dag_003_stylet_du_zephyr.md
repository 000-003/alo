# Stylet du Zéphyr

## Identification Cardinal
- **Item_ID** : `WPN_DAG_003`
- **Famille** : Dague · **Vitesse** : rapide
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Sylph (+5% aux bonus si Sylph)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 24 |
| Poids | 0,5 kg |
| Durabilité | 300 |
| Bonus | +4 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — Brokkr de Swilvane (`NPC_SWI_05`).
- **Recette** : 3× Cristal de brise + 1× Bois de Zéphyr.
- **Prix** : 880 Yrds (achat) · 220 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Presque sans poids, le Stylet du Zéphyr se lance aussi bien qu'il se manie : les éclaireurs Sylph le confient au vent avant de fondre sur la cible désorientée. Sa lame de cristal de brise siffle une note aiguë en vol, la seule chose que l'ennemi entendra. On dit qu'un maître peut le rappeler d'un simple appel d'air — exagération de tavernes, sans doute.

## Intégration Bot
- Joueur : `!equiper WPN_DAG_003` · `!inspect WPN_DAG_003` — GM : `!sys_give WPN_DAG_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_DAG_003, 1)`
