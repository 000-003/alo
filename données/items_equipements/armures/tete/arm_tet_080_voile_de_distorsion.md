# Voile de Distorsion

## Identification Cardinal
- **Item_ID** : `ARM_TET_080`
- **Slot** : Tête — Voile · **Classe** : Tissu
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 39 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 90 |
| RES magique | 52 |
| Poids | 0,2 kg |
| Durabilité | 790 |
| Pénalité de vol | 0% |
| Bonus | +7 AGI ; les attaques à distance ont 15% de chance de manquer le porteur (distorsion) ; ne fonctionne pas contre les attaques de zone |

## Acquisition & Chaînage économique
- **Source** : Craft — les fils sont récoltés dans la Nécropole Antique (`ZONE_SPR_DUN_001`), où l'espace « plie ».
- **Recette** : 4× Fil d'espace tordu (drop `MOB_SPR_030-034`, mobs du donjon) + 2× Toile grise + 1× Essence spectrale.
- **Prix** : 17 200 Yrds (achat) · 4 300 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Dans certains couloirs de la Nécropole, une flèche tirée droit arrive courbe. Les Spriggans ont fait de ce défaut du monde un textile. Le porteur semble toujours être à une main de là où il est vraiment — ses proches finissent par viser à côté pour le prendre dans leurs bras. Le Cardinal classe ce bug en « fonctionnalité patrimoniale ».

## Intégration Bot
- Joueur : `!equiper ARM_TET_080 tete` · `!inspect ARM_TET_080` — GM : `!sys_give ARM_TET_080 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_080, 1)`
