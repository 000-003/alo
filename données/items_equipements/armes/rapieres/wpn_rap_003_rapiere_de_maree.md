# Rapière de Marée

## Identification Cardinal
- **Item_ID** : `WPN_RAP_003`
- **Famille** : Rapière · **Vitesse** : rapide
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 13 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 24 |
| Poids | 1,4 kg |
| Durabilité | 310 |
| Bonus | +4 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — Finbar de l'Archipel (`NPC_UND_06`).
- **Recette** : 3× Cristal d'eau pur + 2× Sable d'Océan.
- **Prix** : 950 Yrds (achat) · 238 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Sa lame de cristal d'eau reste humide au toucher, comme si elle sortait à l'instant du lac. Les duellistes Undine disent qu'elle « suit le courant » : bien conduite, elle glisse autour des parades au lieu de s'y opposer. Un fil d'eau perle le long du tranchant et retombe en gouttes à chaque désengagement.

## Intégration Bot
- Joueur : `!equiper WPN_RAP_003` · `!inspect WPN_RAP_003` — GM : `!sys_give WPN_RAP_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_RAP_003, 1)`
