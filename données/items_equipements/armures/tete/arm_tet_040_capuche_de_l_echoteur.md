# Capuche de l'Échoteur

## Identification Cardinal
- **Item_ID** : `ARM_TET_040`
- **Slot** : Tête — Capuche · **Classe** : Cuir
- **Tier** : T2 · **Rareté** : Rare
- **Niveau requis** : 16 · **Affinité raciale** : Imp (+5% aux bonus si Imp)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 27 |
| RES magique | 14 |
| Poids | 0,6 kg |
| Durabilité | 370 |
| Pénalité de vol | 0% |
| Bonus | +3 AGI ; écholocalisation passive : les mobs furtifs apparaissent sur `!scan` dans un rayon de 20 m |

## Acquisition & Chaînage économique
- **Source** : Craft — artisans des Falaises du Crépuscule (`ZONE_IMP_HUNT_001`).
- **Recette** : 3× Membrane de chauve-souris (drop `MOB_IMP_010-013`) + 2× Cuir souple + 1× Cristal résonnant.
- **Prix** : 1 400 Yrds (achat) · 350 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Les rabats de la capuche sont des membranes tendues qui captent les ultrasons et les retranscrivent en murmures au creux de l'oreille. Les chasseurs imps disent qu'elle « raconte la grotte ». Prototype conçu pour survivre à la Caverne des Hurleurs — où, ironie, le vacarme la rend inutilisable.

## Intégration Bot
- Joueur : `!equiper ARM_TET_040 tete` · `!inspect ARM_TET_040` — GM : `!sys_give ARM_TET_040 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_040, 1)`
