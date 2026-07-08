# Couronne du Cœur du Filon

## Identification Cardinal
- **Item_ID** : `ARM_TET_096`
- **Slot** : Tête — Couronne · **Classe** : Plaque
- **Tier** : T5 · **Rareté** : Épique (drop de boss)
- **Niveau requis** : 44 · **Affinité raciale** : Aucune (drop universel)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 150 |
| RES magique | 66 (dont +30 vs Terre) |
| Poids | 3,9 kg |
| Durabilité | 1 100 |
| Pénalité de vol | -4% |
| Bonus | +9 VIT ; `!scan` révèle tous les filons et coffres de la zone ; les récoltes minières donnent +1 unité |

## Acquisition & Chaînage économique
- **Source** : Drop direct — Mithrandur, le Cœur du Filon (`BOSS_GNO_DUN_001`), taux 8%.
- **Recette** : Non craftable ; recyclable en 3× Alliage de mithril résiduel + 1× Cœur de cristal parfait.
- **Prix** : Revente 10 300 Yrds · échangeable.

## Lore (Encyclopédie d'Argo)
Un anneau de mithril brut arraché au corps de Mithrandur — la mine devenue créature. La couronne « entend » le métal : près d'un filon, elle devient plus lourde, comme attirée par sa famille. Les prospecteurs gnomes la louent à la journée pour des fortunes ; le contrat stipule qu'elle rêve encore de la Mine, et qu'il ne faut pas dormir avec.

## Intégration Bot
- Joueur : `!equiper ARM_TET_096 tete` · `!inspect ARM_TET_096` — GM : `!sys_give ARM_TET_096 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_096, 1)`
