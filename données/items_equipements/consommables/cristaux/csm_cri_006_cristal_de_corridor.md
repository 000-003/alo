# Cristal de Corridor

## Identification Cardinal
- **Item_ID** : `CSM_CRI_006`
- **Catégorie** : Cristal · **Type** : Téléportation de groupe
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 25 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Ouvre un portail vers une zone déjà visitée ; tout le groupe passe (`!enter_portal`) pendant 30 s. Consomme 100 MP en plus du cristal |
| Durée | Portail ouvert 30 s |
| Cooldown | 60 s |
| Cumulable | NON — **inutilisable en Anti-Crystal Zone** |

## Acquisition & Chaînage économique
- **Source** : maisons de cristaux de capitale, drops de boss de palier (8%)
- **Recette** : 2× Éclat de saphir pur + 1× Gemme de Granzam + taille experte *(cristallerie)*
- **Prix** : 4 500 Yrds (achat) · 1 125 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Un cristal violet qui déchire l'espace entre deux points, ouvrant un passage assez large et assez long pour qu'un groupe entier s'y engouffre. C'est l'outil des raids organisés : un éclaireur atteint une zone, brise le corridor, et toute la compagnie le rejoint d'un pas. Trente secondes, pas une de plus — après quoi le monde se recoud, indifférent.

## Intégration Bot
- Joueur : `!use CSM_CRI_006 [Zone_ID]` puis groupe `!enter_portal` — GM : `!sys_give CSM_CRI_006 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_CRI_006, 1)`
