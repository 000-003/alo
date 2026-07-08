# Haut-de-Forme d'Ondaro

## Identification Cardinal
- **Item_ID** : `ARM_TET_098`
- **Slot** : Tête — Haut-de-forme · **Classe** : Tissu
- **Tier** : T5 · **Rareté** : Épique (drop de boss)
- **Niveau requis** : 43 · **Affinité raciale** : Aucune (drop universel)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 126 |
| RES magique | 84 |
| Poids | 0,5 kg |
| Durabilité | 960 |
| Pénalité de vol | 0% |
| Bonus | +8 CHA ; les buffs musicaux du porteur affectent aussi les PNJ (prix, dialogues, quêtes bonus) ; « Rappel » : 5% de chance qu'une mélodie terminée recommence gratuitement |

## Acquisition & Chaînage économique
- **Source** : Drop direct — Ondaro, le Maestro Spectral (`BOSS_PUC_DUN_001`), taux 8%.
- **Recette** : Non craftable ; recyclable en 2× Voile de spectre + 1× Corde de l'ancien orgue.
- **Prix** : Revente 9 700 Yrds · échangeable.

## Lore (Encyclopédie d'Argo)
Le chapeau de scène du Maestro, poussière d'applaudissements comprise. Ondaro le soulevait pour saluer — c'est le seul moment où ses musiciens spectraux cessaient de jouer. Le porteur qui salue bas en fin de combat (commande `!saluer`) entend parfois, très loin, une salle applaudir. Le Cardinal nie avoir codé cela.

## Intégration Bot
- Joueur : `!equiper ARM_TET_098 tete` · `!inspect ARM_TET_098` — GM : `!sys_give ARM_TET_098 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_098, 1)`
