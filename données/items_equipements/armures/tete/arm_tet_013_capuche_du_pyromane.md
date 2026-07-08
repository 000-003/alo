# Capuche du Pyromane

## Identification Cardinal
- **Item_ID** : `ARM_TET_013`
- **Slot** : Tête — Capuche · **Classe** : Tissu
- **Tier** : T2 · **Rareté** : Rare
- **Niveau requis** : 17 · **Affinité raciale** : Salamander (+5% aux bonus si Salamander)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 24 |
| RES magique | 22 (dont +10 vs Feu) |
| Poids | 0,4 kg |
| Durabilité | 350 |
| Pénalité de vol | 0% |
| Bonus | +8% dégâts de magie de Feu ; +2 INT |

## Acquisition & Chaînage économique
- **Source** : Craft — enchanteurs de la Place du Dragon, Gattan.
- **Recette** : 3× Toile ignifugée + 2× Glande incandescente (drop `MOB_SAL_010-011`, `ZONE_SAL_HUNT_001`) + 1× Cendre volcanique.
- **Prix** : 1 350 Yrds (achat) · 340 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La doublure est tissée de fibres gorgées de sécrétions de mobs pyrophages : elle ne protège pas du feu, elle le *nourrit*. Les sorts partent plus chauds, plus vite, plus fort. L'intérieur sent en permanence l'allumette craquée — les pyromanciens salamanders appellent ça « le parfum du métier ».

## Intégration Bot
- Joueur : `!equiper ARM_TET_013 tete` · `!inspect ARM_TET_013` — GM : `!sys_give ARM_TET_013 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_013, 1)`
