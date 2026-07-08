# Couronne du Vent Premier

## Identification Cardinal
- **Item_ID** : `ARM_TET_009`
- **Slot** : Tête — Couronne · **Classe** : Tissu
- **Tier** : T5 · **Rareté** : Légendaire
- **Niveau requis** : 45 · **Affinité raciale** : Sylph (+5% aux bonus si Sylph)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 145 |
| RES magique | 90 |
| Poids | 0,2 kg |
| Durabilité | 1 100 |
| Pénalité de vol | 0% |
| Bonus | +15% vitesse de vol ; les sorts de Vent T1-T2 deviennent instantanés ; +6 AGI, +6 INT |

## Acquisition & Chaînage économique
- **Source** : Craft unique (1 exemplaire par serveur) — requiert le titre « Héros de Swilvane ».
- **Recette** : 1× Cœur de l'Archonte (drop garanti premier kill `BOSS_SYL_DUN_001`) + 1× Plume de l'Archonte + 9× Cristal de rafale + 1× Lingot de mithril pur (Brokkheim).
- **Prix** : Invendable (lié à l'âme).

## Lore (Encyclopédie d'Argo)
Le Cardinal la décrit comme « le premier souffle du monde, tressé ». La légende implantée raconte que lorsque The Seed généra ALfheim, le tout premier calcul fut un courant d'air descendant d'Yggdrasil — cette couronne en serait l'archive physique. Son porteur entend le vent *avant* qu'il ne se lève.

## Intégration Bot
- Joueur : `!equiper ARM_TET_009 tete` · `!inspect ARM_TET_009` — GM : `!sys_give ARM_TET_009 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_009, 1)`
