# Élixir de Vie Complet

## Identification Cardinal
- **Item_ID** : `CSM_POT_008`
- **Catégorie** : Potion · **Type** : Soin (HP)
- **Tier** : T4 · **Rareté** : Épique
- **Niveau requis** : 40 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Soin instantané de 2 500 HP |
| Durée | Instantané |
| Cooldown | 15 s |
| Cumulable | NON — 1 buff nourriture + 1 buff potion max |

## Acquisition & Chaînage économique
- **Source** : maître-alchimiste de capitale (craft) / marché noir
- **Recette** : 4× Racine d'ambre + 2× Larme d'Yggdrasil (goutte) + 1× flacon de cristal *(alchimie experte)*
- **Prix** : 2 400 Yrds (achat) · 600 Yrds (revente)

## Lore (Encyclopédie d'Argo)
Le plus puissant soin qu'un joueur puisse boire — au-delà, il faut mourir et prier pour une résurrection. Son doré est si intense qu'il éclaire le visage de celui qui le tient. On raconte qu'un raid entier a survécu au dernier souffle d'un boss de palier grâce à un seul de ces flacons, passé de main en main. Encyclopédiquement parlant : gardez-en un. Toujours.

## Intégration Bot
- Joueur : `!use CSM_POT_008` — GM : `!sys_give CSM_POT_008 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_POT_008, 1)`
