# Face du Roi Illusoire

## Identification Cardinal
- **Item_ID** : `ARM_TET_081`
- **Slot** : Tête — Masque-couronne · **Classe** : Tissu
- **Tier** : T5 · **Rareté** : Légendaire
- **Niveau requis** : 46 · **Affinité raciale** : Spriggan (+5% aux bonus si Spriggan)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 146 |
| RES magique | 96 (dont +50 vs Illusion) |
| Poids | 0,3 kg |
| Durabilité | 1 080 |
| Pénalité de vol | 0% |
| Bonus | +9 INT, +9 AGI ; « Cour des Mirages » (`!activer mirages`, 1×/jour) : 3 copies du porteur combattent 20s (33% des dégâts chacune) |

## Acquisition & Chaînage économique
- **Source** : Craft unique — requiert le titre « Héritier de Pennroth » (Nécropole Antique terminée sans détruire un seul écho de la Veille).
- **Recette** : 1× Sceau du Roi-Liche (drop garanti premier kill `BOSS_SPR_DUN_001`, Pennroth) + 9× Fil d'espace tordu + 1× Fil de mithril pur.
- **Prix** : Invendable (lié à l'âme).

## Lore (Encyclopédie d'Argo)
Pennroth régna sur la civilisation d'avant Penwether — et refusa sa propre mort en devenant liche. Le Cardinal conserva son visage « pour mémoire » et le donne à qui traverse sa nécropole sans profaner. Le masque n'imite pas les vivants : il rappelle qu'un royaume entier fut une illusion réussie, jusqu'au dernier habitant.

## Intégration Bot
- Joueur : `!equiper ARM_TET_081 tete` · `!inspect ARM_TET_081` — GM : `!sys_give ARM_TET_081 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_081, 1)`
