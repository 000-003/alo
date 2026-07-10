# Potion Anti-Surchauffe

## Identification Cardinal
- **Item_ID** : `CSM_POT_035`
- **Catégorie** : Potion · **Type** : Anti-jauge D12 (HEAT)
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 28 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Réduit de 40 points la jauge de HEAT de l'instance / du joueur |
| Durée | Instantané |
| Cooldown | 30 s |
| Cumulable | NON — n'occupe pas le slot de buff |

## Acquisition & Chaînage économique
- **Source** : boutique de Gattan / Voulg / craft alchimiste confirmé
- **Recette** : 2× Menthe-des-glaces + 1× Écaille-de-poisson-de-glace + 1× Résine d'obsidienne + 1× fiole scellée *(alchimie)*
- **Prix** : 600 Yrds (achat) · 150 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le graal des raids à la Caldeira d'Obsidienne : une gorgée fait chuter la Surchauffe de quarante points d'un coup, offrant une fenêtre de messages avant l'éruption (`SYS_SET_ENV_HAZARD`, param HEAT). Rare, chère, et systématiquement dévalisée avant un assaut sur Logi. Les groupes qui l'ignorent apprennent vite pourquoi elle existe — dans la cendre.

## Intégration Bot
- Joueur : `!use CSM_POT_035` — GM : `!sys_give CSM_POT_035 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_035, 1)`

## Note
Interagit avec la jauge D12 `HEAT` (mécanique de Surchauffe, `BOSS_SAL_DUN_001`). Réduction pilotable par l'orchestrateur via `SYS_SET_ENV_HAZARD(Zone_ID, HEAT, Valeur)`.
