# Bandeau de Plume-Vive

## Identification Cardinal
- **Item_ID** : `ARM_TET_002`
- **Slot** : Tête — Bandeau · **Classe** : Cuir
- **Tier** : T1 · **Rareté** : Peu commun
- **Niveau requis** : 5 · **Affinité raciale** : Sylph (+5% aux bonus si Sylph)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 11 |
| RES magique | 4 |
| Poids | 0,4 kg |
| Durabilité | 200 |
| Pénalité de vol | 0% |
| Bonus | +2% vitesse de vol ; +1 AGI |

## Acquisition & Chaînage économique
- **Source** : Craft — tanneur de Swilvane.
- **Recette** : 2× Cuir souple (drop `MOB_SYL_001-002`, périphérie de Swilvane) + 3× Plume rigide (drop `MOB_SYL_010`, zone de chasse T1).
- **Prix** : 340 Yrds (achat) · 85 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les plumes cousues sur la tempe ne sont pas décoratives : elles vibrent quand le vent tourne, offrant au porteur une demi-seconde d'avance dans les courants ascendants. Les jeunes coursiers sylphes en font un rite — on ne coud sa première plume qu'après son premier vol sans chute.

## Intégration Bot
- Joueur : `!equiper ARM_TET_002 tete` · `!inspect ARM_TET_002` — GM : `!sys_give ARM_TET_002 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_002, 1)`
