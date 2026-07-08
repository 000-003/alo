# Casque du Pionnier de New Aincrad

## Identification Cardinal
- **Item_ID** : `ARM_TET_089`
- **Slot** : Tête — Casque · **Classe** : Maille
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 42 · **Affinité raciale** : Aucune (objet neutre)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 100 |
| RES magique | 48 |
| Poids | 2,3 kg |
| Durabilité | 870 |
| Pénalité de vol | -2% |
| Bonus | +5 à toutes les stats à l'intérieur de New Aincrad (`ZONE_AIN_*`) ; la carte des étages visités reste affichée en permanence |

## Acquisition & Chaînage économique
- **Source** : Comptoir des Pionniers, premier étage de New Aincrad — vendu contre des jetons d'exploration (1 jeton = 1 salle cartographiée en premier).
- **Recette** : Non craftable.
- **Prix** : 120 jetons d'exploration · revente 4 900 Yrds

## Lore (Encyclopédie d'Argo)
Le château flottant est revenu, étage après étage, et quelqu'un doit y entrer en premier. Le casque des Pionniers embarque un cristal cartographe qui grave chaque salle nouvelle sur sa visière intérieure. Les vétérans du *vrai* Aincrad refusent de le porter — « on n'explore pas deux fois la même cicatrice », disent-ils en le laissant aux jeunes.

## Intégration Bot
- Joueur : `!equiper ARM_TET_089 tete` · `!inspect ARM_TET_089` — GM : `!sys_give ARM_TET_089 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_089, 1)`
