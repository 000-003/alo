# Couronne d'Accords Mineurs

## Identification Cardinal
- **Item_ID** : `ARM_TET_068`
- **Slot** : Tête — Couronne · **Classe** : Tissu
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 24 · **Affinité raciale** : Puca (+5% aux bonus si Puca)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 45 |
| RES magique | 34 |
| Poids | 0,4 kg |
| Durabilité | 540 |
| Pénalité de vol | 0% |
| Bonus | +12% puissance des mélodies de debuff ; les ennemis affectés par une mélodie triste ont -8% dégâts |

## Acquisition & Chaînage économique
- **Source** : Craft — enchanteurs de Lioda ; les composants tombent la nuit dans l'Amphithéâtre extérieur.
- **Recette** : 3× Larme de résine (drop `MOB_PUC_020-024`, `ZONE_PUC_HUNT_002`) + 2× Acier chantant + 1× Voile de deuil.
- **Prix** : 4 400 Yrds (achat) · 1 100 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Lioda enseigne que la musique gaie fait danser, mais que la musique triste fait *obéir*. Cette couronne noire est portée aux oraisons — et aux sièges. Une armée qui avance sous un requiem puca perd l'envie de se battre avant de perdre le combat. Le Cardinal classe l'objet « arme non létale », avec une pointe d'ironie.

## Intégration Bot
- Joueur : `!equiper ARM_TET_068 tete` · `!inspect ARM_TET_068` — GM : `!sys_give ARM_TET_068 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_068, 1)`
