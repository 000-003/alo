# Perle d'Air des Profondeurs

## Identification Cardinal
- **Item_ID** : `CSM_POT_038`
- **Catégorie** : Potion · **Type** : Anti-jauge D12 (OXYGEN)
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 38 · **Affinité raciale** : Undine (+5% aux bonus si Undine)

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Restaure 100 points d'OXYGEN (jauge d'Apnée) |
| Durée | Instantané |
| Cooldown | 25 s |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : Coralia `NPC_UND_07` (craft maître) / drop rare Gouffre de Léviathan
- **Recette** : 3× Perle du Lac Cristallin + 1× Bulle-scellée du Gouffre + 1× flacon de cristal *(alchimie Undine experte)*
- **Prix** : 1 600 Yrds (achat) · 400 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Une perle laiteuse emprisonnant une bulle d'air aussi pure que la surface, arrachée aux poches les plus profondes du Gouffre. La croquer, c'est respirer un grand coup au fond de l'abîme — cent souffles rendus d'un coup. Les raids qui affrontent Jörmun sur toute la durée de ses cinq barres de vie en dépendent absolument. Une seule perle vaut le prix d'une armure : la vie sous l'eau n'a pas de rabais.

## Intégration Bot
- Joueur : `!use CSM_POT_038` — GM : `!sys_give CSM_POT_038 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_038, 1)`

## Note
Interagit avec la jauge D12 `OXYGEN` (mécanique d'Apnée, `BOSS_UND_DUN_001`). Version haute capacité pour la durée complète du combat de Jörmun.
