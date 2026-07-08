# Béret du Cartographe

## Identification Cardinal
- **Item_ID** : `ARM_TET_090`
- **Slot** : Tête — Béret · **Classe** : Tissu
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 11 · **Affinité raciale** : Aucune (objet neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 20 |
| RES magique | 14 |
| Poids | 0,2 kg |
| Durabilité | 310 |
| Pénalité de vol | 0% |
| Bonus | +2 INT ; `!carte` affiche aussi les zones adjacentes non visitées (noms grisés) ; +10% XP d'exploration |

## Acquisition & Chaînage économique
- **Source** : Guilde des Cartographes d'Alne — vendu à quiconque rapporte le relevé d'une zone complète.
- **Recette** : 2× Toile de voyage + 1× Encre de seiche des brumes + 1× Boussole de poche déclassée.
- **Prix** : 1 150 Yrds (achat) · 287 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La guilde d'Alne entretient le grand Atlas du monde — celui-là même que consulte le Cardinal pour valider les déplacements, plaisantent ses membres. Le béret penché sur l'oreille gauche signale un relevé en cours ; le déranger porte malheur. Les cartographes ont un serment : « aucune zone n'existe tant qu'elle n'est pas dessinée ».

## Intégration Bot
- Joueur : `!equiper ARM_TET_090 tete` · `!inspect ARM_TET_090` — GM : `!sys_give ARM_TET_090 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_090, 1)`
