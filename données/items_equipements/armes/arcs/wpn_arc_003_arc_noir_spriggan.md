# Arc Noir Spriggan

## Identification Cardinal
- **Item_ID** : `WPN_ARC_003`
- **Famille** : Arc · **Vitesse** : moyenne
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 13 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| ATQ | 30 |
| Poids | 1,2 kg |
| Durabilité | 330 |
| Bonus | +3 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — forgeron-arquier de Penwether (`NPC_PEN_04`).
- **Recette** : 3× Bois noir + 2× Corde de nerf.
- **Prix** : 950 Yrds (achat) · 238 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le bois noir des Terres Grises ne reflète aucune lueur : l'arc reste invisible même bandé sous la lune. Les archers Spriggans en font une arme d'embuscade, tirant depuis l'ombre où nul ne les distingue. On dit qu'une flèche partie d'un Arc Noir n'annonce sa présence qu'en se plantant.

## Intégration Bot
- Joueur : `!equiper WPN_ARC_003` · `!inspect WPN_ARC_003` — GM : `!sys_give WPN_ARC_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, WPN_ARC_003, 1)`
