# Heaume-Brise

## Identification Cardinal
- **Item_ID** : `ARM_TET_005`
- **Slot** : Tête — Heaume léger · **Classe** : Maille
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 22 · **Affinité raciale** : Sylph (+5% aux bonus si Sylph)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 48 |
| RES magique | 20 |
| Poids | 1,6 kg |
| Durabilité | 550 |
| Pénalité de vol | -1% |
| Bonus | Annule le malus de vitesse par vent contraire ; +3 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — forge de Swilvane, plan vendu par la Garde Sylvane.
- **Recette** : 4× Maillon d'argent-vent + 2× Cuir épais (drop `MOB_SYL_012-013`) + 1× Cristal de rafale (drop `MOB_SYL_020-024`, `ZONE_SYL_HUNT_002`).
- **Prix** : 3 800 Yrds (achat) · 950 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Chaque maillon est forgé en anneau ouvert, orienté pour que le vent le traverse au lieu de le frapper. En plein vol, le heaume émet un sifflement grave dont la note indique la vitesse — les escadrilles sylphes s'en servent pour voler en formation sans se regarder.

## Intégration Bot
- Joueur : `!equiper ARM_TET_005 tete` · `!inspect ARM_TET_005` — GM : `!sys_give ARM_TET_005 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_005, 1)`
