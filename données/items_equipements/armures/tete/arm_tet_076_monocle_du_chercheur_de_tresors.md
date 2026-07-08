# Monocle du Chercheur de Trésors

## Identification Cardinal
- **Item_ID** : `ARM_TET_076`
- **Slot** : Tête — Monocle · **Classe** : Cuir (sangle)
- **Tier** : T2 · **Rareté** : Rare
- **Niveau requis** : 16 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 20 |
| RES magique | 15 |
| Poids | 0,2 kg |
| Durabilité | 350 |
| Pénalité de vol | 0% |
| Bonus | +15% portée du Treasure Hunting racial ; les coffres cachés scintillent à l'écran (`!scan`) ; +2 INT |

## Acquisition & Chaînage économique
- **Source** : Craft — opticiens-antiquaires de Penwether ; la lentille est un artefact restauré, jamais neuf.
- **Recette** : 1× Lentille antique (drop `MOB_SPR_010-013`, `ZONE_SPR_HUNT_001`) + 2× Cuir souple + 1× Cerclage de bronze.
- **Prix** : 1 500 Yrds (achat) · 375 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Chaque lentille provient d'un instrument de l'ancienne civilisation dont Penwether occupe les décombres. Personne ne sait ce que ces appareils mesuraient — mais à travers eux, ce qui a de la valeur *brille*. Les antiquaires spriggans refusent d'en tailler des neuves : « le verre doit avoir déjà vu des trésors pour savoir en montrer ».

## Intégration Bot
- Joueur : `!equiper ARM_TET_076 tete` · `!inspect ARM_TET_076` — GM : `!sys_give ARM_TET_076 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_076, 1)`
