# Crâne Couronné de Ragnar

## Identification Cardinal
- **Item_ID** : `ARM_TET_094`
- **Slot** : Tête — Trophée-heaume · **Classe** : Cuir (os)
- **Tier** : T5 · **Rareté** : Épique (drop de boss)
- **Niveau requis** : 43 · **Affinité raciale** : Aucune (drop universel)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 135 |
| RES magique | 62 |
| Poids | 2,8 kg |
| Durabilité | 1 000 |
| Pénalité de vol | -2% |
| Bonus | +8 STR ; « Aura du Roi » : les mobs Bête de niveau inférieur fuient au lieu d'agresser ; +10% dégâts contre les Bêtes qui ne fuient pas |

## Acquisition & Chaînage économique
- **Source** : Drop direct — Ragnar, le Roi Béhémoth (`BOSS_CAI_DUN_001`), taux 8%.
- **Recette** : Non craftable ; recyclable en 3× Croc d'alpha + 2× Cuir tacheté.
- **Prix** : Revente 9 900 Yrds · échangeable.

## Lore (Encyclopédie d'Argo)
Réplique osseuse du crâne de Ragnar, générée par le Cardinal en trophée — le vrai repousse avec le boss, tous les sept jours. La savane entière reconnaît la silhouette : les prédateurs qui ont survécu au Roi Béhémoth transmettent sa peur à leurs petits. Porter sa tête, c'est emprunter cette mémoire-là.

## Intégration Bot
- Joueur : `!equiper ARM_TET_094 tete` · `!inspect ARM_TET_094` — GM : `!sys_give ARM_TET_094 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_094, 1)`
