# Capuche des Ruines Grises

## Identification Cardinal
- **Item_ID** : `ARM_TET_075`
- **Slot** : Tête — Capuche · **Classe** : Tissu
- **Tier** : T2 · **Rareté** : Peu commun
- **Niveau requis** : 12 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 23 |
| RES magique | 17 |
| Poids | 0,3 kg |
| Durabilité | 330 |
| Pénalité de vol | 0% |
| Bonus | +8% discrétion dans les ruines et donjons ; +2 AGI ; le porteur ne déclenche pas les pièges à détection de mouvement T1 |

## Acquisition & Chaînage économique
- **Source** : Craft — tisserands de Penwether.
- **Recette** : 3× Toile grise + 2× Cendre de ruine (récolte, `ZONE_SPR_HUNT_001`) + 1× Fil d'ombre.
- **Prix** : 980 Yrds (achat) · 245 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Teinte dans la cendre des ruines, la capuche prend exactement le gris de la pierre morte. Les pilleurs de tombes — les Spriggans préfèrent « archéologues indépendants » — s'y déplacent comme une ombre parmi les gravats. Le capuchon bien rabattu, même les statues ne vous regardent plus.

## Intégration Bot
- Joueur : `!equiper ARM_TET_075 tete` · `!inspect ARM_TET_075` — GM : `!sys_give ARM_TET_075 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_075, 1)`
