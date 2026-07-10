# Cristal de Fuite

## Identification Cardinal
- **Item_ID** : `CSM_CRI_007`
- **Catégorie** : Cristal · **Type** : Téléportation d'urgence
- **Tier** : T3 · **Rareté** : Rare
- **Niveau requis** : 18 · **Affinité raciale** : Aucune

## Effet
| Paramètre | Valeur |
|---|---|
| Effet | Téléporte instantanément vers la zone sûre la plus proche (ville/entrée de donjon) — **utilisable même en fuyant un combat non-boss** |
| Durée | Instantané |
| Cooldown | 45 s |
| Cumulable | NON — **inutilisable en Anti-Crystal Zone** (salles de boss) |

## Acquisition & Chaînage économique
- **Source** : marché noir, maisons de cristaux de capitale
- **Recette** : 1× Éclat de saphir brut + 1× Feuille-de-zéphyr + taille au cristal *(cristallerie)*
- **Prix** : 1 400 Yrds (achat) · 350 Yrds (revente)

## Lore (Encyclopédie d'Argo)
La différence entre ce cristal et celui de téléportation tient en un mot : il fonctionne quand ça tourne mal. Là où les autres se verrouillent au premier coup reçu, celui-ci arrache son porteur à une chasse qui a mal tourné et le dépose au refuge le plus proche. Il ne sauve pas d'un boss — le système ne le permet jamais — mais il a sauvé plus d'aventuriers imprudents que n'importe quelle armure.

## Intégration Bot
- Joueur : `!use CSM_CRI_007` — GM : `!sys_give CSM_CRI_007 [Num]` — IA : `SYS_GRANT_ITEM(Avatar_ID, CSM_CRI_007, 1)`
