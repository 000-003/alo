# Face de Braise de Logi

## Identification Cardinal
- **Item_ID** : `ARM_TET_092`
- **Slot** : Tête — Masque de guerre · **Classe** : Plaque
- **Tier** : T5 · **Rareté** : Épique (drop de boss)
- **Niveau requis** : 44 · **Affinité raciale** : Aucune (drop universel)

## Statistiques
| Paramètre | Valeur |
|---|---|
| DEF | 155 |
| RES magique | 60 (dont +45 vs Feu, -20 vs Glace) |
| Poids | 4,3 kg |
| Durabilité | 1 050 |
| Pénalité de vol | -4% |
| Bonus | +8 STR ; les attaques du porteur infligent +5% dégâts de Feu ; à 25% HP, déclenche « Dernière Braise » (+20% dégâts, 15s, 1×/combat) |

## Acquisition & Chaînage économique
- **Source** : Drop direct — Logi, le Dernier Géant de Braise (`BOSS_SAL_DUN_001`), taux 8%.
- **Recette** : Non craftable ; recyclable en 3× Braise éternelle.
- **Prix** : Revente 10 500 Yrds · échangeable.

## Lore (Encyclopédie d'Argo)
Un pan du visage de Logi, tombé d'un bloc lors de sa défaite. La braise intérieure ne s'éteint jamais tout à fait — elle attend le moment où son porteur n'a plus rien à perdre pour se souvenir d'être un incendie. À Gattan, on le porte face relevée : cacher son visage derrière celui d'un géant se mérite.

## Intégration Bot
- Joueur : `!equiper ARM_TET_092 tete` · `!inspect ARM_TET_092` — GM : `!sys_give ARM_TET_092 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, ARM_TET_092, 1)`
