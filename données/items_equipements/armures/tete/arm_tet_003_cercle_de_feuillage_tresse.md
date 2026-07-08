# Cercle de Feuillage Tressé

## Identification Cardinal
- **Item_ID** : `ARM_TET_003`
- **Slot** : Tête — Cercle · **Classe** : Tissu
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Sylph (+5% aux bonus si Sylph)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 22 |
| RES magique | 18 |
| Poids | 0,3 kg |
| Durabilité | 320 |
| Pénalité de vol | 0% |
| Bonus | +6% régénération MP en extérieur ; +3 INT |

## Acquisition & Chaînage économique
- **Source** : Craft — herboriste de Swilvane ; réservé aux lanceurs de sorts.
- **Recette** : 4× Feuille de chêne-monde (récolte, `ZONE_SYL_HUNT_001`) + 1× Sève luisante (drop `MOB_SYL_011`).
- **Prix** : 950 Yrds (achat) · 240 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le feuillage reste vivant après la tresse : il continue de photosynthétiser le mana ambiant et le restitue au porteur goutte à goutte. En intérieur, le cercle se fane en quelques heures — les mages sylphes disent qu'il « boude ». Le replanter une nuit en terre le régénère entièrement.

## Intégration Bot
- Joueur : `!equiper ARM_TET_003 tete` · `!inspect ARM_TET_003` — GM : `!sys_give ARM_TET_003 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_003, 1)`
