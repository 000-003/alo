# Heaume Corne-de-Nuit

## Identification Cardinal
- **Item_ID** : `ARM_TET_041`
- **Slot** : Tête — Heaume · **Classe** : Plaque
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 24 · **Affinité raciale** : Imp (+5% aux bonus si Imp)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 58 |
| RES magique | 24 (dont +12 vs Ténèbres) |
| Poids | 3,0 kg |
| Durabilité | 620 |
| Pénalité de vol | -3% |
| Bonus | +4 VIT ; +4 INT ; les malus de peur et d'aveuglement durent 50% moins longtemps |

## Acquisition & Chaînage économique
- **Source** : Craft — Forgeronne Umbra (`NPC_DUS_02`), forge à froid.
- **Recette** : 2× Corne de spectre (drop `MOB_IMP_020-024`, `ZONE_IMP_HUNT_002`) + 3× Fer noirci + 1× Suie de forge froide.
- **Prix** : 4 600 Yrds (achat) · 1 150 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le métal forgé à froid par Umbra ne renvoie aucun reflet : le heaume est une silhouette découpée dans la nuit, cornes comprises. Les gardes de Duskarn le portent aux exécutions — non par cruauté, disent-ils, mais parce qu'un condamné mérite de ne pas voir de visage.

## Intégration Bot
- Joueur : `!equiper ARM_TET_041 tete` · `!inspect ARM_TET_041` — GM : `!sys_give ARM_TET_041 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_041, 1)`
