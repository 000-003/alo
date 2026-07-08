# Capuchon de la Savane

## Identification Cardinal
- **Item_ID** : `ARM_TET_031`
- **Slot** : Tête — Capuchon · **Classe** : Cuir
- **Tier** : T2 · **Rareté** : Rare
- **Niveau requis** : 17 · **Affinité raciale** : Cait Sith (+5% aux bonus si Cait Sith)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 29 |
| RES magique | 12 |
| Poids | 0,7 kg |
| Durabilité | 390 |
| Pénalité de vol | 0% |
| Bonus | +10% dégâts sur les mobs de type Bête ; +2 AGI ; camouflage passif dans les hautes herbes |

## Acquisition & Chaînage économique
- **Source** : Récompense de la Dresseuse Mira (`NPC_FRE_10`), Savane des Crocs — quête « Trois crocs, trois preuves ».
- **Recette** : 4× Cuir tacheté (drop `MOB_CAI_020-024`, Savane des Crocs) + 1× Croc de prédateur.
- **Prix** : 1 450 Yrds (achat après quête) · 360 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Mira exige que chaque chasseur tanne lui-même le cuir de son capuchon : « la savane reconnaît ceux qui lui ont pris quelque chose ». Le motif tacheté n'est jamais teint — c'est la robe d'origine de la bête. Porté dans les hautes herbes, il rend le chasseur invisible aux mobs de niveau inférieur.

## Intégration Bot
- Joueur : `!equiper ARM_TET_031 tete` · `!inspect ARM_TET_031` — GM : `!sys_give ARM_TET_031 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_031, 1)`
