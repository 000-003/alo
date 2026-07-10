# Bouchons de Cire de Duskarn

## Identification Cardinal
- **Item_ID** : `CSM_POT_023`
- **Catégorie** : Potion · **Type** : Dissipation (Vacarme — mécanique Imp)
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 18 · **Affinité raciale** : Imp (+5% durée si Imp)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Purge le statut Vacarme et immunise à son accumulation pendant 60 s |
| Durée | 60 s (immunité) |
| Cooldown | 30 s |
| Cumulable | NON — compte comme le buff potion unique |

## Acquisition & Chaînage économique
- **Source** : boutique de Duskarn (`ZONE_IMP_CAP_001`) / craft alchimiste Imp
- **Recette** : 2× Cire d'abeille-des-ombres + 1× Ouate de champignon + 1× étui *(alchimie)*
- **Prix** : 160 Yrds (achat) · 40 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Techniquement un consommable, quoiqu'on ne le « boive » pas : on l'enfonce dans les oreilles avant d'entrer dans la Caverne des Hurleurs, où le boss Skreech fait grimper la jauge de Vacarme au moindre cri. Une minute de silence garanti, c'est parfois toute la fenêtre nécessaire pour l'abattre. Les Imp les fabriquent avec la cire de leurs propres ruches d'ombre — et refusent d'en expliquer la recette exacte.

## Intégration Bot
- Joueur : `!use CSM_POT_023` — GM : `!sys_give CSM_POT_023 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_023, 1)`
