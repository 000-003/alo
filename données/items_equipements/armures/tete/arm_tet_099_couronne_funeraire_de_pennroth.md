# Couronne Funéraire de Pennroth

## Identification Cardinal
- **Item_ID** : `ARM_TET_099`
- **Slot** : Tête — Couronne · **Classe** : Maille (or terni)
- **Tier** : T5 · **Rareté** : Épique (drop de boss)
- **Niveau requis** : 44 · **Affinité raciale** : Aucune (drop universel)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 132 |
| RES magique | 88 (dont +35 vs Ténèbres, +25 vs Illusion) |
| Poids | 1,1 kg |
| Durabilité | 990 |
| Pénalité de vol | 0% |
| Bonus | +8 INT ; à la mort du porteur, son Remain Light dure 30s de plus et peut se déplacer lentement ; les morts-vivants T1-T3 sont neutres |

## Acquisition & Chaînage économique
- **Source** : Drop direct — Pennroth, le Roi-Liche Oublié (`BOSS_SPR_DUN_001`), taux 8%.
- **Recette** : Non craftable ; recyclable en 3× Fil d'espace tordu + 1× Essence spectrale.
- **Prix** : Revente 10 100 Yrds · échangeable.

## Lore (Encyclopédie d'Argo)
La couronne avec laquelle Pennroth fut enterré — la première fois. L'or est terni par des siècles de terre, mais le sceau royal reste lisible : les morts de la Nécropole s'inclinent encore devant lui par habitude. Son pouvoir sur le Remain Light inquiète les clercs undines : ce n'est pas de la survie, c'est du protocole funéraire.

## Intégration Bot
- Joueur : `!equiper ARM_TET_099 tete` · `!inspect ARM_TET_099` — GM : `!sys_give ARM_TET_099 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_099, 1)`
